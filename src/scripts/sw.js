import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './images/icons/maskable_icon.png',
  './images/icons/maskable_icon_x48.png',
  './images/icons/maskable_icon_x72.png',
  './images/icons/maskable_icon_x96.png',
  './images/icons/maskable_icon_x128.png',
  './images/icons/maskable_icon_x192.png',
  './images/icons/maskable_icon_x384.png',
  './images/icons/maskable_icon_x512.png',
  './images/heros/hero-image_2.jpg',
  './images/icons/favicon.png',
  './images/icons/logo.svg',
  './images/icons/map-marker-alt-solid.svg',
  './images/icons/star-solid.svg',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
