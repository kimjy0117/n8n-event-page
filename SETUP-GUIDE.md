# 🚀 완전 설정 가이드

이 가이드를 따라하면 AI 자동 디자인 최적화 시스템을 완전히 설정할 수 있습니다.

## 📝 체크리스트

- [ ] 1. Supabase 프로젝트 생성 및 테이블 설정
- [ ] 2. 환경 변수 설정
- [ ] 3. GitHub 레포 생성 및 연결
- [ ] 4. Vercel 배포
- [ ] 5. Claude API Key 발급
- [ ] 6. GitHub Personal Access Token 발급
- [ ] 7. n8n 워크플로우 설정
- [ ] 8. 테스트 실행

---

## 1️⃣ Supabase 설정 (5분)

### 1.1 프로젝트 생성

1. [Supabase](https://supabase.com) 접속 및 로그인
2. "New Project" 클릭
3. 프로젝트 정보 입력:
   - Name: `n8n-event-page`
   - Database Password: 안전한 비밀번호 생성
   - Region: 가까운 지역 선택 (예: Northeast Asia)
4. "Create new project" 클릭 (약 2분 소요)

### 1.2 테이블 생성

1. 좌측 메뉴에서 **SQL Editor** 클릭
2. "New query" 클릭
3. `supabase-setup.sql` 파일의 내용을 복사하여 붙여넣기
4. "Run" 버튼 클릭
5. 성공 메시지 확인

### 1.3 API 키 확인

1. 좌측 메뉴에서 **Project Settings** (톱니바퀴 아이콘) 클릭
2. **API** 메뉴 클릭
3. 다음 정보 복사:
   - `Project URL` (예: https://abcdefgh.supabase.co)
   - `anon public` 키 (긴 문자열)

---

## 2️⃣ 환경 변수 설정 (2분)

### 2.1 로컬 환경

1. 프로젝트 루트에 `.env` 파일 생성 (이미 있음)
2. 다음 내용으로 수정:

```bash
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY_HERE
```

3. `YOUR_PROJECT_ID`와 `YOUR_ANON_KEY_HERE`를 실제 값으로 교체

### 2.2 로컬 테스트

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속하여 이벤트 페이지 확인

---

## 3️⃣ GitHub 레포 생성 (3분)

### 3.1 GitHub에서 레포 생성

1. [GitHub](https://github.com) 로그인
2. 우측 상단 "+" > "New repository" 클릭
3. Repository 정보:
   - Repository name: `n8n-event-page`
   - Description: `AI-powered event page with automatic design optimization`
   - Public 또는 Private 선택
   - **Initialize this repository with:** 모두 체크 해제
4. "Create repository" 클릭

### 3.2 로컬 레포 연결

```bash
# GitHub 레포 URL로 교체
git remote add origin https://github.com/YOUR_USERNAME/n8n-event-page.git

# main 브랜치로 변경 (필요시)
git branch -M main

# 푸시
git push -u origin main
```

### 3.3 확인

GitHub 레포 페이지를 새로고침하여 파일들이 업로드되었는지 확인

---

## 4️⃣ Vercel 배포 (5분)

### 4.1 Vercel 계정 생성

1. [Vercel](https://vercel.com) 접속
2. "Sign Up" 클릭
3. "Continue with GitHub" 선택 (권장)

### 4.2 프로젝트 배포

1. Dashboard에서 "Add New..." > "Project" 클릭
2. GitHub 레포 목록에서 `n8n-event-page` 선택
   - 보이지 않으면 "Adjust GitHub App Permissions" 클릭하여 권한 추가
3. "Import" 클릭
4. Configure Project:
   - Framework Preset: **Vite** (자동 감지됨)
   - Build Command: `npm run build` (기본값)
   - Output Directory: `dist` (기본값)
5. **Environment Variables** 섹션에서 추가:
   - Name: `VITE_SUPABASE_URL`
   - Value: Supabase Project URL
   - "Add" 클릭
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: Supabase Anon Key
   - "Add" 클릭
6. "Deploy" 클릭 (약 1-2분 소요)

### 4.3 배포 확인

1. 배포 완료 후 "Visit" 버튼 클릭
2. 이벤트 페이지가 정상 작동하는지 확인
3. 버튼 클릭 후 Supabase Dashboard > Table Editor > stats 테이블에서 통계 확인

---

## 5️⃣ Claude API Key 발급 (3분)

### 5.1 Anthropic 계정 생성

1. [Anthropic Console](https://console.anthropic.com/) 접속
2. 계정 생성 또는 로그인
3. 결제 정보 등록 (API 사용을 위해 필요)

### 5.2 API Key 생성

1. 좌측 메뉴에서 **API Keys** 클릭
2. "Create Key" 클릭
3. Key 이름 입력 (예: `n8n-design-optimizer`)
4. "Create Key" 클릭
5. **API Key 복사** (다시 볼 수 없으니 안전한 곳에 저장!)

---

## 6️⃣ GitHub Personal Access Token 발급 (3분)

### 6.1 Token 생성

1. GitHub 로그인
2. 우측 상단 프로필 > **Settings** 클릭
3. 좌측 하단 **Developer settings** 클릭
4. **Personal access tokens** > **Tokens (classic)** 클릭
5. "Generate new token" > "Generate new token (classic)" 클릭
6. Token 정보:
   - Note: `n8n-git-push`
   - Expiration: 90 days (또는 원하는 기간)
   - **Select scopes**: `repo` 전체 체크 ✅
7. "Generate token" 클릭
8. **Token 복사** (다시 볼 수 없으니 안전한 곳에 저장!)

---

## 7️⃣ n8n 워크플로우 설정 (15분)

### 7.1 n8n 설치 (옵션 1: Docker)

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

### 7.2 n8n 설치 (옵션 2: npm)

```bash
npm install -g n8n
n8n
```

### 7.3 n8n 접속

1. 브라우저에서 `http://localhost:5678` 접속
2. 계정 생성 (이메일, 비밀번호)

### 7.4 Credentials 설정

#### Supabase Credential

1. 좌측 메뉴 **Credentials** 클릭
2. "Add Credential" > "Supabase" 검색 및 선택
3. 정보 입력:
   - Credential Name: `Supabase account`
   - Host: Supabase Project URL (https:// 제외, 예: `abcdefgh.supabase.co`)
   - Service Role Secret: Supabase Dashboard > Project Settings > API > `service_role` 키
4. "Save" 클릭

#### Claude API Credential

1. "Add Credential" > "Header Auth" 검색 및 선택
2. 정보 입력:
   - Credential Name: `Claude API`
   - Name: `x-api-key`
   - Value: Claude API Key
3. "Save" 클릭

### 7.5 워크플로우 Import

1. 좌측 메뉴 **Workflows** 클릭
2. 우측 상단 "..." > "Import from File" 클릭
3. `n8n-workflow.json` 파일 선택
4. 워크플로우가 로드됨

### 7.6 워크플로우 수정

다음 노드들의 경로를 실제 프로젝트 경로로 수정:

1. **Read Current Code** 노드:
   - File Path: `C:/Users/Owner/Desktop/kjy/n8n_test/n8n_test_01/src/components/EventPage.jsx`

2. **Write New Code** 노드:
   - File Path: `C:/Users/Owner/Desktop/kjy/n8n_test/n8n_test_01/src/components/EventPage.jsx`

3. **Git Commit** 노드:
   - Command: `cd C:/Users/Owner/Desktop/kjy/n8n_test/n8n_test_01 && git config user.name "n8n Bot" && git config user.email "bot@n8n.io" && git add src/components/EventPage.jsx && git commit -m "chore: AI-generated design update (CTR: {{ $('Extract Code').item.json.ctr }}%)"`

4. **Git Push** 노드:
   - Command: `cd C:/Users/Owner/Desktop/kjy/n8n_test/n8n_test_01 && git push https://YOUR_GITHUB_TOKEN@github.com/YOUR_USERNAME/n8n-event-page.git main`
   - `YOUR_GITHUB_TOKEN`: GitHub Personal Access Token
   - `YOUR_USERNAME`: GitHub 사용자명

### 7.7 워크플로우 저장 및 활성화

1. 우측 상단 "Save" 클릭
2. "Active" 토글을 ON으로 변경

---

## 8️⃣ 테스트 (5분)

### 8.1 수동 테스트

1. Supabase Dashboard > Table Editor > stats 테이블
2. 어제 날짜로 테스트 데이터 삽입:
   - date: 어제 날짜 (예: 2026-01-07)
   - visits: 100
   - clicks: 3
   - CTR: 3% (자동 계산됨)

3. n8n에서 워크플로우 수동 실행:
   - 워크플로우 화면에서 "Execute Workflow" 클릭
   - 각 노드가 순차적으로 실행되는지 확인
   - 에러가 있으면 해당 노드 클릭하여 로그 확인

4. 결과 확인:
   - GitHub 레포에 새 커밋이 푸시되었는지 확인
   - Vercel에서 자동 배포가 시작되었는지 확인
   - 배포 완료 후 사이트 접속하여 디자인 변경 확인

### 8.2 실제 테스트

1. 배포된 사이트 접속
2. 페이지를 여러 번 새로고침 (방문수 증가)
3. 버튼을 몇 번 클릭 (클릭수 증가)
4. Supabase에서 통계 확인
5. 다음날 오전 9시에 n8n이 자동으로 실행되어 CTR 체크

---

## 🎉 완료!

모든 설정이 완료되었습니다. 이제 시스템이 자동으로:

1. 매일 오전 9시에 어제 통계를 확인
2. CTR이 5% 미만이면 Claude AI가 새로운 디자인 생성
3. Git에 자동 커밋/푸시
4. Vercel에서 자동 재배포

---

## 🐛 문제 해결

### Supabase 연결 에러
- `.env` 파일의 URL과 Key 확인
- Vercel 환경 변수 확인
- Supabase RLS 정책 확인

### n8n Git Push 실패
- GitHub Token 권한 확인 (repo 권한 필요)
- 프로젝트 경로 확인 (절대 경로 사용)
- Git 설정 확인 (user.name, user.email)

### Claude API 에러
- API Key 확인
- 크레딧 잔액 확인
- 요청 형식 확인

### Vercel 배포 실패
- Build 로그 확인
- 환경 변수 확인
- package.json의 build 스크립트 확인

---

## 📞 도움이 필요하신가요?

- Supabase: https://supabase.com/docs
- n8n: https://docs.n8n.io
- Vercel: https://vercel.com/docs
- Claude API: https://docs.anthropic.com

