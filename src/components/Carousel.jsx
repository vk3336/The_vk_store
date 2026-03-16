import { useRef, useState, useEffect, useCallback } from 'react';

export default function Carousel({ children, cardWidth = 300, gap = 20, autoPlay = true, interval = 4000 }) {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    setTotal(children?.length || 0);
  }, [children]);

  const scrollTo = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.children;
    if (!items[index]) return;
    track.scrollTo({ left: items[index].offsetLeft - track.offsetLeft, behavior: 'smooth' });
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    const n = (current + 1) % total;
    scrollTo(n);
  }, [current, total, scrollTo]);

  const prev = useCallback(() => {
    const n = (current - 1 + total) % total;
    scrollTo(n);
  }, [current, total, scrollTo]);

  useEffect(() => {
    if (!autoPlay || total < 2) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, next, interval, total]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, interval);
  };

  // Sync dot on scroll
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const items = Array.from(track.children);
    const scrollLeft = track.scrollLeft;
    let closest = 0;
    let minDist = Infinity;
    items.forEach((item, i) => {
      const dist = Math.abs(item.offsetLeft - track.offsetLeft - scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setCurrent(closest);
  };

  // Touch swipe
  const touchStart = useRef(0);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; pause(); };
  const onTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    resume();
  };

  return (
    <div className="carousel-wrap" onMouseEnter={pause} onMouseLeave={resume}>
      <button className="carousel-btn prev" onClick={prev} aria-label="Previous">
        <i className="fas fa-chevron-left" />
      </button>
      <div
        ref={trackRef}
        className="carousel-track"
        onScroll={onScroll}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {children}
      </div>
      <button className="carousel-btn next" onClick={next} aria-label="Next">
        <i className="fas fa-chevron-right" />
      </button>
      {total > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: total }).map((_, i) => (
            <button key={i} className={`dot${i === current ? ' active' : ''}`} onClick={() => scrollTo(i)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}
