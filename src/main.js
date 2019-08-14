// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.prototype.bus = new Vue;
import 'muse-ui/lib/styles/base.less';
import { Button, Select } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Button);

Vue.config.productionTip = false
if (!!window.imToken) {/* imtoken环境下 */
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);

    try {
      // Request account access if needed
      ethereum.enable().then((accounts) => {
        Vue.prototype.imtokenAddress = window.accounts = accounts[0];
        /* eslint-disable no-new */
        new Vue({
          el: '#app',
          router,
          components: { App },
          template: '<App/>'
        })
      }).catch((err) => {
        alert('未成功授权,请退出重新授权')
      })
    } catch (error) {
      alert('未成功授权,请退出重新授权')
      // User denied account access...
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
    ethereum.enable().then((accounts) => {
      Vue.prototype.imtokenAddress = window.accounts = accounts[0];
      /* eslint-disable no-new */
      new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
      })
    }).catch((err) => {
      alert('未成功授权,请退出重新授权')
    })
  } else {
    alert('未成功授权,请退出重新授权')
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
    alert('请在imtoken浏览器打开')
  }
} 
else {/* 浏览器环境下 */
  if (env() != 'production') {
    Vue.prototype.imtokenAddress = '0x7822c4C757A61cEA3F2C21d6502515F60D6898d7'
  } 
  function env() {
    if (process.env.NODE_ENV === "development") return "development";   //开发环境
    if (window.location.href.includes('192.168')) return 'test';        //测试环境，"192.168"根据实际情况而定
    return 'production'                                                 //线上环境
  }
  Vue.prototype.imtokenAddress = '0x7822c4C757A61cEA3F2C21d6502515F60D6898d7'
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })

}


