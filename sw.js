// minimální service worker, aby šla stránka nainstalovat jako aplikace (nic nekešuje)
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(){});
