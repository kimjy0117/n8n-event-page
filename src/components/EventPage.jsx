import React from 'react';
import { useStats } from './useStats';
import { supabase } from './supabaseClient';

const EventPage = () => {
  const { clicks, recordClick } = useStats();

  const handleClick = async () => {
    await recordClick();
    // logic to handle click goes here
  };

  return (
    <div className="event-page" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Join Our Exclusive Event!</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Limited Spots Available - Act Quickly!</p>
      </header>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>What You'll Learn</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>🔥 Insightful strategies to boost your skills</li>
          <li style={{ margin: '10px 0' }}>🤝 Networking opportunities with industry leaders</li>
          <li style={{ margin: '10px 0' }}>🎁 Exclusive resources for participants</li>
        </ul>
      </section>

      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <button 
          onClick={handleClick} 
          style={{ 
            backgroundColor: '#ff5733', 
            color: '#fff', 
            padding: '15px 30px', 
            fontSize: '1.5rem', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            transition: 'background-color 0.3s'
          }}
          onMouseOver={() => (document.body.style.backgroundColor = '#ff4d00')}
          onMouseOut={() => (document.body.style.backgroundColor = '#ff5733')}
        >
          Reserve Your Spot NOW!
        </button>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '30px', fontSize: '1rem', color: '#777' }}>
        <p>📅 Date: Next Friday | 🕒 Time: 2 PM - 5 PM</p>
        <p>✅ Join 100+ participants who have benefitted from our events!</p>
      </footer>
    </div>
  );
};

export default EventPage;