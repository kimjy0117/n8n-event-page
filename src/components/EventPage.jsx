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
          'linear-gradient(135deg, #81d4fa 0%, #4fc3f7 50%, #0288d1 100%)',
        padding: '2rem',
        fontFamily: "'Noto Sans KR', sans-serif",
      }}
    >
      {/* === AI 수정 가능 영역 시작 === */}
      <div
        className="hero-section"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '32px',
          boxShadow:
            '0 20px 60px rgba(0, 121, 184, 0.25), 0 0 0 6px #0288d1',
          maxWidth: '560px',
          width: '100%',
          padding: '5rem 3.5rem 4rem 3.5rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontSize: '3.4rem',
            marginBottom: 0,
            color: '#01579b',
            fontWeight: '900',
            letterSpacing: '0.08em',
            lineHeight: '1.15',
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
          }}
        >
          🚀 <span style={{ color: '#d81b60' }}>지금 바로 클릭!</span>
          <br />
          한정판 이벤트가 기다립니다!
        </h1>
        <p
          className="hero-description"
          style={{
            fontSize: '1.3rem',
            color: '#37474f',
            lineHeight: '1.75',
            marginBottom: 0,
            fontWeight: '700',
            maxWidth: '460px',
            userSelect: 'none',
          }}
        >
          참여만 해도 <strong style={{ color: '#d81b60' }}>특별 리워드</strong> 획득!
          <br />
          빠르게 신청하고 혜택을 놓치지 마세요.
        </p>

        <button
          className="cta-button"
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#d81b60',
            color: '#fff',
            border: 'none',
            padding: '1.8rem 4rem',
            fontSize: '1.75rem',
            borderRadius: '60px',
            fontWeight: '900',
            boxShadow: '0 12px 30px rgba(216, 27, 96, 0.65)',
            cursor: 'pointer',
            transition:
              'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease',
            width: '100%',
            maxWidth: '400px',
            userSelect: 'none',
            letterSpacing: '0.07em',
            marginTop: '1rem',
            textShadow: '0 0 6px rgba(255,255,255,0.7)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#b0144a'
            e.currentTarget.style.transform = 'scale(1.12)'
            e.currentTarget.style.boxShadow =
              '0 16px 40px rgba(176, 20, 74, 0.85)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#d81b60'
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(216, 27, 96, 0.65)'
          }}
          aria-label="이벤트 지금 바로 참여하기 버튼"
        >
          🛎️ 지금 바로 참여하고 혜택 받기
        </button>

        <div
          className="features"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.6rem',
            width: '100%',
            maxWidth: '520px',
            marginTop: '1.5rem',
          }}
        >
          <div
            className="feature-item"
            style={{
              backgroundColor: '#ffebee',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#c62828',
              boxShadow: '0 7px 22px rgba(198, 40, 40, 0.3)',
              fontWeight: '800',
              fontSize: '1.2rem',
              transition: 'transform 0.3s ease',
              cursor: 'default',
              userSelect: 'none',
              border: '2px solid transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.borderColor = '#c62828'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'transparent'
            }}
          >
            <span
              className="feature-icon"
              style={{ fontSize: '2.6rem', marginBottom: '0.8rem' }}
              aria-hidden="true"
            >
              ⚡️
            </span>
            <p style={{ margin: 0 }}>신속·간편 신청</p>
          </div>
          <div
            className="feature-item"
            style={{
              backgroundColor: '#e1f5fe',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#0277bd',
              boxShadow: '0 7px 22px rgba(2, 119, 189, 0.28)',
              fontWeight: '800',
              fontSize: '1.2rem',
              transition: 'transform 0.3s ease',
              cursor: 'default',
              userSelect: 'none',
              border: '2px solid transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.borderColor = '#0277bd'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'transparent'
            }}
          >
            <span
              className="feature-icon"
              style={{ fontSize: '2.6rem', marginBottom: '0.8rem' }}
              aria-hidden="true"
            >
              🎯
            </span>
            <p style={{ margin: 0 }}>맞춤 혜택 보장</p>
          </div>
          <div
            className="feature-item"
            style={{
              backgroundColor: '#fff3e0',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#ef6c00',
              boxShadow: '0 7px 22px rgba(239, 108, 0, 0.26)',
              fontWeight: '800',
              fontSize: '1.2rem',
              transition: 'transform 0.3s ease',
              cursor: 'default',
              userSelect: 'none',
              border: '2px solid transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.borderColor = '#ef6c00'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'transparent'
            }}
          >
            <span
              className="feature-icon"
              style={{ fontSize: '2.6rem', marginBottom: '0.8rem' }}
              aria-hidden="true"
            >
              💯
            </span>
            <p style={{ margin: 0 }}>만족도 99% 이상</p>
          </div>
        </div>
      </div>
      {/* === AI 수정 가능 영역 끝 === */}
    </div>
  )
}

export default EventPage