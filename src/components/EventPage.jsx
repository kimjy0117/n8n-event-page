import { useEffect } from 'react';
import { useStats } from '../hooks/useStats';

const EventPage = () => {
    const { recordClick } = useStats();

    useEffect(() => {
        // Some effect here
    }, []);

    return (
        <div className="event-page-container" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f4f4f4' }}>
            <header className="event-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 className="event-title" style={{ fontSize: '3em', color: '#2C3E50', margin: '10px 0' }}>🚀 Transform Your Skills at Our Exclusive Event!</h1>
                <p className="event-date" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#34495E' }}>📅 Date: November 15, 2023</p>
            </header>
            <main className="event-details" style={{ padding: '20px', textAlign: 'center', flexGrow: 1 }}>
                <p className="event-description" style={{ fontSize: '1.4em', color: '#7f8c8d', marginBottom: '40px' }}>
                    Don't miss your chance to elevate your skills and connect with industry leaders. 
                    <br />
                    <strong style={{ color: '#e74c3c' }}>Hurry, only a few spots left!</strong>
                </p>
                <button 
                    className="cta-button"
                    style={{
                        backgroundColor: '#ff5733', // More compelling color
                        color: '#FFFFFF',
                        padding: '25px 60px', // Increased button size
                        fontSize: '30px', // Larger font size
                        borderRadius: '40px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.5)',
                        marginTop: '20px',
                        transition: 'background-color 0.3s, transform 0.3s',
                        display: 'inline-block',
                        fontWeight: 'bold',
                        position: 'relative',
                        zIndex: '1',
                    }}
                    onClick={() => {
                        recordClick(); 
                        // handle click event
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#c0392b'; // darker on hover
                        e.currentTarget.style.transform = 'scale(1.05)'; // scale effect on hover
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#ff5733'; // original color
                        e.currentTarget.style.transform = 'scale(1)'; // reset scale
                    }}
                >
                    🔥 Grab Your Spot Now! Limited Availability!
                </button>
            </main>
            <footer className="event-footer" style={{ textAlign: 'center', marginTop: '30px', fontSize: '1em', color: '#999' }}>
                <p className="social-proof" style={{ fontSize: '1.3em', color: '#27ae60', marginTop: '20px' }}>Join over 1,000 satisfied attendees from last year!</p>
            </footer>
        </div>
    );
};

export default EventPage;