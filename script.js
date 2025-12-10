// State
let currentLang = localStorage.getItem('lang') || 'ru';
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const langSelector = document.getElementById('language-selector');
const cartCount = document.querySelector('.cart-count');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    if (langSelector) {
        langSelector.value = currentLang;
        langSelector.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('lang', currentLang);
            updateContent();
            renderProducts(); // Re-render products to update names
        });
    }

    updateContent();
    updateCartCount();

    // Page specific logic
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        renderPopularProducts();
    } else if (window.location.pathname.includes('catalog.html')) {
        renderProducts();
    } else if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
});

// Update text content based on language
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// Render Popular Products (Home Page)
function renderPopularProducts() {
    const container = document.getElementById('popular-products');
    if (!container) return;

    const popularProducts = products.filter(p => p.popular).slice(0, 6); // Limit to 6
    container.innerHTML = popularProducts.map(product => createProductCard(product)).join('');
}

// Render All Products (Catalog Page)
function renderProducts() {
    const container = document.getElementById('catalog-products');
    if (!container) return;

    container.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Create Product Card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name[currentLang]}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name[currentLang]}</h3>
                <p class="product-price">${product.price} ${translations[currentLang].currency}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-i18n="addToCart">
                    ${translations[currentLang].addToCart}
                </button>
            </div>
        </div>
    `;
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name[currentLang]} added to cart!`); // Simple feedback
}

function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    const emptyMessage = document.getElementById('empty-cart-message');
    const cartContent = document.getElementById('cart-content');

    if (!container) return;

    if (cart.length === 0) {
        if (cartContent) cartContent.style.display = 'none';
        if (emptyMessage) emptyMessage.style.display = 'block';
        return;
    }

    if (cartContent) cartContent.style.display = 'block';
    if (emptyMessage) emptyMessage.style.display = 'none';

    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name[currentLang]}">
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.name[currentLang]}</h3>
                    <p class="cart-item-price">${item.price} ${translations[currentLang].currency}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i> &times;
                </button>
            </div>
        `;
    }).join('');

    if (totalElement) {
        totalElement.textContent = `${total} ${translations[currentLang].currency}`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}
