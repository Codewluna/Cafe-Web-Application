/* ============================================================
   BROWNIE BEAR CAFÉ — app.js
   Loaded from index.html via <script src="app.js" defer></script>
   ============================================================ */

// ===== MENU DATA =====
const MENU = [
  // BOBA
  { id: 1,  cat: 'boba',        emoji: '🧋', name: 'Classic Brown Sugar Boba',    desc: 'Silky milk tea with tiger-stripe brown sugar pearls & fresh milk froth.',              price: 220, badge: 'popular' },
  { id: 2,  cat: 'boba',        emoji: '🍵', name: 'Taro Cloud Milk Tea',           desc: 'Creamy taro blended into a dreamy lavender-hued milk tea with chewy pearls.',         price: 240, badge: 'popular' },
  { id: 3,  cat: 'boba',        emoji: '🍓', name: 'Strawberry Rose Boba',          desc: 'Blush-pink strawberry milk with rose syrup and white tapioca pearls.',                price: 230, badge: 'new'     },
  { id: 4,  cat: 'boba',        emoji: '🍫', name: 'Chocolate Bear Boba',           desc: 'Rich Belgian chocolate milk, cocoa pearls and a dusting of cocoa snow.',              price: 250, badge: null      },
  { id: 5,  cat: 'boba',        emoji: '🍈', name: 'Matcha Honey Milk Tea',         desc: 'Ceremonial grade matcha with local honey, creamy milk and soft pearls.',              price: 260, badge: 'new'     },

  // COFFEE
  { id: 6,  cat: 'coffee',      emoji: '☕', name: 'Bear Latte',                    desc: 'Double espresso with silky steamed oat milk, topped with a latte art bear.',          price: 200, badge: 'popular' },
  { id: 7,  cat: 'coffee',      emoji: '🧊', name: 'Brown Sugar Cold Brew',         desc: '18-hour cold brew steeped, sweetened with house-made brown sugar syrup.',             price: 220, badge: null      },
  { id: 8,  cat: 'coffee',      emoji: '🌸', name: 'Rose Cardamom Cappuccino',      desc: 'Velvety cappuccino infused with rose water and a hint of green cardamom.',            price: 210, badge: 'new'     },
  { id: 9,  cat: 'coffee',      emoji: '🍯', name: 'Honey Lavender Flat White',     desc: 'Ristretto shots, lavender-infused milk and a golden honey drizzle.',                  price: 230, badge: 'popular' },
  { id: 10, cat: 'coffee',      emoji: '🌿', name: 'Vietnamese Coconut Coffee',     desc: 'Robust Vietnamese drip over sweetened condensed coconut cream.',                      price: 195, badge: null      },
  { id: 11, cat: 'coffee',      emoji: '🫧', name: 'Dalgona Mocha Cloud',           desc: 'Whipped mocha foam atop iced whole milk — fluffy as a dream.',                        price: 240, badge: 'popular' },

  // DESSERTS
  { id: 12, cat: 'dessert',     emoji: '🍮', name: 'Bear Paw Crème Brûlée',        desc: 'Classic French custard with caramelised sugar crust, served in a bear-paw ramekin.', price: 180, badge: 'popular' },
  { id: 13, cat: 'dessert',     emoji: '🍫', name: 'Warm Brownie Stack',            desc: 'Three-layer chocolate brownie with vanilla bean gelato and salted caramel sauce.',    price: 200, badge: null      },
  { id: 14, cat: 'dessert',     emoji: '🍓', name: 'Strawberry Mochi Plate',        desc: 'Soft mochi filled with strawberry cream and dusted with matcha sugar.',               price: 160, badge: 'new'     },
  { id: 15, cat: 'dessert',     emoji: '🧁', name: 'Brown Butter Lava Cake',        desc: 'Mini fondant cake with a molten brown butter core, served warm.',                     price: 210, badge: 'popular' },

  // CONTINENTAL
  { id: 16, cat: 'continental', emoji: '🍕', name: 'Truffle Mushroom Pizza',        desc: 'Sourdough base, truffle cream, wild mushroom medley, parmesan and fresh arugula.',   price: 450, badge: 'popular' },
  { id: 17, cat: 'continental', emoji: '🍕', name: 'Roasted Tomato & Brie Pizza',   desc: 'Heirloom tomatoes, creamy brie, caramelised onion jam and fresh basil.',              price: 420, badge: null      },
  { id: 18, cat: 'continental', emoji: '🍝', name: 'Brown Butter Sage Pasta',       desc: 'Hand-made pappardelle tossed in sage brown butter, toasted walnuts and pecorino.',   price: 380, badge: 'popular' },
  { id: 19, cat: 'continental', emoji: '🍝', name: 'Cacio e Pepe Rigatoni',         desc: 'Classic Roman pasta with three-pepper blend and aged pecorino romano.',               price: 360, badge: null      },
  { id: 20, cat: 'continental', emoji: '🥘', name: 'Ratatouille Provençal',         desc: 'Slow-roasted Provençal vegetables layered over creamy polenta.',                      price: 340, badge: 'new'     },

  // STARTERS
  { id: 21, cat: 'starter',     emoji: '🥗', name: 'Burrata Garden Salad',          desc: 'Fresh burrata, heirloom tomatoes, basil oil, candied walnuts and balsamic pearls.',  price: 280, badge: 'popular' },
  { id: 22, cat: 'starter',     emoji: '🧀', name: 'Loaded Cheese Focaccia',        desc: 'Homemade focaccia topped with gooey cheese blend and rosemary sea salt.',            price: 220, badge: null      },
  { id: 23, cat: 'starter',     emoji: '🍜', name: 'Tom Kha Coconut Soup',          desc: 'Fragrant Thai coconut soup with lemongrass, galangal and oyster mushrooms.',         price: 200, badge: 'new'     },
  { id: 24, cat: 'starter',     emoji: '🥟', name: 'Pan-Seared Gyoza',              desc: '6-piece gyoza pan-seared crisp, filled with spiced veggies and tofu.',               price: 260, badge: 'popular' },
  { id: 25, cat: 'starter',     emoji: '🫙', name: 'Hummus & Pita Board',           desc: 'Roasted garlic hummus with warm pita, olive oil, smoked paprika and dukkah.',        price: 240, badge: null      },

  // MAIN COURSE
  { id: 26, cat: 'main',        emoji: '🍛', name: 'Dal Makhani with Naan',         desc: 'Slow-cooked black lentils in rich tomato butter gravy, served with garlic naan.',    price: 320, badge: 'popular' },
  { id: 27, cat: 'main',        emoji: '🍲', name: 'Paneer Tikka Masala',           desc: 'Charred cottage cheese in velvety spiced tomato gravy with steamed basmati.',        price: 340, badge: null      },
  { id: 28, cat: 'main',        emoji: '🥘', name: 'Mushroom Stroganoff Bowl',      desc: 'Creamy stroganoff with wild mushrooms, dill and egg noodles.',                       price: 360, badge: 'new'     },
  { id: 29, cat: 'main',        emoji: '🍱', name: "Bear's Teriyaki Bowl",          desc: 'Caramelised tofu teriyaki over jasmine rice with pickled cucumber and sesame.',      price: 330, badge: 'popular' },
  { id: 30, cat: 'main',        emoji: '🫕', name: 'Thai Green Curry',              desc: 'Fragrant green curry with vegetables, Thai basil and coconut cream rice.',            price: 350, badge: null      },
];

