const brandedProducts = [
    {
        name: "Balaji Products",
        image: "images/balajiwafers.png",
        brand: "Balaji"
    },
    {
        name: "Ramdev Products",
        image: "images/vimal.jpg",
        brand: "Ramdev"
    },
    {
        name: "Vimal Products",
        image: "images/vimal.jpg",
        brand: "Vimal"
    },
    {
        name: "Ratlami Sev",
        image: "images/ratlami.png",
        brand: "Ratlami"
    },
    {
        name: "Suhana Masale",
        image: "images/suhana.jpg",
        brand: "Suhana"
    },
    {
        name: "Parle Products",
        image: "images/parle.png",
        brand: "Parle"
    },
    {
        name: "Kissan Products",
        image: "images/kissan.png",
        brand: "Kissan"
    },
    {
        name: "Hair Care",
        image: "images/tresemme.jpg",
        brand: "Tresemme"
    },
    {
        name: "Britannia Products",
        image: "images/britania.png",
        brand: "Britannia"
    },
    {
        name: "Gopal Products",
        image: "images/gopal.png",
        brand: "Gopal"
    },
    {
        name: "Bablu Namkeen",
        image: "images/bablu.jpg",
        brand: "Bablu"
    },
    {
        name: "Mix Chavana",
        image: "images/mixchavana.webp",
        brand: "Mix Chavana"
    }
];

// Make branded products available globally
window.brandedProducts = brandedProducts;

// Function to render branded products
function renderBrandedProducts(containerSelector) {
    console.log('renderBrandedProducts called with selector:', containerSelector);
    
    try {
        const container = document.querySelector(containerSelector);
        if (!container) {
            console.error('Container not found with selector:', containerSelector);
            console.log('Available elements with class "branded-carousel":', 
                document.querySelectorAll('.branded-carousel'));
            return;
        }

        console.log('Branded products data:', brandedProducts);
        
        if (!Array.isArray(brandedProducts) || brandedProducts.length === 0) {
            console.error('No branded products data found');
            container.innerHTML = '<p>No products available at the moment.</p>';
            return;
        }

        const productHTML = brandedProducts.map((product, index) => {
            console.log(`Product ${index + 1}:`, product);
            return `
                <div class="brand-card">
                    <div class="brand-img">
                        <img src="${product.image}" 
                             alt="${product.brand}" 
                             onerror="console.error('Failed to load:', this.src); this.src='images/placeholder.jpg'" 
                             loading="lazy">
                    </div>
                    <h3>${product.name}</h3>
                    <a href="#" class="whatsapp-enquiry" data-brand="${product.name}">
                        <i class="fab fa-whatsapp"></i>
                        <span>Enquire Now</span>
                    </a>
                </div>
            `;
        }).join('');
        
        console.log('Generated HTML for products');
        container.innerHTML = productHTML;
    
        console.log('Adding click event listeners for WhatsApp buttons');
        const whatsappButtons = document.querySelectorAll('.whatsapp-enquiry');
        console.log(`Found ${whatsappButtons.length} WhatsApp buttons`);
        
        whatsappButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const brand = button.getAttribute('data-brand');
                console.log(`WhatsApp button ${index + 1} clicked for brand:`, brand);
                
                const message = `Hello, I'm interested in ${brand}. Could you please provide more details?`;
                const whatsappUrl = `https://wa.me/918866791095?text=${encodeURIComponent(message)}`;
                console.log('Opening WhatsApp URL:', whatsappUrl);
                
                window.open(whatsappUrl, '_blank');
            });
        });
        
        console.log('Branded products rendering completed successfully');
    } catch (error) {
        console.error('Error in renderBrandedProducts:', error);
        if (container) {
            container.innerHTML = '<p>Error loading products. Please try again later.</p>';
        }
    }
}

// Initialize carousel after rendering products
function initBrandedCarousel() {
    if (typeof initCarousel === 'function') {
        initCarousel({
            carousel: '.branded-carousel',
            prevBtn: '.branded-prev',
            nextBtn: '.branded-next',
            dotsContainer: '.branded-dots',
            cardSelector: '.brand-card',
            autoSlide: true
        });
    }
}

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        brandedProducts,
        renderBrandedProducts,
        initBrandedCarousel
    };
}
