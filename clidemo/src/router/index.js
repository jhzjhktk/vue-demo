import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Document from '@/components/Document'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'nav-active',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/document',
      name: 'Document',
      component: Document
    }
  ]
})
