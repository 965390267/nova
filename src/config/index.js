import axios from 'axios'

// export const baseurl='http://106.15.52.35:8080/' 


   axios.defaults.baseURL ="https://106.15.52.35:443/"
if (env() == 'production') {
  axios.defaults.baseURL = 'https://106.15.52.35:443/';/* 7-12-10-14更改 */
}
function env() {
  if (process.env.NODE_ENV === "development") return "development";   //开发环境
  if (window.location.href.includes('192.168')) return 'test';        //测试环境，"192.168"根据实际情况而定
  return 'production'                                                 //线上环境
}

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么

  // if(!this.imtokenAddress)alert('未成功授权');
  return config;
}, function (error) {
  // 对请求错误做些什么
  // alert(error)
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  !response.data.success&&alert(response.data.msg)
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error && error.response) {
    // switch (err.response.status) {
    //   case 400:
    //       console.log('错误请求')
    //     break;
    //   case 401:
    //       console.log('未授权，请重新登录')
    //     break;
    //   case 403:
    //     console.log('拒绝访问')
    //     break;
    //   case 404:
    //     console.log('请求错误,未找到该资源')
    //     break;
    //   case 405:
    //     console.log('请求方法未允许')
    //     break;
    //   }
  }
  return Promise.reject(error.response);
});
/** 
 * @request {POST}
 * @param {fromAddress}
 * @param {toAddress}
 *  @param {amount}
 *  @param {type}
 * //赎回接口
*/
export function getNodeRedeem(data) {
  return axios.post('api/nodeRedeem', data);
}


/** 
* @request {POST}
* @param {fromAddress}
* @param {toAddress}
*  @param {amount}
*  @param {txnHash}
* //质押接口
*/
export function getNodePledge(data) {
  return axios.post('api/nodePledge', data);
}


/** 
 * @request {GET}
 * @param {address}
 * //节点列表接口
*/
export function getMyNodeList(address) {
  return axios(`api/myNodeList?address=${address}`);
}

/** 
 * @request {GET}
 * @param {address}
 * //生效未生效节点列表接口
*/
export function nodeList(address) {
  return axios(`api/nodeList?address=${address}`);
}

/** 
* @request {GET}
* @param {address}
* //最近交易接口
*/
export function recentTransactions(userAddress, nodeAddress) {
  return axios(`api/recentTransactions?userAddress=${userAddress}&nodeAddress=${nodeAddress}`);
}


/** 
* @request {GET}
* @param {address}
* @param {nodeId}
* //我的节点详情接口
*/
export function myNodeDetail(nodeId, address) {
  return axios(`api/myNodeDetail?nodeId=${nodeId}&address=${address}`);
}

/** 
* @request {GET}
* @param {address}
* 
* //个人总资产接口
*/
export function personalAssest(address) {

  return axios(`api/personalAssest?address=${address}`);
}

/** 
* @request {GET}
* @param {address}
* @param {nodeId}
* //我的收益记录
*/
export function myIncomeRecode(nodeId, address) {

  return axios(`api/myIncomeRecode?nodeId=${nodeId}&address=${address}`);
}
/** 
* @request {POST}
* @param {body}
* {
*  "fromAddress":"0xe48c9960Cc10d0d7f6ba83Ffea5c49A8363a78d5",
"toAddress":"0x6E746901b6675a9AE97e3458D9F45d424bFCd908",
"transactionId":"384"
* }
* 
* //撤销普通赎回/质押转换
*/
export function cancelNodeRedeem(data) {
  return axios.post(`api/cancelNodeRedeem`,data);
}


/** 
* @request {GET}
* @param {none}
* 
* //获取NOVA汇率
*/
export function getNovaCNY() {

  return axios(`api/getNovaCNY`);
}

/** 
* @request {GET}
* @param {none}
* 
* //获取矿工费
*/
export function getGas() {

  return axios(`api/getGas`);
}


/** 
* @request {POST}
* @param {body}
* {
  "userAddress":"0x6E746901b6675a9AE97e3458D9F45d424bFCd908",
  "oldAddress":"0xe48c9960Cc10d0d7f6ba83Ffea5c49A8363a78d5",
  "newAddress":"0x6788bfcA39E1cb26C9aF9b71b9F28c78Ae58160B",
  "amount":"10000"
}
* //质押转换
*/
export function changePledge(data) {

  return axios.post(`api/changePledge`,data);
}