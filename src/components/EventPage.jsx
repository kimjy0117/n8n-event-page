import React from 'react';
import { useStats } from './useStats';
import { supabase } from './supabaseClient';

const EventPage = () => {
  const { stats } = useStats();

  const recordClick = async () => {
    const { data, error } = await supabase
      .from('clicks')
      .insert([{ event_id: '123', timestamp: new Date() }]);

    if (error) {
      console.error('Error recording click:', error);
    }
  };

  return (
    <div className="event-page" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Join Our Exclusive Event!</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
        Don't miss out on this unique opportunity to connect and learn. Spots are limited!
      </p>
      <button
        onClick={() => {
          recordClick();
          window.location.href = '/register';
        }}
        style={{
          backgroundColor: '#FF5733',
          color: '#FFFFFF',
          fontSize: '1.5em',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s',
          marginTop: '10px',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#C70039')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#FF5733')}
      >
        Reserve Your Spot Now!
      </button>
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '2em' }}>Why Attend?</h2>
        <ul style={{ listStyle: 'none', padding: '0', textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
          <li style={{ margin: '10px 0' }}>✅ Learn from industry experts</li>
          <li style={{ margin: '10px 0' }}>✅ Network with like-minded individuals</li>
          <li style={{ margin: '10px 0' }}>✅ Unlock exclusive resources</li>
        </ul>
        <p style={{ fontWeight: 'bold', fontSize: '0.9em' }}>Limited spots available! Act fast!</p>
      </div>
      <footer style={{ marginTop: '50px', fontSize: '0.8em', color: '#777' }}>
        <p>{stats?.clicks} people have clicked to learn more!</p>
      </footer>
    </div>
  );
};

export default EventPage;