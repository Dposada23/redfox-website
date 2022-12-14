const staticRedFox = "red-fox-pwa-v1"
const asset = [
  "/",
  "/index.html",
  "/js/index.js",
  "/images/main-bg1.jpg",
  "/images/main-bg2.jpg",

  
]
self.addEventListener("install", installEvent =>{
  installEvent.waitUntil(
    caches.open(staticRedFox).then(cache => {
      cache.addAll(asset)
    })
  )
  })

  self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })