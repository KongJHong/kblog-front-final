import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Layout from '@/views/Layout.vue'

Vue.use(VueRouter)

// 不验证路由
const constantRoutes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import("@/views/Home.vue"),
        name: 'Home',
        meta: {
          title: '首页',
        }
      },
      {
        path: '/categories',
        component: () => import("@/views/Categories.vue"),
        name: 'Categories',
        meta: {
          title: '分类'
        },
      },
      {
        path: '/category-detail/:type/:id',
        component: () => import("@/views/CategoriesDetail.vue"),
        name: 'CategoriesDetail',
        meta: {
          title: '分类详情'
        }
      },
      {
        path: '/article',
        component: () => import("@/views/Article.vue"),
        name: 'Article',
        meta: {
          title: '文章'
        }
      }
    ]
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
  routes: constantRoutes
})

export default router
