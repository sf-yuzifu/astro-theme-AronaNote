import { precacheAndRoute, matchPrecache } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { NetworkFirst, CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

precacheAndRoute(self.__WB_MANIFEST);

const OFFLINE_PAGE = '/offline/index.html';
const PAGE_CACHE = 'pages-cache';

const navigationRoute = new NavigationRoute(async ({ event }) => {
  const request = event.request;
  
  try {
    const response = await fetch(request);
    
    if (response.ok) {
      const responseClone = response.clone();
      const cache = await caches.open(PAGE_CACHE);
      await cache.put(request, responseClone);
    }
    
    return response;
  } catch (error) {
    console.log('Network request failed, serving offline page:', error);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const cachedOffline = await matchPrecache(OFFLINE_PAGE);
    if (cachedOffline) {
      return cachedOffline;
    }
    
    return new Response('Offline', { status: 503 });
  }
}, {
  denylist: [
    /^\/.well-known\/host\.txt$/,
    /^\/.well-known\//,
    /^\/api\//,
    /^\/admin\//,
  ],
});

registerRoute(navigationRoute);

registerRoute(
  /\/blog\/.*/i,
  new NetworkFirst({
    cacheName: 'blog-posts-cache',
    networkTimeoutSeconds: 10,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  })
);

registerRoute(
  /\.(?:png|jpg|jpeg|gif|webp|svg|ico)$/i,
  new CacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  })
);

registerRoute(
  /\.(?:js|css)$/i,
  new NetworkFirst({
    cacheName: 'static-resources-cache',
    networkTimeoutSeconds: 10,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  })
);

registerRoute(
  /\/(rss\.xml|sitemap-index\.xml|sitemap-\d+\.xml)$/i,
  new NetworkFirst({
    cacheName: 'seo-files-cache',
    networkTimeoutSeconds: 10,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 60 * 60 * 24,
      }),
    ],
  })
);

self.addEventListener('install', () => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  event.waitUntil(self.clients.claim());
});
