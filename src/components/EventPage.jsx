import { useEffect } from 'react';
import { useStats } from './useStats';
import { supabase } from './supabaseClient';

const EventPage = () => {
  const { clicks, recordClick } = useStats();

  useEffect(() => {
    const handleClick = () => {
      recordClick();
      // Additional tracking logic here
    };

    const button = document.getElementById('cta-button');
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, [recordClick]);

  return (
    <div style={{ padding: '20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5em', margin: '20px 0' }}>Join Our Exclusive Event!</h1>
      <p style={{ fontSize: '1.2em', lineHeight: '1.5', margin: '20px 0' }}>
        Don't miss out on this opportunity to connect with industry leaders and gain insights into the latest trends!
      </p>
      <button
        id="cta-button"
        style={{
          backgroundColor: '#ff5722',
          color: 'white',
          fontSize: '1.5em',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => { e.target.style.backgroundColor = '#e64a19'; }}
        onMouseOut={(e) => { e.target.style.backgroundColor = '#ff5722'; }}
      >
        Reserve Your Spot Now!
      </button>
      <p style={{ margin: '20px 0', fontSize: '1em', color: '#555' }}>
        Limited spots available! Act fast!
      </p>
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '2em' }}>See What Others Are Saying:</h2>
        <p style={{ fontStyle: 'italic', margin: '15px 0' }}>“This event changed my career!”</p>
        <p style={{ fontStyle: 'italic', margin: '15px 0' }}>“A must-attend for anyone in the industry!”</p>
      </div>
    </div>
  );
};

export default EventPage;