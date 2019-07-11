<template>
  <div>
      <div class="nodedetail">
          <div class="card-bg">
              <div class="card">
                  <div class="card-top">
                       <div class="avtor"><div class="circle"></div>{{nodeMessage.nodeName}}</div>
                       <div class="title">
                           <div class="total">质押总额 (nova)</div>
                           <div class="present">预计年化收益</div>
                       </div>
                        <div class="txt">
                           <div class="total">{{nodeMessage.totalAmount/1000}}</div>
                           <div class="present">{{(nodeMessage.returnrate*100).toFixed(2)}}%</div>
                       </div>
                       </div>
                       <div class="mid-line"></div>
                 <div class="node-speak">
                     节点宣言
                     <p>
                       {{nodeMessage.declaration}}  
                     </p>
                 </div>
              </div>
          </div>
<!-- 节点详情下的列表 -->
          <div class="nodedetail_list">
              <ul class="shuhui">
                  <li v-for='(item,index) in recentTransactionsList' :key='index' v-if='item.status==0'>
                      <div class="title"><div class="tit-left blodtxt">{{item.type==1?'赎回':'质押'}}</div><div class="tit-right">交易正在打包</div></div>
                       <div class="title"><div class="tit-left">{{item.date}}</div><div class="tit-right">{{item.amount/1000}} NOVA</div></div>
                  </li>
                 
              </ul>
            <h2>最近交易</h2>
              <ul class="latest">
                  <li v-for='(item,index) in recentTransactionsList' :key='index' >
                      <div class="title"><div class="tit-left">{{item.type==1?'赎回':'质押'}}</div><div class="tit-right"></div></div>
                       <div class="title"><div class="tit-left">{{item.date}}</div><div class="tit-right">{{item.amount/1000}} NOVA</div></div>
                  </li>
                 
              </ul>
          </div>

          <!-- 赎回和质押按钮 -->
          <div class="btn-wrap">
          <router-link :to="{path:'/suhui',query:{address:nodeMessage.address}}">
              <div class="left-btn">赎回</div>
              </router-link>
               <router-link :to="{path:'/zhiya',query:{address:nodeMessage.address}}" >
              <div class="right-btn">质押</div>
               </router-link>
          </div>
          </div>   
  </div>
</template>

<script>
import {recentTransactions,myNodeDetail} from '@/config'
export default {

  data () {
    return {
      nodeMessage:{},
      recentTransactionsList:[]
    }
  },
  mounted() {
           myNodeDetail(this.$route.query.nodeId,this.imtokenAddress).then(res=>{
         if(res.data.success){
             this.nodeMessage=res.data.data;
         }
      })
      recentTransactions(this.imtokenAddress).then(res=>{
         if(res.data.success){
             this.recentTransactionsList=res.data.data;
         }
      })
      console.log(this.nodeMessage)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

@import "@/assets/scss/colors.scss";
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/common.scss';

.card-bg{
  
    position: relative;
    background: #122F4D;
    overflow: hidden;
    height: 260px;
    .card{
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 90%;
        margin-left: 5%;
        // height: 220px;
        z-index: 9;
        border-radius: 10px;
        background: #F08740;
        box-shadow:0px 9px 10px rgba(0,0,0,0.2);/*no*/
        
        .avtor{
            display: flex;
            align-items: center;
            padding: 5px 0 0 10px;
            font-size: 16px;
            color: #122F4D;
              .circle{
                  width: 45px;
                  height: 45px;
                  background: #fff;
                  border-radius: 50%;
                  margin-right:5px;
              }
        }
        .title{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 10px;
            color: #FDF9F4;
            font-size: 14px;
            font-weight: bold;
        }
        .txt{
             display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 10px;
            color: #E0BDAD;
            font-size: 14px;
            font-weight: bold;
            .total{
padding-left: 20px;
            }
            .present{
padding-right: 20px;
            }
        }
    }
}
.card-bg::after{
    position: absolute;
   content: '';
   top: 0;
   left: 0;
   width: 150%;
   height: 100%;
   background: #fff;
      transform: translate(0rem,2rem) rotateZ(-20deg);

}
.mid-line{
    height: 2px;
    background: #FDF9F4;
    margin: 0 10px;
}
.node-speak{
    font-size: 16px;
    color: #FDF9F4;
    padding-left: 10px;
    margin-top:30px; 
    p{
        font-size: 14px;
        color: #000;
        padding: 4px 0;
        margin-bottom: 20px;
    }
}
//节点详情下的列表
.nodedetail_list{
    padding: 10px 20px;
    li{
        margin: 25px 0;
    }
    h2{
          color: #122F4D;
          font-weight: bold;
    }
   
      .title{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 8px 0;
          color: #858B8E;
          font-size: 14px;
           .tit-left.blodtxt{
       color: #122F4D;
       font-size: 16px;
       font-weight: bold;
   }
      }
  
}

.btn-wrap{
    display: flex;
    justify-content: space-around;
    margin-bottom:40px;
    .left-btn,.right-btn{
        width: 80px;
        height: 35px;
        background: linear-gradient(90deg,#F08740,#F06B40);
        text-align: center;
        line-height: 35px;
        border-radius: 8px;
        color: #FDF9F4;
        font-size: 13px;
        box-shadow: 2px 2px 0 0px #ccc;
    }
}
</style>
