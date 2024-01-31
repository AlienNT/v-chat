import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "node:url";
// @ts-ignore
import autoprefixer from "autoprefixer";
export default defineConfig({
    plugins: [vue()],
    css: {
        postcss: {
            plugins: [autoprefixer],
        },
        preprocessorOptions: {
            scss: {
                additionalData: `@import "src/assets/css/variables.scss";`,
            }
        }
    },
    resolve: {
        alias: {
            // @ts-ignore
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
