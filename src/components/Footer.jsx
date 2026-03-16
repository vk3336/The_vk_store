import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo"><i className="fas fa-store" /> The VK Store</div>
            <p>Your trusted partner for premium quality snacks, groceries, and daily essentials at competitive prices.</p>
            <div className="payment-row">
              <span>We Accept:</span>
              <i className="fab fa-cc-visa" title="Visa" />
              <i className="fab fa-cc-mastercard" title="Mastercard" />
              <i className="fas fa-money-bill-wave" title="Cash" />
              <i className="fas fa-mobile-alt" title="UPI" />
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#home"><i className="fas fa-chevron-right" /> Home</a></li>
              <li><a href="/#products"><i className="fas fa-chevron-right" /> Our Products</a></li>
              <li><a href="/#branded"><i className="fas fa-chevron-right" /> Branded Products</a></li>
              <li><a href="/#offers"><i className="fas fa-chevron-right" /> Special Offers</a></li>
              <li><a href="/#contact"><i className="fas fa-chevron-right" /> Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Products</h4>
            <ul>
              <li><a href="#"><i className="fas fa-chevron-right" /> Namkeens & Snacks</a></li>
              <li><a href="#"><i className="fas fa-chevron-right" /> Pickles & Papads</a></li>
              <li><a href="#"><i className="fas fa-chevron-right" /> Kitchen Masalas</a></li>
              <li><a href="#"><i className="fas fa-chevron-right" /> Biscuits & Bakery</a></li>
              <li><a href="#"><i className="fas fa-chevron-right" /> Personal Care</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li><i className="fas fa-map-marker-alt" /><span>F-1, Sanskar App, Opp Shakti School, Satellite, Ahmedabad - 380015</span></li>
              <li><i className="fas fa-phone-alt" /><a href="tel:+918866791095">+91 88667 91095</a></li>
              <li><i className="fas fa-envelope" /><a href="mailto:vivekkalal4690@gmail.com">vivekkalal4690@gmail.com</a></li>
              <li><i className="fab fa-whatsapp" /><a href="https://wa.me/918866791095" target="_blank" rel="noopener">Chat on WhatsApp</a></li>
            </ul>
            <div className="social-row">
              <a href="https://instagram.com/vivekkalal_30" target="_blank" rel="noopener" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="https://wa.me/918866791095" target="_blank" rel="noopener" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>&copy; {new Date().getFullYear()} The VK Store. All Rights Reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
