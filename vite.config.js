import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({

    base: "/",
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
        },
        extensions: ['.vue', '.js', '.json']
    }
})
