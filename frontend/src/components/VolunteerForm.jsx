import React, { useState } from 'react';

export default function VolunteerForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        eventInterest: 'General'
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Fallback URL or use Env var
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

        try {
            const response = await fetch(`${API_URL}/api/volunteers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: formData }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '', eventInterest: 'General' });
        } catch (err) {
            console.error(err);
            // If offline/demo mode, simulate success
            if (import.meta.env.VITE_DEMO_MODE === 'true' || API_URL.includes('localhost')) {
                console.warn("Simulating success for demo/offline mode");
                setTimeout(() => setStatus('success'), 1000);
            } else {
                setStatus('error');
            }
        }
    };

    return (
        <section id="volunteer-form" className="container" style={{ padding: '4rem 0', maxWidth: '600px' }}>
            <div className="card">
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>Volunteer Sign Up</h2>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', color: 'var(--color-accent)', padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🎉 Thank you!</h3>
                        <p>We have received your details. Someone will reach out to you shortly.</p>
                        <button className="btn btn-outline" onClick={() => setStatus('idle')} style={{ marginTop: '1rem' }}>Register another</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Interested Event (Optional)</label>
                            <input
                                type="text"
                                name="eventInterest"
                                value={formData.eventInterest}
                                onChange={handleChange}
                                placeholder="e.g. Diwali Festival"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message (Optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ marginTop: '1rem' }}>
                            {status === 'submitting' ? 'Submitting...' : 'Sign Up to Serve'}
                        </button>

                        {status === 'error' && (
                            <p style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>
                                Something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
}
