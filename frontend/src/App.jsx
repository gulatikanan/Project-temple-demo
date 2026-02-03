import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventList from './components/EventList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EventList />

      <section id="volunteer" style={{ padding: '4rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="container" style={{ backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius-lg)', padding: '4rem 2rem', textAlign: 'center', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to Serve?</h2>
              <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.2rem', opacity: 0.9 }}>
                Join our dedicated team of volunteers. Whether you have 2 hours or 2 days, your contribution makes a difference.
              </p>
              <button style={{
                backgroundColor: 'white',
                color: 'var(--color-primary)',
                padding: '1rem 2rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                Sign Up to Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
