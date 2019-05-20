import { setTrackingCookiesAndCleanUrl } from "./utils/setTrackingCookiesAndCleanUrl";

addEventListener('fetch', event => {
  if (event.request.url.includes('/tk')) {
    event.respondWith(setTrackingCookiesAndCleanUrl(event.request))
  }
})
