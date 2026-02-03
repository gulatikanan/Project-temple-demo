import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo">
                    <span>🕉️</span> TempleHub
                </div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#events">Events</a>
                    <a href="#volunteer">Volunteer</a>
                    <a href="#donate" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Donate</a>
                </div>
            </div>
        </nav>
    );
}
