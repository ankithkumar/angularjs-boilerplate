self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('pwaCache')
            .then(cache => {
                return cache.addAll([
                    'app.bundle.js'
                ])
                .then(() => console.log('cache recorded in init phase'))
                .catch(error => console.log('something went wrong!!', err));
            })
            .then(() => {
                // `skipWaiting()` forces the waiting ServiceWorker to become the
                // active ServiceWorker, triggering the `onactivate` event.
                // Together with `Clients.claim()` this allows a worker to take effect
                // immediately in the client(s).
                console.log('initialisation done!');
                return self.skipWaiting();
            })
            .catch(error => console.log('cache open error ',error))
    );
});

self.addEventListener('activate', event => {
    console.log('in activate process!', event);
    // `claim()` sets this worker as the active worker for all clients that
    // match the workers scope and triggers an `oncontrollerchange` event for
    // the clients.
    return self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    console.log('returning from cache!', cachedResponse);
                    return cachedResponse;
                }
                return fetch(event.request);
            })
            .catch(err => {
                console.log('error occurred! ', err);
                return fetch(event.request);
            })
    )
});

// self.addEventListener('fetch', event => {
//     event.respondWith(
//       caches.match(event.request)
//         .then(response => {
//           if (response !== undefined) {
//             console.log('returning response from cache!');
//             return response;
//           }
//         })
//         .catch(error => {
//           console.log('not present in cache! ', error);
//           return fetch(event.request)
//             .then(response => {
//               if (!response.ok) {
//                 console.log('response not received!');
//                 return;
//               }
//               let responseClone = response.clone();
//               caches.open('pwaCache')
//                 .then(cache => cache.put(event.request, responseClone));
//                 return response;
//             })
//             .catch(error => {
//               console.log('did not hit the cache and no respond from server!');
//             });
//         })
//       );
// });