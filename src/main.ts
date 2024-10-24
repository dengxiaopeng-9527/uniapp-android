import { createSSRApp } from "vue";
import uviewPlus from 'uview-plus'

import App from "./App.vue";
import { initRequest } from "./utils/request";

import store from "@/store"
export function createApp() {
  const app = createSSRApp(App);
  initRequest(app);
  app.use(uviewPlus)
  app.use(store)
  return {
    app,
  };
}
