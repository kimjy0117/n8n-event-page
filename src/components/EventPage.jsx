import React from 'react';
import { useStats } from 'your-stats-hook';
import { supabase } from 'your-supabase-client';

const EventPage = () => {
  const stats = useStats();

  const recordClick = async () => {
    const { error } = await supabase.from('events').insert([{ event: 'Page Click' }]);
    if (error) console.error('Error logging click:', error);
  };

  return (
    <div className="event-page">
      <h1 className="event-title">Don’t Miss Out on Our Exclusive Event!</h1>
      <p className="event-description">
        Join us for an amazing experience filled with insights, networking, and more.
        Limited spots available! Reserve yours now.
      </p>
      <div className="event-stats">
        <span>{stats.views} Views</span>
        <span>{stats.clicks} Clicks</span>
      </div>
      <button 
        className="cta-button" 
        style={{ 
          backgroundColor: '#ff5733', 
          color: '#ffffff', 
          padding: '15px 30px', 
          fontSize: '1.2em', 
          borderRadius: '5px',
          marginTop: '20px'
        }} 
        onClick={() => {
          recordClick();
          // handle registration logic
        }}
      >
        Reserve Your Spot Now!
      </button>
      <p className="event-scarcity">
        Only a few spots left—act fast!
      </p>
      <style jsx>{`
        .event-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          max-width: 800px;
          margin: auto;
          font-family: 'Arial', sans-serif;
          text-align: center;
        }
        .event-title {
          font-size: 2.5em;
          margin-bottom: 10px;
        }
        .event-description {
          font-size: 1.2em;
          margin-bottom: 20px;
        }
        .event-stats {
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin-bottom: 20px;
        }
        .cta-button {
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .cta-button:hover {
          background-color: #c70039;
        }
        .event-scarcity {
          font-size: 1em;
          color: #d9534f;
          margin-top: 15px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default EventPage;