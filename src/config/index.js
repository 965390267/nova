import axios from 'axios'

// export const baseurl='http://106.15.52.35:8080/' 
axios.defaults.baseURL = 'https://novastaking.com:8080/';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    alert(error)
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
   
     !response.data.success&&alert(response.data.msg)
    return response;
  }, function (error) {
    // 对响应错误做点什么
    alert(error)
    return Promise.reject(error);
  });
/** 
 * @request {POST}
 * @param {fromAddress}
 * @param {toAddress}
 *  @param {amount}
 *  @param {type}
 * //赎回接口
*/
 export function getNodeRedeem(data){
 return axios.post('api/nodeRedeem',data);
 }


 /** 
 * @request {POST}
 * @param {fromAddress}
 * @param {toAddress}
 *  @param {amount}
 *  @param {txnHash}
 * //质押接口
*/
export function getNodePledge(data){
    return axios.post('api/nodePledge',data);
    }


/** 
 * @request {GET}
 * @param {address}
 * //节点列表接口
*/
 export function getMyNodeList(address){
    return axios(`api/myNodeList?address=${address}`);
    }
   
/** 
 * @request {GET}
 * @param {address}
 * //生效未生效节点列表接口
*/
export function nodeList(address){
    return axios(`api/nodeList?address=${address}`);
    }
   
    /** 
 * @request {GET}
 * @param {address}
 * //最近交易接口
*/
export function recentTransactions(address){
    return axios(`api/recentTransactions?address=${address}`);
    }
   

        /** 
 * @request {GET}
 * @param {address}
 * @param {nodeId}
 * //我的节点详情接口
*/
export function myNodeDetail(nodeId,address){
    return axios(`api/myNodeDetail?nodeId=${nodeId}&address=${address}`);
    }

            /** 
 * @request {GET}
 * @param {address}
 * 
 * //个人总资产接口
*/
export function personalAssest(address){
    return axios(`api/personalAssest?address=${address}`);
    }
   