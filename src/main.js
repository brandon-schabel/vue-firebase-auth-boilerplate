import Vue from "vue"
import App from "./App.vue"
import { firestorePlugin } from "vuefire"
import { routes } from "./routes"
import "./firebase"
import { auth } from "./firebase"
import VueRouter from "vue-router"
import { store } from './store'

Vue.config.productionTip = false
Vue.use(firestorePlugin)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: "history"
})

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next("/sign-in")
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
})

auth.onAuthStateChanged(user => {
  new Vue({
    render: h => h(App),
    router,
    store: store
  }).$mount("#app")
})
