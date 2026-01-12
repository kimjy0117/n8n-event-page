import React from 'react';
import { useStats } from './useStats';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('your_supabase_url', 'your_supabase_key');

const EventPage = () => {
  const { stats, recordClick } = useStats();

  const handleButtonClick = async () => {
    await recordClick();
    // Additional logic for clicking the button
  };

  return (
    <div className="event-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.5em', margin: '20px 0' }}>Join Us for an Exclusive Event!</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>
        Don't miss out on this unique opportunity to learn and grow. Limited seats available!
      </p>
      <button 
        onClick={handleButtonClick}
        style={{ 
          backgroundColor: '#FF5733', 
          color: '#FFFFFF', 
          fontSize: '1.5em', 
          padding: '15px 30px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          display: 'block',
          margin: '0 auto',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={() => { 
          this.style.backgroundColor = '#C70039'; 
        }}
        onMouseOut={() => { 
          this.style.backgroundColor = '#FF5733'; 
        }}
      >
        Secure Your Spot Now!
      </button>
      <div className="social-proof" style={{ marginTop: '30px', textAlign: 'center' }}>
        <p style={{ fontSize: '1em', color: '#555' }}>
          Over 1,200 participants have signed up!
        </p>
      </div>
    </div>
  );
};

export default EventPage;