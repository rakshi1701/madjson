self.addEventListener("install",(e) =>{
    console.log("installed",e);
    caches.open("stock").then((cache) => {
        cache.add("/");
        cache.add("./assets/upi.png");
        cache.add("./assets/done.png");
        cache.add("./data.json");
        cache.add("./index.html");
        cache.add("./manifest.json");
        cache.add("./sw.js");
    })
    .catch((err) => {
        console.log(err);
    });
 })
 self.addEventListener("activate", (e) => {
      console.log("activated");
})
self.addEventListener("fetch", (e) => {
    console.log("fetched");
    e.respondWith(
        caches.match(e.request)
            .then((res) => {
       
        return res || fetch(e.request);
    })
        .catch((err) => {
            console.log(err);
             })
        );
    })

