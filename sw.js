// service-worker.js
self.addEventListener('install', function(e) {
console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {});

var temp = 0;
setInterval(function(){
    console.log(temp);
    temp+=1;
}, 1000);