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
    alert('이벤트 참여 감사합니다! 🎉')
  }

  return (
    <div className="event-container" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f9fafb 0%, #e0f7fa 100%)',
      padding: '2rem'
    }}>
      {/* === AI 수정 가능 영역 시작 === */}
      <div className="hero-section" style={{ 
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        maxWidth: '480px',
        width: '100%',
        padding: '3rem 2rem',
        textAlign: 'center',
        fontFamily: "'Noto Sans KR', sans-serif",
      }}>
        <h1 className="hero-title" style={{ 
          fontSize: '2.8rem', 
          marginBottom: '1rem',
          color: '#00796b',
          fontWeight: '700',
          letterSpacing: '0.05em',
        }}>
          🎁 <span style={{ color: '#d81b60' }}>지금 바로</span> 특별한 이벤트에 참여하세요!
        </h1>
        <p className="hero-description" style={{
          fontSize: '1.15rem',
          color: '#555',
          lineHeight: '1.6',
          marginBottom: '3rem',
          fontWeight: '500',
        }}>
          지금 참여하고 <strong style={{ color: '#d81b60' }}>한정 혜택</strong>을 받아보세요.<br />
          이 기회를 놓치면 정말 아쉽습니다!
        </p>

        <button 
          className="cta-button" 
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#d81b60',
            color: '#fff',
            border: 'none',
            padding: '1.2rem 2.5rem',
            fontSize: '1.3rem',
            borderRadius: '40px',
            fontWeight: '700',
            boxShadow: '0 6px 12px rgba(216, 27, 96, 0.45)',
            cursor: 'pointer',
            transition: 'all 0.25s ease-in-out',
            marginBottom: '3rem',
            userSelect: 'none',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c2185b'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#d81b60'}
        >
          지금 바로 참여하기 🚀
        </button>

        <div className="features" style={{ 
          display: 'flex',
          justifyContent: 'space-around', 
          gap: '1.2rem',
        }}>
          <div className="feature-item" style={{ 
            flex: '1',
            backgroundColor: '#f1f8e9',
            borderRadius: '12px',
            padding: '1rem 1.2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#689f38',
            boxShadow: '0 3px 8px rgba(104, 159, 56, 0.2)',
            fontWeight: '600',
            fontSize: '1rem',
          }}>
            <span className="feature-icon" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>⚡</span>
            <p style={{ margin: 0 }}>빠른 신청</p>
          </div>
          <div className="feature-item" style={{
            flex: '1',
            backgroundColor: '#ede7f6',
            borderRadius: '12px',
            padding: '1rem 1.2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#5e35b1',
            boxShadow: '0 3px 8px rgba(94, 53, 177, 0.2)',
            fontWeight: '600',
            fontSize: '1rem',
          }}>
            <span className="feature-icon" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🎯</span>
            <p style={{ margin: 0 }}>맞춤형 혜택</p>
          </div>
          <div className="feature-item" style={{
            flex: '1',
            backgroundColor: '#fff3e0',
            borderRadius: '12px',
            padding: '1rem 1.2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#fb8c00',
            boxShadow: '0 3px 8px rgba(251, 140, 0, 0.2)',
            fontWeight: '600',
            fontSize: '1rem',
          }}>
            <span className="feature-icon" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>💯</span>
            <p style={{ margin: 0 }}>만족도 99%</p>
          </div>
        </div>
      </div>
      {/* === AI 수정 가능 영역 끝 === */}
    </div>
  )
}

export default EventPage
```

이렇게 수정하면 배경과 버튼 컬러 대비 상승, 버튼 크기와 텍스트 액션 유도 강화, 특장점 박스도 눈에 잘 띄게 디자인 되어 CTR 상승에 긍정적 영향을 줄 수 있습니다.  
필요하면 CSS로 스타일 분리해도 됩니다.