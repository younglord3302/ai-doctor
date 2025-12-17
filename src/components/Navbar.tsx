import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            backgroundColor: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '4rem'
            }}>
                <Link to="/" style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-text-primary)'
                }}>
                    <span style={{
                        color: 'var(--color-brand-primary)',
                        fontSize: '1.75rem'
                    }}>✦</span>
                    AI Medical
                </Link>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link to="/" style={{
                        color: isActive('/') ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
                        fontWeight: isActive('/') ? 600 : 400
                    }}>Home</Link>
                    <Link to="/chat" style={{
                        color: isActive('/chat') ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
                        fontWeight: isActive('/chat') ? 600 : 400
                    }}>AI Doctor</Link>
                    <Link to="/dashboard" style={{
                        color: isActive('/dashboard') ? 'var(--color-brand-primary)' : 'var(--color-text-secondary)',
                        fontWeight: isActive('/dashboard') ? 600 : 400
                    }}>Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
