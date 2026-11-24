// Simple password gate for the private dev site (HTTP Basic Auth).
// Active only while the SITE_PASSWORD environment variable is set in Netlify.
// Any username works; the password must match SITE_PASSWORD.
export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const password = Netlify.env.get('SITE_PASSWORD');
  if (!password) return context.next();

  const header = request.headers.get('authorization') || '';
  const [scheme, encoded] = header.split(' ');
  if (scheme === 'Basic' && encoded) {
    const decoded = atob(encoded);
    const supplied = decoded.slice(decoded.indexOf(':') + 1);
    if (supplied === password) {
      // Static files (images, CSS) come back with locked headers, so copy the
      // response before adding the noindex header.
      const original = await context.next();
      const response = new Response(original.body, original);
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return response;
    }
  }
  return new Response('Private preview. Please sign in.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="selfledexecutive.com preview", charset="UTF-8"',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
};
