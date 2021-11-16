import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0a9006ee = () => interopDefault(import('../pages/expired.vue' /* webpackChunkName: "pages/expired" */))
const _5dec6ebe = () => interopDefault(import('../pages/quiz.vue' /* webpackChunkName: "pages/quiz" */))
const _584ec05f = () => interopDefault(import('../pages/submitted.vue' /* webpackChunkName: "pages/submitted" */))
const _a2fe7a94 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/expired",
    component: _0a9006ee,
    name: "expired"
  }, {
    path: "/quiz",
    component: _5dec6ebe,
    name: "quiz"
  }, {
    path: "/submitted",
    component: _584ec05f,
    name: "submitted"
  }, {
    path: "/",
    component: _a2fe7a94,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
