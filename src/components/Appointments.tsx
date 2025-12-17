const Appointments = () => {
    return (
        <div className="glass-card animate-fade-in animate-delay-2" style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3>Appointments</h3>
                <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                    + New
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                    { doctor: 'Dr. Sarah Wilson', type: 'General Checkup', date: 'Dec 20, 2024', time: '10:00 AM', status: 'Confirmed' },
                    { doctor: 'Dr. James Chen', type: 'Cardiology', date: 'Dec 22, 2024', time: '2:30 PM', status: 'Pending' },
                ].map((apt, i) => (
                    <div key={i} style={{
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: i === 0 ? '3px solid var(--color-success)' : '3px solid var(--color-brand-primary)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <div>
                            <div style={{ fontWeight: 600 }}>{apt.doctor}</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{apt.type}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontWeight: 500 }}>{apt.date}</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{apt.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appointments;
