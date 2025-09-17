// import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import '@mdi/font/css/materialdesignicons.css'
import "vuetify/styles";
import { createVuetify } from "vuetify";

const app = createApp(App);
app.use(
  createVuetify({
    theme: {
      defaultTheme: "dark",
    },
    components,
    directives,
  })
);
app.use(createPinia());
app.use(router);

app.mount("#app");
