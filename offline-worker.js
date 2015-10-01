/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';



/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["index.html","2c5c4235ecb50feef8e73d7fdbd9f8d9"],["pictures/air-rescue.jpg","c068c2b493826c645058f344425d7fa8"],["pictures/broken.png","a1ffe2ee70a834b3092341a34c777743"],["pictures/can-i-use.png","536ef0053fe76c7c7fab758218e28dc6"],["pictures/firefox-logo.png","7053127dace0915df56d16e159e31f37"],["pictures/is-serviceworker-ready.png","aea5488b010fa1bae9a2ca1e9ddf3921"],["pictures/legs-to-stand-on.jpg","d67cd85f1fe40d4f73b55a1ffede723a"],["pictures/me.jpg","aa0471494453d7e3850cc70880099894"],["pictures/mozilla-wordmark.png","2350633747dd5adefb25fe0162cf5c6e"],["pictures/my-octocat.jpg","48babbb19078f15ac29ba8301df81da0"],["pictures/native-timer.png","68042170be2bce0e02ac46080f60b9ee"],["pictures/offline.jpg","48d59dc2fb2f36a12a33a54b8318e906"],["pictures/service-worker.svg","c32c6a905728f090e2ce54353d3bc45a"],["pictures/solar-dehydrator.jpg","3a5d3c85528026cc7ded9e32ea15a4fd"],["scripts/offline-manager.js","d2b04cba2f0c3d1f55a430da0aa4c9e1"],["scripts/script.js","1e67bdb44c75d00aa3609370a593e69c"],["themes/mozilla/fonts/OpenSans-Bold.eot","ef1f37a1fb3a461cb393dbc3d08da343"],["themes/mozilla/fonts/OpenSans-Bold.svg","9ac36fa661f42094421d4a4aee78a872"],["themes/mozilla/fonts/OpenSans-Bold.ttf","1b7d13c78838896cad5b95975eab0cf7"],["themes/mozilla/fonts/OpenSans-Bold.woff","529d7a714f5306c23c3d3d57848debf7"],["themes/mozilla/fonts/OpenSans-Bold.woff2","78eb78518f5abe1d5fe3f04615e765d4"],["themes/mozilla/fonts/OpenSans-BoldItalic.eot","a394c92c8432231597e717cf6cece826"],["themes/mozilla/fonts/OpenSans-BoldItalic.svg","02fce4bfb6ff70d338ae163475e011d7"],["themes/mozilla/fonts/OpenSans-BoldItalic.ttf","11a2a81d9dce62a1d9e03f86226c2edf"],["themes/mozilla/fonts/OpenSans-BoldItalic.woff","7732a8b69b6fa1da4f3e8a4f2132ad3c"],["themes/mozilla/fonts/OpenSans-BoldItalic.woff2","27e6b65f7000e25c6c20acd0aaa8e4f6"],["themes/mozilla/fonts/OpenSans-ExtraBold.eot","76c57d8b051d197e3055cd578171ea7a"],["themes/mozilla/fonts/OpenSans-ExtraBold.svg","2b6ee962d6f43496e08a21db3f24c9d1"],["themes/mozilla/fonts/OpenSans-ExtraBold.ttf","8b2c278c8d8b9dc417996439314df113"],["themes/mozilla/fonts/OpenSans-ExtraBold.woff","910b017e406f03e53248ac662faa1726"],["themes/mozilla/fonts/OpenSans-ExtraBold.woff2","78c3e3d345430e9e9f1d1f59396e5e9c"],["themes/mozilla/fonts/OpenSans-ExtraBoldItalic.eot","6627b6f5840c0bfa3675e15adeac6df2"],["themes/mozilla/fonts/OpenSans-ExtraBoldItalic.svg","f2d585dd86fd6199ec3f1b7305087947"],["themes/mozilla/fonts/OpenSans-ExtraBoldItalic.ttf","e90f5d812469d88595383b342782a6f6"],["themes/mozilla/fonts/OpenSans-ExtraBoldItalic.woff","e2992796cc4c3b1246f27f8c16788b0b"],["themes/mozilla/fonts/OpenSans-ExtraBoldItalic.woff2","51cb09aef93afaf31a4a4f67676d2e5a"],["themes/mozilla/fonts/OpenSans-Light.eot","d3af1c098bbb97547ca0d9aad23e7e7f"],["themes/mozilla/fonts/OpenSans-Light.svg","4c206ab41ebc3a681eda69341b865c04"],["themes/mozilla/fonts/OpenSans-Light.ttf","77d5b10d517c118e88525033fc24755e"],["themes/mozilla/fonts/OpenSans-Light.woff","7382ed9e972300b813722428b0ad10ca"],["themes/mozilla/fonts/OpenSans-Light.woff2","77440896859dfb82a598e21720f32fae"],["themes/mozilla/fonts/OpenSans-LightItalic.eot","00830ed539e046494e3418fd1985ba2a"],["themes/mozilla/fonts/OpenSans-LightItalic.svg","32bb3004c3449b7816d717a6d64df506"],["themes/mozilla/fonts/OpenSans-LightItalic.ttf","356216d6eebbcd8318cde4ccc94d68e2"],["themes/mozilla/fonts/OpenSans-LightItalic.woff","8697ef32f2b8c2173345d63a31efc83c"],["themes/mozilla/fonts/OpenSans-LightItalic.woff2","8bc27492a47d807c4647efc2c00f51f8"],["themes/mozilla/fonts/OpenSans-Regular.eot","720b49804890f8af4fd3a4baefe4d44f"],["themes/mozilla/fonts/OpenSans-Regular.svg","eb9a77cca850c0ec5cd749f1fabc25e1"],["themes/mozilla/fonts/OpenSans-Regular.ttf","c7894d17e9878e2547ccf48c3fee8e74"],["themes/mozilla/fonts/OpenSans-Regular.woff","10845167c3719d2b92fc5f8922ce5c7c"],["themes/mozilla/fonts/OpenSans-Regular.woff2","da28da971034d3a0d3d2ae3167423c84"],["themes/mozilla/fonts/OpenSans-RegularItalic.eot","533be4c277da5a601c2f8734a74dd912"],["themes/mozilla/fonts/OpenSans-RegularItalic.svg","1238e6422891d268d8752e9b155550c1"],["themes/mozilla/fonts/OpenSans-RegularItalic.ttf","ed85a4a9e1494076eed89bc2121f9a3a"],["themes/mozilla/fonts/OpenSans-RegularItalic.woff","6a2976cc3ddf738d37d3c98fe74d8cf0"],["themes/mozilla/fonts/OpenSans-RegularItalic.woff2","3918a7b80572a1c672636bc7daec6229"],["themes/mozilla/fonts/OpenSans-SemiBold.eot","125b4f48793f0baa469c952807a0c12b"],["themes/mozilla/fonts/OpenSans-SemiBold.svg","1f0599ac63a11b3605a66b8e9fbd7ecb"],["themes/mozilla/fonts/OpenSans-SemiBold.ttf","91d1a04dacacb9487f214017d72f0187"],["themes/mozilla/fonts/OpenSans-SemiBold.woff","2e3b99797fbdcac14138d27cab4e58b3"],["themes/mozilla/fonts/OpenSans-SemiBold.woff2","d4abe81308884eb344385c33bfb393da"],["themes/mozilla/fonts/OpenSans-SemiBoldItalic.eot","9684e27c00fcd736594180709a587c2c"],["themes/mozilla/fonts/OpenSans-SemiBoldItalic.svg","5bed120b13ca85008fb879e64d807f7c"],["themes/mozilla/fonts/OpenSans-SemiBoldItalic.ttf","287e116c01ad4687936b2364bee12afc"],["themes/mozilla/fonts/OpenSans-SemiBoldItalic.woff","2eba3423a0926a186a040e31bc8d40ca"],["themes/mozilla/fonts/OpenSans-SemiBoldItalic.woff2","83bbb947952c7462d51b21cc605229cd"],["themes/mozilla/fonts/TargetBlank.otf","a38f99610e5eceb80d10d72a19658d66"],["themes/mozilla/fonts/TargetBlank.svg","fffef5640b58202757e9a1993347cdfd"],["themes/mozilla/images/Fx-logo.png","8e503dc735024941ef6f7e64bab63145"],["themes/mozilla/images/bg-blue-2.png","45b8c72c4c30846bb3eebe6994961303"],["themes/mozilla/images/bg-darkgrey-2.png","ce31504ddc7789c9940d624335a7e2d8"],["themes/mozilla/images/bg-red-2.png","85b0cd4c23d8f878e28b365916eae136"],["themes/mozilla/images/bg-sandstone-2.png","640f72394088dfb4dad3c6dcea000472"],["themes/mozilla/images/mozilla-logo-white.png","036840cb4f9faddcde57b43a9399e511"],["themes/mozilla/images/mozilla-logo.png","0da5d0b7babc5b7d9c8c3b0a3ee1ce9a"],["themes/mozilla/images/tab-2.png","ae0fc2332eeb30b115cc5d4511a419fe"],["themes/mozilla/styles/fonts.css","34cf0ceba6c2b905ced05569969cc571"],["themes/mozilla/styles/print.css","5462402a1c111fa8774567d1b97941f2"],["themes/mozilla/styles/reset.css","1af6e7195d3c3b12c9af786afa4c7b5a"],["themes/mozilla/styles/style.css","58d6c13089c40d858c3ba0db85438fcc"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var populateCurrentCacheNames = function (precacheConfig, cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var url = new URL(CurrentCacheNamesToAbsoluteUrl[cacheName]);
          // Put in a cache-busting parameter to ensure we're caching a fresh response.
          if (url.search) {
            url.search += '&';
          }
          url.search += 'sw-precache=' + now;
          var urlWithCacheBusting = url.toString();

          console.log('Adding URL "%s" to cache named "%s"', urlWithCacheBusting, cacheName);
          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request.clone()).then(function(response) {
              if (response.ok) {
                return cache.put(request, response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            console.log('Deleting out-of-date cache "%s"', cacheName);
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    if (cacheName) {
      event.respondWith(
        // We can't call cache.match(event.request) since the entry in the cache will contain the
        // cache-busting parameter. Instead, rely on the fact that each cache should only have one
        // entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              return response || fetch(event.request).catch(function(e) {
                console.error('Fetch for "%s" failed: %O', urlWithoutIgnoredParameters, e);
              });
            });
          });
        }).catch(function(e) {
          console.error('Couldn\'t serve response for "%s" from cache: %O', urlWithoutIgnoredParameters, e);
          return fetch(event.request);
        })
      );
    }
  }
});

