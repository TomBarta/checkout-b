import { setTrackingCookies } from '../utils/setTrackingCookies';

export async function setTrackingCookiesAndCleanUrl(request) {
  const originalURL = new URL(request.url.replace('/tk', ''));
  let cleanURL = new URL(originalURL);
  cleanURL.search = '';

  const redirect = Response.redirect(cleanURL, 302)
  // Make the headers mutable by re-constructing the Response.
  let cleanRes = new Response(redirect.body, redirect)
  cleanRes = setTrackingCookies(request.url, cleanRes)
  
  return cleanRes;
}
