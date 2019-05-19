export async function setTrackingCookie(request) {
  let response = await fetch(request)

  // Make the headers mutable by re-constructing the Response.
  response = new Response(response.body, response)

  // The Request object's .url attribute does not have a .search attribute, so we just parse it.
  const trackings = request.url.split('?')[1].split('&');
  trackings.forEach(tracking => {
    response.headers.append('Set-Cookie', `${tracking}; Expires=${expireIn10Years()}; Secure; Path='/'`)
  })

  return response
}

function expireIn10Years() {
  const now = new Date(Date.now())
  return new Date(now.setFullYear(now.getFullYear() + 10)).toString();
}
