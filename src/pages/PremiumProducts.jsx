import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { namkeenProducts } from '../data/products';
import './SubPage.css';

export default function PremiumProducts() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() =>
    search.trim() ? namkeenProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase())) : namkeenProducts,
    [search]
  );

  return (
    <main className="subpage" style={{ paddingTop: '76px' }}>
      <div className="subpage-hero">
        <div className="container">
          <Link to="/" className="back-link"><i className="fas fa-arrow-left" /> Back to Home</Link>
          <span className="section-label">Premium Collection</span>
          <h1 className="section-title">All <span>Premium Products</span></h1>
          <p className="section-desc">Browse our full range of authentic namkeens & snacks</p>
          <div className="search-box">
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              autoComplete="off"
            />
            {search && <button onClick={() => setSearch('')}><i className="fas fa-times" /></button>}
          </div>
        </div>
      </div>
      <div className="container subpage-grid-wrap">
        {filtered.length === 0 ? (
          <div className="no-results"><i className="fas fa-search" /><p>No products found for "{search}"</p></div>
        ) : (
          <div className="products-grid">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </main>
  );
}
