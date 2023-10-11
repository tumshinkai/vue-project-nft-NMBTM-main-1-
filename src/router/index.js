import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtView from '../views/ArtView.vue'
import GameView from '../views/GameView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import Product_Vue from '../views/Product_Vue.vue'
import cart_vue from '../views/Cart_Vue.vue'
import Product_Game from '../views/Product_Game.vue'
import Product_Photpgraphy from '../views/Product_Photpgraphy.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import Userinfo from '../views/User_info.vue'
import OrderView from '../views/OrderView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ArtView',
      name: 'ArtView',
      component: ArtView
    },
    {
      path: '/GameView',
      name: 'GameView',
      component: GameView
    },
    {
      path: '/PhotographyView',
      name: 'PhotographyView',
      component: PhotographyView
    },
    {
      path: '/Product_Vue/:id',
      name: 'Product_Vue',
      component: Product_Vue
    },
    {
      path: '/cart_vue',
      name: 'cart_vue',
      component: cart_vue
    },
    {
      path: '/Product_Game/:id',
      name: 'Product_Game',
      component: Product_Game
    },
    {
      path: '/Product_Photpgraphy/:id',
      name: 'Product_Photpgraphy',
      component: Product_Photpgraphy
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/Userinfo',
      name: 'Userinfo',
      component: Userinfo
    },
    {
      path: '/OrderHistory',
      name: 'OrderHistory',
      component: OrderView
    }
  ]

})

export default router