// ===== CATEGORY CONFIG =====
const catConfig = {
  boba:        { label: 'Boba Drinks',      sub: 'Handcrafted tapioca pearl beverages'       },
  coffee:      { label: 'Specialty Coffee', sub: 'Artisan coffee preparations'               },
  dessert:     { label: 'Desserts',         sub: 'Sweet endings worth waiting for'           },
  continental: { label: 'Continental',      sub: 'Pizzas, pastas & European favourites'      },
  starter:     { label: 'Starters',         sub: 'Light bites to begin your journey'         },
  main:        { label: 'Main Course',      sub: 'Heartwarming mains crafted with love'      },
};

// ===== STATE =====
let cart        = [];
let currentUser = null;
const users     = JSON.parse(localStorage.getItem('bb_users') || '[]');

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  renderMenu('all');
  checkLoggedInUser();
});

function checkLoggedInUser() {
  const saved = localStorage.getItem('bb_current_user');
  if (saved) {
    currentUser = JSON.parse(saved);
    updateAuthUI();
  }
}

// ===== FLOATING PARTICLES =====
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const colors = [
    'rgba(196,136,90,0.6)',
    'rgba(212,165,116,0.5)',
    'rgba(228,192,160,0.4)',
    'rgba(245,212,212,0.4)',
  ];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 6 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(p);
  }
}

// ===== PAGE NAVIGATION =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(id);
  page.classList.add('active', 'page-fade-in');
  setTimeout(() => page.classList.remove('page-fade-in'), 400);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'payment') updatePaymentPage();
}

