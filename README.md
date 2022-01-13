# Fastly Compute@Edge starter, using Vite

This example is derived from the default starter kit, but using [Vite](https://vitejs.dev) instead of Webpack for bundling.

See the Fastly developer hub for more details about [JavaScript on Compute@Edge](https://developer.fastly.com/learning/compute/javascript/). Here you'll also find [other starter kits for Compute@Edge](https://developer.fastly.com/solutions/starters), as well as a [growing collection of examples](https://developer.fastly.com/solutions/examples/?lang=javascript).

## Features

- Support for local preview of the service using the fastly-cli (`fastly compute serve`): available as `npm start`
- Vite configured for compiling `.wasm` file and preparation for deployment to Compute@Edge.
- Vite dev-server for rapid local development: `npm run dev`
- Uses Preact, but trivial to use Svelte or other ([See "getting started"](https://vitejs.dev/guide/#overview))

## Understanding the code

The code in `src/index.tsx` registers a handler for the `fetch` event that takes an event object with the downstream request as a `request` property, and shows how to read the URL, request body and headers, and send a response.

The template uses webpack to bundle `index.tsx` and its imports into a single JS file, `bin/index.js`, which is then wrapped into a `.wasm` file, `bin/index.wasm` using the `js-compute-runtime` CLI tool bundled with the `@fastly/js-compute` npm package, and bundled into a `.tar.gz` file ready for deployment to Compute@Edge.

After deployment, your Compute@Edge service will simply return a cargo bike followed by a headline. For more complex examples of what can be done within a Compute@Edge program, see the Fastly [usage guide for JavaScript](https://developer.fastly.com/learning/compute/javascript) or the library of [code examples](https://developer.fastly.com/solutions/examples).
