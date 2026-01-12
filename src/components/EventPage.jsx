import React from 'react';
import { useStats } from './useStats';
import { supabase } from './supabaseClient';

const EventPage = () => {
  const { stats } = useStats();

  const recordClick = async () => {
    const { error } = await supabase
      .from('clicks')
      .insert([{ event_id: 'event123' }]);
    if (error) console.error('Error recording click:', error);
  };

  return (
    <div className="event-page" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', margin: '20px 0' }}>Join Our Exciting Event!</h1>
      <p style={{ fontSize: '1.2em', margin: '10px 0', lineHeight: '1.5' }}>
        Don't miss out on the opportunity to learn and connect. Limited spots available!
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button 
          onClick={recordClick}
          style={{ 
            backgroundColor: '#FF5733', 
            color: '#ffffff', 
            fontSize: '1.5em', 
            padding: '15px 30px', 
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            margin: '0 10px'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#C70039'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FF5733'}
        >
          Reserve Your Spot Now!
        </button>
        <button 
          onClick={recordClick}
          style={{ 
            backgroundColor: '#008CBA', 
            color: '#ffffff', 
            fontSize: '1.5em', 
            padding: '15px 30px', 
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            margin: '0 10px'
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#005f7f'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#008CBA'}
        >
          Learn More About the Event
        </button>
      </div>
      <div style={{ fontSize: '1em', color: '#555', marginTop: '30px' }}>
        {stats ? `Join ${stats.signups} others who are excited to attend!` : 'Loading sign-up count...'}
      </div>
    </div>
  );
};

export default EventPage;