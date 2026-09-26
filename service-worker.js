const CACHE_NAME = "luxury-store-v4";

const urlsToCache = [
  "./",
  "./index.html",
  "./products.html",
  "./favorites.html",
  "./privacy.html",
  "./style.css",
  "./script.js",
  "./languages.js",
  "./manifest.json",

"./images/luxury-background.png",
  "./images/chance.jpg",
  "./images/coco-mademoiselle.jpg",
  "./images/donna-born-in-roma.jpg",
  "./images/good-girl.jpg",
  "./images/idole.jpg",
  "./images/jadore.jpg",
  "./images/la-belle.jpg",
  "./images/la-vie-est-belle.jpg",
  "./images/libre.jpg",
  "./images/linterdit.jpg",
  "./images/miss-dior.jpg",
  "./images/mon-paris.jpg",
  "./images/paradoxe.jpg",
  "./images/poison.jpg",
  "./images/scandal.jpg",
  "./images/si.jpg",
  "./images/black-opium.jpg",
  "./images/icon-192.png",
  "./images/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
