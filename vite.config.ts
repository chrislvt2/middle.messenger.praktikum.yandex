import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    css: {
        preprocessorOptions: {
            // scss: {
            //     additionalData: `
            //       @import "./src/styles/variables.scss";
            //       @import "./src/styles/mixins.scss";
            //     `
            // }
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
});