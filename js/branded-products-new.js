// Branded Products Data
const brandedProducts = [
    {
        name: "Britannia Products",
        image: "images/brandedproduct/britania.png",
        brand: "Britannia"
    },
    {
        name: "Parle Products",
        image: "images/brandedproduct/parle.png",
        brand: "Parle"
    },
    {
        name: "Balaji Wafers",
        image: "images/brandedproduct/balajiwafers.png",
        brand: "Balaji"
    },
    {
        name: "Surf Excel",
        image: "images/brandedproduct/surfexcel.png",
        brand: "Surf Excel"
    },
    {
        name: "Clinic Plus",
        image: "images/brandedproduct/clinicplus.avif",
        brand: "Clinic Plus"
    },
    {
        name: "Lifebuoy Products",
        image: "images/brandedproduct/lifebouy.avif",
        brand: "Lifebuoy"
    },
    {
        name: "Lux Products",
        image: "images/brandedproduct/lux.png",
        brand: "Lux"
    },
    {
        name: "Dove Products",
        image: "images/brandedproduct/dove.png",
        brand: "Dove"
    },
    {
        name: "Vim Bar",
        image: "images/brandedproduct/vimbar.avif",
        brand: "Vim"
    },
    {
        name: "Tresemme Hair Care",
        image: "images/brandedproduct/tresemme.jpg",
        brand: "Tresemme"
    },
    {
        name: "Ponds Products",
        image: "images/brandedproduct/ponds.png",
        brand: "Ponds"
    },
    {
        name: "Kissan Products",
        image: "images/brandedproduct/kissan.avif",
        brand: "Kissan"
    },
    {
        name: "Empire Products",
        image: "images/brandedproduct/empire.png",
        brand: "Empire"
    },
    {
        name: "Suhana Products",
        image: "images/brandedproduct/suhana.png",
        brand: "Suhana"
    },
    {
        name: "Ramdev Products",
        image: "images/brandedproduct/ramdev.jpg",
        brand: "Ramdev"
    },
    {
        name: "Bablu Namkeen",
        image: "images/brandedproduct/bablu.jpg",
        brand: "Bablu"
    }
    
];

// Add IDs to products for easier reference
brandedProducts.forEach((product, index) => {
    product.id = `brand-${index + 1}`;
});

// DOM Elements
const searchInput = document.getElementById('brand-search');
const searchButton = document.querySelector('.search-box button');
const searchSuggestions = document.getElementById('search-suggestions');
const productsContainer = document.getElementById('brandedProducts');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Render all products initially
    renderProducts(brandedProducts);
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize mobile menu
    initMobileMenu();
});

