## Local Development

To run in development, use the command:

```bash
npm start

```

This command will use `webpack-dev-server` to run a local server to serve the assets on `https://localhost:8080`. You can then load each page by visiting their corresponding address like `https://localhost:8080/video_overlay.html`
## Building for Release

All you have to do is run:

```bash
npm run build
```

This command will generate all your HTML views, bundle CSS, transpile your JavaScript, bundle your JavaScript into an `app.bundle`, and bundle third-party libraries into `vendor.bundle` files inside `/dist`.

All you have to do next is zip the contents of `/dist` and upload it to Twitch.
