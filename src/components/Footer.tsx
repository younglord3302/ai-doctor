import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid rgba(255,255,255,0.05)',
            padding: '4rem 0 2rem 0',
            background: 'rgba(15,23,42,0.8)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem',
                    marginBottom: '4rem'
                }}>
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.5rem',
                            fontSize: '1.5rem',
                            fontWeight: 700
                        }}>
                            <span style={{ color: 'var(--color-brand-primary)' }}>✦</span> AI Medical
                        </div>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                            Revolutionizing healthcare access with artificial intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Product</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link to="/" style={{ color: 'var(--color-text-secondary)' }}>Home</Link>
                            <Link to="/chat" style={{ color: 'var(--color-text-secondary)' }}>AI Doctor</Link>
                            <Link to="/dashboard" style={{ color: 'var(--color-text-secondary)' }}>Dashboard</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <span style={{ color: 'var(--color-text-secondary)', cursor: 'pointer' }}>About Us</span>
                            <span style={{ color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Privacy Policy</span>
                            <span style={{ color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Terms of Service</span>
                        </div>
                    </div>
                </div>

                <div style={{
                    textAlign: 'center',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.875rem'
                }}>
                    © {new Date().getFullYear()} AI Medical. All rights reserved. Simulated Application.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
