# n8n 워크플로우 설정 가이드

이 문서는 n8n에서 AI 자동 디자인 최적화 워크플로우를 설정하는 방법을 안내합니다.

## 📋 사전 준비

- [ ] n8n 설치 또는 [n8n.cloud](https://n8n.cloud) 계정
- [ ] Supabase 프로젝트 및 테이블 생성 완료
- [ ] Claude API Key 발급
- [ ] GitHub Personal Access Token 발급
- [ ] 로컬 또는 서버에서 n8n 실행 중

## 🔧 워크플로우 구성

### 1. Schedule Trigger 노드

매일 오전 9시에 워크플로우 실행

**노드 타입**: `Schedule Trigger`

**설정**:
- Trigger Interval: `Days`
- Days Between Triggers: `1`
- Trigger at Hour: `9`
- Trigger at Minute: `0`

---

### 2. Supabase - 어제 통계 조회

어제 날짜의 방문/클릭 통계를 가져옵니다.

**노드 타입**: `Supabase`

**설정**:
- Credential: Supabase 계정 연결 (URL + Service Role Key)
- Operation: `Get All`
- Table: `stats`
- Return All: `false`
- Limit: `1`
- Filters:
  - Field: `date`
  - Operator: `equals`
  - Value: `{{ $today.minus({days: 1}).toFormat('yyyy-MM-dd') }}`

---

### 3. Function - CTR 계산 및 판단

CTR을 계산하고 임계값(5%) 미만인지 확인합니다.

**노드 타입**: `Code`

**설정**:
- Language: `JavaScript`
- Code:

```javascript
// 어제 통계 가져오기
const stats = $input.first().json;

// CTR 계산
const visits = stats.visits || 0;
const clicks = stats.clicks || 0;
const ctr = visits > 0 ? (clicks / visits * 100) : 0;

// 임계값 설정 (5%)
const threshold = 5;
const needsImprovement = ctr < threshold;

// 결과 반환
return {
  json: {
    date: stats.date,
    visits,
    clicks,
    ctr: ctr.toFixed(2),
    threshold,
    needsImprovement,
    stats
  }
};
```

---

### 4. IF 노드 - CTR 체크

CTR이 임계값보다 낮은 경우에만 다음 단계 실행

**노드 타입**: `IF`

**설정**:
- Conditions:
  - Value 1: `{{ $json.needsImprovement }}`
  - Operation: `is equal to`
  - Value 2: `true`

---

### 5. Read Binary File - 현재 코드 읽기

현재 `EventPage.jsx` 파일을 읽습니다.

**노드 타입**: `Read Binary File`

**설정**:
- File Path: `/path/to/your/project/src/components/EventPage.jsx`
  
  ⚠️ **중요**: 실제 프로젝트 경로로 변경하세요!

---

### 6. Convert to File - 바이너리를 텍스트로 변환

**노드 타입**: `Move Binary Data`

**설정**:
- Mode: `Binary to Text`
- Source Key: `data`
- Destination Key: `currentCode`

---

### 7. HTTP Request - Claude API 호출

Claude API로 개선된 코드를 생성합니다.

**노드 타입**: `HTTP Request`

**설정**:
- Method: `POST`
- URL: `https://api.anthropic.com/v1/messages`
- Authentication: `Generic Credential Type` > `Header Auth`
  - Credential Data:
    - Name: `x-api-key`
    - Value: `YOUR_CLAUDE_API_KEY`
- Send Headers: `true`
  - Header 1:
    - Name: `anthropic-version`
    - Value: `2023-06-01`
  - Header 2:
    - Name: `content-type`
    - Value: `application/json`
- Send Body: `true`
- Body Content Type: `JSON`
- Specify Body: `Using JSON`
- JSON Body:

```json
{
  "model": "claude-3-5-sonnet-20241022",
  "max_tokens": 4096,
  "messages": [
    {
      "role": "user",
      "content": "당신은 UX/UI 전문가입니다. 다음 React 이벤트 페이지의 전환율(CTR)이 {{ $('IF').item.json.ctr }}%로 낮습니다.\n\n[현재 코드]\n{{ $('Move Binary Data').item.json.currentCode }}\n\n[요구사항]\n- CTR을 높이기 위해 디자인을 개선한 완전히 새로운 React 컴포넌트 코드를 작성하세요\n- 버튼 색상, 크기, 문구, 위치, 레이아웃을 창의적으로 변경하세요\n- 기존 useStats 훅과 Supabase 연동 로직은 반드시 유지하세요\n- import 문과 export 문을 포함한 완전한 JSX 파일 형태로 작성하세요\n- 코드만 출력하고 설명은 제외하세요\n- 마크다운 코드 블록(```)은 사용하지 마세요"
    }
  ]
}
```

---

### 8. Code - Claude 응답에서 코드 추출

**노드 타입**: `Code`

**설정**:
- Language: `JavaScript`
- Code:

```javascript
const response = $input.first().json;

