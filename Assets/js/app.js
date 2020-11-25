if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('service worker registered'))
        .catch(() => console.log('service worker NOT registered'))
}