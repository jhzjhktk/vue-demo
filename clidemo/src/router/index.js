import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Document from '@/components/Document'
// import noFound from '@/components/404'
import study from '@/views/study'
import work from '@/views/work'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'nav-active',
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      alias: '/index'
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '',
          name: 'about',
          component: study
        },
        {
          path: 'work',
          component: work
        }
      ]
    },
    {
      path: '/document',
      name: 'Document',
      component: Document
    },
    {
      path: '*',
      // component: noFound
      // 重定向
      // redirect: '/home'
      // redirect: { path: '/home' }
      // redirect: {name: 'Home'}
      redirect: (to) => {
        console.log(to)
        if (to.path === '/123') {
          return '/document'
        } else if (to.path === '/abc') {
          return '/about'
        } else {
          return '/home'
        }
      }
    }
  ]
})
