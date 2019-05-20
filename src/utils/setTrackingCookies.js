export async function setTrackingCookies(originalURL, response) {
  console.log(originalURL.search)
  originalURL.searchParams.forEach((value, key) => {
    console.log('key value: ', `${key}=${value}`)
    response.headers.append('Set-Cookie', `${key}=${value}; Expires=${expireIn10Years()}; Secure; Path='/'`)
  });
}

function expireIn10Years() {
  const now = new Date(Date.now());
  return new Date(now.setFullYear(now.getFullYear() + 10)).toString();
}
