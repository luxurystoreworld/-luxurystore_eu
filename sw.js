const CACHE_NAME = "luxury-store-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/products.html",
  "/favorites.html",
  "/privacy.html",
  "/style.css",
  "/script.js",
  "/languages.js",
  "/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
