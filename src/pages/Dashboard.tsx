import Appointments from '../components/Appointments';

const Dashboard = () => {
    return (
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
            <h2 className="animate-fade-in" style={{ marginBottom: '2rem' }}>Patient Dashboard</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
            }}>
                {/* Metric Cards */}
                {[
                    { label: 'Health Score', value: '92/100', color: 'var(--color-success)', icon: '❤️' },
                    { label: 'Upcoming Appts', value: '2', color: 'var(--color-brand-primary)', icon: '📅' },
                    { label: 'Active Meds', value: '3', color: 'var(--color-accent)', icon: '💊' },
                ].map((item, idx) => (
                    <div key={idx} className={`glass-card animate-fade-in`} style={{ animationDelay: `${idx * 0.1}s`, display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem'
                        }}>
                            {item.icon}
                        </div>
                        <div>
                            <div style={{ color: 'var(--color-text-secondary)', marginBottom: '0.25rem' }}>{item.label}</div>
                            <div style={{ fontSize: '2rem', fontWeight: 700, color: item.color }}>{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
                {/* Left Column: History & Appointments */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <Appointments />

                    {/* Recent Activity */}
                    <div className="glass-card animate-fade-in animate-delay-3">
                        <h3 style={{ marginBottom: '1.5rem' }}>Recent Activity</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { date: 'Today, 9:42 AM', action: 'Symptom Check: Headache', status: 'Completed' },
                                { date: 'Yesterday, 2:15 PM', action: 'Vital Update: Heart Rate', status: 'Normal' },
                                { date: 'Dec 15, 10:00 AM', action: 'Prescription Renewal', status: 'Processing' },
                            ].map((activity, i) => (
                                <div key={i} style={{
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: 'var(--radius-sm)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <div style={{ fontWeight: 500 }}>{activity.action}</div>
                                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>{activity.date}</div>
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: '4px',
                                        background: 'rgba(255,255,255,0.1)'
                                    }}>
                                        {activity.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Vitals Graph */}
                <div className="glass-card animate-fade-in animate-delay-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>Heart Rate Trends</h3>
                    <div style={{
                        width: '100%',
                        height: '200px',
                        background: 'linear-gradient(180deg, rgba(14,165,233,0.1) 0%, rgba(0,0,0,0) 100%)',
                        borderBottom: '2px solid var(--color-brand-primary)',
                        position: 'relative'
                    }}>
                        {/* Simulated graph line using SVG */}
                        <svg width="100%" height="100%" preserveAspectRatio="none">
                            <path d="M0,150 Q100,100 200,140 T400,80 T600,120 V200 H0 Z" fill="rgba(14,165,233,0.1)" stroke="none" />
                            <path d="M0,150 Q100,100 200,140 T400,80 T600,120" fill="none" stroke="var(--color-brand-primary)" strokeWidth="3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
