import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '/', icon: 'fa-home' },
  { label: 'Products', href: '/#products', icon: 'fa-shopping-basket' },
  { label: 'Branded', href: '/#branded', icon: 'fa-tags' },
  { label: 'Offers', href: '/#offers', icon: 'fa-gift' },
  { label: 'Contact', href: '/#contact', icon: 'fa-headset' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const handleNavClick = (href) => {
    setOpen(false);
    if (href.includes('#')) {
      const id = href.split('#')[1];
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner container">
          <Link to="/" className="nav-logo">
            <img src="/images/the_vk_logo.png" alt="The VK Store" />
            <div>
              <span className="logo-name">The VK Store</span>
              <span className="logo-tag">Just WhatsApp & Order</span>
            </div>
          </Link>

          <nav className={`nav-menu${open ? ' open' : ''}`}>
            <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
              <i className="fas fa-times" />
            </button>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="nav-link" onClick={() => handleNavClick(l.href)}>
                <i className={`fas ${l.icon}`} />
                <span>{l.label}</span>
              </a>
            ))}
            <Link to="/branded-products" className="nav-link" onClick={() => setOpen(false)}>
              <i className="fas fa-store" /><span>All Brands</span>
            </Link>
            <Link to="/premium-products" className="nav-link" onClick={() => setOpen(false)}>
              <i className="fas fa-star" /><span>All Products</span>
            </Link>
          </nav>

          <a
            href="https://wa.me/918866791095?text=Please%20Select%20an%20item"
            target="_blank" rel="noopener noreferrer"
            className="nav-wa-btn"
          >
            <i className="fab fa-whatsapp" />
            <span>Order Now</span>
          </a>

          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </header>
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
