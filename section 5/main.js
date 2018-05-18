import Vue from "vue";
import App from "./App.vue";
import router from "@/lib/router";
import store from "@/lib/store";
import "@/lib/firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
