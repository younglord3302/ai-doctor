import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '6rem 0'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, rgba(15,23,42,0) 70%)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="animate-fade-in">
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            borderRadius: '999px',
                            backgroundColor: 'rgba(14,165,233,0.1)',
                            color: 'var(--color-brand-primary)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(14,165,233,0.2)'
                        }}>
                            ✨ The Future of Healthcare is Here
                        </span>
                    </div>

                    <h1 className="animate-fade-in animate-delay-1" style={{ marginBottom: '1.5rem' }}>
                        Advanced AI Diagnostics <br />
                        <span style={{
                            background: 'linear-gradient(to right, #0ea5e9, #14b8a6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>at Your Fingertips</span>
                    </h1>

                    <p className="animate-fade-in animate-delay-2" style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-secondary)',
                        marginBottom: '3rem',
                        lineHeight: 1.6
                    }}>
                        Experience the next generation of medical assistance. Instant symptom analysis, real-time health monitoring, and personalized care recommendations powered by advanced artificial intelligence.
                    </p>

                    <div className="animate-fade-in animate-delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/chat" className="btn btn-primary">
                            Start Diagnosis
                        </Link>
                        <Link to="/dashboard" className="btn btn-outline">
                            View Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
