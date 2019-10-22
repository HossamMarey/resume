import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Resume from './views/Resume.vue'
import Portfolio from './views/Portfolio.vue'
import Contact from './views/Contact.vue'
import FrontEnd from './views/FrontEnd.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: About
    },
    {
      path: '/resume',
      component: Resume
    },
    {
      path: '/',
      component: About
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/portfolio/front-end',
      component: FrontEnd
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
