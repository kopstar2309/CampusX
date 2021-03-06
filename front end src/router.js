import Vue from "vue";
import Router from "vue-router";

import ProductsList from "./components/ProductsList.vue";
import UserProducts from "./components/UserProducts.vue";
import Product from "./components/Product.vue";
import UpdateThing from "./components/UpdateThing.vue";
import LostFound from "./components/LostFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "products",
      component: ProductsList
    },
    {
      path: "/userproducts",
      name: "userproducts",
      component: UserProducts
    },
    {
      path: "/product/:id",
      name: "product",
      component: Product
    },
    {
      path: "/update/:id",
      name: "update",
      component: UpdateThing
    },
    {
      path: "/lostfound",
      name: "lostfound",
      component: LostFound
    }
  ]
});
