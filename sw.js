// Service worker mínimo: permite instalar la app. No guarda nada en caché,
// así cada actualización llega al toque y nunca toca los datos de ella.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
