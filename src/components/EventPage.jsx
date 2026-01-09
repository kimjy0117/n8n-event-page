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
      background: 'radial-gradient(circle at center, #e0f2f1 0%, #80cbc4 100%)',
      padding: '2rem',
      fontFamily: "'Noto Sans KR', sans-serif",
    }}>
      {/* === AI 수정 가능 영역 시작 === */}
      <div className="hero-section" style={{ 
        backgroundColor: '#fff',
        borderRadius: '24px',
        boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
        maxWidth: '520px',
        width: '100%',
        padding: '4rem 3rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1 className="hero-title" style={{ 
          fontSize: '3rem', 
          marginBottom: '1.5rem',
          color: '#00796b',
          fontWeight: '800',
          letterSpacing: '0.07em',
          lineHeight: '1.2',
        }}>
          🎉 <span style={{ color: '#d32f2f' }}>놓치지 마세요!</span><br />특별한 이벤트가 시작됩니다!
        </h1>
        <p className="hero-description" style={{
          fontSize: '1.2rem',
          color: '#424242',
          lineHeight: '1.7',
          marginBottom: '3.5rem',
          fontWeight: '600',
          maxWidth: '420px',
        }}>
          지금 바로 참여하여 <strong style={{ color: '#d32f2f' }}>한정 혜택</strong>과<br />독점 보상을 받아가세요!
        </p>

        <button 
          className="cta-button" 
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#d32f2f',
            color: '#fff',
            border: 'none',
            padding: '1.6rem 3.2rem',
            fontSize: '1.5rem',
            borderRadius: '50px',
            fontWeight: '800',
            boxShadow: '0 8px 20px rgba(211, 47, 47, 0.5)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            marginBottom: '4rem',
            userSelect: 'none',
            letterSpacing: '0.05em',
            width: '100%',
            maxWidth: '360px',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#b71c1c'
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#d32f2f'
            e.currentTarget.style.transform = 'scale(1)'
          }}
          aria-label="이벤트 지금 참여하기 버튼"
        >
          🛎️ 지금 바로 참여하기
        </button>

        <div className="features" style={{ 
          display: 'flex',
          justifyContent: 'space-between', 
          gap: '1.5rem',
          width: '100%',
          maxWidth: '480px'
        }}>
          <div className="feature-item" style={{ 
            flex: '1',
            backgroundColor: '#e8f5e9',
            borderRadius: '16px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#388e3c',
            boxShadow: '0 5px 15px rgba(56, 142, 60, 0.25)',
            fontWeight: '700',
            fontSize: '1.1rem',
            transition: 'transform 0.25s ease',
            cursor: 'default',
            userSelect: 'none',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <span className="feature-icon" style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }} aria-hidden="true">⚡</span>
            <p style={{ margin: 0 }}>빠르고 간편한 신청</p>
          </div>
          <div className="feature-item" style={{
            flex: '1',
            backgroundColor: '#ede7f6',
            borderRadius: '16px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#512da8',
            boxShadow: '0 5px 15px rgba(81, 45, 168, 0.25)',
            fontWeight: '700',
            fontSize: '1.1rem',
            transition: 'transform 0.25s ease',
            cursor: 'default',
            userSelect: 'none',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <span className="feature-icon" style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }} aria-hidden="true">🎯</span>
            <p style={{ margin: 0 }}>맞춤 혜택 보장</p>
          </div>
          <div className="feature-item" style={{
            flex: '1',
            backgroundColor: '#fff8e1',
            borderRadius: '16px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#f57c00',
            boxShadow: '0 5px 15px rgba(245, 124, 0, 0.25)',
            fontWeight: '700',
            fontSize: '1.1rem',
            transition: 'transform 0.25s ease',
            cursor: 'default',
            userSelect: 'none',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <span className="feature-icon" style={{ fontSize: '2.2rem', marginBottom: '0.7rem' }} aria-hidden="true">💯</span>
            <p style={{ margin: 0 }}>만족도 99% 보장</p>
          </div>
        </div>
      </div>
      {/* === AI 수정 가능 영역 끝 === */}
    </div>
  )
}

export default EventPage