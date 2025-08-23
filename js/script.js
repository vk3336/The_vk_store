// Mobile Menu Toggle
const navLinks = document.getElementById('navLinks');
const menuToggle = document.querySelector('.menu-toggle');
const navItems = document.querySelectorAll('.nav-links a');

function showMenu() {
    navLinks.style.right = '0';
    document.body.style.overflow = 'hidden';
    menuToggle.classList.add('active');
}

function hideMenu() {
    navLinks.style.right = '-300px';
    document.body.style.overflow = 'auto';
    menuToggle.classList.remove('active');
}

// Toggle mobile menu
if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navLinks && navLinks.style.right === '0px') {
            hideMenu();
        } else {
            showMenu();
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks) return;
    if (!navLinks.contains(e.target) && (!menuToggle || !menuToggle.contains(e.target))) {
        hideMenu();
    }
});

// Close mobile menu when clicking on a nav link
navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
            hideMenu();
        }
    });
});

// WhatsApp Order Buttons
document.addEventListener('DOMContentLoaded', function() {
    // Handle order buttons
    const orderButtons = document.querySelectorAll('.whatsapp-order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const price = this.getAttribute('data-price');
            const message = `I would like to order ${product} for ₹${price}.`;
            const whatsappUrl = `https://wa.me/918866791095?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});

// Add active class to current nav item
function setActiveNav() {
    const scrollPosition = window.scrollY + 200;
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds
    let slideTimer;

    function showSlide(index) {
        if (!slides.length) return;
        currentSlide = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            slide.style.opacity = i === currentSlide ? '1' : '0';
            slide.style.zIndex = i === currentSlide ? '1' : '0';
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }

    function startSlider() { slideTimer = setInterval(nextSlide, slideInterval); }
    function stopSlider() { clearInterval(slideTimer); }

    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopSlider);
        slider.addEventListener('mouseleave', startSlider);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { stopSlider(); prevSlide(); startSlider(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopSlider(); nextSlide(); startSlider(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { stopSlider(); showSlide(i); startSlider(); }));

    showSlide(currentSlide);
    if (slides.length > 1) startSlider();
}

// Sticky Header
function initStickyHeader() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll Down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll Up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (!backToTopButton) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active nav link highlighting
const sections = document.querySelectorAll('section');

// Update active nav on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => { preloader.style.display = 'none'; }, 500);
    }
    const year = document.getElementById('current-year');
    if (year) year.textContent = new Date().getFullYear();
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .brand-card, .contact-info, .quick-order');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.product-card, .brand-card, .contact-info, .quick-order');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });
    
    // Initial check in case elements are already in view
    animateOnScroll();
});

// Add scroll event listener for animation
window.addEventListener('scroll', animateOnScroll);

// WhatsApp Button Click Event
const whatsappFloat = document.querySelector('.whatsapp-float');
if (whatsappFloat) {
    whatsappFloat.addEventListener('click', () => {
        console.log('WhatsApp chat opened');
    });
}

// Animate on Scroll
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.feature, .product-card, .brand-card, .section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Newsletter Form
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your server
        console.log('Subscribed with email:', email);
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'newsletter-success';
        successMsg.textContent = 'Thank you for subscribing!';
        successMsg.style.color = '#4caf50';
        successMsg.style.marginTop = '10px';
        successMsg.style.fontWeight = '500';
        
        // Remove any existing success messages
        const existingMsg = this.querySelector('.newsletter-success');
        if (existingMsg) existingMsg.remove();
        
        this.appendChild(successMsg);
        this.reset();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initStickyHeader();
    initBackToTop();
    initSmoothScroll();
    initScrollAnimations();
    initNewsletterForm();
    
    // Set active nav on page load
    setActiveNav();
    
    // Update active nav on scroll
    window.addEventListener('scroll', setActiveNav);
    
    // Add animation delay to features
    document.querySelectorAll('.feature').forEach((feature, index) => {
        feature.style.transitionDelay = `${index * 0.1}s`;
    });
});
