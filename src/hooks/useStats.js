import { useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'

/**
 * 통계 기록을 위한 커스텀 훅
 * - 페이지 로드 시 방문수 자동 증가 (1회만)
 * - 클릭수 증가 함수 제공
 * - 코드 버전별로 별도의 통계 관리
 */
export function useStats() {
  const visitRecorded = useRef(false)

  // 페이지 로드 시 방문수 증가 (1회만)
  useEffect(() => {
    if (!visitRecorded.current) {
      recordVisit()
      visitRecorded.current = true
    }
  }, [])

  // 현재 활성 코드 버전 가져오기
  const getCurrentVersion = async () => {
    try {
      const { data, error } = await supabase
        .from('code_history')
        .select('version')
        .order('version', { ascending: false })
        .limit(1)
        .single()

      if (error) {
        console.log('코드 버전 조회 에러 (기본값 1 사용):', error)
        return 1  // 기본값
      }

      return data?.version || 1
    } catch (error) {
      console.log('코드 버전 조회 실패 (기본값 1 사용):', error)
      return 1
    }
  }

  // 방문수 증가
  const recordVisit = async () => {
    try {
      const today = new Date().toISOString().split('T')[0]
      const currentVersion = await getCurrentVersion()
      
      // 오늘 날짜 + 현재 버전의 통계 조회
      const { data: existingStats, error: selectError } = await supabase
        .from('stats')
        .select('*')
        .eq('date', today)
        .eq('code_version', currentVersion)
        .single()

      if (selectError && selectError.code !== 'PGRST116') {
        // PGRST116은 "데이터 없음" 에러 (정상)
        console.error('방문수 조회 에러:', selectError)
        return
      }

      if (existingStats) {
        // 기존 데이터가 있으면 방문수 증가
        const { error: updateError } = await supabase
          .from('stats')
          .update({ visits: existingStats.visits + 1 })
          .eq('date', today)
          .eq('code_version', currentVersion)

        if (updateError) {
          console.error('방문수 업데이트 에러:', updateError)
        } else {
          console.log(`방문수 증가 (버전 ${currentVersion}):`, existingStats.visits + 1)
        }
      } else {
        // 새로운 날짜+버전이면 insert (코드 재생성 시 새 row 생성)
        const { error: insertError } = await supabase
          .from('stats')
          .insert([{ date: today, code_version: currentVersion, visits: 1, clicks: 0 }])

        if (insertError) {
          console.error('방문수 삽입 에러:', insertError)
        } else {
          console.log(`새로운 통계 생성 (날짜: ${today}, 버전: ${currentVersion})`)
        }
      }
    } catch (error) {
      console.error('방문 기록 에러:', error)
    }
  }

  // 클릭수 증가
  const recordClick = async () => {
    try {
      const today = new Date().toISOString().split('T')[0]
      const currentVersion = await getCurrentVersion()
      
      // 오늘 날짜 + 현재 버전의 통계 조회
      const { data: existingStats, error: selectError } = await supabase
        .from('stats')
        .select('*')
        .eq('date', today)
        .eq('code_version', currentVersion)
        .single()

      if (selectError) {
        console.error('클릭수 조회 에러:', selectError)
        return
      }

      if (existingStats) {
        // 클릭수 증가
        const { error: updateError } = await supabase
          .from('stats')
          .update({ clicks: existingStats.clicks + 1 })
          .eq('date', today)
          .eq('code_version', currentVersion)

        if (updateError) {
          console.error('클릭수 업데이트 에러:', updateError)
        } else {
          console.log(`클릭수 증가 (버전 ${currentVersion}):`, existingStats.clicks + 1)
        }
      }
    } catch (error) {
      console.error('클릭 기록 에러:', error)
    }
  }

  return { recordClick }
}

