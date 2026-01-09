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
    <div className="event-container" style={{ maxWidth: '480px', margin: '40px auto', padding: '20px', textAlign: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: '#fff9f5', borderRadius: '12px', boxShadow: '0 10px 25px rgba(255, 102, 0, 0.15)' }}>
      {/* === AI 수정 가능 영역 시작 === */}
      
      <div className="hero-section">
        <h1 className="hero-title" style={{ fontSize: '2.8rem', fontWeight: '700', color: '#ff5a00', marginBottom: '12px', textShadow: '1px 1px 3px rgba(255, 90, 0, 0.3)' }}>
          🎉 지금 바로 이벤트 참여하고 혜택을 받으세요!
        </h1>
        <p className="hero-description" style={{ fontSize: '1.15rem', color: '#333', lineHeight: '1.5', marginBottom: '30px' }}>
          한정 기간 동안만! <strong>지금 참여</strong>하면 <span style={{color: '#ff5a00'}}>즉시 할인 쿠폰</span>과 특별 선물을 드립니다.<br />
          기회를 놓치지 마세요!
        </p>
        
        <button 
          className="cta-button"
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#ff5a00',
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: '700',
            padding: '18px 0',
            width: '100%',
            borderRadius: '50px',
            border: 'none',
            boxShadow: '0 6px 15px rgba(255, 90, 0, 0.6)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginBottom: '35px',
            userSelect: 'none',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e04e00')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ff5a00')}
          aria-label="이벤트 참여하기 버튼"
        >
          지금 바로 참여해서 선물 받기 🚀
        </button>

        <div className="features" style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', paddingTop: '15px' }}>
          <div className="feature-item" style={{ flex: 1, background: '#fff5f0', borderRadius: '12px', padding: '12px 10px', boxShadow: '0 4px 10px rgba(255, 90, 0, 0.12)', transition: 'transform 0.3s', cursor: 'default' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '1.8rem' }}>⚡</span>
            <p style={{ marginTop: '8px', fontWeight: '600', color:'#d9532f' }}>빠른 신청</p>
          </div>
          <div className="feature-item" style={{ flex: 1, background: '#fff5f0', borderRadius: '12px', padding: '12px 10px', boxShadow: '0 4px 10px rgba(255, 90, 0, 0.12)', transition: 'transform 0.3s', cursor: 'default' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '1.8rem' }}>🎯</span>
            <p style={{ marginTop: '8px', fontWeight: '600', color:'#d9532f' }}>맞춤 혜택</p>
          </div>
          <div className="feature-item" style={{ flex: 1, background: '#fff5f0', borderRadius: '12px', padding: '12px 10px', boxShadow: '0 4px 10px rgba(255, 90, 0, 0.12)', transition: 'transform 0.3s', cursor: 'default' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '1.8rem' }}>💯</span>
            <p style={{ marginTop: '8px', fontWeight: '600', color:'#d9532f' }}>만족도 99%</p>
          </div>
        </div>
      </div>

      {/* === AI 수정 가능 영역 끝 === */}
    </div>
  )
}

export default EventPage