import { useEffect } from 'react';
import { useStats } from './useStats';
import { supabase } from './supabaseClient';

const EventPage = () => {
  const { stats } = useStats();

  const recordClick = async () => {
    // Record click to Supabase or any other analytics
    await supabase
      .from('clicks')
      .insert([{ event_id: stats.currentEvent.id }]);
  };

  return (
    <div className="event-page">
      <header className="event-header" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f7f9fc' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>{stats.currentEvent.title}</h1>
        <p style={{ fontSize: '1.2em', color: '#555' }}>{stats.currentEvent.date}</p>
      </header>
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <section className="event-details" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '15px' }}>Event Description</h2>
          <p>{stats.currentEvent.description}</p>
        </section>
        <section className="call-to-action" style={{ textAlign: 'center', margin: '30px 0' }}>
          <h3 style={{ fontSize: '1.8em', color: '#333' }}>Don't miss out!</h3>
          <p style={{ margin: '10px 0', fontSize: '1.2em', color: '#777' }}>Limited spots available!</p>
          <button 
            onClick={() => { recordClick(); }} 
            style={{ 
              backgroundColor: '#ff6f61', 
              color: '#fff', 
              padding: '15px 30px', 
              fontSize: '1.5em', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)' 
            }}>
            Reserve Your Spot Now!
          </button>
        </section>
      </main>
      <footer className="event-footer" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f7f9fc' }}>
        <small style={{ color: '#aaa' }}>© {new Date().getFullYear()} Event Company. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default EventPage;