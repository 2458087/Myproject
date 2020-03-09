import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from "../views/Product.vue"
import Show from "../views/Show.vue"
import Contact from "../views/Contact.vue"
import New from "../views/New.vue"
import Solve from "../views/Solve.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/product',
    name: 'Product',
    component: Product
  },{
    path: '/show',
    name: 'Show',
    component: Show
  },{
    path: '/contact',
    name: 'Contact',
    component: Contact
  },{
    path: '/new',
    name: 'New',
    component: New
  },{
    path: '/solve',
    name: 'Solve',
    component: Solve
  }
]

const router = new VueRouter({
  routes
})

export default router
