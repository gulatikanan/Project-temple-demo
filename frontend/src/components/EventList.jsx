import React, { useState, useEffect } from 'react';
import { EVENTS } from '../data/mockData';

export default function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Simulate API fetch
        setEvents(EVENTS);
    }, []);

    return (
        <section id="events" style={{ padding: '4rem 0' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Gatherings</span>
                    <h2>Upcoming Events</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                        Join our community celebrations and service activities.
                    </p>
                </div>

                <div className="grid grid-cols-3">
                    {events.map(event => (
                        <div key={event.id} className="card">
                            <div style={{
                                height: '200px',
                                backgroundColor: '#eee',
                                borderRadius: 'var(--radius-sm)',
                                marginBottom: '1rem',
                                backgroundImage: `url(${event.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }} />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--color-accent)', fontWeight: '600' }}>
                                <span>{new Date(event.date).toLocaleDateString()}</span>
                                <span>{new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{event.title}</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {event.description}
                            </p>

                            <div style={{ marginTop: 'auto' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                                    <span>📍 {event.location}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: '500', color: event.volunteersSignedUp < event.volunteersNeeded ? 'var(--color-primary)' : 'green' }}>
                                        {event.volunteersNeeded - event.volunteersSignedUp} volunteer spots left
                                    </span>
                                    <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                        Volunteer
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
