import App from './App'
import uviewPlus from 'uview-plus'
// #ifndef VUE3
import Vue from 'vue';
import './uni.promisify.adaptor';
import api from "./utils/request/api.js"

Vue.config.productionTip = false;

App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue';
import { initRequest } from "./utils/request/index.js"

export function createApp() {
	
  const app = createSSRApp(App)
	// 引入请求封装
	initRequest(app);
	
	app.use(uviewPlus);
  return {
    app
  }
}
// #endif