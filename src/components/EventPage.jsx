function EventPage() {
  const { recordClick } = useStats()

  const handleButtonClick = () => {
    recordClick()
    alert('이벤트 참여 감사합니다! 🎉')
  }

  return (
    <div className="event-container" style={{ maxWidth: '480px', margin: '40px auto', padding: '20px', textAlign: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: '#fff', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}>
      <div className="hero-section">
        <h1 className="hero-title" style={{ fontSize: '2.6rem', fontWeight: '700', color: '#f47c20', marginBottom: '12px', textShadow: '1px 1px 3px rgba(255, 90, 0, 0.3)' }}>
          🎉 지금 바로 이벤트 참여하고 특별한 혜택을 챙기세요!
        </h1>
        <p className="hero-description" style={{ fontSize: '1.15rem', color: '#333', lineHeight: '1.5', marginBottom: '30px' }}>
          한정 기간! <strong>지금 참여</strong>하면 <span style={{ color: '#f47c20', fontWeight: 'bold' }}>즉시 할인 쿠폰</span>과 특별 선물을 드립니다.<br />
          기회를 놓치지 마세요!
        </p>
        
        <button 
          className="cta-button"
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#ff5733',
            color: '#fff',
            fontSize: '1.8rem',
            fontWeight: '700',
            padding: '18px 0',
            width: '100%',
            borderRadius: '50px',
            border: 'none',
            boxShadow: '0 6px 15px rgba(255, 100, 0, 0.5)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginBottom: '40px',
            userSelect: 'none',
            position: 'relative'
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e85d32')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ff5733')}
          aria-label="이벤트 참여하기 버튼"
        >
          지금 참여하고 한정 선물 받기! 🚀
          <span style={{ position: 'absolute', right: '20px', fontSize: '1.2rem' }}>🎁</span>
        </button>

        <div className="features" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', paddingTop: '20px' }}>
          <div className="feature-item" style={{ flex: 1, background: '#fffbf0', borderRadius: '12px', padding: '12px 15px', boxShadow: '0 4px 15px rgba(255, 128, 0, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '2rem' }}>⚡</span>
            <p style={{ marginTop: '8px', fontWeight: '600', color:'#e07b1c' }}>빠른 신청</p>
          </div>
          <div className="feature-item" style={{ flex: 1, background: '#fffbf0', borderRadius: '12px', padding: '12px 15px', boxShadow: '0 4px 15px rgba(255, 128, 0, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '2rem' }}>🎯</span>
            <p style={{ marginTop: '8px', fontWeight: '600', color:'#e07b1c' }}>맞춤 혜택</p>
          </div>
          <div className="feature-item" style={{ flex: 1, background: '#fffbf0', borderRadius: '12px', padding: '12px 15px', boxShadow: '0 4px 15px rgba(255, 128, 0, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '2rem' }}>💯</span>
            <p style={{ marginTop: '8px', fontWeight: '600', color:'#e07b1c' }}>만족도 99%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage