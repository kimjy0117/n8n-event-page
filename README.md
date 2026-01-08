# AI 자동 디자인 최적화 이벤트 페이지

n8n과 Claude AI를 활용하여 CTR(클릭률)이 낮을 때 자동으로 디자인을 개선하는 이벤트 페이지입니다.

## 🎯 주요 기능

- **자동 통계 수집**: 페이지 방문수와 버튼 클릭수를 Supabase에 자동 기록
- **AI 기반 디자인 개선**: CTR이 낮으면 Claude API가 새로운 디자인 코드 생성
- **자동 배포**: n8n이 Git에 커밋/푸시하여 Vercel에서 자동 재배포

## 📋 사전 준비사항

### 1. Supabase 설정

1. [Supabase](https://supabase.com)에서 프로젝트 생성
2. SQL Editor에서 `supabase-setup.sql` 실행
3. Project Settings > API에서 URL과 Anon Key 복사

### 2. 환경 변수 설정

`.env` 파일에 Supabase 정보 입력:

```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. GitHub 레포 생성

```bash
# GitHub에서 새 레포 생성 후
git remote add origin https://github.com/YOUR_USERNAME/n8n-event-page.git
git add .
git commit -m "Initial commit: AI-powered event page"
git push -u origin main
```

### 4. Vercel 배포

1. [Vercel](https://vercel.com)에 로그인
2. GitHub 레포 연결
3. Framework Preset: **Vite**
4. Environment Variables에 Supabase 정보 추가:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Deploy 클릭

### 5. Claude API Key 발급

1. [Anthropic Console](https://console.anthropic.com/)에서 API Key 발급
2. n8n에서 사용할 예정

### 6. GitHub Personal Access Token

1. GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Generate new token (classic)
3. 권한: `repo` 전체 선택
4. n8n에서 Git 푸시 시 사용

## 🚀 로컬 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

## 🤖 n8n 워크플로우 설정

자세한 설정 방법은 `n8n-workflow-guide.md`를 참고하세요.

### 워크플로우 개요

1. **매일 오전 9시** 자동 실행
2. 어제 통계 조회 (Supabase)
3. CTR 계산 (클릭수 / 방문수 × 100)
4. **CTR < 5%** 이면:
   - 현재 `EventPage.jsx` 코드 읽기
   - Claude API로 개선된 코드 생성
   - 새 코드로 파일 교체
   - Git 커밋 & 푸시
   - Vercel 자동 재배포

## 📊 통계 확인

Supabase Dashboard > Table Editor > stats 테이블에서 일별 통계 확인 가능:

- `date`: 날짜
- `visits`: 방문수
- `clicks`: 클릭수
- `ctr`: 클릭률 (자동 계산)

## 🔧 기술 스택

- **Frontend**: React + Vite
- **Database**: Supabase (PostgreSQL)
- **Automation**: n8n
- **AI**: Claude 3.5 Sonnet
- **Deployment**: Vercel
- **Version Control**: Git + GitHub

## 📝 라이선스

MIT License
