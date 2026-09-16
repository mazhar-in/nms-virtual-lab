/* NMS Physics Virtual Lab Suite - Service Worker */
const CACHE_NAME = 'nms-physics-lab-v2.1';

const CORE_ASSETS = [
  './',
  './index.html',
  './manuals.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable.png',
  './icons/icon.svg',
  './beam-balance-virtual-lab.html',
  './concave-lens-focal-length-virtual-lab.html',
  './concave-mirror-focal-length-virtual-lab.html',
  './convex-lens-focal-length-virtual-lab.html',
  './convex-mirror-focal-length-virtual-lab.html',
  './galvanometer-resistance-half-deflection-virtual-lab.html',
  './galvanometer-to-voltmeter-virtual-lab.html',
  './inclined-plane-roller-virtual-lab.html',
  './limiting-friction-virtual-lab.html',
  './meter-bridge-virtual-lab.html',
  './ohms-law-virtual-lab.html',
  './parallelogram-law-of-vectors-virtual-lab.html',
  './pn-junction-diode-virtual-lab.html',
  './prism-minimum-deviation-virtual-lab.html',
  './refractive-index-liquid-concave-mirror-virtual-lab.html',
  './refractive-index-liquid-lens-virtual-lab.html',
  './screw-gauge-micrometer-virtual-lab.html',
  './simple-pendulum-virtual-lab.html',
  './sonometer-ac-frequency-virtual-lab.html',
  './spherometer-virtual-lab.html',
  './travelling-microscope-glass-slab-virtual-lab.html',
  './vernier-callipers-virtual-lab.html',
  './volume-of-irregular-lamina-virtual-lab.html',
  './wheatstone-bridge-virtual-lab.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Add all core assets, continuing even if single optional assets fail
      return Promise.allSettled(
        CORE_ASSETS.map((url) =>
          fetch(url)
            .then((res) => {
              if (res.ok) return cache.put(url, res);
            })
            .catch((err) => console.warn('PWA precache notice for:', url, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-first for HTML pages (so updates arrive promptly), falling back to cache
// Cache-first for static icons, fonts, stylesheets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // If navigation to HTML
  if (req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return networkRes;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Assets (images, fonts, scripts, styles)
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Return cached and update in background (stale-while-revalidate)
        fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(req, networkRes));
          }
        }).catch(() => {});
        return cached;
      }
      return fetch(req).then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const resClone = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        }
        return networkRes;
      });
    })
  );
});
