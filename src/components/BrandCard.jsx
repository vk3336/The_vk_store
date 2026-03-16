import { WHATSAPP_NUMBER } from '../data/products';

export default function BrandCard({ product }) {
  const handleEnquire = () => {
    const msg = encodeURIComponent(`Hello, I'm interested in ${product.name}. Could you please share available products, minimum order quantity, pack sizes and price details?\n\nMy Name: \nMobile: `);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };
  return (
    <div className="brand-card">
      <div className="brand-img">
        <img src={product.image} alt={product.brand} loading="lazy" onError={e => { e.target.src = '/images/logovk.png'; }} />
      </div>
      <h3>{product.name}</h3>
      <button className="btn-whatsapp" style={{fontSize:'0.82rem',padding:'9px 14px'}} onClick={handleEnquire}>
        <i className="fab fa-whatsapp" /> Enquire Now
      </button>
    </div>
  );
}
