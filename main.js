// Skipbuy Luxury Ecommerce - Core Logic

// Premium Products Data
const products = [
    {
        id: 1,
        name: "Elysian Gold Chronograph",
        price: 1250.00,
        oldPrice: 1500.00,
        image: "hero-watch.png",
        category: "Accessories",
        badge: "Limited Edition"
    },
    {
        id: 2,
        name: "Phantom X Smartphone",
        price: 999.00,
        oldPrice: null,
        image: "smartphone.png",
        category: "Electronics",
        badge: "New Arrival"
    },
    {
        id: 3,
        name: "Noir Luxe Handbag",
        price: 450.00,
        oldPrice: 550.00,
        image: "handbag.png",
        category: "Fashion",
        badge: "Sale"
    },
    {
        id: 4,
        name: "Cloud Drift Sofa",
        price: 2400.00,
        oldPrice: null,
        image: "sofa.png",
        category: "Home Decor",
        badge: "Premium"
    },
    {
        id: 5,
        name: "Aura Noise-Cancelling Buds",
        price: 299.00,
        oldPrice: 350.00,
        image: "smartphone.png", // Reuse for demo
        category: "Electronics",
        badge: "Best Seller"
    },
    {
        id: 6,
        name: "Silk Minimalist Blouse",
        price: 180.00,
        oldPrice: null,
        image: "handbag.png", // Reuse for demo
        category: "Fashion",
        badge: null
    },
    {
        id: 7,
        name: "Titanium Tech Pad",
        price: 850.00,
        oldPrice: 950.00,
        image: "smartphone.png", // Reuse for demo
        category: "Electronics",
        badge: "Hot"
    },
    {
        id: 8,
        name: "Marble Coffee Table",
        price: 600.00,
        oldPrice: null,
        image: "sofa.png", // Reuse for demo
        category: "Home",
        badge: "New"
    }
];

// State
let cart = [];
let currentCategory = null;

// DOM Elements - Selection moved to a function for reliability
let productGrid, cartCount, cartSidebar, cartOverlay, cartItemsContainer, cartTotal, cartToggle, closeCart, header, trendingTitle, trendingSubtitle, viewAllBtn;

function initDOMElements() {
    productGrid = document.getElementById('product-grid');
    cartCount = document.getElementById('cart-count');
    cartSidebar = document.getElementById('cart-sidebar');
    cartOverlay = document.getElementById('cart-overlay');
    cartItemsContainer = document.getElementById('cart-items');
    cartTotal = document.getElementById('cart-total');
    cartToggle = document.querySelector('.cart-toggle');
    closeCart = document.querySelector('.close-cart');
    header = document.querySelector('header');
    trendingTitle = document.getElementById('trending-title');
    trendingSubtitle = document.getElementById('trending-subtitle');
    viewAllBtn = document.getElementById('view-all-btn');
}

// Initialize
function init() {
    initDOMElements();
    loadCart();
    renderProducts();
    setupEventListeners();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Render Products
function renderProducts() {
    if (!productGrid) return;
    
    let filteredProducts = products;
    if (currentCategory) {
        filteredProducts = products.filter(p => p.category.toLowerCase().includes(currentCategory.toLowerCase()));
        if (trendingTitle) trendingTitle.innerText = `${currentCategory} Collection`;
        if (trendingSubtitle) trendingSubtitle.innerText = `Explore our finest ${currentCategory.toLowerCase()} items.`;
        if (viewAllBtn) viewAllBtn.style.display = 'block';
    } else {
        if (trendingTitle) trendingTitle.innerText = `Trending Now`;
        if (trendingSubtitle) trendingSubtitle.innerText = `Most coveted items this week.`;
        if (viewAllBtn) viewAllBtn.style.display = 'none';
    }
    
    if (filteredProducts.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-gray);">No items found in this category.</p>';
        return;
    }

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            ${product.badge ? `<span class="badge-discount">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <p class="tag">${product.category}</p>
                <h3>${product.name}</h3>
                <div class="price-container">
                    ${product.oldPrice ? `<span class="discount">$${product.oldPrice.toFixed(2)}</span>` : ''}
                    <span class="price">$${product.price.toFixed(2)}</span>
                </div>
            </div>
            <div class="add-btn" onclick="addToCart(${product.id})">
                <i class="fa-solid fa-plus"></i>
            </div>
        </div>
    `).join('');
}

// Cart Functions
window.addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();
    openCartSidebar();
    
    // Tiny animation for the cart icon
    cartToggle.classList.add('pulse');
    setTimeout(() => cartToggle.classList.remove('pulse'), 300);
};

function updateCartUI() {
    if (!cartCount) return;
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your bag is empty.</p>';
        cartTotal.innerText = '$0.00';
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <span class="price">$${item.price.toFixed(2)}</span>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; cursor:pointer; margin-left:auto; color:#ccc;">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.innerText = `$${total.toFixed(2)}`;
    }
    
    saveCart();
}

function saveCart() {
    localStorage.setItem('skipbuy-cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('skipbuy-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};

function openCartSidebar() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Event Listeners
function setupEventListeners() {
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Cart Toggle
    cartToggle.addEventListener('click', (e) => {
        e.preventDefault();
        openCartSidebar();
    });

    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);

    // Checkout Button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            window.location.href = 'checkout.html';
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Category Explore Buttons
    const exploreBtns = document.querySelectorAll('.explore-btn');
    exploreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = btn.getAttribute('data-category');
            if (category) {
                currentCategory = category;
                renderProducts();
            }
        });
    });

    // View All Button
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            currentCategory = null;
            renderProducts();
        });
    }
}
