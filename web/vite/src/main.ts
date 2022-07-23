import { createApp } from "vue";
import "./style.css";
import router from "./router";
import { createPinia } from "pinia";
// import store from "./store/index";
import App from "./App.vue";

const app = createApp(App);

// load pinia
app.use(createPinia());

// load router
app.use(router);

// load store
// app.use(store);

app.mount("#app");
