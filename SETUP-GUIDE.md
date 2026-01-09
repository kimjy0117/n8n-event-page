# 🚀 완전 설정 가이드

이 가이드를 따라하면 AI 자동 디자인 최적화 시스템을 완전히 설정할 수 있습니다.

## 📝 체크리스트

- [ ] 1. Supabase 프로젝트 생성 및 테이블 설정
- [ ] 2. Supabase Storage 버킷 생성 (스크린샷용)
- [ ] 3. 환경 변수 설정
- [ ] 4. GitHub 레포 생성 및 연결
- [ ] 5. Vercel 배포
- [ ] 6. Gemini API Key 발급
- [ ] 7. GitHub Personal Access Token 발급
- [ ] 8. n8n 워크플로우 설정 (클라우드)
- [ ] 9. 테스트 실행

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
   - `service_role` 키 (스크린샷 업로드용 - ⚠️ 절대 클라이언트에 노출 금지!)

---

## 2️⃣ Supabase Storage 버킷 생성 (2분) 📸

> 디자인 변경 후 스크린샷을 저장하기 위한 Storage 버킷입니다.

### 2.1 버킷 생성

1. Supabase Dashboard > 좌측 메뉴 **Storage** 클릭
2. **New bucket** 클릭
3. 설정:
   - Name: `screenshots`
   - Public bucket: ✅ **체크** (이미지 URL로 바로 접근하려면)
4. **Create bucket** 클릭

### 2.2 정책 확인

Public bucket으로 설정하면 자동으로 공개 읽기가 가능합니다.
업로드는 `service_role` 키로 인증하여 진행합니다.

---

## 3️⃣ 환경 변수 설정 (2분)

### 3.1 로컬 환경

1. 프로젝트 루트에 `.env` 파일 생성 (이미 있음)
2. 다음 내용으로 수정:

```bash
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY_HERE
```

3. `YOUR_PROJECT_ID`와 `YOUR_ANON_KEY_HERE`를 실제 값으로 교체

### 3.2 로컬 테스트

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속하여 이벤트 페이지 확인

---

## 4️⃣ GitHub 레포 생성 (3분)

### 4.1 GitHub에서 레포 생성

