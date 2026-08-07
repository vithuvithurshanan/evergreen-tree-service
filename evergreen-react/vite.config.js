import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The app renders nothing until the JS bundle runs, so the CSS link can be
// loaded non-render-blocking (preload + swap) without causing a flash of
// unstyled content.
function deferCss() {
  return {
    name: 'defer-css',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+)">/,
          (_match, href) =>
            `<link rel="preload" as="style" crossorigin href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
            `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
        )
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), deferCss()],
})
