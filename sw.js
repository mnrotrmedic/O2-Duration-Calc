const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/Assets/css/styles.css',
    '/Assets/Images/O2_44.png',
    '/Assets/Images/O2_76.png',
    '/Assets/Images/O2_152.png',
    '/Assets/Images/O2_512.png',
    '/Assets/Images/O2_1024.png',
    '/Assets/Images/oxygen-tank.svg',
    '/Assets/js/app.js',
    '/Assets/js/ui.js',


]

//install service worker
self.addEventListener('install', evt => {
    // console.log('Service worker install event: ', evt);
    //cache core assets with changes
    caches.open(staticCacheName)
        .then(cache => {
            cache.addAll(assets)
        })
})

//activate service worker
self.addEventListener('activate', evt => {
    // console.log('Service worker activate event: ', evt);
})

//fetch event handler
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);

})