# AI 자동 디자인 최적화 이벤트 페이지

n8n과 Claude AI를 활용하여 CTR(클릭률)이 낮을 때 자동으로 디자인을 개선하는 이벤트 페이지입니다.

## 🎯 주요 기능

- **자동 통계 수집**: 페이지 방문수와 버튼 클릭수를 Supabase에 자동 기록
- **코드 버전별 통계 관리**: AI가 새 코드를 생성할 때마다 별도의 통계 row 생성하여 버전별 성과 추적
- **AI 기반 디자인 개선**: CTR이 낮으면 Claude API가 새로운 디자인 코드 생성
- **자동 배포**: n8n이 Git에 커밋/푸시하여 Vercel에서 자동 재배포

## 🚀 Quick Start

```bash
# 1. 패키지 설치
npm install

# 2. 환경 변수 설정 (.env 파일 생성)
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key

# 3. 개발 서버 실행
npm run dev
```

## 📚 상세 문서

프로젝트의 상세한 설정 및 사용 방법은 로컬의 `docs/` 폴더를 참고하세요:

- **docs/QUICK-START.md** - 빠른 시작 가이드
- **docs/SETUP-GUIDE.md** - 전체 설정 가이드 (Supabase, Vercel, n8n)
- **docs/n8n-workflow-guide.md** - n8n 워크플로우 상세 설정
- **docs/PROJECT-SUMMARY.md** - 프로젝트 개요 및 아키텍처

설정 파일은 `configs/` 폴더에 있습니다:
- **configs/supabase-setup.sql** - 데이터베이스 초기 설정
- **configs/supabase-migration.sql** - 기존 DB 마이그레이션
- **configs/n8n-workflow.json** - n8n 워크플로우 템플릿

## 🔧 기술 스택

- **Frontend**: React + Vite
- **Database**: Supabase (PostgreSQL)
- **Automation**: n8n
- **AI**: Claude 3.5 Sonnet
- **Deployment**: Vercel

## 📊 작동 방식

1. **매일 오전 9시** n8n이 자동 실행
2. 어제 통계 조회 및 CTR 계산
3. **CTR < 5%** 이면 Claude API로 새 디자인 생성
4. **develop 브랜치**에 푸시 → GitHub Actions 자동 빌드 테스트
5. **빌드 성공** 시 main 브랜치로 머지 → Vercel 자동 배포
6. 코드 버전별로 독립적인 통계 추적

## 🔒 안전한 배포 파이프라인

```
n8n (코드 생성)
    ↓
develop 브랜치 push
    ↓
GitHub Actions (자동 빌드 테스트)
    ↓
✅ 빌드 성공 → main 브랜치 머지
    ↓
Vercel (자동 배포)
```

빌드 실패 시 main 브랜치는 영향받지 않으므로 안전합니다!

## 📝 라이선스

MIT License
