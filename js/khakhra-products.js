const khakhraProducts = [
    {
        id: 'k1',
        name: "Masala Khakhra",
        description: "Crispy and spicy traditional Gujarati khakhra",
        image: "images/namkeenproduct/masala-khakhra.jpg",
        currentPrice: "₹100",
        originalPrice: "₹130",
        discount: "23% OFF",
        weight: "500gm",
        isPremium: true
    },
    {
        id: 'k2',
        name: "Methi Khakhra",
        description: "Healthy and crispy fenugreek flavored khakhra",
        image: "images/namkeenproduct/Methi-Masala-Khakhra.jpg",
        currentPrice: "₹100",
        originalPrice: "₹130",
        discount: "23% OFF",
        weight: "500gm",
        isPremium: true
    },
    {
        id: 'k3',
        name: "Jeera Khakhra",
        description: "Crunchy cumin flavored khakhra",
        image: "images/namkeenproduct/jeerakhakhra.webp",
        currentPrice: "₹100",
        originalPrice: "₹130",
        discount: "23% OFF",
        weight: "500gm",
        isPremium: true
    },
    {
        id: 'k4',
        name: "Plain Khakhra",
        description: "Classic and simple plain khakhra",
        image: "images/namkeenproduct/sadakhakhra.jpg",
        currentPrice: "₹100",
        originalPrice: "₹130",
        discount: "23% OFF",
        weight: "500gm",
        isPremium: true
    }
];

// Make khakhra products available globally
window.khakhraProducts = khakhraProducts;

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { khakhraProducts };
}