function scrollToSection(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// ===== MENU RENDERING =====
function renderMenu(filter) {
  const container = document.getElementById('menuContent');
  if (!container) return;
  container.innerHTML = '';

  const categories = filter === 'all' ? Object.keys(catConfig) : [filter];

  categories.forEach(cat => {
    const items = MENU.filter(i => i.cat === cat);
    if (!items.length) return;

    const sec = document.createElement('div');
    sec.className  = 'menu-section';
    sec.setAttribute('data-cat', cat);
    sec.innerHTML  = `
      <div class="menu-section-title">${catConfig[cat].label}</div>
      <div class="menu-section-sub">${catConfig[cat].sub}</div>
      <div class="items-grid">
        ${items.map(item => `
          <div class="item-card">
            <div class="item-top">
              <div style="font-size:2rem;">${item.emoji}</div>
              ${item.badge
                ? `<span class="item-badge badge-${item.badge}">
                     ${item.badge === 'popular' ? '⭐ Popular'
                       : item.badge === 'new'   ? '✦ New'
                       : '🌶 Spicy'}
                   </span>`
                : ''}
            </div>
            <div class="item-info">
              <div class="item-name">${item.name}</div>
              <div class="item-desc">${item.desc}</div>
            </div>
            <div class="item-bottom">
              <div class="item-price"><span>₹</span>${item.price}</div>
              <button class="add-btn" onclick="addToCart(${item.id})" title="Add to order">+</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(sec);
  });
}

function filterMenu(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(cat);
}

// ===== CART =====
function addToCart(itemId) {
  if (!currentUser) {
    showToast('🔒 Please login to place an order!');
    openAuthModal('login');
    return;
  }
  const item     = MENU.find(i => i.id === itemId);
  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartUI();
  showToast(`${item.emoji} ${item.name} added!`);
  animateCartBadge();
}

function updateCartUI() {
  const total     = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count     = cart.reduce((s, i) => s + i.qty, 0);
  const badge     = document.getElementById('cartBadge');
  const container = document.getElementById('cartItems');
  const footer    = document.getElementById('cartFooter');

  // Update badge
  badge.textContent = count;
  count > 0 ? badge.classList.add('show') : badge.classList.remove('show');

  // Empty state
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🧺</div>
        <div class="cart-empty-text">Your basket is empty</div>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  // Populated state
  footer.style.display = 'block';
  document.getElementById('cartTotal').textContent = `₹${total}`;

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} each</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartDrawer').classList.toggle('open');
}

function animateCartBadge() {
  const badge = document.getElementById('cartBadge');
  badge.style.animation = 'none';
  badge.offsetHeight; // force reflow
  badge.style.animation = 'badgePop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
}

function goToCheckout() {
  if (!currentUser) {
    showToast('🔒 Please login first!');
    openAuthModal('login');
    return;
  }
  if (cart.length === 0) {
    showToast('🧺 Your cart is empty!');
    return;
  }
  toggleCart();
  showPage('payment');
}

function clearCart() {
  cart = [];
  updateCartUI();
}

// ===== PAYMENT =====
function updatePaymentPage() {
  const itemsContainer = document.getElementById('paymentItems');
  const total          = cart.reduce((s, i) => s + i.price * i.qty, 0);

  itemsContainer.innerHTML = cart.length
    ? cart.map(item => `
        <div class="summary-item">
          <span>${item.emoji} ${item.name} × ${item.qty}</span>
          <span>₹${item.price * item.qty}</span>
        </div>`).join('')
    : '<div class="summary-item"><span>No items</span></div>';

  document.getElementById('paymentTotal').textContent  = `₹${total}`;
  document.getElementById('payBtnAmount').textContent  = `₹${total}`;
  document.getElementById('paymentSuccess').classList.remove('show');
  document.getElementById('paymentFormView').style.display = 'block';
}

function selectPayMethod(el) {
  document.querySelectorAll('.pay-method').forEach(m => m.classList.remove('active'));
  el.classList.add('active');
}

function formatCard(input) {
  let v    = input.value.replace(/\D/g, '').substring(0, 16);
  v        = v.replace(/(.{4})/g, '$1 ').trim();
  input.value = v;
}

function processPayment() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (total === 0) { showToast('🧺 Nothing to pay!'); return; }

  const btn      = document.querySelector('#paymentFormView .btn-primary:last-child');
  btn.textContent = 'Processing... ✦';
  btn.style.opacity = '0.7';
  btn.disabled   = true;

  setTimeout(() => {
    document.getElementById('paymentFormView').style.display = 'none';
    document.getElementById('paymentSuccess').classList.add('show');
  }, 2000);
}

