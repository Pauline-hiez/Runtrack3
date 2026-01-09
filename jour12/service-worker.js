
const CACHE_NAME = 'pwa-jour12-v1';
const FILES_TO_CACHE = [
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './service-worker.js',
    './favicon.png',
    './icon-192.png',
    './icon-512.png',
    './horloge.png',
    // Ajoute ici d'autres fichiers statiques si besoin
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (name) {
                    return name !== CACHE_NAME;
                }).map(function (name) {
                    return caches.delete(name);
                })
            );
        }).then(function () {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
