import { WHATSAPP_NUMBER, buildWhatsAppOrderMsg } from '../data/products';

export default function ProductCard({ product }) {
  const p250 = Math.round(product.price * 0.25);
  const p500 = Math.round(product.price * 0.5);
  const stars = Math.floor(product.rating || 0);

  const handleOrder = () => {
    const msg = buildWhatsAppOrderMsg(product);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <div className="product-card">
      <span className="badge">{product.category}</span>
      <div className="img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" onError={e => { e.target.src = '/images/logovk.png'; }} />
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        {product.rating && (
          <div className="rating-row">
            <span className="stars">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</span>
            <span>{product.rating} ({product.reviews})</span>
          </div>
        )}
        <p>{product.description}</p>
        <div className="price-row">
          <span className="price-current">₹{product.price}/KG</span>
          <span className="price-original">₹{product.originalPrice}/KG</span>
          <span className="price-discount">{product.discount}</span>
        </div>
        <div className="pack-info">
          250 GM: ₹{p250} &nbsp;|&nbsp; 500 GM: ₹{p500}
        </div>
        <button className="btn-whatsapp" onClick={handleOrder}>
          <i className="fab fa-whatsapp" /> Order on WhatsApp
        </button>
      </div>
    </div>
  );
}
