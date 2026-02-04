import React, { useState, useEffect } from 'react';
import { EVENTS } from '../data/mockData';

export default function EventList() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorDetails, setErrorDetails] = useState(null);

    // Debug info
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                console.log(`Fetching events from: ${apiUrl}/api/events`);

                const response = await fetch(`${apiUrl}/api/events`);

                if (!response.ok) {
                    throw new Error(`API Error: ${response.status} ${response.statusText}`);
                }

                const json = await response.json();
                console.log("Raw Strapi Response:", json);

                // Robust Parsing for Strapi v4/v5
                let rawData = [];
                if (Array.isArray(json.data)) {
                    rawData = json.data;
                } else if (json.data && Array.isArray(json.data.data)) {
                    // Sometimes it is double nested
                    rawData = json.data.data;
                } else if (Array.isArray(json)) {
                    rawData = json;
                }

                if (rawData.length === 0) {
                    console.warn("API returned 0 events (or parsing failed). Data:", json);
                }

                const apiEvents = rawData.map(item => {
                    // Handle "attributes" wrapper (Strapi v4 default) vs Flat (Strapi v5 simplified)
                    const props = item.attributes || item;
                    const id = item.id;

                    return {
                        id: id,
                        title: props.title || "Untitled Event",
                        description: props.description || "No description provided.",
                        date: props.date,
                        location: props.location || "TBD",
                        // Handle Images: Strapi returns relative URLs like '/uploads/foo.jpg'
                        image: props.imageUrl || "https://images.unsplash.com/photo-1604514337023-eb303cc56b3e?auto=format&fit=crop&q=80&w=800",
                        volunteersNeeded: props.volunteersNeeded || 0,
                        volunteersSignedUp: props.volunteersSignedUp || 0
                    };
                });

                if (apiEvents.length > 0) {
                    setEvents(apiEvents);
                    setErrorDetails(null); // Clear errors if successful
                } else {
                    // If we got 200 OK but 0 events, consider showing mock data if specifically wanted, 
                    // but for now let's show an empty state or mock fallback to keep UI alive.
                    setEvents(EVENTS);
                    setErrorDetails("API connected but returned 0 events. Showing Demo Data.");
                }

            } catch (err) {
                console.error("Fetch failed:", err);
                setEvents(EVENTS);
                setErrorDetails(`${err.message} (Target: ${apiUrl})`);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [apiUrl]);

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

                    {/* Debug / Error Message Display */}
                    {errorDetails && (
                        <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#fff3cd', color: '#856404', borderRadius: '4px', fontSize: '0.85rem' }}>
                            <strong>Status:</strong> {errorDetails}
                        </div>
                    )}
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
                                <span>{event.date ? new Date(event.date).toLocaleDateString() : 'Date TBD'}</span>
                                <span>{event.date ? new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</span>
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
