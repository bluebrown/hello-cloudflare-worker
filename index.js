addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Form your editor into the cloud', {
    headers: {
      'content-type': 'text/plain',
      'Access-Control-Allow-Origin': 'https://hello-cloudflare.pages.dev'
    },
  })
}
