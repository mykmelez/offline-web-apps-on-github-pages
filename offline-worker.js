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


importScripts("");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/index.html","4ad2d0d31d091eca26b15aad7850a08c"],["/pictures/fxos/apps.png","85cc9f148538a3e11ef232b435381002"],["/pictures/fxos/boilerplate.jpg","4c65da1ba6665e2996a376c2063db0a3"],["/pictures/fxos/brick.jpg","76f065fedf63ad372a2b19fefafb8cc1"],["/pictures/fxos/buildingblocks.png","df634867eca3c6f0bd7becd8bdfaf6ed"],["/pictures/fxos/buildingfirefoxos.png","ba3fb8792a40d4dd5222c2bde43b6cd6"],["/pictures/fxos/console.png","19bf187ad5ea5fb74a23a4162c9b3ab0"],["/pictures/fxos/debugger.png","b035ca956c1eb8aa59d617f5a5981e76"],["/pictures/fxos/devhub.jpg","3752a21b5f0e29ceabdb30b47ad1bdfa"],["/pictures/fxos/devtools.jpg","ed7a0481e1617bcb8b071b6e4d28c999"],["/pictures/fxos/devtools.png","fdc88603d260b4990a7ff6d806ca5eaf"],["/pictures/fxos/dynamicsearch.ogv","e01b3ceba12539618895eee44502e6c7"],["/pictures/fxos/enduser-fxos.jpg","5ceacd08dc747f29f83bc678a65e5d75"],["/pictures/fxos/everythingme.jpg","dfdbc8ee41c7fe35684740f49715e9c8"],["/pictures/fxos/firefox-oct-2013.png","9565aaeb857a1aa19ae73dfff9646b2e"],["/pictures/fxos/firefox-os-emulator.jpg","347f7c2849e955329893ff13593ddb1d"],["/pictures/fxos/firefoxos.png","98ef5f3647f53c40b242a67fc6c8a467"],["/pictures/fxos/flathead.png","82eb27377da1743435f563f2ba3f5315"],["/pictures/fxos/foxkeh-android.png","59f88560ac491d6d01720ac51d58eb8c"],["/pictures/fxos/fxosvideos.jpg","919b44252386729b40954d6b6866cbcf"],["/pictures/fxos/fxoswiki.jpg","d8885526ec1fb4c34790e56f318d22db"],["/pictures/fxos/hacksblog.jpg","ea2b9a5dfed73e6f3dd840c66c11d5cb"],["/pictures/fxos/hobbes-earth.jpg","4caff45a5d601e3a4b0327c943650f14"],["/pictures/fxos/inspector.png","7829a17fbfdcf143573764af7ff6848e"],["/pictures/fxos/keep-calm-and-trust-html5.jpg","9fdc3e06669155bfe9d8d77de69b201d"],["/pictures/fxos/marketplace.jpg","36f1a776cb0ff1670d778179ebb67c4a"],["/pictures/fxos/mobiletools.png","72bb03327a5466fcd2e54db4ba7c8c99"],["/pictures/fxos/network-details.png","5b895955269c564794c88a79fced4426"],["/pictures/fxos/network.png","37f8c54b09b07f4620f696787c020af5"],["/pictures/fxos/nokia-photos.jpg","05382d1d76a4da36b3a1122598a8758b"],["/pictures/fxos/phonegapdiagram.png","78b7c023c9d8d004dd576c51a5586715"],["/pictures/fxos/pick-activity.jpg","58a1568ec59b883cf02ce4f724a9f7fc"],["/pictures/fxos/profiler.png","379285c8132785120e4656a01863e7cc"],["/pictures/fxos/reflow.webm","2ab194474ceef8e21bf94b8c9b1245cf"],["/pictures/fxos/remote-debugging-overview.png","10092495431f6bc7626ae75b211449ba"],["/pictures/fxos/responsive.webm","d572d2934204d56f1ee19e41cff26ac9"],["/pictures/fxos/scratchpad.png","4a188cac087d82d2c40ca3f06cfc832f"],["/pictures/fxos/simulator.png","9a5aaa4fede0f733904f1b08a2a4ea42"],["/pictures/fxos/simulator40.png","57c355da685efeb28553d140fadfc2e9"],["/pictures/fxos/styleeditor.png","3b9d365361fbef309258187e2feea1af"],["/pictures/fxos/webapiwiki.png","4ef484948be17692ffad0a0d98510d9c"],["/pictures/mozillaoverview/redpanda.jpg","3e39cac737f24df12fc6a82022b29aa8"],["/pictures/templatedemos/earthphases.gif","588486485da2847b6b819d83598cfc9c"],["/pictures/templatedemos/high-five.jpg","245b7ec65cbb963f7780894dbba5e9c8"],["/pictures/templatedemos/phones.jpg","1b859651678237199f28bd6ce1b98ddb"],["/pictures/templatedemos/smallphones.jpg","75bdcaf68afb48e206671a4e72308bf6"],["/pictures/templatedemos/wave.mp4","efc074d060f12b82faa90283ccbf4982"],["/pictures/templatedemos/wave.webm","6bdfd897be91345dcf37c4168e9ab401"],["/scripts/script.js","e70e7caa3115d52d9944aa87c9952ca4"],["/themes/mozilla/fonts/OpenSans-Bold.eot","ef1f37a1fb3a461cb393dbc3d08da343"],["/themes/mozilla/fonts/OpenSans-Bold.svg","9ac36fa661f42094421d4a4aee78a872"],["/themes/mozilla/fonts/OpenSans-Bold.ttf","1b7d13c78838896cad5b95975eab0cf7"],["/themes/mozilla/fonts/OpenSans-Bold.woff","529d7a714f5306c23c3d3d57848debf7"],["/themes/mozilla/fonts/OpenSans-Bold.woff2","78eb78518f5abe1d5fe3f04615e765d4"],["/themes/mozilla/fonts/OpenSans-BoldItalic.eot","a394c92c8432231597e717cf6cece826"],["/themes/mozilla/fonts/OpenSans-BoldItalic.svg","02fce4bfb6ff70d338ae163475e011d7"],["/themes/mozilla/fonts/OpenSans-BoldItalic.ttf","11a2a81d9dce62a1d9e03f86226c2edf"],["/themes/mozilla/fonts/OpenSans-BoldItalic.woff","7732a8b69b6fa1da4f3e8a4f2132ad3c"],["/themes/mozilla/fonts/OpenSans-BoldItalic.woff2","27e6b65f7000e25c6c20acd0aaa8e4f6"],["/themes/mozilla/fonts/OpenSans-ExtraBold.eot","76c57d8b051d197e3055cd578171ea7a"],["/themes/mozilla/fonts/OpenSans-ExtraBold.svg","2b6ee962d6f43496e08a21db3f24c9d1"],["/themes/mozilla/fonts/OpenSans-ExtraBold.ttf","8b2c278c8d8b9dc417996439314df113"],["/themes/mozilla/fonts/OpenSans-ExtraBold.woff","910b017e406f03e53248ac662faa1726"],["/themes/mozilla/fonts/OpenSans-ExtraBold.woff2","78c3e3d345430e9e9f1d1f59396e5e9c"],["/themes/mozilla/fonts/OpenSans-ExtraBoldItalic.eot","6627b6f5840c0bfa3675e15adeac6df2"],["/themes/mozilla/fonts/OpenSans-ExtraBoldItalic.svg","f2d585dd86fd6199ec3f1b7305087947"],["/themes/mozilla/fonts/OpenSans-ExtraBoldItalic.ttf","e90f5d812469d88595383b342782a6f6"],["/themes/mozilla/fonts/OpenSans-ExtraBoldItalic.woff","e2992796cc4c3b1246f27f8c16788b0b"],["/themes/mozilla/fonts/OpenSans-ExtraBoldItalic.woff2","51cb09aef93afaf31a4a4f67676d2e5a"],["/themes/mozilla/fonts/OpenSans-Light.eot","d3af1c098bbb97547ca0d9aad23e7e7f"],["/themes/mozilla/fonts/OpenSans-Light.svg","4c206ab41ebc3a681eda69341b865c04"],["/themes/mozilla/fonts/OpenSans-Light.ttf","77d5b10d517c118e88525033fc24755e"],["/themes/mozilla/fonts/OpenSans-Light.woff","7382ed9e972300b813722428b0ad10ca"],["/themes/mozilla/fonts/OpenSans-Light.woff2","77440896859dfb82a598e21720f32fae"],["/themes/mozilla/fonts/OpenSans-LightItalic.eot","00830ed539e046494e3418fd1985ba2a"],["/themes/mozilla/fonts/OpenSans-LightItalic.svg","32bb3004c3449b7816d717a6d64df506"],["/themes/mozilla/fonts/OpenSans-LightItalic.ttf","356216d6eebbcd8318cde4ccc94d68e2"],["/themes/mozilla/fonts/OpenSans-LightItalic.woff","8697ef32f2b8c2173345d63a31efc83c"],["/themes/mozilla/fonts/OpenSans-LightItalic.woff2","8bc27492a47d807c4647efc2c00f51f8"],["/themes/mozilla/fonts/OpenSans-Regular.eot","720b49804890f8af4fd3a4baefe4d44f"],["/themes/mozilla/fonts/OpenSans-Regular.svg","eb9a77cca850c0ec5cd749f1fabc25e1"],["/themes/mozilla/fonts/OpenSans-Regular.ttf","c7894d17e9878e2547ccf48c3fee8e74"],["/themes/mozilla/fonts/OpenSans-Regular.woff","10845167c3719d2b92fc5f8922ce5c7c"],["/themes/mozilla/fonts/OpenSans-Regular.woff2","da28da971034d3a0d3d2ae3167423c84"],["/themes/mozilla/fonts/OpenSans-RegularItalic.eot","533be4c277da5a601c2f8734a74dd912"],["/themes/mozilla/fonts/OpenSans-RegularItalic.svg","1238e6422891d268d8752e9b155550c1"],["/themes/mozilla/fonts/OpenSans-RegularItalic.ttf","ed85a4a9e1494076eed89bc2121f9a3a"],["/themes/mozilla/fonts/OpenSans-RegularItalic.woff","6a2976cc3ddf738d37d3c98fe74d8cf0"],["/themes/mozilla/fonts/OpenSans-RegularItalic.woff2","3918a7b80572a1c672636bc7daec6229"],["/themes/mozilla/fonts/OpenSans-SemiBold.eot","125b4f48793f0baa469c952807a0c12b"],["/themes/mozilla/fonts/OpenSans-SemiBold.svg","1f0599ac63a11b3605a66b8e9fbd7ecb"],["/themes/mozilla/fonts/OpenSans-SemiBold.ttf","91d1a04dacacb9487f214017d72f0187"],["/themes/mozilla/fonts/OpenSans-SemiBold.woff","2e3b99797fbdcac14138d27cab4e58b3"],["/themes/mozilla/fonts/OpenSans-SemiBold.woff2","d4abe81308884eb344385c33bfb393da"],["/themes/mozilla/fonts/OpenSans-SemiBoldItalic.eot","9684e27c00fcd736594180709a587c2c"],["/themes/mozilla/fonts/OpenSans-SemiBoldItalic.svg","5bed120b13ca85008fb879e64d807f7c"],["/themes/mozilla/fonts/OpenSans-SemiBoldItalic.ttf","287e116c01ad4687936b2364bee12afc"],["/themes/mozilla/fonts/OpenSans-SemiBoldItalic.woff","2eba3423a0926a186a040e31bc8d40ca"],["/themes/mozilla/fonts/OpenSans-SemiBoldItalic.woff2","83bbb947952c7462d51b21cc605229cd"],["/themes/mozilla/fonts/TargetBlank.otf","a38f99610e5eceb80d10d72a19658d66"],["/themes/mozilla/fonts/TargetBlank.svg","fffef5640b58202757e9a1993347cdfd"],["/themes/mozilla/images/Fx-logo.png","8e503dc735024941ef6f7e64bab63145"],["/themes/mozilla/images/bg-blue-2.png","45b8c72c4c30846bb3eebe6994961303"],["/themes/mozilla/images/bg-darkgrey-2.png","ce31504ddc7789c9940d624335a7e2d8"],["/themes/mozilla/images/bg-red-2.png","85b0cd4c23d8f878e28b365916eae136"],["/themes/mozilla/images/bg-sandstone-2.png","640f72394088dfb4dad3c6dcea000472"],["/themes/mozilla/images/mozilla-logo-white.png","036840cb4f9faddcde57b43a9399e511"],["/themes/mozilla/images/mozilla-logo.png","0da5d0b7babc5b7d9c8c3b0a3ee1ce9a"],["/themes/mozilla/images/tab-2.png","ae0fc2332eeb30b115cc5d4511a419fe"],["/themes/mozilla/styles/fonts.css","34cf0ceba6c2b905ced05569969cc571"],["/themes/mozilla/styles/print.css","5462402a1c111fa8774567d1b97941f2"],["/themes/mozilla/styles/reset.css","1af6e7195d3c3b12c9af786afa4c7b5a"],["/themes/mozilla/styles/style.css","58d6c13089c40d858c3ba0db85438fcc"]];
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

