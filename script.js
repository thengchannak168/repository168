/* ==========================================================================
   CAFE SHOP - SHARED JAVASCRIPT (script.js)
   មានមតិយោបល់ពន្យល់ (Notes) អំពី JS Properties, Methods & Logic
   ========================================================================== */

// អត្រាប្តូរប្រាក់: 1 ដុល្លារ = 4,100 រៀល
const EXCHANGE_RATE = 4100;

// ទិន្នន័យម៉ឺនុយភេសជ្ជៈ និងនំ (Array of Objects)
const menuItems = [
    {
        id: 1,
        category: "hot",
        name: { km: "អេសប្រេសូ ក្តៅ (Hot Espresso)", en: "Hot Espresso" },
        desc: { km: "កាហ្វេសុទ្ធរសជាតិเข้มข้น ឈ្ងុយឆ្ងាញ់ពីគ្រាប់កាហ្វេអារ៉ាប៊ីកា", en: "Rich, full-bodied single shot from freshly roasted Arabica beans." },
        price: 2.25,
        featured: true,
        img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        category: "hot",
        name: { km: "កាពូឈីណូ (Cappuccino)", en: "Cappuccino" },
        desc: { km: "អេសប្រេសូលាយជាមួយទឹកដោះគោក្តៅ និងពពុះទឹកដោះគោទន់រលោង", en: "Balanced espresso with steamed milk and thick velvety microfoam." },
        price: 3.00,
        featured: false,
        img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        category: "iced",
        name: { km: "អាយស៍ ឡាតេ (Iced Caffe Latte)", en: "Iced Caffe Latte" },
        desc: { km: "កាហ្វេទឹកដោះគោទឹកកកត្រជាក់ចិត្ត ផ្អែមល្មម", en: "Chilled espresso poured over cold fresh milk and crystal ice." },
        price: 3.25,
        featured: true,
        img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        category: "iced",
        name: { km: "ការ៉ាមែល ម៉ាគីយ៉ាតូ (Caramel Macchiato)", en: "Iced Caramel Macchiato" },
        desc: { km: "កាហ្វេទឹកដោះគោស្រស់ស្រោចដោយទឹកស្ករការ៉ាមែលឈ្ងុយ", en: "Vanilla-infused milk layered with espresso and rich caramel drizzle." },
        price: 3.75,
        featured: false,
        img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        category: "tea",
        name: { km: "ម៉ាត់ឆា ឡាតេ (Matcha Green Tea Latte)", en: "Matcha Green Tea Latte" },
        desc: { km: "ម្សៅតែបៃតងជប៉ុនសុទ្ធ លាយជាមួយទឹកដោះគោស្រស់", en: "Ceremonial-grade Japanese matcha whisked with creamy milk." },
        price: 3.50,
        featured: true,
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        category: "bakery",
        name: { km: "នំក្រូសង់ ប៊័រស្រស់ (Butter Croissant)", en: "French Butter Croissant" },
        desc: { km: "នំដុតថ្មីៗរៀងរាល់ព្រឹក ស្រួយក្រៅទន់ក្នុង", en: "Flaky, golden-baked pastry made with imported French butter." },
        price: 2.50,
        featured: false,
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
    }
];

