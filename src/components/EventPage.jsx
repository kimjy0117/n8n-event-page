function EventPage() {
  const { recordClick } = useStats()

  const handleButtonClick = () => {
    recordClick()
    alert('이벤트 참여 감사합니다! 🎉')
  }

  return (
    <div
      className="event-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #2196f3 0%, #21cbf3 50%, #1e88e5 100%)',
        padding: '3rem',
        fontFamily: "'Noto Sans KR', sans-serif",
      }}
    >
      <div
        className="hero-section"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '36px',
          boxShadow:
            '0 25px 70px rgba(33, 150, 243, 0.35), 0 0 0 7px #1e88e5',
          maxWidth: '600px',
          width: '100%',
          padding: '6rem 4rem 5rem 4rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontSize: '3.8rem',
            marginBottom: 0,
            color: '#0d47a1',
            fontWeight: '900',
            letterSpacing: '0.1em',
            lineHeight: '1.1',
            textShadow: '2px 2px 5px rgba(0,0,0,0.15)',
          }}
        >
          🎉 <span style={{ color: '#ff1744' }}>지금 바로 참여하세요!</span>
          <br />
          단 100명 한정 특별 이벤트!
        </h1>
        <p
          className="hero-description"
          style={{
            fontSize: '1.5rem',
            color: '#455a64',
            lineHeight: '1.9',
            marginBottom: 0,
            fontWeight: '700',
            maxWidth: '480px',
            userSelect: 'none',
          }}
        >
          지금 신청만 해도{' '}
          <strong style={{ color: '#ff1744' }}>
            프리미엄 리워드 패키지
          </strong>{' '}
          즉시 증정!
          <br />
          늦기 전에 빠르게 접속하세요.
        </p>

        <button
          className="cta-button"
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#ff1744',
            color: '#fff',
            border: 'none',
            padding: '2.2rem 5rem',
            fontSize: '1.9rem',
            borderRadius: '70px',
            fontWeight: '900',
            boxShadow: '0 15px 40px rgba(255, 23, 68, 0.85)',
            cursor: 'pointer',
            transition:
              'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s ease',
            width: '100%',
            maxWidth: '440px',
            userSelect: 'none',
            letterSpacing: '0.09em',
            marginTop: '1.5rem',
            textShadow: '0 0 8px rgba(255, 255, 255, 0.85)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#d50035'
            e.currentTarget.style.transform = 'scale(1.15)'
            e.currentTarget.style.boxShadow =
              '0 20px 50px rgba(213, 0, 53, 0.9)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ff1744'
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 23, 68, 0.85)'
          }}
          aria-label="이벤트 지금 바로 참여하기 버튼"
        >
          🔥 한정판 혜택, 지금 참여하기!
        </button>

        <div
          className="features"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '520px',
            marginTop: '2rem',
            gap: '1.8rem',
          }}
        >
          <div
            className="feature-item"
            style={{
              backgroundColor: '#fce4ec',
              borderRadius: '24px',
              padding: '2.4rem 2rem',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#d81b60',
              boxShadow: '0 9px 28px rgba(216, 27, 96, 0.35)',
              fontWeight: '900',
              fontSize: '1.3rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              userSelect: 'none',
              border: '3px solid transparent',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.borderColor = '#d81b60'
              e.currentTarget.style.boxShadow =
                '0 12px 36px rgba(216, 27, 96, 0.55)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.boxShadow = '0 9px 28px rgba(216, 27, 96, 0.35)'
            }}
          >
            <span
              className="feature-icon"
              style={{ fontSize: '3rem', marginBottom: '1rem' }}
              aria-hidden="true"
            >
              ⚡️
            </span>
            <p style={{ margin: 0 }}>초간편 신청</p>
          </div>
          <div
            className="feature-item"
            style={{
              backgroundColor: '#e3f2fd',
              borderRadius: '24px',
              padding: '2.4rem 2rem',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#1976d2',
              boxShadow: '0 9px 28px rgba(25, 118, 210, 0.35)',
              fontWeight: '900',
              fontSize: '1.3rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              userSelect: 'none',
              border: '3px solid transparent',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.borderColor = '#1976d2'
              e.currentTarget.style.boxShadow =
                '0 12px 36px rgba(25, 118, 210, 0.55)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.boxShadow = '0 9px 28px rgba(25, 118, 210, 0.35)'
            }}
          >
            <span
              className="feature-icon"
              style={{ fontSize: '3rem', marginBottom: '1rem' }}
              aria-hidden="true"
            >
              🎯
            </span>
            <p style={{ margin: 0 }}>맞춤형 혜택</p>
          </div>
          <div
            className="feature-item"
            style={{
              backgroundColor: '#fff8e1',
              borderRadius: '24px',
              padding: '2.4rem 2rem',
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#f9a825',
              boxShadow: '0 9px 28px rgba(249, 168, 37, 0.35)',
              fontWeight: '900',
              fontSize: '1.3rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              userSelect: 'none',
              border: '3px solid transparent',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.borderColor = '#f9a825'
              e.currentTarget.style.boxShadow =
                '0 12px 36px rgba(249, 168, 37, 0.55)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.boxShadow = '0 9px 28px rgba(249, 168, 37, 0.35)'
            }}
          >
            <span
              className="feature-icon"
              style={{ fontSize: '3rem', marginBottom: '1rem' }}
              aria-hidden="true"
            >
              💯
            </span>
            <p style={{ margin: 0 }}>만족도 100% 보장</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage