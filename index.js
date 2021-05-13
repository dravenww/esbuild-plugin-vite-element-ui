import * as fs from 'fs';
function testPlugin() {
  return {
    name: 'esbuild-plugin-vite-element-ui',
    setup(build) {
      build.onLoad({ filter: /node_modules\/element-ui/ }, async (args) => {
        let text = fs.readFileSync(args.path, 'utf8');
        const res = text.replace("var _vue = require('vue');", "var _vue = require('vue');\n _vue.__esModule = true");
        return {
          contents: res,
          loader: 'default'
        }
      })
    },
  }
}
module.exports = testPlugin
