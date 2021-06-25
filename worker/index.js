/* eslint-disable no-undef */
// 'use strict'
// import workbox from 'workbox-sw'

// importScripts(
//   'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js' // bad url => 404 not found
// )

// importScripts(
//   'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js'
// )
// importScripts(
//   'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js'
// )
// importScripts(
//   'https://cdn.jsdelivr.net/npm/idb-keyval@3/dist/idb-keyval-iife.min.js'
// )

// self.addEventListener('install', (event) => {
//   event.registerForeignFetch({
//     scopes: [self.registration.scope], // or some sub-scope
//     origins: ['*'], // or ['https://example.com']
//   })
// })

// self.addEventListener('message', async (event) => {
//   if (event.data && event.data.action === 'CACHE_NEW_ROUTE') {
//     caches.open('others').then((cache) =>
//       cache.match(event.source.url).then((res) => {
//         if (res === undefined) {
//           return cache.add(event.source.url)
//         }
//       })
//     )
//   }
// })

// // Init indexedDB using idb-keyval, https://github.com/jakearchibald/idb-keyval
// const store = new idbKeyval.Store('GraphQL-Cache', 'PostResponses')

// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`)
// } else {
//   console.log(`Boo! Workbox didn't load 😬`)
// }

// // Workbox with custom handler to use IndexedDB for cache.
// workbox.routing.registerRoute(
//   new RegExp('/api/graphql(/)?'),
//   // Uncomment below to see the error thrown from Cache Storage API.
//   //workbox.strategies.staleWhileRevalidate(),
//   async ({ event }) => {
//     return staleWhileRevalidate(event)
//   },
//   'POST'
// )

// self.addEventListener('fetch', async (event) => {
//   if (event.request.method === 'POST') {
//     // Respond with cached data and update from network in the background.
//     event.respondWith(staleWhileRevalidate(event))
//   }
// })

// async function staleWhileRevalidate(event) {
//   let promise = null
//   let cachedResponse = await getCache(event.request.clone())
//   let fetchPromise = fetch(event.request.clone())
//     .then((response) => {
//       setCache(event.request.clone(), response.clone())
//       return response
//     })
//     .catch((err) => {
//       console.error(err)
//     })
//   return cachedResponse ? Promise.resolve(cachedResponse) : fetchPromise
// }

// async function serializeResponse(response) {
//   let serializedHeaders = {}
//   for (var entry of response.headers.entries()) {
//     serializedHeaders[entry[0]] = entry[1]
//   }
//   let serialized = {
//     headers: serializedHeaders,
//     status: response.status,
//     statusText: response.statusText,
//   }
//   serialized.body = await response.json()
//   return serialized
// }

// async function setCache(request, response) {
//   var key, data
//   let body = await request.json()
//   let id = CryptoJS.MD5(body.query).toString()

//   var entry = {
//     query: body.query,
//     response: await serializeResponse(response),
//     timestamp: Date.now(),
//   }
//   idbKeyval.set(id, entry, store)
// }

// async function getCache(request) {
//   let data
//   try {
//     let body = await request.json()
//     let id = CryptoJS.MD5(body.query).toString()
//     data = await idbKeyval.get(id, store)
//     if (!data) return null

//     // Check cache max age.
//     let cacheControl = request.headers.get('Cache-Control')
//     let maxAge = cacheControl ? parseInt(cacheControl.split('=')[1]) : 3600
//     if (Date.now() - data.timestamp > maxAge * 1000) {
//       console.log(`Cache expired. Load from API endpoint.`)
//       return null
//     }

//     console.log(`Load response from cache.`)
//     return new Response(JSON.stringify(data.response.body), data.response)
//   } catch (err) {
//     return null
//   }
// }

// async function getPostKey(request) {
//   let body = await request.json()
//   return JSON.stringify(body)
// }
