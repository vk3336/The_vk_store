document.addEventListener('DOMContentLoaded', function() {
    // Initialize Premium Products Carousel
    initCarousel({
        carousel: '.premium-carousel:not(.khakhra-carousel)',
        dotsContainer: '.carousel-dots:not(.branded-dots):not(.khakhra-dots):not(.offers-dots)',
        cardSelector: '.premium-card',
        autoSlide: true
    });
    
    // Initialize Offers Carousel
    initCarousel({
        carousel: '.offers-carousel',
        prevBtn: '.offers-prev',
        nextBtn: '.offers-next',
        dotsContainer: '.offers-dots',
        cardSelector: '.offer-card',
        autoSlide: true,
        slidesToShow: 3
    });

    // Initialize Branded Products Carousel
    initCarousel({
        carousel: '.branded-carousel',
        dotsContainer: '.branded-dots',
        cardSelector: '.brand-card',
        autoSlide: true
    });
    
    // Initialize Khakhra Carousel
    initCarousel({
        carousel: '.khakhra-carousel',
        prevBtn: '.khakhra-prev',
        nextBtn: '.khakhra-next',
        dotsContainer: '.khakhra-dots',
        cardSelector: '.premium-card',
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
        const cardStyle = window.getComputedStyle(card);
        const cardWidth = card.offsetWidth + 
                         parseInt(cardStyle.marginLeft) + 
                         parseInt(cardStyle.marginRight);
        
        const containerWidth = carousel.offsetWidth;
        const maxScroll = carousel.scrollWidth - containerWidth;
        
        // Calculate the exact scroll position to show one card at a time
        let scrollPosition = index * cardWidth;
        
        // Add some padding to the scroll position on mobile
        if (window.innerWidth < 768) {
            scrollPosition = index * (cardWidth + 20); // 20px gap on mobile
            // Center the card in the viewport on mobile
            scrollPosition = Math.max(0, scrollPosition - ((containerWidth - cardWidth) / 2));
        }
        
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
    
    // Handle touch events for better mobile swiping
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    
    // Prevent default touch actions that could interfere with swiping
    carousel.style.touchAction = 'pan-y';
    
    // Touch start
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        isDragging = true;
        carousel.style.scrollBehavior = 'auto';
    }, { passive: true });
    
    // Touch move
    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll faster
        carousel.scrollLeft = scrollLeft - walk;
    }, { passive: false });
    
    // Touch end
    carousel.addEventListener('touchend', (e) => {
        isDragging = false;
        carousel.style.scrollBehavior = 'smooth';
        
        touchEndX = e.changedTouches[0].clientX;
        const swipeThreshold = 30; // Reduced threshold for better mobile experience
        const swipeDistance = Math.abs(touchEndX - touchStartX);
        
        // Only trigger slide change if swipe distance is significant
        if (swipeDistance > swipeThreshold) {
            if (touchStartX > touchEndX) {
                // Swipe left - go to next slide
                nextSlide();
            } else {
                // Swipe right - go to previous slide
                prevSlide();
            }
        } else {
            // If swipe was too small, snap to the current slide
            goToSlide(currentIndex);
        }
    }, { passive: true });
    
    // Handle mouse events for desktop
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.scrollBehavior = 'auto';
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = scrollLeft - walk;
    });
    
    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.style.scrollBehavior = 'smooth';
        goToSlide(currentIndex);
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.style.scrollBehavior = 'smooth';
        goToSlide(currentIndex);
    });
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Recalculate current index based on scroll position
            const cardWidth = cards[0] ? cards[0].offsetWidth + 20 : 0;
            if (cardWidth > 0) {
                currentIndex = Math.round(carousel.scrollLeft / cardWidth);
                currentIndex = Math.min(currentIndex, cards.length - 1);
                currentIndex = Math.max(0, currentIndex);
            }
            goToSlide(currentIndex);
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
