import { WHATSAPP_NUMBER } from '../data/products';

export default function KhakhraCard({ product }) {
  const handleOrder = () => {
    const msg = encodeURIComponent(
      `🛍️ *Order Details – The VK Store*\n\n📦 *Product:* ${product.name}\n💰 *Price:* ${product.currentPrice}\n⚖️ *Weight:* ${product.weight}\n🎁 *Discount:* ${product.discount}\n\n📝 *Delivery Details:*\n👤 *Name:* \n🏠 *Address:* \n📱 *Mobile No:* \n\nThank you for shopping with *The VK Store*! 💝`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <div className="product-card">
      {product.isPremium && <span className="badge">Premium</span>}
      <div className="img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" onError={e => { e.target.src = '/images/logovk.png'; }} />
      </div>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price-row">
          <span className="price-current">{product.currentPrice}</span>
          <span className="price-original">{product.originalPrice}</span>
          <span className="price-discount">{product.discount}</span>
        </div>
        {product.weight && <div className="pack-info">Weight: {product.weight}</div>}
        <button className="btn-whatsapp" onClick={handleOrder}>
          <i className="fab fa-whatsapp" /> Order on WhatsApp
        </button>
      </div>
    </div>
  );
}
