import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Document from '@/components/Document'
// import noFound from '@/components/404'
import study from '@/views/study'
import work from '@/views/work'
import Slider from '@/components/slider'
import user from '@/components/user'

Vue.use(Router)

let routerq = new Router({
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
      alias: '/index',
      meta: {
        index: 0
      }
    },
    {
      path: '/user/:userId?',
      name: 'user',
      component: user,
      meta: {
        index: 3,
        login: true
      }
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '',
          name: 'about',
          component: study,
          meta: {
            index: 1
          }
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
      beforeEnter (to, from, next) {
        console.log(2222)
        next()
      },
      components: {
        default: Document,
        slider: Slider
      },
      meta: {
        index: 2,
        title: 'documentdddd'
      }
    }
    // {
    //   path: '*',
    //   // component: noFound
    //   // 重定向
    //   // redirect: '/home'
    //   // redirect: { path: '/home' }
    //   // redirect: {name: 'Home'}
    //   redirect: (to) => {
    //     console.log(to)
    //     if (to.path === '/123') {
    //       return '/document'
    //     } else if (to.path === '/abc') {
    //       return '/about'
    //     } else {
    //       return '/home'
    //     }
    //   },
    //   meta: {
    //     index: 4
    //   }
    // }
  ]
})
export default routerq

routerq.beforeEach((to, from, next) => {
  console.log('aaa')
  // next()
  // next(false)
  // if (to.meta.login) {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})

routerq.afterEach((to, from) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = 'miaov'
  }
})