// វចនានុក្រមបកប្រែភាសាខ្មែរ និងអង់គ្លេស (i18n Object)
const translations = {
    km: {
        nav_home: "ទំព័រដើម",
        nav_menu: "ម៉ឺនុយ",
        nav_about: "អំពីយើង",
        nav_contact: "ទំនាក់ទំនង",
        cart_btn: "កន្ត្រក",
        hero_title: "រសជាតិកាហ្វេពិត ផ្តើមចេញពីក្តីស្រឡាញ់",
        hero_sub: "ស្វាគមន៍មកកាន់ Cafe Shop — កន្លែងសម្រាកលំហែដ៏កក់ក្តៅ ជាមួយកាហ្វេលីងថ្មីៗ និងនំដុតឈ្ងុយឆ្ងាញ់រៀងរាល់ថ្ងៃ។",
        btn_order_now: "មើលម៉ឺនុយទាំងអស់",
        btn_book_table: "កក់តុឥឡូវនេះ",
        featured_title: "ភេសជ្ជៈពេញនិយមប្រចាំហាង",
        featured_sub: "ជម្រើសដែលអតិថិជនរបស់យើងចូលចិត្តបំផុត",
        menu_page_title: "ម៉ឺនុយភេសជ្ជៈ និងនំ",
        menu_page_sub: "ជ្រើសរើសរសជាតិដែលអ្នកពេញចិត្ត ហើយបញ្ជាទិញភ្លាមៗ",
        filter_all: "ទាំងអស់",
        filter_hot: "កាហ្វេក្តៅ",
        filter_iced: "កាហ្វេទឹកកក",
        filter_tea: "តែ & ម៉ាត់ឆា",
        filter_bakery: "នំដុត",
        search_placeholder: "ស្វែងរកភេសជ្ជៈ...",
        add_to_cart: "+ ដាក់កន្ត្រក",
        about_page_title: "អំពី Cafe Shop របស់យើង",
        about_page_sub: "ដំណើរនៃការបង្កើតក្តីស្រមៃ និងស្នាដៃឆុងកាហ្វេប្រកបដោយគុណភាព",
        story_title: "រឿងរ៉ាវរបស់យើង",
        story_p1: "Cafe Shop ត្រូវបានបង្កើតឡើងក្នុងឆ្នាំ ២០២២ ដោយក្តីស្រឡាញ់ចំពោះគ្រាប់កាហ្វេក្នុងស្រុក និងអន្តរជាតិ។ យើងជឿជាក់ថាកាហ្វេមួយពែងមិនត្រឹមតែជាភេសជ្ជៈប៉ុណ្ណោះទេ ប៉ុន្តែជាស្ពានភ្ជាប់ទំនាក់ទំនង និងការចែករំលែកភាពរីករាយ។",
        story_p2: "គ្រាប់កាហ្វេរបស់យើងត្រូវបានជ្រើសរើសយ៉ាងសម្រិតសម្រាំងពីចម្ការកាហ្វេនៅខេត្តមណ្ឌលគិរី និងតំបន់ខ្ពង់រាប ហើយលីងថ្មីៗរៀងរាល់សប្តាហ៍ដើម្បីរក្សាក្លិនឈ្ងុយធម្មជាតិ។",
        values_title: "គុណតម្លៃស្នូលរបស់យើង",
        val1_title: "គ្រាប់កាហ្វេគុណភាពខ្ពស់",
        val1_desc: "ប្រើប្រាស់គ្រាប់កាហ្វេអារ៉ាប៊ីកា ១០០% ដែលលីងថ្មីៗជានិច្ច។",
        val2_title: "បរិយាកាសកក់ក្តៅ",
        val2_desc: "រចនាឡើងសម្រាប់ការជួបជុំមិត្តភក្តិ ការសិក្សា និងការធ្វើការងារប្រកបដោយផាសុកភាព។",
        val3_title: "សេវាកម្មរួសរាយរាក់ទាក់",
        val3_desc: "ក្រុមការងារ Barista ជំនាញរង់ចាំបម្រើលោកអ្នកដោយស្នាមញញឹម។",
        contact_page_title: "ទំនាក់ទំនង & កក់តុ",
        contact_page_sub: "កក់តុទុកជាមុន ឬផ្ញើសារមកកាន់ក្រុមការងារយើងខ្ញុំ",
        booking_title: "ទម្រង់កក់តុ (Table Reservation)",
        label_name: "ឈ្មោះរបស់អ្នក",
        label_phone: "លេខទូរស័ព្ទ",
        label_date: "កាលបរិច្ឆេទ",
        label_time: "ម៉ោង",
        label_guests: "ចំនួនភ្ញៀវ",
        label_note: "សំណូមពរបន្ថែម",
        btn_submit_booking: "បញ្ជាក់ការកក់តុ",
        info_title: "ព័ត៌មានទីតាំងហាង",
        cart_title: "កន្ត្រកបញ្ជាទិញ",
        cart_total: "សរុបរួម៖",
        btn_checkout: "បញ្ជាទិញឥឡូវនេះ",
        footer_desc: "ហាងកាហ្វេដែលផ្តល់ជូននូវរសជាតិកាហ្វេពិត និងបរិយាកាសដ៏ស្រស់ស្រាយ។",
        footer_links_title: "តំណភ្ជាប់រហ័ស",
        footer_hours_title: "ម៉ោងបើកដំណើរការ",
        footer_hours_1: "ច័ន្ទ - សុក្រ: 7:00 AM - 9:00 PM",
        footer_hours_2: "សៅរ៍ - អាទិត្យ: 7:30 AM - 10:00 PM"
    },
    en: {
        nav_home: "Home",
        nav_menu: "Menu",
        nav_about: "About Us",
        nav_contact: "Contact",
        cart_btn: "Cart",
        hero_title: "Authentic Coffee Crafted With Passion",
        hero_sub: "Welcome to Cafe Shop — your cozy neighborhood retreat for freshly roasted specialty coffee and artisanal pastries every day.",
        btn_order_now: "Explore Full Menu",
        btn_book_table: "Book a Table",
        featured_title: "Signature Favorites",
        featured_sub: "Our customers' most loved handcrafted beverages",
        menu_page_title: "Our Menu & Bakery",
        menu_page_sub: "Choose your favorite drink or pastry and add it to your order",
        filter_all: "All Items",
        filter_hot: "Hot Coffee",
        filter_iced: "Iced Coffee",
        filter_tea: "Tea & Matcha",
        filter_bakery: "Bakery",
        search_placeholder: "Search drinks...",
        add_to_cart: "+ Add to Cart",
        about_page_title: "About Cafe Shop",
        about_page_sub: "Our journey of crafting memorable coffee experiences",
        story_title: "Our Story",
        story_p1: "Founded in 2022, Cafe Shop began with a simple passion for locally grown and international specialty coffee beans. We believe a great cup of coffee brings people together.",
        story_p2: "We partner directly with highlands farmers in Mondulkiri and roast in small batches every week to ensure peak freshness and rich aroma in every cup.",
        values_title: "Our Core Values",
        val1_title: "100% Specialty Beans",
        val1_desc: "Freshly roasted Arabica beans selected for superior flavor.",
        val2_title: "Cozy Atmosphere",
        val2_desc: "Thoughtfully designed spaces for study, remote work, and relaxing.",
        val3_title: "Warm Hospitality",
        val3_desc: "Skilled baristas dedicated to serving every cup with care.",
        contact_page_title: "Contact & Table Booking",
        contact_page_sub: "Reserve your table ahead or reach out to our team",
        booking_title: "Table Reservation Form",
        label_name: "Your Name",
        label_phone: "Phone Number",
        label_date: "Date",
        label_time: "Time",
        label_guests: "Number of Guests",
        label_note: "Special Requests",
        btn_submit_booking: "Confirm Reservation",
        info_title: "Visit Our Cafe",
        cart_title: "Your Order Cart",
        cart_total: "Total:",
        btn_checkout: "Place Order Now",
        footer_desc: "Serving freshly roasted coffee and warm moments every single day.",
        footer_links_title: "Quick Links",
        footer_hours_title: "Opening Hours",
        footer_hours_1: "Mon - Fri: 7:00 AM - 9:00 PM",
        footer_hours_2: "Sat - Sun: 7:30 AM - 10:00 PM"
    }
};

