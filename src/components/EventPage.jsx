import React from 'react';
import { useStats } from './useStats';
import { supabase } from './supabaseClient';

const EventPage = () => {
    const { stats } = useStats();

    const recordClick = async () => {
        // Logic to record the click event
        await supabase
            .from('clicks')
            .insert([{ event_id: 1 }]);
    };

    return (
        <div className="event-page" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Join Our Exclusive Event!</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Don’t miss out on this unique opportunity to connect with industry leaders and gain insights
                that will elevate your skills.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <button 
                    onClick={() => { recordClick(); }}
                    style={{
                        backgroundColor: '#ff6f61',
                        color: '#fff',
                        padding: '1rem 2rem',
                        fontSize: '1.5rem',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff3d3d'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff6f61'}
                >
                    Reserve Your Spot Now!
                </button>
            </div>
            <p style={{ fontSize: '1.1rem', textAlign: 'center', marginTop: '2rem' }}>
                <strong>{stats.signups} people already signed up!</strong><br />
                Seats are limited – act fast!
            </p>
        </div>
    );
};

export default EventPage;