import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router/router";
import { initializeMockedDb } from "@/utils/initializeMockedDb";

const app = createApp(App);

app.use(createPinia());
app.use(router);

initializeMockedDb();

app.mount("#app");
