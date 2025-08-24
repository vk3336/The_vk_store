const khakhraProducts = [
    {
        id: 'k1',
        name: "Masala Khakhra",
        description: "Crispy and spicy traditional Gujarati khakhra",
        image: "images/Masala-Khakhra.png",
        currentPrice: "₹120",
        originalPrice: "₹150",
        discount: "20% OFF",
        weight: "200g",
        isPremium: true
    },
    {
        id: 'k2',
        name: "Methi Khakhra",
        description: "Healthy and crispy fenugreek flavored khakhra",
        image: "images/Methi-Khakhra-1.png",
        currentPrice: "₹140",
        originalPrice: "₹160",
        discount: "19% OFF",
        weight: "200g",
        isPremium: true
    },
    {
        id: 'k3',
        name: "Jeera Khakhra",
        description: "Crunchy cumin flavored khakhra",
        image: "images/jeerakhakhra1.jpg",
        currentPrice: "₹110",
        originalPrice: "₹140",
        discount: "21% OFF",
        weight: "200g",
        isPremium: true
    },
    {
        id: 'k4',
        name: "Plain Khakhra",
        description: "Classic and simple plain khakhra",
        image: "images/Sada-Khakhra.png",
        currentPrice: "₹100",
        originalPrice: "₹130",
        discount: "23% OFF",
        weight: "200g",
        isPremium: true
    }
];

// Make khakhra products available globally
window.khakhraProducts = khakhraProducts;

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { khakhraProducts };
}
