addEventListener('fetch', event => {
  if (event.request.url.includes('/tk')) {
    event.respondWith(handleRequest(event.request))
  }
})
  
  async function handleRequest(request) {
    return new Response("Hello world")
  }
