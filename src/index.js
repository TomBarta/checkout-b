import { setTrackingCookie } from './utils/setTrackingCookie';

addEventListener('fetch', event => {
  if (event.request.url.includes('/tk')) {
    event.respondWith(setTrackingCookie(event.request))
  }
})
