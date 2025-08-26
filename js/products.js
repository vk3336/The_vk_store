const products = [
    {
        id: 1,
        name: "Mix Chavana",
        description: "Premium quality traditional namkeen with authentic flavors",
        image: "images/namkeenproduct/mixchavana.avif",
        currentPrice: "₹120",
        originalPrice: "₹150",
        discount: "20% OFF",
        category: "namkeen",
        isPremium: true
    },
    {
        id: 2,
        name: "Gopal Namkeen",
        description: "Crunchy and flavorful traditional snack mix",
        image: "images/gopal.png",
        currentPrice: "₹135",
        originalPrice: "₹170",
        discount: "21% OFF",
        category: "namkeen",
        isPremium: true
    },
    {
        id: 3,
        name: "Balaji Wafers",
        description: "Crispy and light potato wafers with perfect seasoning",
        image: "images/balajiwafers.png",
        currentPrice: "₹110",
        originalPrice: "₹140",
        discount: "21% OFF",
        category: "snacks",
        isPremium: true
    },
    {
        id: 4,
        name: "Britania Cookies",
        description: "Delicious and crispy cookies in various flavors",
        image: "images/britania.png",
        currentPrice: "₹95",
        originalPrice: "₹120",
        discount: "21% OFF",
        category: "biscuits",
        isPremium: true
    },
    // Add more products as needed
];

// Function to get products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}

// Function to get premium products
function getPremiumProducts() {
    return products.filter(product => product.isPremium);
}

// Make functions available globally
window.productsData = {
    products,
    getProductsByCategory,
    getPremiumProducts
};

// Export for Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        products, 
        getProductsByCategory, 
        getPremiumProducts 
    };
}
