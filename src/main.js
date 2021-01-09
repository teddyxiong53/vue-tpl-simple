import Vue from 'vue'
import ElementUI from 'element-ui'

import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

import './plugins/element.js'
import moment from 'moment'
import tab from '@/utils/tab'
import router from './router'

moment.locale('zh-cn')
Vue.prototype.$moment = moment
Vue.prototype.$tab = tab


new Vue({
  router,
  render: h=>h(App)
}).$mount('#app')

