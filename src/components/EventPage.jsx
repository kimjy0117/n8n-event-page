import { useEffect } from 'react';
import { useStats } from '../hooks/useStats';

const EventPage = () => {
    const { recordClick } = useStats();

    useEffect(() => {
        // Some effect here
    }, []);

    return (
        <div className="event-page-container">
            <header className="event-header">
                <h1 className="event-title">Join Our Exclusive Event!</h1>
                <p className="event-date">Date: November 15, 2023</p>
            </header>
            <main className="event-details">
                <p className="event-description">Don't miss out on the chance to enhance your skills and network with industry leaders.</p>
                <button 
                    className="cta-button"
                    style={{
                        backgroundColor: '#FF5733', // High-contrast color
                        color: '#FFFFFF',
                        padding: '15px 30px',
                        fontSize: '18px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        marginTop: '20px'
                    }}
                    onClick={() => {
                        recordClick(); 
                        // handle click event
                    }}
                >
                    Sign Up Now! Limited Spots Available!
                </button>
            </main>
            <footer className="event-footer">
                <p className="social-proof">Over 1,000 attendees last year!</p>
            </footer>
        </div>
    );
};

export default EventPage;