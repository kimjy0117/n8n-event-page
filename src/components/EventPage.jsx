function EventPage() {
  const { recordClick } = useStats()

  const handleButtonClick = () => {
    recordClick()
    alert('이벤트 참여 감사합니다! 🎉')
  }

  return (
    <div className="event-container" style={{ maxWidth: '480px', margin: '40px auto', padding: '20px', textAlign: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: '#fff', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}>
      <div className="hero-section">
        <h1 className="hero-title" style={{ fontSize: '2.6rem', fontWeight: '700', color: '#f47c20', marginBottom: '10px', textShadow: '1px 1px 3px rgba(255, 90, 0, 0.3)' }}>
          🎉 지금 바로 이벤트 참여하고 <strong>특별한 혜택</strong>을 챙기세요!
        </h1>
        <p className="hero-description" style={{ fontSize: '1.15rem', color: '#333', lineHeight: '1.5', marginBottom: '30px' }}>
          한정 기간! <strong>지금 참여</strong>하면 <span style={{ color: '#f47c20', fontWeight: 'bold' }}>즉시 할인 쿠폰</span>과 특별 선물을 드립니다.<br />
          기회를 놓치지 마세요!
        </p>
        
        <button 
          className="cta-button"
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#ff6b6b',
            color: '#fff',
            fontSize: '1.8rem',
            fontWeight: '700',
            padding: '16px 0',
            width: '100%',
            borderRadius: '50px',
            border: 'none',
            boxShadow: '0 6px 25px rgba(255, 107, 107, 0.4)',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
            marginBottom: '30px',
            userSelect: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#ff4d4d';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 77, 77, 0.6)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#ff6b6b';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 107, 107, 0.4)';
          }}
          aria-label="이벤트 참여하기 버튼"
        >
          지금 참여하고 <strong>선물 받기! 🎁</strong>
        </button>

        <div className="features" style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', paddingTop: '20px' }}>
          <div className="feature-item" style={{ flex: 1, background: '#e9f5ed', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 25px rgba(40, 167, 69, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '2.2rem', color: '#28a745' }}>⚡</span>
            <p style={{ marginTop: '8px', fontWeight: '600', color:'#28a745' }}>빠른 신청</p>
          </div>
          <div className="feature-item" style={{ flex: 1, background: '#e9f5ed', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 25px rgba(40, 167, 69, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '2.2rem', color: '#28a745' }}>🎯</span>
            <p style={{ marginTop: '8px', fontWeight: '600', color:'#28a745' }}>맞춤 혜택</p>
          </div>
          <div className="feature-item" style={{ flex: 1, background: '#e9f5ed', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 25px rgba(40, 167, 69, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '2.2rem', color: '#28a745' }}>💯</span>
            <p style={{ marginTop: '8px', fontWeight: '600', color:'#28a745' }}>만족도 99%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage