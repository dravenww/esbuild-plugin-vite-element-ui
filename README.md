# esbuild-plugin-vite-element-ui

解决element-ui在vite使用的过程中，无法正常使用的问题，

尤其表现为：Can't read property '$isServer' of undefined

# use

in vite.config.js
```
import esbuildPlugin from 'esbuild-plugin-vite-element-ui';
export default {
    optimizeDeps: {
        esbuildOptions: {
          plugins: [
            esbuildPlugin()
          ],
        }
    }
}

```



