import { setTrackingCookies } from '../utils/setTrackingCookies';

export async function setTrackingCookiesAndCleanUrl(request) {
  const originalURL = new URL(request.url);
  let cleanURL = originalURL;
  cleanURL.search = '';
  console.log('clean url search: ', cleanURL.search)
  console.log('clean url href: ', cleanURL.href)
  let response = await fetch(cleanURL, {...request});

  // Make the headers mutable by re-constructing the Response.
  response = new Response(response.body, response);

  originalURL.searchParams.forEach((value, key) => {
    console.log('key value: ', `${key}=${value}`)
    response.headers.append('Set-Cookie', `${key}=${value}; Expires=${expireIn10Years()}; Secure; Path='/'`)
  });
  console.log('response url: ', response.url)
  return response;
}

function expireIn10Years() {
  const now = new Date(Date.now());
  return new Date(now.setFullYear(now.getFullYear() + 10)).toString();
}