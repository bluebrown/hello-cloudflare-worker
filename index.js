addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello, Cloudflare!', {
    headers: {
      'content-type': 'text/plain',
      'Access-Control-Allow-Origin': 'https://hello-cloudflare.pages.dev'
    },
  })
}
