/// <reference types="@fastly/js-compute" />
import render from 'preact-render-to-string';
import Content from './components/Content';

// enable debug logging with render and compute times
fastly.enableDebugLogging(true);

addEventListener('fetch', (event) => event.respondWith(handleRequest(event)));

function handleRequest(event) {
  // Get the client request from the event
  const req = event.request;

  // We can filter requests that have unexpected methods.
  if (req.method !== 'GET') {
    return new Response('This method is not allowed', { status: 405 });
  }

  const reqUrl = new URL(req.url);
  const content = render(<Content path={reqUrl.pathname} />);

  return new Response(content, {
    status: 200,
    headers: new Headers({ 'Content-Type': 'text/html; charset=utf-8' }),
  });
}
