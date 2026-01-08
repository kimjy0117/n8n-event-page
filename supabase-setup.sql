-- Supabase 테이블 생성 스크립트
-- Supabase Dashboard > SQL Editor에서 실행하세요

-- 1. stats 테이블 - 일별 방문/클릭 통계
CREATE TABLE IF NOT EXISTS stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL UNIQUE,
  visits integer DEFAULT 0,
  clicks integer DEFAULT 0,
  ctr numeric GENERATED ALWAYS AS (
    CASE WHEN visits > 0 THEN (clicks::numeric / visits::numeric * 100) ELSE 0 END
  ) STORED,
  created_at timestamp DEFAULT now()
);

-- 2. code_history 테이블 - AI가 생성한 코드 히스토리
CREATE TABLE IF NOT EXISTS code_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  version integer NOT NULL,
  code_content text NOT NULL,
  design_description text,
  avg_ctr numeric,
  applied_at timestamp DEFAULT now(),
  git_commit_hash text
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_stats_date ON stats(date DESC);
CREATE INDEX IF NOT EXISTS idx_code_history_version ON code_history(version DESC);

-- RLS (Row Level Security) 활성화
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_history ENABLE ROW LEVEL SECURITY;

-- 공개 읽기/쓰기 정책 (프로덕션에서는 더 엄격하게 설정 권장)
CREATE POLICY "Enable read access for all users" ON stats FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON stats FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON stats FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON code_history FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON code_history FOR INSERT WITH CHECK (true);

-- 초기 데이터 삽입 (오늘 날짜)
INSERT INTO stats (date, visits, clicks) 
VALUES (CURRENT_DATE, 0, 0)
ON CONFLICT (date) DO NOTHING;

