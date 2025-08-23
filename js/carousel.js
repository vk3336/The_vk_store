document.addEventListener('DOMContentLoaded', function() {
    // Initialize Premium Products Carousel
    initCarousel({
        carousel: '.premium-carousel',
        prevBtn: '.prev-arrow:not(.branded-prev)',
        nextBtn: '.next-arrow:not(.branded-next)',
        dotsContainer: '.carousel-dots:not(.branded-dots)',
        cardSelector: '.premium-card',
        autoSlide: true
    });

    // Initialize Branded Products Carousel
    initCarousel({
        carousel: '.branded-carousel',
        prevBtn: '.branded-prev',
        nextBtn: '.branded-next',
        dotsContainer: '.branded-dots',
        cardSelector: '.brand-card',
        autoSlide: true
    });

function initCarousel({
    carousel: carouselSelector,
    prevBtn: prevBtnSelector,
    nextBtn: nextBtnSelector,
    dotsContainer: dotsContainerSelector,
    cardSelector,
    autoSlide = false
}) {
    const carousel = document.querySelector(carouselSelector);
    if (!carousel) return;
    
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    const dotsContainer = document.querySelector(dotsContainerSelector);
    const cards = document.querySelectorAll(`${carouselSelector} ${cardSelector}`);
    let currentIndex = 0;
    let autoSlideInterval;
    
    // Create dots based on number of cards
    function createDots() {
        if (!dotsContainer) return;
        
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < cards.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    // Update dots active state
    function updateDots() {
        if (!dotsContainer) return;
        
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Get number of cards to show based on screen size
    function getCardsPerView() {
        if (carousel.classList.contains('branded-carousel')) {
            if (window.innerWidth < 480) return 1;
            if (window.innerWidth < 768) return 2;
            if (window.innerWidth < 992) return 3;
            if (window.innerWidth < 1200) return 4;
            return 5;
        } else {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        }
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (cards.length === 0) return;
        
        const card = cards[0];
        const cardWidth = card.offsetWidth + 20; // 20px gap
        const containerWidth = carousel.offsetWidth;
        const maxScroll = carousel.scrollWidth - containerWidth;
        
        // Calculate the exact scroll position to show one card at a time
        let scrollPosition = index * cardWidth;
        
        // Ensure we don't scroll past the last card
        if (scrollPosition > maxScroll) {
            scrollPosition = maxScroll;
        }
        
        currentIndex = index;
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        updateDots();
    }
    
    // Next slide
    function nextSlide() {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            goToSlide(currentIndex);
        } else {
            // If at the end, loop back to the first card
            currentIndex = 0;
            goToSlide(0);
        }
    }
    
    // Previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            goToSlide(currentIndex);
        } else {
            // If at the start, go to the last card
            currentIndex = cards.length - 1;
            goToSlide(currentIndex);
        }
    }
    
    // Handle touch events
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to trigger a swipe
        
        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left - go to next slide
            nextSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right - go to previous slide
            prevSlide();
        }
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            goToSlide(currentIndex); // Recalculate position on resize
        }, 250);
    });
    
    // Initialize
    createDots();
    
    // Auto-advance carousel if enabled
    if (autoSlide) {
        autoSlideInterval = setInterval(nextSlide, 5000);
        
        // Pause auto-slide on hover
        const carouselContainer = carousel.closest('.premium-carousel-container, .branded');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(autoSlideInterval);
            });
            
            carouselContainer.addEventListener('mouseleave', () => {
                clearInterval(autoSlideInterval);
                autoSlideInterval = setInterval(nextSlide, 5000);
            });
        }
    }
}
});
