import React from 'react';
import { useStats } from 'your-stats-hook-path';
import { supabase } from 'your-supabase-client-path';

const EventPage = () => {
  const { stats, recordClick } = useStats();

  const handleButtonClick = () => {
    recordClick();
    // Define your click handling logic here
  };

  return (
    <div className="event-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Join Our Exclusive Event!</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
        Don’t miss out on this opportunity to enhance your skills and network with industry leaders!
      </p>
      <button 
        onClick={handleButtonClick} 
        style={{ 
          backgroundColor: '#FF5733', 
          color: '#FFFFFF', 
          padding: '15px 30px', 
          fontSize: '1.2em', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          margin: '15px 0'
        }}
      >
        Reserve Your Spot Now!
      </button>
      <p style={{ fontSize: '0.9em', color: '#777', marginTop: '20px' }}>
        Limited Seats Available - Register Today!
      </p>
      <div className="stats">
        <h2 style={{ fontSize: '2em' }}>{stats.attendees} Attendees Enrolled!</h2>
      </div>
    </div>
  );
};

export default EventPage;