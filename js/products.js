const products = [
    {
        id: 1,
        name: "Mix chavana",
        description: "A perfect mix of sweet and sour flavors with roasted chana and spices. An irresistible snack for any time.",
        image: "images/namkeenproduct/mixchavana.avif",
        price: 230,
        originalPrice: 280,
        discount: "18% OFF",
        category: "Namkeen",
        rating: 4.7,
        reviews: 94,
        isPremium: true
    },
    {
        id: 15,
        name: "Ratlami Sev",
        description: "Authentic Ratlami sev made with traditional spices and gram flour. A perfect blend of crispy texture and rich masala flavors.",
        image: "images/namkeenproduct/ratlamisev.jpeg",
        price: 230,
        originalPrice: 280,
        discount: "18% OFF",
        category: "Namkeen",
        rating: 4.8,
        reviews: 112,
        isPremium: true
    },
    {
        id: 23,
        name: "Jadi Sev",
        description: "Thin and crispy sev with a perfect blend of spices. An all-time favorite snack that's perfect for any occasion.",
        image: "images/namkeenproduct/jadisev.jpg",
        price: 230,
        originalPrice: 280,
        discount: "18% OFF",
        category: "Namkeen",
        rating: 4.5,
        reviews: 76,
        isPremium: true
    },
    {
        id: 24,
        name: "Tikkhi Bundi",
        description: "Crunchy bundi with a spicy twist. These small, round balls of gram flour are seasoned with aromatic spices for a flavorful experience.",
        image: "images/namkeenproduct/tikkhibundi.webp",
        price: 230,
        originalPrice: 280,
        discount: "18% OFF",
        category: "Namkeen",
        rating: 4.4,
        reviews: 65,
        isPremium: true
    },
    {
        id: 5,
        name: "Chana Dal",
        description: "Roasted chana dal with a perfect blend of spices. A nutritious and crunchy snack that's hard to resist.",
        image: "images/namkeenproduct/chanadal.avif",
        price: 230,
        originalPrice: 280,
        discount: "18% OFF",
        category: "Namkeen",
        rating: 4.6,
        reviews: 82,
        isPremium: true
    },
    {
        id: 6,
        name: "Chokdi Gathiya",
        description: "Crispy diamond-cut gathiya made with gram flour and spices. A traditional Gujarati snack with a perfect crunch.",
        image: "images/namkeenproduct/chokdigadhiya.jpg",
        price: 230,
        originalPrice: 280,
        discount: "18% OFF",
        category: "Namkeen",
        rating: 4.7,
        reviews: 91,
        isPremium: true
    },
    {
        id: 7,
        name: "Fulvadi",
        description: "Light and crispy fried snack made with gram flour. A perfect tea-time snack with a unique texture.",
        image: "images/namkeenproduct/fulvadi.jpg",
        price: 230,
        originalPrice: 280,
        discount: "18% OFF",
        category: "Namkeen",
        rating: 4.5,
        reviews: 78,
        isPremium: true
    },
    {
        id: 3,
        name: "Bikaneri Sev",
        description: "Thin and crispy sev from Bikaner, made with gram flour and traditional spices. A perfect crunchy snack for any time of the day.",
        image: "images/namkeenproduct/bikanarisev.jpg",
        price: 230,
        originalPrice: 280,
        discount: "18% OFF",
        category: "Namkeen",
        rating: 4.5,
        reviews: 76,
        isPremium: true
    }
];

// Function to get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Function to get premium products
function getPremiumProducts() {
    return products.filter(product => product.isPremium);
}

// Function to render premium products
function renderPremiumProducts(containerSelector = '.premium-grid') {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const premiumProducts = getPremiumProducts();
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
                        <span class="current-price">₹${product.price}/KG</span>
                        <span class="original-price">₹${product.originalPrice}/KG</span>
                        <span class="discount">${product.discount}</span>
                    </div>
                    <div class="pack-options" style="text-align: center; width: 100%; color: #4CAF50; font-weight: 500; margin: 8px 0 12px 0; font-size: 0.85rem; line-height: 1.4;">
                        <div>250 GM: ₹${price250gm}</div>
                        <div>500 GM: ₹${price500gm}</div>
                    </div>
                    <button class="whatsapp-btn" data-product='${JSON.stringify(product).replace(/'/g, '&#39;')}'>
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners for WhatsApp buttons
    container.querySelectorAll('.whatsapp-btn').forEach(button => {
        button.addEventListener('click', function() {
            const product = JSON.parse(this.getAttribute('data-product'));
            const price250gm = Math.round(parseInt(product.price) * 0.25);
            const price500gm = Math.round(parseInt(product.price) * 0.5);
            
            const message = `🛍️ *Order Details – The VK Store*\n\n📦 *Product:* ${product.name}\n💰 *Original Price:* ₹${product.originalPrice}/KG\n🏷️ *Discounted Price:* ₹${product.price}/KG\n🎁 *Discount:* ${product.discount}\n\n📊 *Available Packs:*\n• 250 GM Pack: ₹${price250gm}\n• 500 GM Pack: ₹${price500gm}\n\n📝 *Delivery Details (please fill in):*\n🛒 *Your Order:* \n👤 *Name:* \n🏠 *Address:* \n📱 *Mobile No:* \n\n Thank you for shopping with *The VK Store*! 💝`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/918866791095?text=${encodedMessage}`, '_blank');
        });
    });
}

// Make functions available globally
window.productsData = {
    products,
    getProductsByCategory,
    getPremiumProducts,
    renderPremiumProducts
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Render premium products if container exists
    const premiumGrid = document.querySelector('.premium-grid');
    if (premiumGrid) {
        renderPremiumProducts();
        
        // Initialize carousel navigation
        const prevButton = document.querySelector('.carousel-arrow.prev');
        const nextButton = document.querySelector('.carousel-arrow.next');
        
        if (prevButton && nextButton) {
            const scrollAmount = 320; // Width of card + gap
            
            prevButton.addEventListener('click', () => {
                premiumGrid.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            nextButton.addEventListener('click', () => {
                premiumGrid.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
            
            // Hide/show arrows based on scroll position
            const checkArrows = () => {
                const { scrollLeft, scrollWidth, clientWidth } = premiumGrid;
                prevButton.style.display = scrollLeft <= 10 ? 'none' : 'flex';
                nextButton.style.display = scrollLeft >= scrollWidth - clientWidth - 10 ? 'none' : 'flex';
            };
            
            // Check arrows on load and after resize
            checkArrows();
            window.addEventListener('resize', checkArrows);
            
            // Check arrows on scroll
            premiumGrid.addEventListener('scroll', checkArrows);
        }
    }
});

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        products, 
        getProductsByCategory, 
        getPremiumProducts,
        renderPremiumProducts
    };
}
