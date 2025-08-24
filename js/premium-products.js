// Premium products data
const premiumProducts = [
    {
        name: 'Bablu Namkeen',
        image: 'images/bablu.jpg',
        description: 'Premium quality traditional namkeen with authentic flavors',
        price: '120',
        originalPrice: '150',
        discount: '20% OFF',
        rating: 4.5,
        reviews: 128,
        category: 'Namkeen'
    },
    {
        name: 'Gopal Namkeen',
        image: 'images/gopal.png',
        description: 'Crunchy and flavorful traditional snack mix',
        price: '135',
        originalPrice: '170',
        discount: '21% OFF',
        rating: 4.3,
        reviews: 95,
        category: 'Namkeen'
    },
    {
        name: 'Balaji Wafers',
        image: 'images/balajiwafers.png',
        description: 'Crispy and delicious potato wafers',
        price: '20',
        originalPrice: '25',
        discount: '20% OFF',
        rating: 4.7,
        reviews: 215,
        category: 'Snacks'
    },
    {
        name: 'Britannia Biscuits',
        image: 'images/britania.png',
        description: 'Delicious and crispy biscuits for all occasions',
        price: '35',
        originalPrice: '45',
        discount: '22% OFF',
        rating: 4.6,
        reviews: 342,
        category: 'Bakery'
    },
    {
        name: 'Kissan Mixed Fruit Jam',
        image: 'images/kissan.png',
        description: 'Sweet and fruity mixed fruit jam',
        price: '180',
        originalPrice: '220',
        discount: '18% OFF',
        rating: 4.8,
        reviews: 278,
        category: 'Spreads'
    },
    {
        name: 'Mixed Chivda',
        image: 'images/mixchavana.webp',
        description: 'Crunchy and spicy mixed chivda snack',
        price: '150',
        originalPrice: '180',
        discount: '17% OFF',
        rating: 4.4,
        reviews: 189,
        category: 'Snacks'
    },
    {
        name: 'Parle-G Biscuits',
        image: 'images/parle.png',
        description: 'Classic tea time biscuits loved by all',
        price: '10',
        originalPrice: '12',
        discount: '17% OFF',
        rating: 4.7,
        reviews: 1562,
        category: 'Bakery'
    },
    {
        name: 'Ramdev Masala',
        image: 'images/ramdev.png',
        description: 'Aromatic and flavorful spice mix',
        price: '85',
        originalPrice: '100',
        discount: '15% OFF',
        rating: 4.5,
        reviews: 231,
        category: 'Spices'
    },
    {
        name: 'Ratlami Sev',
        image: 'images/ratlami.png',
        description: 'Spicy and crispy traditional sev',
        price: '110',
        originalPrice: '130',
        discount: '15% OFF',
        rating: 4.6,
        reviews: 198,
        category: 'Namkeen'
    },
    {
        name: 'Suhana Paneer Masala',
        image: 'images/suhana.jpg',
        description: 'Rich and aromatic paneer masala mix',
        price: '45',
        originalPrice: '55',
        discount: '18% OFF',
        rating: 4.3,
        reviews: 156,
        category: 'Spices'
    },
    {
        name: 'Tresemme Shampoo',
        image: 'images/tresemme.jpg',
        description: 'Professional quality hair care shampoo',
        price: '480',
        originalPrice: '550',
        discount: '13% OFF',
        rating: 4.7,
        reviews: 412,
        category: 'Personal Care'
    },
    {
        name: 'Vimal Pan Masala',
        image: 'images/vimal.jpg',
        description: 'Premium quality pan masala',
        price: '25',
        originalPrice: '30',
        discount: '17% OFF',
        rating: 4.1,
        reviews: 278,
        category: 'Others'
    }
];