// State Management: រក្សាទុកភាសា និងកន្ត្រកទំនិញក្នុង localStorage ដើម្បីកុំឱ្យបាត់ពេលប្តូរទំព័រ (Page Navigation)
let currentLang = localStorage.getItem("cafe_lang") || "km";
let cart = JSON.parse(localStorage.getItem("cafe_cart")) || [];
let currentCategory = "all";

// មុខងារបំប្លែងតម្លៃដុល្លារទៅជារៀល (Format KHR)
function formatKHR(usdAmount) {
    const riel = Math.round((usdAmount * EXCHANGE_RATE) / 100) * 100;
    return riel.toLocaleString("en-US") + " ៛";
}

// មុខងារប្តូរភាសា (Language Switcher)
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("cafe_lang", lang); // រក្សាទុកក្នុង Browser
    document.documentElement.lang = lang;

    // ស្វែងរកធាតុទាំងអស់ដែលមាន attribute [data-i18n] ហើយប្តូរអត្ថបទ
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // ប្តូរ Placeholder ក្នុងប្រអប់ស្វែងរក
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.placeholder = translations[lang].search_placeholder;
    }

    // ប្តូរពណ៌ប៊ូតុងភាសា
    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
        langBtn.textContent = lang === "km" ? "EN 🇬🇧" : "ខ្មែរ 🇰🇭";
    }

    // បង្ហាញកាតម៉ឺនុយ និងកន្ត្រកឡើងវិញតាមភាសាថ្មី
    renderMenuCards();
    renderFeaturedCards();
    renderCart();
}

// មុខងារបង្កើត HTML សម្រាប់កាតផលិតផលនីមួយៗ
function createItemCardHTML(item) {
    return `
        <article class="card">
            <img src="${item.img}" alt="${item.name[currentLang]}" class="card-img" loading="lazy">
            <div class="card-body">
                <span class="card-category">${item.category}</span>
                <h3 class="card-title">${item.name[currentLang]}</h3>
                <p class="card-desc">${item.desc[currentLang]}</p>
                <div class="card-footer">
                    <div class="price-tag">
                        $${item.price.toFixed(2)}
                        <span class="price-khr">${formatKHR(item.price)}</span>
                    </div>
                    <button class="btn btn-primary" onclick="addToCart(${item.id})">
                        ${translations[currentLang].add_to_cart}
                    </button>
                </div>
            </div>
        </article>
    `;
}

