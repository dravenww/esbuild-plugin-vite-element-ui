const fs = require('fs');
function testPlugin() {
  return {
    name: 'esbuild-plugin-vite-element-ui',
    setup(build) {
      build.onLoad({ filter: /node_modules\/element-ui/ }, async (args) => {
        let text = fs.readFileSync(args.path, 'utf8');
        text = text.replace("var _vue = require('vue');", "var _vue = require('vue');\n _vue.__esModule = true");
        text = text.replace("var _resizeObserverPolyfill = require('resize-observer-polyfill');", "var _resizeObserverPolyfill = require('resize-observer-polyfill');\n _resizeObserverPolyfill.__esModule = true");
        return {
          contents: text,
          loader: 'default'
        }
      })
    },
  }
}
module.exports = testPlugin
