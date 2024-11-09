import { sign } from "crypto";
import { resolve } from "path";
import {defineConfig} from "vite";

export default defineConfig ({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                sign: resolve(__dirname, "sign.html"),
                already: resolve(__dirname, "already.html"),
            },
        },
    },
});