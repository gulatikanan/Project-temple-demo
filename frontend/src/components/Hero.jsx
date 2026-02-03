import React from 'react';

export default function Hero() {
    return (
        <header className="hero animate-fade-in" id="home">
            <div className="container">
                <h1>Uniting the Community through Service</h1>
                <p>
                    Join us in our mission to serve, celebrate, and grow together.
                    Discover events, volunteer opportunities, and find your inner peace.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#events" className="btn btn-primary">Browse Events</a>
                    <a href="#volunteer" className="btn btn-outline">Become a Volunteer</a>
                </div>
            </div>
        </header>
    );
}
