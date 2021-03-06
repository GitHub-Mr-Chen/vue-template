import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './locale'
import ElementUI from 'element-ui'
import '@/styles/index.scss'

import Loading from './components/Loading'
Vue.use(Loading)
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000,
  i18n: (key, value) => i18n.t(key, value),
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
