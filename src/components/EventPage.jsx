import React from 'react';
import { useStats } from './useStats';
import { supabase } from './supabaseClient';

const EventPage = () => {
  const { clicks } = useStats();

  const recordClick = async () => {
    const { error } = await supabase
      .from('events')
      .insert([{ event: 'button_click' }]);
    if (error) console.error(error);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.5em', margin: '20px 0' }}>Join Our Exclusive Event!</h1>
      <p style={{ fontSize: '1.2em', color: '#555', margin: '20px 0' }}>
        Don't miss out on invaluable insights and networking opportunities. Limited seats available!
      </p>
      <button
        onClick={() => {
          recordClick();
          window.location.href = '/register';
        }}
        style={{
          backgroundColor: '#ff5733',
          color: '#fff',
          fontSize: '1.5em',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
          transition: 'background-color 0.3s',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c70039'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff5733'}
      >
        Reserve Your Spot Now!
      </button>
      <div style={{ marginTop: '40px', fontSize: '0.9em', color: '#777' }}>
        <p>{clicks} people have registered for this event!</p>
      </div>
    </div>
  );
};

export default EventPage;