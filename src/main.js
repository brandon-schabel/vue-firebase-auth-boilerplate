import Vue from 'vue'
import App from './App.vue'
import {firestorePlugin} from 'vuefire'
import router from './router'
import './firebase'

Vue.config.productionTip = false
Vue.use(firestorePlugin)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
