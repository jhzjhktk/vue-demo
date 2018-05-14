import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Document from '@/components/Document'
// import noFound from '@/components/404'
import study from '@/views/study'
import work from '@/views/work'
import Slider from '@/components/slider'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'nav-active',
  scrollBehavior (to, from, savedPosition) {
    // to 目标路由对象
    // from 出发地路由对象
    // savedPosition 记录滚动条的位置  前进后退时有值
    // if (savedPosition) {
    //   return (savedPosition)
    // } else {
    //   return {x: 0, y: 0}
    // }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
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
      components: {
        default: Document,
        slider: Slider
      }
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
