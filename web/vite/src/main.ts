import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);

// load router after store
app.use(router);

app.mount("#app");
