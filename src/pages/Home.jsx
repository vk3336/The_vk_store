import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import KhakhraCard from '../components/KhakhraCard';
import BrandCard from '../components/BrandCard';
import { namkeenProducts, khakhraProducts, brandedProducts, offerCards, WHATSAPP_NUMBER } from '../data/products';
import './Home.css';

const banners = ['/images/banner1.png', '/images/banner2.png'];

function Banner() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % banners.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="banner-section">
      {banners.map((src, i) => (
        <img key={i} src={src} alt={`Banner ${i + 1}`} className={`banner-img${i === idx ? ' active' : ''}`} />
      ))}
      <div className="banner-dots">
        {banners.map((_, i) => <button key={i} className={`dot${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} />)}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-badge"><i className="fas fa-star" /> Premium Quality Snacks</div>
        <h1>Welcome to <span>The VK Store</span></h1>
        <p>Authentic namkeens, premium snacks & branded essentials — delivered to your doorstep. Just WhatsApp and order!</p>
        <div className="hero-btns">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20order`} target="_blank" rel="noopener" className="btn-primary">
            <i className="fab fa-whatsapp" /> Order on WhatsApp
          </a>
          <a href="#products" className="btn-outline" onClick={e => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <i className="fas fa-shopping-basket" /> Browse Products
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat"><span>500+</span><p>Products</p></div>
          <div className="stat"><span>1000+</span><p>Happy Customers</p></div>
          <div className="stat"><span>5%</span><p>Special Discount</p></div>
          <div className="stat"><span>9AM-9PM</span><p>Open Daily</p></div>
        </div>
      </div>
    </section>
  );
}

function FeaturesBar() {
  const features = [
    { icon: 'fa-truck', title: 'Home Delivery', desc: 'Fast delivery to your doorstep' },
    { icon: 'fa-shield-alt', title: 'Quality Assured', desc: 'Only the best quality products' },
    { icon: 'fa-tags', title: 'Best Prices', desc: 'Competitive prices guaranteed' },
    { icon: 'fa-headset', title: 'WhatsApp Support', desc: 'Instant support on WhatsApp' },
  ];
  return (
    <div className="features-bar">
      <div className="container features-grid">
        {features.map(f => (
          <div key={f.title} className="feature-item">
            <div className="feature-icon"><i className={`fas ${f.icon}`} /></div>
            <div><h4>{f.title}</h4><p>{f.desc}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Marquee() {
  const items = [...brandedProducts, ...brandedProducts];
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((b, i) => (
          <div key={i} className="marquee-item">
            <img src={b.image} alt={b.brand} onError={e => { e.target.src = '/images/logovk.png'; }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  const handleOrder = () => {
    const msg = encodeURIComponent(`🛒 Quick Order – The VK Store\n\nHi! I'd like to place an order.\n\nMy Name: \nAddress: \nMobile: \nOrder Details: `);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };
  const handleDiscount = () => {
    const msg = encodeURIComponent(`🎉 Claim 5% Discount – The VK Store\n\nHello! I'd like to claim my 5% Discount.\nMy order is above ₹1000 and the reason is:\n\nSelected Reason: _____\nMy Name: \nMobile: `);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };
  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Order <span>Now</span></h2>
          <p className="section-desc">We're here to serve you with the best products and service</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info-card">
            <h3><i className="fas fa-address-book" /> Contact Information</h3>
            <ul className="contact-items">
              <li><div className="ci-icon"><i className="fas fa-phone-alt" /></div><div><h4>Call Us</h4><a href="tel:+918866791095">+91 88667 91095</a></div></li>
              <li><div className="ci-icon"><i className="fab fa-whatsapp" /></div><div><h4>WhatsApp</h4><a href="https://wa.me/918866791095" target="_blank" rel="noopener">Chat Now</a></div></li>
              <li><div className="ci-icon"><i className="fas fa-map-marker-alt" /></div><div><h4>Location</h4><span>F-1, Sanskar App, Opp Shakti School, Satellite, Ahmedabad - 380015</span></div></li>
              <li><div className="ci-icon"><i className="far fa-clock" /></div><div><h4>Business Hours</h4><span>Monday - Sunday: 9:00 AM - 9:00 PM</span></div></li>
            </ul>
            <div className="social-row" style={{marginTop:'20px'}}>
              <a href="https://instagram.com/vivekkalal_30" target="_blank" rel="noopener" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="https://wa.me/918866791095" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
          <div className="quick-order-card">
            <div className="qo-icon"><i className="fas fa-shopping-cart" /></div>
            <h3>Quick Order</h3>
            <p>Place your order directly through WhatsApp for the fastest service</p>
            <div className="order-steps">
              <div className="step"><span>1</span><p>Send us a message on WhatsApp with your order details</p></div>
              <div className="step"><span>2</span><p>Our team will confirm your order and share payment details</p></div>
              <div className="step"><span>3</span><p>Get your order delivered to your doorstep</p></div>
            </div>
            <button className="btn-primary" style={{width:'100%',justifyContent:'center'}} onClick={handleOrder}>
              <i className="fas fa-shopping-cart" /> Start Order Now
            </button>
            <button className="btn-outline" style={{width:'100%',justifyContent:'center',marginTop:'10px'}} onClick={handleDiscount}>
              <i className="fas fa-percent" /> Claim 5% Discount
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const previewProducts = namkeenProducts.slice(0, 8);
  const handleDiscountClaim = () => {
    const msg = encodeURIComponent(`🎉 Claim Your Discount – The VK Store\n\nHello! I'd like to claim my 5% Discount at The VK Store.\nMy order is above ₹1000 and the reason is:\n• Birthday Celebration 🎂\n• Helping Others ❤️\n• Birds Feed 🐦\n• Special Occasion ✨\n\nSelected Reason: _____\nMy Name: \nMobile Number: `);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <main style={{ paddingTop: '76px' }}>
      <Banner />
      <HeroSection />

      {/* Premium Products */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Speciality</span>
            <h2 className="section-title">Premium <span>Products</span></h2>
            <p className="section-desc">Handpicked selection of premium quality namkeens & snacks</p>
          </div>
          <Carousel className="crsl--wide">
            {previewProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </Carousel>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/premium-products" className="btn-primary">
              <i className="fas fa-th-large" /> View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Khakhra */}
      <section className="section khakhra-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Gujarati Special</span>
            <h2 className="section-title">Premium <span>Khakhra</span></h2>
            <p className="section-desc">Authentic taste of traditional Gujarati khakhras</p>
          </div>
          <Carousel className="crsl--wide">
            {khakhraProducts.map(p => <KhakhraCard key={p.id} product={p} />)}
          </Carousel>
        </div>
      </section>

      {/* Branded */}
      <section className="section" id="branded">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Bulk & Bunch Packs</span>
            <h2 className="section-title">Branded <span>Products</span></h2>
            <p className="section-desc">Top brands in bulk/bunch at great prices</p>
          </div>
          <Carousel>
            {brandedProducts.map(p => <BrandCard key={p.id} product={p} />)}
          </Carousel>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/branded-products" className="btn-outline">
              <i className="fas fa-store" /> View All Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="section offers-section" id="offers">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Special Benefits</span>
            <h2 className="section-title">Exclusive <span>5% Discount</span></h2>
            <p className="section-desc">We believe in spreading happiness and kindness</p>
          </div>
          <Carousel>
            {offerCards.map(o => (
              <div key={o.title} className="offer-card">
                <div className="offer-icon"><i className={`fas ${o.icon}`} /></div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </Carousel>
          <div className="offer-cta">
            <p><i className="fas fa-heart" /> Our aim is not just selling products, but helping you spread happiness and kindness.</p>
            <button className="btn-primary" onClick={handleDiscountClaim}>
              <i className="fab fa-whatsapp" /> Claim Your Discount
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
      <FeaturesBar />
      <Marquee />
    </main>
  );
}
