import { useStats } from '../hooks/useStats'
import '../styles/event.css'

/**
 * 이벤트 페이지 컴포넌트
 * 
 * ⚠️ AI 자동 수정 대상 파일 ⚠️
 * n8n 워크플로우가 CTR이 낮을 때 이 파일을 자동으로 수정합니다.
 * 
 * 수정 가능 영역:
 * - 레이아웃 구조
 * - 버튼 스타일, 위치, 크기
 * - 버튼 문구
 * - 색상, 폰트, 애니메이션
 * 
 * 유지해야 할 것:
 * - useStats 훅 사용
 * - recordClick 호출
 * - 기본 React 구조
 */
function EventPage() {
  const { recordClick } = useStats()

  const handleButtonClick = () => {
    recordClick()
    // 추가 액션 (예: 모달 열기, 페이지 이동 등)
    alert('이벤트 참여 감사합니다! 🎉')
  }

  return (
    <div className="event-container">
      {/* === AI 수정 가능 영역 시작 === */}
      
      <div className="hero-section">
        <h1 className="hero-title">
          🎁 특별한 이벤트에 참여하세요!
        </h1>
        <p className="hero-description">
          지금 바로 참여하고 특별한 혜택을 받아보세요.
          <br />
          놓치면 후회할 기회입니다!
        </p>
        
        <button 
          className="cta-button"
          onClick={handleButtonClick}
        >
          지금 참여하기
        </button>

        <div className="features">
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <p>빠른 신청</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎯</span>
            <p>맞춤형 혜택</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💯</span>
            <p>만족도 99%</p>
          </div>
        </div>
      </div>

      {/* === AI 수정 가능 영역 끝 === */}
    </div>
  )
}

export default EventPage