import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/pagesRouter";

import "./scripts/imports";

const app = createApp(App);

app.use(router);

app.mount("#app");
