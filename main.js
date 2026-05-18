// Skipbuy Luxury Ecommerce - Core Logic

// Premium Products Data
const products = [
    {
        id: 1,
        name: "Elysian Gold Chronograph",
        description: "Timeless luxury crafted with 18k gold accents and precision movement.",
        price: 103999,
        oldPrice: 124999,
        image: "hero-watch.png",
        category: "Accessories",
        badge: "Limited Edition"
    },
    {
        id: 2,
        name: "Phantom X Smartphone",
        description: "Next-generation performance featuring an edge-to-edge OLED display.",
        price: 82999,
        oldPrice: null,
        image: "smartphone.png",
        category: "Electronics",
        badge: "New Arrival"
    },
    {
        id: 3,
        name: "Noir Luxe Handbag",
        description: "Premium calfskin leather handbag with a sleek minimalist silhouette.",
        price: 37500,
        oldPrice: 45999,
        image: "handbag.png",
        category: "Fashion",
        badge: "Sale"
    },
    {
        id: 4,
        name: "Cloud Drift Sofa",
        description: "Ultra-comfortable modular sofa with breathable premium boucle fabric.",
        price: 199999,
        oldPrice: null,
        image: "sofa.png",
        category: "Home Decor",
        badge: "Premium"
    },
    {
        id: 5,
        name: "Aura Noise-Cancelling Buds",
        description: "Immersive studio-quality audio with advanced active noise cancellation.",
        price: 24999,
        oldPrice: 29000,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
        category: "Electronics",
        badge: "Best Seller"
    },
    {
        id: 6,
        name: "Silk Minimalist Blouse",
        description: "100% pure organic mulberry silk blouse with a beautiful fluid drape.",
        price: 14999,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&q=80",
        category: "Fashion",
        badge: null
    },
    {
        id: 7,
        name: "Titanium Tech Pad",
        description: "Super-thin titanium tablet designed for professional creative power.",
        price: 70999,
        oldPrice: 78999,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
        category: "Electronics",
        badge: "Hot"
    },
    {
        id: 8,
        name: "Marble Coffee Table",
        description: "Stunning hand-polished white Carrara marble top with a brass frame.",
        price: 49999,
        oldPrice: null,
        image: "sofa.png",
        category: "Home",
        badge: "New"
    },
    {
        id: 9,
        name: "Nexus Pro Gaming PC",
        description: "Liquid-cooled powerhouse equipped with the ultimate graphics processing power.",
        price: 190999,
        oldPrice: 215999,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&q=80",
        category: "Gaming",
        badge: "Best Seller"
    },
    {
        id: 10,
        name: "Vortex RGB Gaming Tower",
        description: "Spectacular airflow design featuring customizable vibrant RGB lighting.",
        price: 149999,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
        category: "Gaming",
        badge: "New Arrival"
    },
    {
        id: 11,
        name: "Shadow Elite Gaming Rig",
        description: "Ultra-extreme performance engineered for competitive esports titles.",
        price: 265999,
        oldPrice: 298999,
        image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600&q=80",
        category: "Gaming",
        badge: "Limited Edition"
    },
    {
        id: 12,
        name: "AeroStride Running Shoes",
        description: "High-rebound nitrogen-infused foam cushion for effortless distance running.",
        price: 15999,
        oldPrice: 18999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
        category: "Sports",
        badge: "Sale"
    },
    {
        id: 13,
        name: "Carbon Pro Tennis Racket",
        description: "Super-lightweight aerospace carbon fiber frame offering perfect balance.",
        price: 20999,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=600&q=80",
        category: "Sports",
        badge: "New"
    },
    {
        id: 14,
        name: "PeakFit Smart Gym Set",
        description: "All-in-one smart strength training system with connected tracking.",
        price: 41999,
        oldPrice: 49999,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
        category: "Sports",
        badge: "Hot"
    },
    {
        id: 15,
        name: "Velocity Air Max Sneakers",
        description: "Legendary streetwear styling meets supreme shock-absorbing comfort.",
        price: 13499,
        oldPrice: 16499,
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&q=80",
        category: "Shoes",
        badge: "Sale"
    },
    {
        id: 16,
        name: "Luxe Leather Oxford Shoes",
        description: "Handcrafted Italian full-grain leather shoes for a timeless formal look.",
        price: 23199,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80",
        category: "Shoes",
        badge: "Premium"
    },
    {
        id: 17,
        name: "CloudWalk Comfort Slides",
        description: "Ergonomic recovery slides offering unparalleled cushion and soft support.",
        price: 7399,
        oldPrice: 9899,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80",
        category: "Shoes",
        badge: "Best Seller"
    },
    {
        id: 18,
        name: "LEGO Architect City Set",
        description: "Challenging model display set for passionate designers and hobbyists.",
        price: 10999,
        oldPrice: 12399,
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
        category: "Toys",
        badge: "Hot"
    },
    {
        id: 19,
        name: "RC Stunt Racer Pro",
        description: "High-speed 4WD stunt car designed for extreme 360-degree flips.",
        price: 6599,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1532330393533-443990a51d10?w=600&q=80",
        category: "Toys",
        badge: "New Arrival"
    },
    {
        id: 20,
        name: "Plush Galaxy Bear",
        description: "Lovably soft, premium star-pattern plush companion for all ages.",
        price: 3299,
        oldPrice: 4099,
        image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=600&q=80",
        category: "Toys",
        badge: "Trending"
    },
    {
        id: 21,
        name: "Noir Tailored Blazer",
        description: "Perfectly structured double-breasted wool blazer with sharp peak lapels.",
        price: 26999,
        oldPrice: 33199,
        image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&q=80",
        category: "Clothes",
        badge: "Sale"
    },
    {
        id: 22,
        name: "Linen Resort Co-ord Set",
        description: "Breathable pure French linen shirt and matching casual trousers.",
        price: 11999,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80",
        category: "Clothes",
        badge: "New"
    },
    {
        id: 23,
        name: "Urban Denim Jacket",
        description: "Vintage-washed heavy Japanese denim jacket built to last a lifetime.",
        price: 16499,
        oldPrice: 20499,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80",
        category: "Clothes",
        badge: "Trending"
    },
    {
        id: 24,
        name: "Atlas Home Assistant Robot",
        description: "Smart home robotic assistant with advanced voice interaction.",
        price: 124999,
        oldPrice: 149999,
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
        category: "Robots",
        badge: "Limited Edition"
    },
    {
        id: 25,
        name: "Mochi Mini Companion Bot",
        description: "Adorable interactive AI desktop robot companion with expressions.",
        price: 33199,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80",
        category: "Robots",
        badge: "New Arrival"
    },
    {
        id: 26,
        name: "Titan Industrial Arm Bot",
        description: "Precision-engineered programmable robotic arm for advanced automation.",
        price: 414999,
        oldPrice: 497999,
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
        category: "Robots",
        badge: "Premium"
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

// Format price beautifully in Indian Rupees (INR)
function formatPrice(value) {
    if (value === null || value === undefined) return '';
    return '₹' + value.toLocaleString('en-IN');
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
                <p class="product-desc">${product.description || ''}</p>
                <div class="price-container">
                    ${product.oldPrice ? `<span class="discount">${formatPrice(product.oldPrice)}</span>` : ''}
                    <span class="price">${formatPrice(product.price)}</span>
                </div>
            </div>
            <div class="add-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                <i class="fa-solid fa-cart-plus"></i>
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
        cartTotal.innerText = '₹0';
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <span class="price">${formatPrice(item.price)}</span>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; cursor:pointer; margin-left:auto; color:#ccc;">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.innerText = formatPrice(total);
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
