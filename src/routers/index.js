import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import movieRouter from "./movie"
import cinemaRouter from "./cinema"
import profileRouter from "./profile"

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    profileRouter,
    {path:"/*",redirect:"/movie"}
  ]
})
