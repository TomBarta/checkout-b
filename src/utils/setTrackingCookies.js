export function setTrackingCookies(url, response) {
  let res = new Response(response.body, response)

  // The Request object's .url attribute does not have a .search attribute, so we just parse it.
  const trackings = url.split('?')[1].split('&');
  trackings.forEach(tracking => {
    res.headers.append('Set-Cookie', `${tracking}; Expires=${expireIn10Years()}; Secure; Path='/'`)
  })
  return res;
}

function expireIn10Years() {
  const now = new Date(Date.now());
  return new Date(now.setFullYear(now.getFullYear() + 10)).toString();
}
