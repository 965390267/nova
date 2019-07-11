// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

Vue.prototype.$http = axios
Vue.prototype.bus = new Vue;
// window.addEventListener('load', async () => {
// Modern dapp browsers...
if (window.ethereum) {
  window.web3 = new Web3(ethereum);

  try {
    // Request account access if needed
    ethereum.enable().then((accounts) => {
      Vue.prototype.imtokenAddress = window.accounts = accounts[0];

    }).catch((err) => {
      Vue.prototype.imtokenAddress ='';
      alert('未成功授权')
    })
  } catch (error) {
    // User denied account access...
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  window.web3 = new Web3(web3.currentProvider);
  ethereum.enable().then((accounts) => {
    Vue.prototype.imtokenAddress = window.accounts = accounts[0];

  }).catch((err) => {
    Vue.prototype.imtokenAddress ='';
    alert('未成功授权')
  })
} else {
  Vue.prototype.imtokenAddress = ''
  alert('请在imtoken浏览器打开')
}
// web3.eth.getBalance(accounts[0]).then(res=>{
//   alert('waibu'+res)
// })
// });
// Vue.prototype.imtokenAddress='0x7822c4C757A61cEA3F2C21d6502515F60D6898d7'
// import 'muse-ui/lib/styles/base.less';0x6788bfcA39E1cb26C9aF9b71b9F28c78Ae58160B
// import { Button, Select } from 'muse-ui';
// import 'muse-ui/lib/styles/theme.less';
// import 'lib-flexible/flexible'
// Vue.use(Button).use(Select);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