// បង្ហាញភេសជ្ជៈពេញនិយមលើទំព័រដើម (index.html)
function renderFeaturedCards() {
    const container = document.getElementById("featuredGrid");
    if (!container) return; // បញ្ឈប់បើមិនមែននៅទំព័រដើម
    const featured = menuItems.filter(item => item.featured);
    container.innerHTML = featured.map(createItemCardHTML).join("");
}

// បង្ហាញម៉ឺនុយទាំងអស់លើទំព័រម៉ឺនុយ (menu.html)
function renderMenuCards() {
    const container = document.getElementById("menuGrid");
    if (!container) return; // បញ្ឈប់បើមិនមែននៅទំព័រម៉ឺនុយ

    const searchTerm = (document.getElementById("searchInput")?.value || "").toLowerCase();

    // ប្រើ filter() ដើម្បីចម្រោះតាមប្រភេទ និងពាក្យស្វែងរក
    const filtered = menuItems.filter(item => {
        const matchCat = currentCategory === "all" || item.category === currentCategory;
        const matchText = item.name.km.toLowerCase().includes(searchTerm) ||
                          item.name.en.toLowerCase().includes(searchTerm);
        return matchCat && matchText;
    });

    container.innerHTML = filtered.map(createItemCardHTML).join("");
}

// មុខងារចុចប៊ូតុងចម្រោះប្រភេទម៉ឺនុយ
function filterMenu(category, btnElement) {
    currentCategory = category;
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");
    renderMenuCards();
}

// ==========================================================================
// SHOPPING CART FUNCTIONS (មុខងារកន្ត្រកបញ្ជាទិញ)
// ==========================================================================
function saveCart() {
    localStorage.setItem("cafe_cart", JSON.stringify(cart));
}

function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        const product = menuItems.find(item => item.id === id);
        if (product) cart.push({ ...product, qty: 1 });
    }
    saveCart();
    renderCart();
    toggleCart(true);
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    saveCart();
    renderCart();
}

function renderCart() {
    const badge = document.getElementById("cartBadge");
    const itemsContainer = document.getElementById("cartItemsContainer");
    const totalEl = document.getElementById("cartTotalDisplay");

    // គណនាចំនួនទំនិញសរុបដោយប្រើ reduce()
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) badge.textContent = totalQty;

    if (!itemsContainer || !totalEl) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:2rem;">
            ${currentLang === "km" ? "មិនទាន់មានទំនិញក្នុងកន្ត្រកនៅឡើយទេ" : "Your cart is currently empty."}
        </p>`;
        totalEl.innerHTML = "$0.00 (0 ៛)";
        return;
    }

    itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <strong>${item.name[currentLang]}</strong>
                <div style="font-size:0.85rem; color:var(--text-muted);">
                    $${(item.price * item.qty).toFixed(2)} (${formatKHR(item.price * item.qty)})
                </div>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join("");

    const totalUSD = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    totalEl.innerHTML = `$${totalUSD.toFixed(2)} <span style="font-size:0.85rem; color:var(--text-muted);">(${formatKHR(totalUSD)})</span>`;
}

function toggleCart(forceOpen) {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (!drawer || !overlay) return;

    const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : !drawer.classList.contains("open");
    drawer.classList.toggle("open", shouldOpen);
    overlay.classList.toggle("open", shouldOpen);
}

function checkoutOrder() {
    if (cart.length === 0) return;
    alert(currentLang === "km"
        ? "អរគុណ! ការបញ្ជាទិញរបស់អ្នកត្រូវបានបញ្ជូនទៅកាន់ Barista រួចរាល់ហើយ ☕"
        : "Thank you! Your order has been sent to our Barista ☕");
    cart = [];
    saveCart();
    renderCart();
    toggleCart(false);
}

// មុខងារបញ្ជូនទម្រង់កក់តុ (Table Booking Form Submit)
function handleBookingSubmit(event) {
    event.preventDefault(); // ការពារកុំឱ្យទំព័រ Reload ពេលចុច Submit
    const name = document.getElementById("guestName").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;
    const msgBox = document.getElementById("bookingStatus");

    msgBox.style.display = "block";
    msgBox.textContent = currentLang === "km"
        ? `✅ សូមអរគុណ ${name}! យើងបានកក់តុសម្រាប់ថ្ងៃទី ${date} ម៉ោង ${time} រួចរាល់ហើយ។`
        : `✅ Thank you ${name}! Your table is reserved for ${date} at ${time}.`;
    event.target.reset();
}

// ចាប់ផ្តើមដំណើរការពេលទំព័រផ្ទុករួចរាល់ (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            setLanguage(currentLang === "km" ? "en" : "km");
        });
    }
    setLanguage(currentLang);
});