// ===== AUTH =====
function openAuthModal(tab) {
  document.getElementById('authModal').classList.add('open');
  switchAuthTab(tab);
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('open');
}

function switchAuthTab(tab) {
  document.querySelectorAll('.modal-tab').forEach((t, i) => {
    t.classList.toggle('active',
      (i === 0 && tab === 'login') || (i === 1 && tab === 'register')
    );
  });
  document.getElementById('loginForm').classList.toggle('active', tab === 'login');
  document.getElementById('registerForm').classList.toggle('active', tab === 'register');
  clearAuthMessages();
}

function clearAuthMessages() {
  ['loginError', 'loginSuccess', 'registerError', 'registerSuccess'].forEach(id => {
    const el = document.getElementById(id);
    el.style.display = 'none';
    el.textContent   = '';
  });
}

function showAuthMsg(id, msg) {
  const el = document.getElementById(id);
  el.textContent   = msg;
  el.style.display = 'block';
}

function handleRegister() {
  const name     = document.getElementById('registerName').value.trim();
  const email    = document.getElementById('registerEmail').value.trim();
  const password = document.getElementById('registerPassword').value;

  clearAuthMessages();

  if (!name)                                          return showAuthMsg('registerError', 'Please enter your name.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                                                      return showAuthMsg('registerError', 'Please enter a valid email.');
  if (password.length < 6)                            return showAuthMsg('registerError', 'Password must be at least 6 characters.');

  const existing = users.find(u => u.email === email);
  if (existing) return showAuthMsg('registerError', 'This email is already registered. Please login.');

  const newUser = { name, email, password, id: Date.now() };
  users.push(newUser);
  localStorage.setItem('bb_users', JSON.stringify(users));

  showAuthMsg('registerSuccess', '🎉 Account created! Logging you in...');
  setTimeout(() => {
    currentUser = newUser;
    localStorage.setItem('bb_current_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
    showToast(`🐻 Welcome, ${name}!`);
  }, 1200);
}

function handleLogin() {
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  clearAuthMessages();

  if (!email)    return showAuthMsg('loginError', 'Please enter your email.');
  if (!password) return showAuthMsg('loginError', 'Please enter your password.');

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return showAuthMsg('loginError', 'Invalid email or password. Please try again.');

  currentUser = user;
  localStorage.setItem('bb_current_user', JSON.stringify(currentUser));
  showAuthMsg('loginSuccess', `✓ Welcome back, ${user.name}!`);
  setTimeout(() => {
    updateAuthUI();
    closeAuthModal();
    showToast(`☕ Welcome back, ${user.name}!`);
  }, 900);
}

function logout() {
  currentUser = null;
  localStorage.removeItem('bb_current_user');
  cart = [];
  updateCartUI();
  updateAuthUI();
  showToast('👋 See you soon!');
}

function updateAuthUI() {
  const loginBtn   = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const indicator  = document.getElementById('userIndicator');
  const nameDisplay = document.getElementById('userNameDisplay');

  if (currentUser) {
    loginBtn.style.display   = 'none';
    registerBtn.style.display = 'none';
    indicator.classList.add('show');
    nameDisplay.textContent  = currentUser.name.split(' ')[0];
  } else {
    loginBtn.style.display   = 'block';
    registerBtn.style.display = 'block';
    indicator.classList.remove('show');
  }
}

// ===== TOAST =====
function showToast(msg, duration = 3000) {
  const container = document.getElementById('toastContainer');
  const toast     = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ===== RIPPLE EFFECT =====
document.addEventListener('click', function (e) {
  const btn = e.target.closest('button, .menu-preview-card, .item-card');
  if (!btn) return;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${e.clientX - rect.left - size / 2}px;
    top: ${e.clientY - rect.top - size / 2}px;
  `;
  btn.style.position = 'relative';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// ===== CLOSE AUTH MODAL ON OVERLAY CLICK =====
document.getElementById('authModal').addEventListener('click', function (e) {
  if (e.target === this) closeAuthModal();
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 50
    ? 'rgba(26,15,10,0.98)'
    : 'linear-gradient(180deg, rgba(26,15,10,0.98) 0%, rgba(26,15,10,0.85) 100%)';
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  closeAuthModal();
  const cartDrawer = document.getElementById('cartDrawer');
  if (cartDrawer.classList.contains('open')) toggleCart();
});
