import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const pages = ["index.html", "concurrency.html", "typescript-typesystems-and-javascript.html", "ok-sometimes-async-await.html"]

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                ...Object.fromEntries(pages.map(page => [page, resolve(__dirname, page)])),
            },
        },
    },
});