import React, { useState, useEffect } from 'react';
import { EVENTS } from '../data/mockData';

export default function EventList() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Fetch from Strapi API
                const response = await fetch('http://localhost:1337/api/events');

                if (!response.ok) {
                    throw new Error('Failed to fetch from API');
                }

                const data = await response.json();

                // Strapi v5/v4 often nests data. 
                // Defensive coding: Check if data.data exists and is an array.
                const rawEvents = Array.isArray(data.data) ? data.data : [];

                const apiEvents = rawEvents.map(event => ({
                    id: event.id,
                    // Handle both v4 (attributes) and v5 (flat) structures for robustness
                    title: event.title || event.attributes?.title,
                    description: event.description || event.attributes?.description,
                    date: event.date || event.attributes?.date,
                    location: event.location || event.attributes?.location,
                    image: (event.imageUrl || event.attributes?.imageUrl) || "https://images.unsplash.com/photo-1604514337023-eb303cc56b3e?auto=format&fit=crop&q=80&w=800",
                    volunteersNeeded: event.volunteersNeeded || event.attributes?.volunteersNeeded,
                    volunteersSignedUp: event.volunteersSignedUp || event.attributes?.volunteersSignedUp
                }));

                setEvents(apiEvents);
            } catch (err) {
                console.warn("Strapi API not connected or failed, falling back to Mock Data.", err);
                setEvents(EVENTS);
                setError("Using offline data");
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) {
        return (
            <section id="events" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <p>Loading events...</p>
            </section>
        );
    }

    return (
        <section id="events" style={{ padding: '4rem 0' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Gatherings</span>
                    <h2>Upcoming Events</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                        Join our community celebrations and service activities.
                    </p>
                    {error && <small style={{ color: 'orange', display: 'block', marginTop: '0.5rem' }}>Note: Backend not connected. Displaying demo data.</small>}
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
                                <span>{new Date(event.date || Date.now()).toLocaleDateString()}</span>
                                <span>{new Date(event.date || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
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
                                    <span style={{ fontSize: '0.8rem', fontWeight: '500', color: (event.volunteersSignedUp || 0) < (event.volunteersNeeded || 0) ? 'var(--color-primary)' : 'green' }}>
                                        {(event.volunteersNeeded || 0) - (event.volunteersSignedUp || 0)} volunteer spots left
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
