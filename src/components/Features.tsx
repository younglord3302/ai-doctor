const Features = () => {
    const features = [
        {
            icon: "⚡",
            title: "Instant Analysis",
            description: "Get immediate feedback on your symptoms using our advanced AI algorithms, available 24/7 without waiting rooms."
        },
        {
            icon: "🛡️",
            title: "Bank-Grade Security",
            description: "Your health data is encrypted with the highest standards. We prioritize your privacy and confidentiality above all else."
        },
        {
            icon: "🩺",
            title: "Expert Knowledge",
            description: "Trained on millions of medical cases and constantly updated with the latest research to provide accurate insights."
        }
    ];

    return (
        <section style={{ padding: '6rem 0', background: 'rgba(15,23,42,0.3)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="animate-fade-in" style={{ marginBottom: '1rem' }}>Why Choose AI Medical?</h2>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Experience the future of healthcare with our cutting-edge technology designed to put your health first.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((feature, idx) => (
                        <div key={idx} className="glass-card animate-fade-in" style={{
                            animationDelay: `${idx * 0.1}s`,
                            textAlign: 'center',
                            padding: '2.5rem',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                marginBottom: '1.5rem',
                                background: 'rgba(14,165,233,0.1)',
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-text-secondary)' }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
