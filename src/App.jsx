import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PremiumProducts from './pages/PremiumProducts';
import BrandedProducts from './pages/BrandedProducts';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button className={`back-top${visible ? ' visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
      <i className="fas fa-arrow-up" />
    </button>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium-products" element={<PremiumProducts />} />
        <Route path="/branded-products" element={<BrandedProducts />} />
      </Routes>
      <Footer />
      <a href="https://wa.me/918866791095" className="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <i className="fab fa-whatsapp" />
      </a>
      <BackToTop />
    </>
  );
}
