import { useRef, useState, useCallback } from 'react';
import './Carousel.css';

export default function Carousel({ children }) {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const items = Array.isArray(children) ? children : [children];
  const total = items.length;

  const scrollTo = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index];
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    setCurrent(index);
  }, []);

  const prev = () => scrollTo((current - 1 + total) % total);
  const next = () => scrollTo((current + 1) % total);

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    let closest = 0, minDist = Infinity;
    Array.from(track.children).forEach((item, i) => {
      const dist = Math.abs(item.offsetLeft - track.offsetLeft - scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setCurrent(closest);
  };

  const touchStart = useRef(0);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  return (
    <div className="crsl">
      {/* Left button */}
      <button
        className="crsl-btn crsl-prev"
        onClick={prev}
        aria-label="Previous"
        disabled={total <= 1}
      >
        <i className="fas fa-chevron-left" />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="crsl-track"
        onScroll={onScroll}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((child, i) => (
          <div key={i} className="crsl-item">{child}</div>
        ))}
      </div>

      {/* Right button */}
      <button
        className="crsl-btn crsl-next"
        onClick={next}
        aria-label="Next"
        disabled={total <= 1}
      >
        <i className="fas fa-chevron-right" />
      </button>

      {/* Dots */}
      {total > 1 && (
        <div className="crsl-dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`crsl-dot${i === current ? ' active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