1. [GitHub](https://github.com) 로그인
2. 우측 상단 "+" > "New repository" 클릭
3. Repository 정보:
   - Repository name: `n8n-event-page`
   - Description: `AI-powered event page with automatic design optimization`
   - Public 또는 Private 선택
   - **Initialize this repository with:** 모두 체크 해제
4. "Create repository" 클릭

### 4.2 로컬 레포 연결

```bash
# GitHub 레포 URL로 교체
git remote add origin https://github.com/YOUR_USERNAME/n8n-event-page.git

# main 브랜치로 변경 (필요시)
git branch -M main

# 푸시
git push -u origin main
```

### 4.3 확인

GitHub 레포 페이지를 새로고침하여 파일들이 업로드되었는지 확인

---

## 5️⃣ Vercel 배포 (5분)

### 5.1 Vercel 계정 생성

1. [Vercel](https://vercel.com) 접속
2. "Sign Up" 클릭
3. "Continue with GitHub" 선택 (권장)

### 5.2 프로젝트 배포

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

### 5.3 배포 확인

1. 배포 완료 후 "Visit" 버튼 클릭
2. 이벤트 페이지가 정상 작동하는지 확인
3. **배포 URL 복사** (예: `https://your-app.vercel.app`) - n8n 설정에 필요!

---

## 6️⃣ Gemini API Key 발급 (3분)

### 6.1 Google AI Studio 접속

1. [Google AI Studio](https://aistudio.google.com/app/apikey) 접속
2. Google 계정으로 로그인

### 6.2 API Key 생성

1. "Create API key" 클릭
2. 프로젝트 선택 또는 새 프로젝트 생성
3. "Create API key in new project" 클릭
4. **API Key 복사** (다시 볼 수 없으니 안전한 곳에 저장!)

> 💡 **Tip**: Gemini API는 무료 티어가 있어서 테스트용으로 부담 없이 사용할 수 있습니다!

---

## 7️⃣ GitHub Personal Access Token 발급 (3분)

### 7.1 Token 생성

1. GitHub 로그인
2. 우측 상단 프로필 > **Settings** 클릭
3. 좌측 하단 **Developer settings** 클릭
4. **Personal access tokens** > **Tokens (classic)** 클릭
5. "Generate new token" > "Generate new token (classic)" 클릭
6. Token 정보:
   - Note: `n8n-github-api`
   - Expiration: 90 days (또는 원하는 기간)
   - **Select scopes**: `repo` 전체 체크 ✅
7. "Generate token" 클릭
8. **Token 복사** (다시 볼 수 없으니 안전한 곳에 저장!)

---

## 8️⃣ n8n 클라우드 워크플로우 설정 (15분)

### 8.1 n8n 클라우드 가입

1. [n8n Cloud](https://n8n.io) 접속
2. "Start for Free" 클릭하여 계정 생성
3. 워크스페이스 생성

> 💡 n8n 클라우드는 로컬 파일 시스템에 접근할 수 없으므로, **GitHub API**를 통해 파일을 읽고/쓰게 됩니다.

### 8.2 Credentials 설정

#### Supabase Credential

1. 좌측 메뉴 **Credentials** 클릭
2. "Add Credential" > "Supabase" 검색 및 선택
3. 정보 입력:
   - Credential Name: `Supabase account`
   - Host: Supabase Project URL (https:// 제외, 예: `abcdefgh.supabase.co`)
   - Service Role Secret: Supabase Dashboard > Project Settings > API > `service_role` 키
4. "Save" 클릭

#### GitHub Token Credential

1. "Add Credential" > "Header Auth" 검색 및 선택
2. 정보 입력:
   - Credential Name: `GitHub Token`
   - Name: `Authorization`
   - Value: `Bearer YOUR_GITHUB_TOKEN` (Bearer 뒤에 공백 필수!)
3. "Save" 클릭

### 8.3 워크플로우 Import

1. 좌측 메뉴 **Workflows** 클릭
2. 우측 상단 "..." > "Import from File" 클릭
3. `n8n-workflow.json` 파일 선택
4. 워크플로우가 로드됨

### 8.4 워크플로우 수정 ⚠️ 중요!

다음 노드들에서 값을 실제 정보로 수정하세요:

#### 1. **Read Code from GitHub** 노드:
- URL에서 `YOUR_USERNAME/YOUR_REPO`를 실제 GitHub 정보로 변경
```
https://api.github.com/repos/YOUR_USERNAME/n8n-event-page/contents/src/components/EventPage.jsx
```

#### 2. **Call Gemini API** 노드:
- URL에서 `YOUR_GEMINI_API_KEY`를 실제 Gemini API 키로 변경
```
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_GEMINI_API_KEY
```

#### 3. **Update Code on GitHub** 노드:
- URL에서 `YOUR_USERNAME/YOUR_REPO`를 실제 GitHub 정보로 변경
```
https://api.github.com/repos/YOUR_USERNAME/n8n-event-page/contents/src/components/EventPage.jsx
```

#### 4. **Take Screenshot** 노드: 📸
- Code 노드 안에서 `YOUR_VERCEL_SITE_URL`을 실제 Vercel 배포 URL로 변경
```javascript
const siteUrl = 'https://your-app.vercel.app'; // 실제 URL로 변경!
```

#### 5. **Upload to Supabase Storage** 노드: 📸
- Code 노드 안에서 Supabase 정보 변경
```javascript
const supabaseUrl = 'https://abcdefgh.supabase.co'; // 실제 URL로 변경!
const supabaseKey = 'YOUR_SUPABASE_SERVICE_ROLE_KEY'; // service_role 키로 변경!
```

### 8.5 Credentials 연결

각 노드에 Credentials 연결:

1. **Read Code from GitHub** 노드 → `GitHub Token` credential 선택
2. **Update Code on GitHub** 노드 → `GitHub Token` credential 선택
3. **Get Yesterday Stats** 노드 → `Supabase account` credential 선택
4. **Save History** 노드 → `Supabase account` credential 선택

### 8.6 워크플로우 저장 및 활성화

1. 우측 상단 "Save" 클릭
2. "Active" 토글을 ON으로 변경

---

## 9️⃣ 테스트 (5분)

### 9.1 수동 테스트

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
   - GitHub 레포에 새 커밋이 생성되었는지 확인
   - Vercel에서 자동 배포가 시작되었는지 확인
   - 배포 완료 후 사이트 접속하여 디자인 변경 확인
   - **Supabase Storage > screenshots 버킷**에 스크린샷 저장 확인 📸
   - **code_history 테이블**에 screenshot_url 저장 확인 📸

### 9.2 실제 테스트

1. 배포된 사이트 접속
2. 페이지를 여러 번 새로고침 (방문수 증가)
3. 버튼을 몇 번 클릭 (클릭수 증가)
4. Supabase에서 통계 확인
5. 다음날 오전 9시에 n8n이 자동으로 실행되어 CTR 체크

---

## 🎉 완료!

모든 설정이 완료되었습니다. 이제 시스템이 자동으로:

1. 매일 오전 9시에 어제 통계를 확인
2. CTR이 5% 미만이면 **Gemini AI**가 새로운 디자인 생성
3. **GitHub API**로 자동 커밋
4. Vercel에서 자동 재배포
5. **Google PageSpeed API**로 스크린샷 촬영 📸
6. **Supabase Storage**에 스크린샷 저장 📸

---

## 🔄 워크플로우 흐름도

```
Schedule Trigger (매일 실행)
       ↓
Get Yesterday Stats (Supabase에서 어제 통계 조회)
       ↓
Calculate CTR (CTR 계산)
       ↓
IF CTR Low (CTR < 5% 체크)
       ↓
Read Code from GitHub (GitHub API로 현재 코드 읽기)
       ↓
Decode Base64 (GitHub 응답 디코딩 + Gemini 요청 준비)
       ↓
Call Gemini API (AI가 새 디자인 생성)
       ↓
Extract Code (코드 추출 및 인코딩)
       ↓
Update Code on GitHub (GitHub API로 코드 업데이트 + 자동 커밋)
       ↓
Wait for Deploy (Vercel 배포 대기 - 60초) ⏳
       ↓
Take Screenshot (Google PageSpeed API로 스크린샷) 📸
       ↓
Upload to Supabase Storage (스크린샷 저장) 📸
       ↓
Save History (Supabase에 히스토리 + screenshot_url 저장)
```

---

## 🐛 문제 해결

### Supabase 연결 에러
- `.env` 파일의 URL과 Key 확인
- Vercel 환경 변수 확인
- Supabase RLS 정책 확인

### GitHub API 에러
- GitHub Token 권한 확인 (repo 권한 필요)
- Token 앞에 `Bearer ` 붙였는지 확인 (공백 포함!)
- URL의 레포 경로가 정확한지 확인
- 파일 경로가 정확한지 확인

### Gemini API 에러
- API Key 확인
- 모델명 확인: `gemini-2.0-flash` 사용 권장
- URL에 key 파라미터가 포함되었는지 확인
- 요청 형식 확인 (contents 배열 형식)

### 스크린샷 에러 📸
- Vercel 배포 URL이 정확한지 확인
- Google PageSpeed API는 무료이며 API 키 불필요
- Supabase Storage 버킷이 `screenshots`로 생성되었는지 확인
- Supabase `service_role` 키가 정확한지 확인 (anon 키 아님!)

### Vercel 배포 실패
- Build 로그 확인
- 환경 변수 확인
- package.json의 build 스크립트 확인

---

## 📞 도움이 필요하신가요?

- Supabase: https://supabase.com/docs
- n8n: https://docs.n8n.io
- Vercel: https://vercel.com/docs
- Gemini API: https://ai.google.dev/docs
- Google PageSpeed API: https://developers.google.com/speed/docs/insights/v5/get-started
