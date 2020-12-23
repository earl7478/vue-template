import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
const configInfo = require('@/config/index.js')

Vue.config.productionTip = false
let par = {
  router,
  render: h => h(App)
}

if (configInfo.isVuex) par['store'] = store
if (configInfo.isI18n) {
  Vue.use(VueI18n)
  const i18n = new VueI18n({
    locale: localStorage.getItem(configInfo.i18nlocalStorageName) || 'zh',
    messages: configInfo.i18nMessages,
    silentTranslationWarn: true		//禁止打印警告信息
  })
  par['i18n'] = i18n
}

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + '-' + configInfo.project_name
  }
  next()
})

new Vue(par).$mount('#app')
