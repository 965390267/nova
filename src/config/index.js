import axios from 'axios'

// export const baseurl='http://106.15.52.35:8080/' 


if(env()=='production'){
  axios.defaults.baseURL = 'https://novastaking.com/';/* 7-12-10-14更改 */
}
function env() {
  if (process.env.NODE_ENV === "development") return "development";   //开发环境
  if (window.location.href.includes('192.168')) return 'test';        //测试环境，"192.168"根据实际情况而定
  return 'production'                                                 //线上环境
}

// 添加请求拦截器
axios.interceptors.request.use( (config)=> {
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
   
    //  !response.data.success&&alert(response.data.msg)
    return response;
  }, function (error) {
    // 对响应错误做点什么
    if (error && error.response) {
      alert('请求错误')
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
export function recentTransactions(userAddress,nodeAddress){
    return axios(`api/recentTransactions?userAddress=${userAddress}&nodeAddress=${nodeAddress}`);
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
   