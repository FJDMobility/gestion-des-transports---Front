import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Covoiturage from '../views/Covoiturage.vue'
import CovoiturageResa from '../views/CovoiturageResa.vue'
<<<<<<< Updated upstream
import Offres from '../views/Offres.vue'

import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
=======
import login from '../views/login.vue'
import test from '../views/Test.vue'
import Offres from '../views/Offres.vue'
>>>>>>> Stashed changes

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/offres',
    name: 'Offres',
    component: Offres
  },
  
  {
    path: '/listecovoiturage',
    name: 'listecovoiturage',
    component: Covoiturage
  },
  {
    path: '/offres',
    name: 'Offres',
    component: Offres
  },
  {
    path: '/covoiturageresa',
    name: 'CovoiturageResa',
    component: CovoiturageResa
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
