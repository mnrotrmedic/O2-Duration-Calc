const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/Assets/css/styles.css',
    '/Assets/js/app.js',
    '/Assets/js/ui.js'
]

//install service worker
self.addEventListener('install', evt => {
    // console.log('Service worker install event: ', evt);
    //cache core assets with changes
    evt.waitUntil( //this holds completion of the install event until the cache is created and stored.
        caches.open(staticCacheName) //this creates the cache (by name)
            .then(cache => {
                //console.log('caching shell assets');
                cache.addAll(assets); //cache the array of assets in variable above
            })
    )

})

//activate service worker
self.addEventListener('activate', evt => {
    // console.log('Service worker activate event: ', evt);
})

//fetch event handler
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request)
            .then(cacheRes => {
                return cacheRes || fetch(evt.request);
            })
    )
})