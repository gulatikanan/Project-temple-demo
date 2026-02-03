import React from 'react';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: '3rem 0', marginTop: '4rem' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <div className="logo" style={{ color: 'white', marginBottom: '1rem' }}><span>🕉️</span> TempleHub</div>
                    <p style={{ maxWidth: '300px', opacity: 0.8 }}>
                        Dedicated to serving the community and fostering spiritual growth.
                    </p>
                </div>
                <div>
                    <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><a href="#home" style={{ opacity: 0.8 }}>Home</a></li>
                        <li><a href="#events" style={{ opacity: 0.8 }}>Events</a></li>
                        <li><a href="#donate" style={{ opacity: 0.8 }}>Donate</a></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Contact</h4>
                    <p style={{ opacity: 0.8 }}>123 Temple Road, Spirituality City</p>
                    <p style={{ opacity: 0.8 }}>contact@templehub.org</p>
                </div>
            </div>
            <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '2rem', paddingTop: '1rem', textAlign: 'center', fontSize: '0.9rem', opacity: 0.6 }}>
                &copy; {new Date().getFullYear()} TempleHub. All rights reserved.
            </div>
        </footer>
    );
}
