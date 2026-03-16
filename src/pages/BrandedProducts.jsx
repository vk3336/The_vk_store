import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import BrandCard from '../components/BrandCard';
import { brandedProducts } from '../data/products';
import './SubPage.css';

export default function BrandedProducts() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() =>
    search.trim() ? brandedProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase())) : brandedProducts,
    [search]
  );

  return (
    <main className="subpage" style={{ paddingTop: '76px' }}>
      <div className="subpage-hero">
        <div className="container">
          <Link to="/" className="back-link"><i className="fas fa-arrow-left" /> Back to Home</Link>
          <span className="section-label">Branded Collection</span>
          <h1 className="section-title">All <span>Branded Products</span></h1>
          <p className="section-desc">Top brands in bulk & bunch packs at great prices</p>
          <div className="search-box">
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search brands..."
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
          <div className="no-results"><i className="fas fa-search" /><p>No brands found for "{search}"</p></div>
        ) : (
          <div className="brands-grid">
            {filtered.map(p => <BrandCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </main>
  );
}