// Render products to the page
function renderProducts(products) {
    if (!productsContainer) return;
    
    if (!products || products.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 48px; color: #ddd; margin-bottom: 20px;"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filters</p>
            </div>`;
        return;
    }
    
    const productsHTML = products.map(product => `
        <div class="brand-card" data-id="${product.id}">
            <div class="brand-img">
                <img src="${product.image}" 
                     alt="${product.brand}" 
                     onerror="this.src='images/placeholder.jpg'"
                     loading="lazy">
            </div>
            <h3>${product.name}</h3>
            <a href="#" class="brand-btn whatsapp-enquiry" data-brand="${product.name}">
                <i class="fab fa-wa fa-whatsapp"></i>
                <span>Enquire Now</span>
            </a>
        </div>
    `).join('');
    
    productsContainer.innerHTML = productsHTML;
    
    // Add click handlers for WhatsApp buttons
    document.querySelectorAll('.whatsapp-enquiry').forEach((button, index) => {
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
    
    // Header scroll behavior
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scroll down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scroll up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize search functionality
function initSearch() {
    if (!searchInput) return;
    
    // Focus/blur effects
    searchInput.addEventListener('focus', function() {
        const searchBox = this.closest('.search-box');
        searchBox.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
        searchBox.style.transform = 'translateY(-2px)';
    });
    
    searchInput.addEventListener('blur', function() {
        const searchBox = this.closest('.search-box');
        searchBox.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        searchBox.style.transform = 'translateY(0)';
    });
    
    // Search input handler with debounce
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const searchTerm = this.value.trim().toLowerCase();
        
        // Add pulse animation to search button
        if (searchButton) {
            searchButton.style.animation = 'pulse 0.5s ease-out';
            setTimeout(() => {
                searchButton.style.animation = '';
            }, 500);
        }
        
        if (searchTerm.length > 1) {
            searchTimeout = setTimeout(() => {
                const filteredProducts = filterProducts(searchTerm);
                renderProducts(filteredProducts);
                showSuggestions(filteredProducts);
            }, 300); // 300ms debounce
        } else if (searchTerm.length === 0) {
            hideSuggestions();
            renderProducts(brandedProducts);
        }
    });
    
    // Search button click handler
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                const filteredProducts = filterProducts(searchTerm);
                renderProducts(filteredProducts);
                hideSuggestions();
            }
        });
    }
}

// Filter products based on search term
function filterProducts(searchTerm) {
    if (!searchTerm) return brandedProducts;
    
    const searchTermLower = searchTerm.toLowerCase();
    return brandedProducts.filter(product => {
        return (
            product.name.toLowerCase().includes(searchTermLower) ||
            product.brand.toLowerCase().includes(searchTermLower)
        );
    });
}

// Show search suggestions
function showSuggestions(products) {
    if (!searchSuggestions || !products || products.length === 0) {
        hideSuggestions();
        return;
    }
    
    const suggestionsHTML = `
        <div class="suggestion-header" style="padding: 12px 20px; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #555; font-size: 0.9rem;">
            ${products.length} ${products.length === 1 ? 'result' : 'results'} found
        </div>
        <div style="max-height: 300px; overflow-y: auto;">
            ${products.slice(0, 5).map(product => `
                <div class="suggestion-item" 
                     data-id="${product.id}" 
                     style="display: flex; align-items: center; padding: 12px 20px; cursor: pointer; transition: all 0.2s ease; border-bottom: 1px solid #f8f8f8;">
                    <img src="${product.image}" 
                         alt="${product.brand}" 
                         style="width: 40px; height: 40px; object-fit: cover; border-radius: 8px; margin-right: 15px;"
                         onerror="this.src='images/placeholder.jpg'">
                    <div style="flex: 1;">
                        <h4 style="margin: 0 0 4px 0; font-size: 0.95rem; color: #333;">${product.name}</h4>
                        <div style="font-size: 0.8rem; color: #888;">${product.brand}</div>
                    </div>
                    <i class="fas fa-chevron-right" style="margin-left: 10px; color: #ccc; font-size: 0.8rem;"></i>
                </div>`).join('')}
        </div>`;
    
    searchSuggestions.innerHTML = suggestionsHTML;
    searchSuggestions.style.display = 'block';
    
    // Trigger reflow for animation
    void searchSuggestions.offsetWidth;
    searchSuggestions.style.opacity = '1';
    searchSuggestions.style.transform = 'translateY(0)';
    
    // Add click handlers to suggestion items
    document.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const product = brandedProducts.find(p => p.id === productId);
            if (product) {
                searchInput.value = product.name;
                hideSuggestions();
                // Scroll to the product
                const productElement = document.querySelector(`.brand-card[data-id="${productId}"]`);
                if (productElement) {
                    productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Add highlight effect
                    productElement.style.animation = 'highlight 1.5s';
                    setTimeout(() => {
                        productElement.style.animation = '';
                    }, 1500);
                }
            }
        });
    });
}

// Hide search suggestions
function hideSuggestions() {
    if (!searchSuggestions) return;
    
    searchSuggestions.style.opacity = '0';
    searchSuggestions.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        if (searchSuggestions.style.opacity === '0') {
            searchSuggestions.style.display = 'none';
        }
    }, 300);
}

// Initialize mobile menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('show');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('show') && !e.target.closest('#navLinks')) {
                navLinks.classList.remove('show');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes highlight {
        0% { box-shadow: 0 0 0 0 rgba(78, 205, 196, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(78, 205, 196, 0); }
        100% { box-shadow: 0 0 0 0 rgba(78, 205, 196, 0); }
    }
    
    .suggestion-item {
        transition: all 0.2s ease;
    }
    
    .suggestion-item:hover {
        background-color: #f9f9f9 !important;
    }
    
    .suggestion-item:hover h4 {
        color: #4ecdc4 !important;
    }
    
    .suggestion-item:hover .fa-chevron-right {
        transform: translateX(3px) !important;
        color: #4ecdc4 !important;
    }
`;
document.head.appendChild(style);

// Make functions available globally
window.brandedProducts = brandedProducts;
window.renderProducts = renderProducts;
