if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('Service Worker IS registered', reg))
        .catch((err) => console.log('Service Worker NOT registered', err))
}

