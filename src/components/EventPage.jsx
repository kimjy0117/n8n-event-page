import React from 'react';
import { useStats } from './useStats';
import { supabase } from './supabaseClient';

const EventPage = () => {
  const { stats, recordClick } = useStats();

  const handleButtonClick = async () => {
    await recordClick();
    // Additional logic for button click
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1 style={{ color: '#333', fontSize: '2.5em' }}>Join Our Amazing Event!</h1>
        <p style={{ color: '#666', fontSize: '1.2em' }}>Don't miss out on the opportunity to learn from industry leaders.</p>
      </header>
      
      <section style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
        <img src="event-image.jpg" alt="Event" style={{ width: '100%', borderRadius: '10px' }} />
      </section>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ color: '#F77B00' }}>Limited Spots Available!</h2>
        <p style={{ color: '#333', fontSize: '1.5em', fontWeight: 'bold' }}>Register now to secure your place!</p>
        <button 
          onClick={handleButtonClick} 
          style={{
            backgroundColor: '#FF5733', 
            color: '#fff', 
            padding: '15px 30px', 
            fontSize: '1.2em', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginTop: '20px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF5733'}
        >
          Reserve Your Spot Now!
        </button>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '50px', fontSize: '0.9em', color: '#666' }}>
        <p>Join hundreds of satisfied participants!</p>
        <p>Contact us at: support@event.com</p>
      </footer>
    </div>
  );
};

export default EventPage;