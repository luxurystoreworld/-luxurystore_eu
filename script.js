// ===============================
// LUXURY STORE
// ===============================

// ---------- MOBILE MENU ----------

const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menu && nav) {

menu.addEventListener("click", () => {

nav.classList.toggle("active");

});

}

// ---------- BACK TO TOP ----------

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if (topBtn) {

topBtn.style.display = window.scrollY > 300 ? "flex" : "none";

}

});

function topFunction() {

window.scrollTo({

top:0,

behavior:"smooth"

});

}
// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(".box,.product,.brand-grid div").forEach(el => {

observer.observe(el);

});
// ===============================
// LANGUAGE SYSTEM
// ===============================

const language = document.getElementById("language");

function set(id, text){

const el = document.getElementById(id);

if(el && text !== undefined){

el.textContent = text;

}

}

function changeLanguage(lang){

if(!translations[lang]) return;

// Navigation

set("home", translations[lang].home);
set("perfumes", translations[lang].perfumes);
set("favoritesLink", translations[lang].favorites);
set("aboutLink", translations[lang].about);
set("contactLink", translations[lang].contact);

// Home

set("heroTitle", translations[lang].heroTitle);
set("heroText", translations[lang].heroText);

set("shop", translations[lang].shop);
set("price", translations[lang].price);

set("brands", translations[lang].brands);

set("why", translations[lang].why);

set("quality","🌟 " + translations[lang].quality);
set("qualityText",translations[lang].qualityText);

set("delivery","🚚 " + translations[lang].delivery);
set("deliveryText",translations[lang].deliveryText);

set("support","💬 " + translations[lang].support);
set("supportText",translations[lang].supportText);

// Products

set("productsTitle", translations[lang].productsTitle);
set("productsText", translations[lang].productsText);

for(let i = 1; i <= 18; i++){

set("p"+i, translations[lang]["p"+i]);

}

// Footer

set("footerText", translations[lang].footerText);
set("instagramLabel", translations[lang].instagramLabel);
set("emailLabel", translations[lang].emailLabel);
set("copyright", translations[lang].copyright);
// Privacy Page

set("privacyTitle", translations[lang].privacyTitle);
set("privacyText", translations[lang].privacyText);

set("privacyInfoTitle", translations[lang].privacyInfoTitle);
set("privacyInfoText", translations[lang].privacyInfoText);

set("privacyUsageTitle", translations[lang].privacyUsageTitle);
set("privacyUsageText", translations[lang].privacyUsageText);

set("privacySecurityTitle", translations[lang].privacySecurityTitle);
set("privacySecurityText", translations[lang].privacySecurityText);

set("backHome", translations[lang].backHome);

// Cookies
set("cookiesText", translations[lang].cookiesText);
set("acceptCookiesText", translations[lang].acceptCookies);
set("learnMore", translations[lang].learnMore);
// Favorites page
set("favoritesTitle", translations[lang].favoritesTitle);
set("favoritesText", translations[lang].favoritesText);
set("backProducts", "← " + translations[lang].perfumes);
// Buy buttons

document.querySelectorAll("[id^='buy']").forEach(btn => {

btn.textContent = translations[lang].buy;

});

localStorage.setItem("language", lang);

}
// ===============================
// START LANGUAGE
// ===============================

if (language) {

const savedLanguage = localStorage.getItem("language") || "tj";

language.value = savedLanguage;

changeLanguage(savedLanguage);

language.addEventListener("change", function () {

changeLanguage(this.value);

});

}

// ===============================
// END
// ===============================
// ===============================
// FAVORITES
// ===============================

const favorites = document.querySelectorAll(".favorite");

favorites.forEach(item => {

    const id = item.dataset.id;

    // Загружаем сохранённое состояние
    if (localStorage.getItem("favorite-" + id) === "true") {
        item.classList.add("active");
        item.textContent = "♥";
    }

    item.addEventListener("click", () => {

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            item.textContent = "♥";
            localStorage.setItem("favorite-" + id, "true");
        } else {
            item.textContent = "♡";
            localStorage.removeItem("favorite-" + id);
        }

    });

});
// ===============================
// COOKIES
// ===============================

const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");

if (cookieBanner && acceptCookies) {

    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "flex";
    }

    acceptCookies.addEventListener("click", () => {

        localStorage.setItem("cookiesAccepted", "true");

        cookieBanner.style.display = "none";

    });

}
// ===============================
// FAVORITES PAGE
// ===============================

const favoritesContainer = document.getElementById("favoritesContainer"); 
alert("favorite-1 = " + localStorage.getItem("favorite-1"));
const perfumeImages = [
    "hero.jpg",
    "chance.jpg",
    "coco-mademoiselle.jpg",
    "donna-born-in-roma.jpg",
    "good-girl.jpg",
    "idole.jpg",
    "jadore.jpg",
    "la-belle.jpg",
    "la-vie-est-belle.jpg",
    "libre.jpg",
    "linterdit.jpg",
    "miss-dior.jpg",
    "mon-paris.jpg",
    "paradoxe.jpg",
    "poison.jpg",
    "scandal.jpg",
    "si.jpg",
    "black-opium.jpg"
];
if (favoritesContainer) {

    let html = "";

    for (let i = 1; i <= 18; i++) {

        if (localStorage.getItem("favorite-" + i) === "true") {

            html += `
            <div class="product">
                <img src="images/${perfumeImages[i-1]}" alt="Perfume ${i}">
                <h3>${translations[localStorage.getItem("language") || "tj"]["p"+i]}</h3>

                <a href="https://instagram.com/luxurystore_eu"
                   target="_blank"
                   class="btn">
                   ${translations[localStorage.getItem("language") || "tj"].buy}
                </a>
            </div>
            `;

        }

    }

    if (html === "") {

        const lang = localStorage.getItem("language") || "tj";
html = `<h2>${translations[lang].noFavorites}</h2>`;

    }

    favoritesContainer.innerHTML = html;

}