// Claude 응답에서 코드 추출
let newCode = response.content[0].text;

// 마크다운 코드 블록 제거 (혹시 포함되어 있을 경우)
newCode = newCode.replace(/```jsx?\n?/g, '').replace(/```\n?$/g, '');

return {
  json: {
    newCode,
    ctr: $('IF').item.json.ctr,
    date: $('IF').item.json.date
  }
};
```

---

### 9. Write Binary File - 새 코드 저장

**노드 타입**: `Write Binary File`

**설정**:
- File Path: `/path/to/your/project/src/components/EventPage.jsx`
- Data: `={{ $json.newCode }}`

⚠️ **중요**: 실제 프로젝트 경로로 변경하세요!

---

### 10. Execute Command - Git Commit

**노드 타입**: `Execute Command`

**설정**:
- Command: `cd /path/to/your/project && git config user.name "n8n Bot" && git config user.email "bot@n8n.io" && git add src/components/EventPage.jsx && git commit -m "chore: AI-generated design update (CTR: {{ $('Code1').item.json.ctr }}%)"`

⚠️ **중요**: 실제 프로젝트 경로로 변경하세요!

---

### 11. Execute Command - Git Push

**노드 타입**: `Execute Command`

**설정**:
- Command: `cd /path/to/your/project && git push https://YOUR_GITHUB_TOKEN@github.com/YOUR_USERNAME/YOUR_REPO.git main`

⚠️ **중요**: 
- 실제 프로젝트 경로로 변경
- `YOUR_GITHUB_TOKEN`: GitHub Personal Access Token
- `YOUR_USERNAME/YOUR_REPO`: 실제 레포 경로

---

### 12. Supabase - 코드 히스토리 저장

변경 이력을 `code_history` 테이블에 저장합니다.

**노드 타입**: `Supabase`

**설정**:
- Operation: `Insert`
- Table: `code_history`
- Data to Send: `Define Below for Each Column`
- Columns:
  - `version`: `={{ $now.toUnixInteger() }}`
  - `code_content`: `={{ $('Code1').item.json.newCode }}`
  - `design_description`: `AI-generated improvement for CTR {{ $('Code1').item.json.ctr }}%`
  - `avg_ctr`: `={{ parseFloat($('Code1').item.json.ctr) }}`
  - `git_commit_hash`: `{{ $('Execute Command').item.json.stdout }}`

---

## 🧪 테스트 방법

### 수동 테스트

1. n8n 워크플로우에서 **"Execute Workflow"** 클릭
2. 각 노드의 출력 확인
3. GitHub에 커밋이 푸시되었는지 확인
4. Vercel에서 자동 배포 시작되는지 확인

### 임계값 조정

테스트를 위해 Function 노드의 `threshold` 값을 높게 설정 (예: 100)하면 항상 개선이 트리거됩니다.

---

## 🔒 보안 주의사항

1. **GitHub Token**: 절대 코드에 하드코딩하지 마세요
2. **Claude API Key**: n8n Credentials에 안전하게 저장
3. **Supabase Keys**: Service Role Key는 서버 사이드에서만 사용
4. **n8n 접근 제어**: n8n 인스턴스에 인증 설정

---

## 📊 모니터링

- **n8n Executions**: 워크플로우 실행 이력 확인
- **Supabase stats 테이블**: 일별 CTR 추이 확인
- **Supabase code_history 테이블**: AI 코드 변경 이력 확인
- **Vercel Deployments**: 배포 상태 확인

---

## 🐛 트러블슈팅

### Claude API 에러
- API Key 확인
- 요청 형식 확인 (JSON 구조)
- Rate limit 확인

### Git Push 실패
- GitHub Token 권한 확인 (repo 권한 필요)
- 프로젝트 경로 확인
- Git 설정 확인 (user.name, user.email)

### 파일 읽기/쓰기 실패
- 파일 경로 확인 (절대 경로 사용 권장)
- n8n 실행 사용자의 파일 권한 확인

---

## 💡 개선 아이디어

- **A/B 테스트**: 여러 디자인을 동시에 테스트
- **점진적 배포**: staging 브랜치에서 먼저 테스트
- **알림**: Slack/Discord로 변경 알림
- **롤백 기능**: CTR이 더 낮아지면 이전 버전으로 복구

