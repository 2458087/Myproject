import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import Home from '../views/Home/Home.vue';
import Cart from "../views/Cart/Cart.vue";
import Category from "../views/Category/Category.vue";
import Mine from "../views/Mine/Mine.vue";
let routes = [{
    path: "/home",
    name: Home,
    component: Home
}, {
    path: "/cart",
    name: Cart,
    component: Cart
}, {
    path: "/category",
    name: Category,
    component: Category
}, {
    path: "/mine",
    name: Mine,
    component: Mine
}]

let router = new VueRouter({
    routes
})

export default router