import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventList from './components/EventList';
import Footer from './components/Footer';
import VolunteerForm from './components/VolunteerForm';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EventList />

      <section id="volunteer" style={{ padding: '4rem 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ backgroundColor: 'var(--color-primary)', borderRadius: 'var(--radius-lg)', padding: '3rem 2rem', textAlign: 'center', color: 'white', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Ready to Serve?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 1rem auto', fontSize: '1.2rem', opacity: 0.9 }}>
              Join our dedicated team of volunteers. Whether you have 2 hours or 2 days, your contribution makes a difference.
            </p>
          </div>

          <VolunteerForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