// Function to render premium products
function renderPremiumProducts(containerSelector = '.premium-grid') {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = premiumProducts.map(product => {
        const ratingStars = Array(Math.floor(product.rating)).fill('<i class="fas fa-star"></i>').join('');
        const hasHalfStar = product.rating % 1 >= 0.5;
        
        // Calculate prices for 250gm and 500gm packs
        const price250gm = Math.round(parseInt(product.price) * 0.25);
        const price500gm = Math.round(parseInt(product.price) * 0.5);

        return `
            <div class="premium-card">
                <div class="premium-badge">${product.category}</div>
                <div class="premium-img">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
                </div>
                <div class="premium-content" style="padding: 15px 15px 10px;">
                    <h3 style="margin: 0 0 5px 0;">${product.name}</h3>
                    <div class="product-rating" style="margin: 0 0 8px 0;">
                        <div class="stars" style="margin: 0;">
                            ${ratingStars}${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
                            <span style="margin-left: 5px;">${product.rating}</span>
                        </div>
                        <div class="reviews" style="font-size: 0.8rem; color: #777; margin-top: 2px;">${product.reviews} reviews</div>
                    </div>
                    <p style="margin: 0 0 10px 0; font-size: 0.9rem; line-height: 1.4;">${product.description}</p>
                    <div class="premium-price" style="margin: 5px 0;">
                        <span class="current-price" style="font-size: 1.2rem; font-weight: 700; color: #ff6b6b;">₹${product.price}/KG</span>
                        <span class="original-price" style="font-size: 0.9rem; color: #999; text-decoration: line-through; margin: 0 8px;">₹${product.originalPrice}/KG</span>
                        <span class="discount" style="background: #ffebee; color: #ff6b6b; padding: 2px 6px; border-radius: 4px; font-size: 0.8rem; font-weight: 600;">${product.discount}</span>
                    </div>
                    <div class="pack-options" style="text-align: center; width: 100%; color: #4CAF50; font-weight: 500; margin: 8px 0 12px 0; font-size: 0.85rem; line-height: 1.4;">
                        <div>250 GM: ₹${price250gm}</div>
                        <div>500 GM: ₹${price500gm}</div>
                    </div>
                    <a href="#" class="premium-btn whatsapp-btn">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners for WhatsApp buttons
    document.addEventListener('click', function(e) {
        const whatsappBtn = e.target.closest('.whatsapp-btn');
        if (whatsappBtn) {
            e.preventDefault();
            const card = whatsappBtn.closest('.premium-card');
            const productName = card.querySelector('h3').textContent;
            const currentPriceElement = card.querySelector('.current-price');
            const originalPriceElement = card.querySelector('.original-price');
            const discountElement = card.querySelector('.discount');
            
            // Extract prices from the elements
            const currentPrice = currentPriceElement ? currentPriceElement.textContent : '';
            const originalPrice = originalPriceElement ? originalPriceElement.textContent : '';
            const discount = discountElement ? discountElement.textContent : '';
            
            // Extract the numeric price (remove currency symbol and /KG)
            const priceText = currentPrice.replace(/[^0-9.]/g, '');
            const pricePerKg = parseFloat(priceText);
            
            if (isNaN(pricePerKg)) {
                console.error('Could not parse price:', currentPrice);
                return;
            }
            
            // Calculate pack prices
            const price250gm = Math.round(pricePerKg * 0.25);
            const price500gm = Math.round(pricePerKg * 0.5);
            
            const message = `🛍️ *Order Details – The VK Store*\n\n📦 *Product:* ${productName}\n💰 *Original Price:* ${originalPrice}\n🏷️ *Discounted Price:* ${currentPrice}\n🎁 *Discount:* ${discount}\n\n📊 *Available Packs:*\n• 250 GM Pack: ₹${price250gm}\n• 500 GM Pack: ₹${price500gm}\n\n📝 *Delivery Details (please fill in):*\n🛒 *Your Order:* \n👤 *Name:* \n🏠 *Address:* \n📱 *Mobile No:* \n\n🙏 Thank you for shopping with *The VK Store*! 💝`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/918866791095?text=${encodedMessage}`, '_blank');
        }
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('product-search');
    const suggestionsContainer = document.getElementById('search-suggestions');
    let allProducts = [];

    // Get all product names for search suggestions
    function updateProductList() {
        allProducts = Array.from(document.querySelectorAll('.premium-card')).map(card => ({
            name: card.querySelector('h3').textContent,
            element: card
        }));
    }

    // Filter products based on search input with better matching
    function filterProducts(searchTerm) {
        if (!searchTerm) return [];
        const term = searchTerm.toLowerCase().trim();
        
        // Split search term into words for better matching
        const searchWords = term.split(/\s+/).filter(word => word.length > 0);
        
        return allProducts.filter(product => {
            const productName = product.name.toLowerCase();
            
            // Check if all search words are found in the product name
            return searchWords.every(word => 
                productName.includes(word)
            );
        }).sort((a, b) => {
            // Sort by relevance (products that start with the search term come first)
            const aStartsWith = a.name.toLowerCase().startsWith(term);
            const bStartsWith = b.name.toLowerCase().startsWith(term);
            
            if (aStartsWith && !bStartsWith) return -1;
            if (!aStartsWith && bStartsWith) return 1;
            return 0;
        });
    }

    // Show suggestions
    function showSuggestions(products) {
        suggestionsContainer.innerHTML = '';
        if (products.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'suggestion-item';
            noResults.textContent = 'No products found';
            noResults.style.padding = '10px 15px';
            noResults.style.color = '#666';
            suggestionsContainer.appendChild(noResults);
        } else {
            products.slice(0, 5).forEach(product => {
                const suggestion = document.createElement('div');
                suggestion.className = 'suggestion-item';
                suggestion.textContent = product.name;
                suggestion.style.padding = '10px 15px';
                suggestion.style.cursor = 'pointer';
                suggestion.style.transition = 'background-color 0.2s';
                
                suggestion.addEventListener('mouseover', () => {
                    suggestion.style.backgroundColor = '#f5f5f5';
                });
                
                suggestion.addEventListener('mouseout', () => {
                    suggestion.style.backgroundColor = 'transparent';
                });
                
                suggestion.addEventListener('click', () => {
                    searchInput.value = product.name;
                    filterAndDisplayProducts(product.name);
                    suggestionsContainer.style.display = 'none';
                    searchInput.blur();
                });
                
                suggestionsContainer.appendChild(suggestion);
            });
        }
        suggestionsContainer.style.display = 'block';
    }

    // Filter and display products based on search
    function filterAndDisplayProducts(searchTerm) {
        const products = document.querySelectorAll('.premium-card');
        let hasMatches = false;
        
        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            if (!searchTerm || productName.includes(searchTerm.toLowerCase())) {
                product.style.display = '';
                hasMatches = true;
            } else {
                product.style.display = 'none';
            }
        });

        // Show no results message if no matches
        const noResults = document.querySelector('.no-results');
        if (!hasMatches) {
            if (!noResults) {
                const noResultsDiv = document.createElement('div');
                noResultsDiv.className = 'no-results';
                noResultsDiv.textContent = 'No products match your search.';
                noResultsDiv.style.textAlign = 'center';
                noResultsDiv.style.gridColumn = '1 / -1';
                noResultsDiv.style.padding = '40px';
                noResultsDiv.style.color = '#666';
                document.querySelector('.premium-grid').appendChild(noResultsDiv);
            }
        } else if (noResults) {
            noResults.remove();
        }
    }

    // Search functionality with enhanced UI
    const productSearch = document.getElementById('product-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    const searchButton = document.querySelector('.search-box button');

    // Add focus and blur effects
    productSearch.addEventListener('focus', function() {
        const searchBox = this.closest('.search-box');
        searchBox.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
        searchBox.style.transform = 'translateY(-2px)';
        
        // Show suggestions if there's text
        if (this.value.trim() !== '') {
            showSuggestions();
        }
    });

    productSearch.addEventListener('blur', function() {
        const searchBox = this.closest('.search-box');
        searchBox.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        searchBox.style.transform = 'translateY(0)';
    });

    // Search input handler with debounce
    let searchTimeout;
    productSearch.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const searchTerm = this.value.trim().toLowerCase();
        
        // Add pulse animation to search button
        searchButton.style.animation = 'pulse 0.5s ease-out';
        setTimeout(() => {
            searchButton.style.animation = '';
        }, 500);
        
        if (searchTerm.length > 1) {
            searchTimeout = setTimeout(() => {
                const filteredProducts = allProducts.filter(product => 
                    product.name.toLowerCase().includes(searchTerm)
                );
                displaySearchSuggestions(filteredProducts);
            }, 300); // 300ms debounce
        } else if (searchTerm.length === 0) {
            hideSuggestions();
        } else {
            searchSuggestions.innerHTML = '<div class="no-results">Type at least 2 characters</div>';
            showSuggestions();
        }
    });

    // Search button click handler
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        const searchTerm = productSearch.value.trim();
        if (searchTerm) {
            // Trigger search or perform action
            console.log('Searching for:', searchTerm);
            // Add button click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        }
    });

    function showSuggestions() {
        searchSuggestions.style.display = 'block';
        setTimeout(() => {
            searchSuggestions.style.opacity = '1';
            searchSuggestions.style.transform = 'translateY(0)';
        }, 10);
    }

    function hideSuggestions() {
        searchSuggestions.style.opacity = '0';
        searchSuggestions.style.transform = 'translateY(10px)';
        setTimeout(() => {
            searchSuggestions.style.display = 'none';
        }, 300);
    }

    function displaySearchSuggestions(products) {
        if (!searchSuggestions) return;
        
        if (products.length === 0) {
            searchSuggestions.innerHTML = `
                <div class="no-results" style="padding: 20px; text-align: center; color: #666;">
                    <i class="fas fa-search" style="font-size: 24px; margin-bottom: 10px; opacity: 0.6;"></i>
                    <p>No products found</p>
                    <small>Try different keywords</small>
                </div>`;
            showSuggestions();
            return;
        }
        
        const suggestionsHTML = `
            <div class="suggestion-header" style="padding: 12px 20px; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #555; font-size: 0.9rem;">
                ${products.length} ${products.length === 1 ? 'result' : 'results'} found
            </div>
            <div style="max-height: 300px; overflow-y: auto;">
                ${products.map(product => `
                    <div class="suggestion-item" 
                         data-id="${product.id}" 
                         style="display: flex; align-items: center; padding: 12px 20px; cursor: pointer; transition: all 0.2s ease; border-bottom: 1px solid #f8f8f8;">
                        <img src="${product.image}" 
                             alt="${product.name}" 
                             style="width: 40px; height: 40px; object-fit: cover; border-radius: 8px; margin-right: 15px;">
                        <div class="suggestion-details" style="flex: 1;">
                            <h4 style="margin: 0 0 4px 0; font-size: 0.95rem; color: #333;">${product.name}</h4>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span class="category" style="font-size: 0.8rem; color: #888; text-transform: capitalize;">${product.category}</span>
                                <span class="price" style="font-weight: 600; color: #ff4757;">$${product.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <i class="fas fa-chevron-right" style="margin-left: 10px; color: #ccc; font-size: 0.8rem;"></i>
                    </div>`).join('')}
            </div>`;
        
        searchSuggestions.innerHTML = suggestionsHTML;
        showSuggestions();
        
        // Add hover effects to suggestion items
        document.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.background = '#f9f9f9';
                this.querySelector('h4').style.color = '#ff4757';
                this.querySelector('.fa-chevron-right').style.transform = 'translateX(3px)';
                this.querySelector('.fa-chevron-right').style.color = '#ff4757';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.background = '';
                this.querySelector('h4').style.color = '';
                this.querySelector('.fa-chevron-right').style.transform = '';
                this.querySelector('.fa-chevron-right').style.color = '';
            });
            
            item.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const product = products.find(p => p.id === productId);
                if (product) {
                    // Add click feedback
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                        hideSuggestions();
                        showProductDetails(product);
                        productSearch.value = '';
                        productSearch.blur();
                    }, 150);
                }
            });
        });
    }

    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            hideSuggestions();
        }
    });

    // Keyboard navigation for accessibility
    document.addEventListener('keydown', function(e) {
        if (!searchSuggestions || searchSuggestions.style.display === 'none') return;
        
        const items = Array.from(document.querySelectorAll('.suggestion-item'));
        if (items.length === 0) return;
        
        const focused = document.activeElement;
        const currentIndex = items.indexOf(focused);
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
            items[nextIndex].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
            items[prevIndex > -1 ? prevIndex : 0].focus();
        } else if (e.key === 'Enter' && currentIndex > -1) {
            e.preventDefault();
            items[currentIndex].click();
        } else if (e.key === 'Escape') {
            hideSuggestions();
            productSearch.focus();
        }
    });

    // Event listeners for search input
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim();
        if (searchTerm.length > 0) {
            updateProductList();
            const filteredProducts = filterProducts(searchTerm);
            showSuggestions(filteredProducts);
            
            // Also filter the products grid in real-time
            filterAndDisplayProducts(searchTerm);
        } else {
            suggestionsContainer.style.display = 'none';
            filterAndDisplayProducts('');
        }
    });
    
    // Show suggestions when input is focused
    searchInput.addEventListener('focus', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm.length > 0) {
            updateProductList();
            const filteredProducts = filterProducts(searchTerm);
            showSuggestions(filteredProducts);
            suggestionsContainer.style.display = 'block';
        }
    });

    // Handle Enter key
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            filterAndDisplayProducts(searchInput.value.trim());
            suggestionsContainer.style.display = 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderPremiumProducts();
    
    // Initialize search functionality after products are rendered
    setTimeout(initializeSearch, 100);
    
    // Update current year in footer if element exists
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        premiumProducts,
        renderPremiumProducts
    };
}
