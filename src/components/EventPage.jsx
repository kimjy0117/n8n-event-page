import { useStats } from '../hooks/useStats'
import '../styles/event.css'

function EventPage() {
  const { recordClick } = useStats()

  const handleButtonClick = () => {
    recordClick()
    alert('이벤트 참여 감사합니다! 🎉')
  }

  return (
    <div className="event-container" style={{ maxWidth: '480px', margin: '40px auto', padding: '20px', textAlign: 'center', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: '#ffffff', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
      <div className="hero-section">
        <h1 className="hero-title" style={{ fontSize: '2.8rem', fontWeight: '700', color: '#d32f2f', marginBottom: '15px', textShadow: '1px 1px 5px rgba(255, 0, 0, 0.3)' }}>
          🎉 특별 이벤트!
        </h1>
        <p className="hero-description" style={{ fontSize: '1.3rem', color: '#555', lineHeight: '1.5', marginBottom: '30px' }}>
          참여하시면 <strong style={{ color: '#d32f2f' }}>즉시 할인 쿠폰</strong>과 특별 선물이 기다립니다! <br />
          놓치지 마세요!
        </p>
        
        <button 
          className="cta-button"
          onClick={handleButtonClick}
          style={{
            backgroundColor: '#ff9800',
            color: '#fff',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            padding: '16px 0',
            width: '100%',
            borderRadius: '50px',
            border: 'none',
            boxShadow: '0 12px 30px rgba(255, 152, 0, 0.3)',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
            marginBottom: '25px',
            userSelect: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#fb8c00';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 152, 0, 0.6)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#ff9800';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 152, 0, 0.3)';
          }}
          aria-label="이벤트 참여하기 버튼"
        >
          🎁 <strong>특별 선물 받기!</strong> 지금 참여하세요!
        </button>

        <div className="features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', paddingTop: '20px' }}>
          <div className="feature-item" style={{ background: '#e8f5e9', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 30px rgba(76, 175, 80, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '3rem', color: '#4caf50' }}>⚡</span>
            <p style={{ marginTop: '10px', fontWeight: '600', color:'#4caf50' }}>간편한 신청</p>
          </div>
          <div className="feature-item" style={{ background: '#e8f5e9', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 30px rgba(76, 175, 80, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '3rem', color: '#4caf50' }}>🎯</span>
            <p style={{ marginTop: '10px', fontWeight: '600', color:'#4caf50' }}>개인 맞춤 혜택</p>
          </div>
          <div className="feature-item" style={{ background: '#e8f5e9', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 30px rgba(76, 175, 80, 0.1)', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')} onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
            <span className="feature-icon" style={{ fontSize: '3rem', color: '#4caf50' }}>💯</span>
            <p style={{ marginTop: '10px', fontWeight: '600', color:'#4caf50' }}>만족 보장</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage