import Vue from "vue";
import Router from "vue-router";
import New from "@/components/contact/New";
import Show from "@/components/contact/Show";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: New
    },

    {
      path: "/contact/:id",
      name: "contact",
      component: Show
    }
  ]
});
