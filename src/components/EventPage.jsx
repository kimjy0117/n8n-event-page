function EventPage() {
  const { recordClick } = useStats()

  const handleButtonClick = () => {
    recordClick()
    alert('이벤트 참여 감사합니다! 🎉')
  }

  return (
    <div className="event-container" style={{ maxWidth: '480px', margin: '40px auto', padding: '25px', textAlign: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: '#fff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
      <div className="hero-section">
        <h1 className="hero-title" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#f47c20', marginBottom: '10px', textShadow: '1px 1px 3px rgba(255, 90, 0, 0.3)' }}>
          🎉 놓치지 마세요! 특별한 혜택이 기다립니다!
        </h1>
        <p className="hero-description" style={{ fontSize: '1.2rem', color: '#333', lineHeight: '1.5', marginBottom: '30px' }}>
          한정 기간 동안 참여하시면 <strong style={{ color: '#f47c20' }}>즉시 할인 쿠폰</strong>과 특별 선물을 드립니다!<br />
          지금 바로 참여해보세요!
        </p>
        
        <button 
          className="cta-button"
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#ff7043',
            color: '#fff',
            fontSize: '1.6rem',
            fontWeight: '700',
            padding: '18px 0',
            width: '100%',
            borderRadius: '50px',
            border: 'none',
            boxShadow: '0 6px 30px rgba(255, 87, 34, 0.4)',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
            marginBottom: '20px',
            userSelect: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#ff8a65';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 87, 34, 0.6)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#ff7043';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 6px 30px rgba(255, 87, 34, 0.4)';
          }}
          aria-label="이벤트 참여하기 버튼"
        >
          🎁 지금 참여하고 <strong>특별 선물 받기!</strong>
        </button>

        <div className="features" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', paddingTop: '20px' }}>
          <div className="feature-item" style={{ background: '#e8f5e9', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 30px rgba(76, 175, 80, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '2.5rem', color: '#4caf50' }}>⚡</span>
            <p style={{ marginTop: '10px', fontWeight: '600', color:'#4caf50' }}>신청이 간편해요</p>
          </div>
          <div className="feature-item" style={{ background: '#e8f5e9', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 30px rgba(76, 175, 80, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '2.5rem', color: '#4caf50' }}>🎯</span>
            <p style={{ marginTop: '10px', fontWeight: '600', color:'#4caf50' }}>개인 맞춤 혜택</p>
          </div>
          <div className="feature-item" style={{ background: '#e8f5e9', borderRadius: '12px', padding: '15px', boxShadow: '0 4px 30px rgba(76, 175, 80, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '2.5rem', color: '#4caf50' }}>💯</span>
            <p style={{ marginTop: '10px', fontWeight: '600', color:'#4caf50' }}>만족도 99% 보장</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage