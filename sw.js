// Service worker: app-skallet og data lagres ved installasjon, kartfliser lagres etter hvert som de brukes.
const VERSION = 'lyon-v5';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-180.png',
  './data/arrondissements.js', './data/routes.js', './data/plan.js',
  './data/pois-a.js', './data/pois-b.js', './data/pois-c.js', './data/streets.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'];
const TILE_CACHE = 'lyon-tiles-v1';
const TILE_LIMIT = 1500;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.allSettled(SHELL.map(u => c.add(u)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== TILE_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (url.hostname.endsWith('tile.openstreetmap.org')) {
    e.respondWith(caches.open(TILE_CACHE).then(async c => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      const res = await fetch(e.request);
      if (res.ok) { c.put(e.request, res.clone()); trimTiles(c); }
      return res;
    }).catch(() => new Response('', { status: 504 })));
    return;
  }
  if (url.hostname.includes('nominatim') || url.hostname.includes('wikipedia')) return; // alltid live
  e.respondWith(caches.match(e.request).then(hit => {
    const net = fetch(e.request).then(res => {
      if (res.ok && (url.origin === location.origin || url.hostname === 'cdnjs.cloudflare.com')) {
        caches.open(VERSION).then(c => c.put(e.request, res.clone()));
      }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
let trimming = false;
async function trimTiles(c) {
  if (trimming) return; trimming = true;
  try { const keys = await c.keys(); if (keys.length > TILE_LIMIT) for (const k of keys.slice(0, keys.length - TILE_LIMIT)) await c.delete(k); }
  finally { trimming = false; }
}
