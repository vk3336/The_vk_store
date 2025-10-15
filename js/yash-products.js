// Yash Special Products data
const yashProducts = [
    {
        id: 'ym1',
        name: 'Yash Mathiya',
        description: 'Special homemade mathiya with traditional Gujarati spices. A perfect blend of crispiness and authentic flavors, specially prepared for Diwali celebrations.',
        image: 'images/yashmathiya/yashmathiya.webp',
        price: 140,
        originalPrice: 160,
        discount: '12% OFF',
        category: 'Diwali Special',
        rating: 4.9,
        reviews: 128,
        isNew: true,
        isBestSeller: true
    },
    {
        id: 'yc1',
        name: 'Yash Chorafadi',
        description: 'Exclusive chorafadi made with premium ingredients and secret family recipe. A must-have Diwali snack that melts in your mouth with every bite.',
        image: 'images/yashmathiya/yashchorafali.jpg',
        price: 140,
        originalPrice: 160,
        discount: '12% OFF',
        category: 'Diwali Special',
        rating: 5.0,
        reviews: 156,
        isNew: true,
        isBestSeller: true
    }
];

// Function to render Yash products
function renderYashProducts(containerSelector = '.yash-products-grid') {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
        .yash-products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            justify-items: center;
            padding: 0 1rem;
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
        }
        
        .yash-product-card {
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(0, 0, 0, 0.05);
            width: 100%;
            max-width: 300px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            position: relative;
            height: 100%;
        }
        
        .yash-product-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }
        
        .yash-product-badges {
            position: absolute;
            top: 15px;
            left: 15px;
            z-index: 2;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .yash-badge {
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.7rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .yash-badge.new {
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
        }
        
        .yash-badge.best-seller {
            background: linear-gradient(135deg, #FF5722, #e64a19);
            color: white;
        }
        
        .yash-badge.discount {
            background: linear-gradient(135deg, #E91E63, #c2185b);
            color: white;
        }
        
        .yash-product-image {
            position: relative;
            padding-top: 60%;
            overflow: hidden;
            background: linear-gradient(45deg, #f5f7fa, #e4e8eb);
        }
        
        .yash-product-image img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 1.5rem;
        }
        
        .yash-product-card:hover .yash-product-image img {
            transform: scale(1.08);
        }
        
        .yash-product-content {
            padding: 1.25rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        
        .yash-product-category {
            font-size: 0.8rem;
            color: #e74c3c;
            font-weight: 600;
            margin: 0 0 0.5rem 0;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .yash-product-title {
            font-size: 1.2rem;
            font-weight: 700;
            color: #2c3e50;
            margin: 0 0 0.5rem 0;
            line-height: 1.3;
            letter-spacing: -0.2px;
        }
        
        .yash-product-description {
            font-size: 0.85rem;
            color: #6c757d;
            margin: 0 0 0.75rem 0;
            line-height: 1.5;
            flex-grow: 1;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        .yash-product-rating {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0.75rem;
            color: #ffb400;
            font-size: 0.9rem;
            gap: 4px;
        }
        
        .yash-rating-count {
            color: #95a5a6;
            font-size: 0.85rem;
            margin-left: 5px;
            font-weight: 500;
        }
        
        .yash-product-footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: auto;
            width: 100%;
            text-align: center;
        }
        
        .yash-product-price {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
        }
        
        .yash-product-quantity {
            font-size: 0.8rem;
            color: #6c757d;
            background: #f8f9fa;
            padding: 3px 10px;
            border-radius: 12px;
            display: inline-block;
            margin-bottom: 6px;
            font-weight: 500;
        }
        
        .yash-current-price {
            font-size: 1.4rem;
            font-weight: 800;
            color: #2c3e50;
            position: relative;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .yash-current-price::before {
            content: '₹';
            font-size: 0.8em;
            margin-right: 2px;
        }
        
        .yash-original-price {
            font-size: 1rem;
            color: #95a5a6;
            text-decoration: line-through;
            position: relative;
        }
        
        .yash-original-price::before {
            content: '₹';
            font-size: 0.8em;
            margin-right: 2px;
        }
        
        .yash-whatsapp-btn {
            background: linear-gradient(135deg, #25D366, #128C7E);
            color: white;
            border: none;
            border-radius: 8px;
            padding: 0.6rem 1.2rem;
            font-size: 0.9rem;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            width: 100%;
            max-width: 200px;
            text-decoration: none;
            box-shadow: 0 2px 10px rgba(37, 211, 102, 0.2);
            position: relative;
            overflow: hidden;
        }
        
        .yash-whatsapp-btn::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 5px;
            height: 5px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 0;
            border-radius: 100%;
            transform: scale(1, 1) translate(-50%, -50%);
            transform-origin: 50% 50%;
        }
        
        .yash-whatsapp-btn:focus:not(:active)::after {
            animation: ripple 1s ease-out;
        }
        
        @keyframes ripple {
            0% {
                transform: scale(0, 0);
                opacity: 0.5;
            }
            100% {
                transform: scale(20, 20);
                opacity: 0;
            }
        }
        
        .yash-whatsapp-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 7px 20px rgba(37, 211, 102, 0.35);
            background: linear-gradient(135deg, #128C7E, #075E54);
        }
        
        .yash-whatsapp-btn:active {
            transform: translateY(0);
            box-shadow: 0 2px 10px rgba(37, 211, 102, 0.3);
        }
        
        .yash-whatsapp-btn i {
            font-size: 1.2rem;
            transition: transform 0.3s ease;
        }
        
        .yash-whatsapp-btn:hover i {
            transform: scale(1.1);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .yash-products-grid {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 1.5rem;
                padding: 0 1rem;
            }
            
            .yash-product-content {
                padding: 1.5rem;
            }
            
            .yash-product-title {
                font-size: 1.3rem;
            }
            
            .yash-product-description {
                font-size: 0.9rem;
            }
            
            .yash-current-price {
                font-size: 1.5rem;
            }
            
            .yash-original-price {
                font-size: 1rem;
            }
        }
    `;
    document.head.appendChild(style);

    // Function to create WhatsApp message
    function createWhatsAppMessage(product) {
    const originalPrice = Math.round((product.price * 100) / (100 - parseInt(product.discount)));
    const price250gm = Math.round((product.price / 2) * 0.5);
    const price500gm = Math.round(product.price * 0.5);
    
    return `*Order Details – The VK Store*\n\n` +
           `*Product:* ${product.name}\n` +
           `*Original Price:* ₹${originalPrice}/KG\n` +
           `*Discounted Price:* ₹${product.price}/KG\n` +
           `*Discount:* ${product.discount} OFF\n\n` +
           `*Available Packs:*\n` +
           `• 250 GM Pack: ₹${price250gm}\n` +
           `• 500 GM Pack: ₹${price500gm}\n\n` +
           `*Delivery Details (please fill in):*\n` +
           `*Your Order:* \n` +
           `*Name:* \n` +
           `*Address:* \n` +
           `*Mobile No:* \n\n` +
           `We wish you a very Happy Diwali!  \n\n` +
           `Thank you for shopping with *The VK Store*!  `;
}
    // Render products
    container.innerHTML = yashProducts.map(product => `
        <div class="yash-product-card" data-category="${product.category}" data-id="${product.id}">
            <div class="yash-product-badges">
                ${product.isNew ? '<span class="yash-badge new">New</span>' : ''}
                ${product.isBestSeller ? '<span class="yash-badge best-seller">Bestseller</span>' : ''}
                ${product.discount ? `<span class="yash-badge discount">${product.discount}</span>` : ''}
            </div>
            <div class="yash-product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="yash-product-content">
                <div class="yash-product-category">${product.category}</div>
                <h3 class="yash-product-title">${product.name}</h3>
                <p class="yash-product-description">${product.description}</p>
                <div class="yash-product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}
                    <span class="yash-rating-count">(${product.reviews})</span>
                </div>
                <div class="yash-product-footer">
                    <div class="yash-product-price">
                        <span class="yash-product-quantity">500gm</span>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span class="yash-current-price">
                                ${product.price}
                                ${product.originalPrice ? `<span class="yash-original-price">${product.originalPrice}</span>` : ''}
                            </span>
                        </div>
                    </div>
                    <div style="width: 100%; display: flex; justify-content: center; margin-top: 10px;">
                        <a href="https://wa.me/918866791095?text=${encodeURIComponent(createWhatsAppMessage(product))}" 
                           class="yash-whatsapp-btn" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           aria-label="Order ${product.name} on WhatsApp"
                           style="display: inline-flex; justify-content: center;">
                            <i class="fab fa-whatsapp"></i>
                            <span>Order Now</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderYashProducts();
});
