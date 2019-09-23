import axios from 'axios'

// export const baseurl='http://106.15.52.35:8080/' 
  //  axios.defaults.baseURL ="https://39.97.184.19:443/"
if (env() == 'production') {
  // axios.defaults.baseURL = 'https://39.97.184.19:443/';/* 7-12-10-14更改 */
  axios.defaults.baseURL = location.origin+'/'
  //"https://www.novastaking.com/"
}else{
  axios.defaults.baseURL = location.origin+'/'

}
// axios.defaults.timeout = 10000;
function env() {
  if (process.env.NODE_ENV === "development") return "development";   //开发环境
  if (window.location.href.includes('192.168')) return 'test';        //测试环境，"192.168"根据实际情况而定
  return 'production'                                                 //线上环境
}

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.log(error);
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response);
  const res = response.data
  if (!res.success) {
    alert(res.msg||'请求出错，正在修复中')
  }

  return response;
}, function (error) {
  // 对响应错误做点什么
  console.log(error);
  
  if (error && error.response) {
    // alert(error.response.data.msg)
console.log(error.response);

    switch (error.response.status) {
      case 400:
        alert('错误请求')
        break;
      case 401:
        alert('未授权，请重新登录')
        break;
      case 403:
        alert('拒绝访问')
        break;
      case 404:
          alert('出错啦，网络未响应，稍后再试')
        break;
      case 405:
          alert('请求方法未允许')
        break;
        case 500:
          alert('出错啦，服务器维修中')
          break;
         default: alert('出错啦，专业人员正在修复中')
      }
  }
  return Promise.reject(error);
});
/** 
 * @request {POST}
 * @param {nodeId}
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
* @param {nodeId}
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
@param {nodeId}
* //最近交易接口
*/
export function recentTransactions(userAddress, nodeId) {
  return axios(`api/recentTransactions?userAddress=${userAddress}&nodeId=${nodeId}`);
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
*  "nodeId":"22",
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
  "oldNodeId":"22",
  "newNodeId":"23",
  "amount":"10000"
}
* //质押转换
*/
export function changePledge(data) {

  return axios.post(`api/changePledge`,data);
}