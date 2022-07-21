import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),

        // 自動引入套件
        AutoImport({
            imports: ["vue", "vue-router", "pinia"],
        }),
    ],
    server: {
        // required to load scripts from custom host
        cors: true,

        // we need a strict port to match on PHP side
        // change freely, but update on PHP to match the same port
        strictPort: true,
        host: "0.0.0.0",
        port: 3000,
    },

    // required for in-browser template compilation
    // https://v3.vuejs.org/guide/installation.html#with-a-bundler
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
