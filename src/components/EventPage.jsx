import { useEffect } from 'react';
import { useStats } from '../hooks/useStats';

const EventPage = () => {
    const { recordClick } = useStats();

    useEffect(() => {
        // Some effect here
    }, []);

    return (
        <div className="event-page-container" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <header className="event-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 className="event-title" style={{ fontSize: '2.8em', color: '#2C3E50' }}>🚀 Transform Your Skills at Our Exclusive Event!</h1>
                <p className="event-date" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#34495E' }}>📅 Date: November 15, 2023</p>
            </header>
            <main className="event-details" style={{ padding: '20px', textAlign: 'center' }}>
                <p className="event-description" style={{ fontSize: '1.3em', color: '#7f8c8d', marginBottom: '40px' }}>
                    Don't miss this opportunity to enhance your skills and network with industry leaders. 
                    <br />
                    <strong>Only a few spots left!</strong>
                </p>
                <button 
                    className="cta-button"
                    style={{
                        backgroundColor: '#e74c3c', // High-contrast and action-oriented color
                        color: '#FFFFFF',
                        padding: '25px 50px', // Increased button size
                        fontSize: '22px', // Larger font size
                        borderRadius: '12px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
                        marginTop: '30px',
                        transition: 'background-color 0.3s, transform 0.3s',
                    }}
                    onClick={() => {
                        recordClick(); 
                        // handle click event
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c0392b'} // darker on hover
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e74c3c'} // original color
                >
                    🔥 Claim Your Spot Now! Limited Availability!
                </button>
            </main>
            <footer className="event-footer" style={{ textAlign: 'center', marginTop: '50px', fontSize: '1em', color: '#999' }}>
                <p className="social-proof" style={{ fontSize: '1.2em', color: '#27ae60' }}>Join over 1,000 satisfied attendees from last year!</p>
            </footer>
        </div>
    );
};

export default EventPage;