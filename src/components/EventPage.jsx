import { useEffect } from 'react';
import { useStats } from '../hooks/useStats';

const EventPage = () => {
    const { recordClick } = useStats();

    useEffect(() => {
        // Some effect here
    }, []);

    return (
        <div className="event-page-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <header className="event-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h1 className="event-title" style={{ fontSize: '2.5em', color: '#333' }}>Join Our Exclusive Event!</h1>
                <p className="event-date" style={{ fontSize: '1.2em', color: '#555' }}>Date: November 15, 2023</p>
            </header>
            <main className="event-details" style={{ padding: '20px', textAlign: 'center' }}>
                <p className="event-description" style={{ fontSize: '1.1em', color: '#666', marginBottom: '30px' }}>
                    Don't miss out on the chance to enhance your skills and network with industry leaders.
                </p>
                <button 
                    className="cta-button"
                    style={{
                        backgroundColor: '#28a745', // High-contrast and action-oriented color
                        color: '#FFFFFF',
                        padding: '20px 40px', // Increased button size
                        fontSize: '20px', // Larger font size
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                        marginTop: '20px',
                        transition: 'background-color 0.3s, transform 0.3s',
                    }}
                    onClick={() => {
                        recordClick(); 
                        // handle click event
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#218838'} // darker on hover
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#28a745'} // original color
                >
                    🎟️ Sign Up Now! Only a Few Spots Left!
                </button>
            </main>
            <footer className="event-footer" style={{ textAlign: 'center', marginTop: '40px', fontSize: '1em', color: '#999' }}>
                <p className="social-proof">Join over 1,000 attendees from last year!</p>
            </footer>
        </div>
    );
};

export default EventPage;