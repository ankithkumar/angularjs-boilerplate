import runtime from 'serviceworker-webpack-plugin/lib/runtime';
 
if ('serviceWorker' in navigator) {
    console.log('service worker registered');
    const registration = runtime.register();
 } else {
     console.log('no service worker support');
 }