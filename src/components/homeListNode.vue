<template>
  <!-- 节点列表 -->
    <div class="node-list">
        <div class="linear-bg"></div>
           <ul>
               <li v-for='(item,index) in nodelistdata' :key='index' @click='gotodetail(item.nodeId,item.address)'>
               <div class="top-right-active no" v-if='item.nodeStatus==0'>
                         待生效节点
                   </div>
                   <div class="top-right-active" v-else>
                   生效节点  
                   </div>
                   <div class="top">
                       <div class="left-circle"></div>
                   <div class="name">{{item.nodeName}}</div>
                   <div class="mid-money">
                       <div class="txt">{{item.totalAmount/1000}}</div>
                       <div class="des">质押总额</div>
                   </div>
                   <div class="right-present">
                        <div class="txt">{{(item.returnrate*100).toFixed(2)}}%</div>
                        <div class="des">预计年化收益</div>
                   </div>
                </div>
                   <div class="mid-line"></div>
                   <div class="bottom">
                   <div class="des">
                       <div class="txt">质押</div>
                       <div class="num">{{item.pledgeAmount/1000}}</div>
                   </div>
                   <div class="des">
                        <div class="txt">收益</div>
                        <div class="num">{{item.totalIncome}}</div>
                    </div>
                    <div class="des">
                            <div class="txt">预计收益(天)</div>
                            <div class="num">+{{item.yesterdayincome}}</div>
                        </div>
                   </div>
               </li>
               
              
           </ul>
    </div>
</template>

<script>
export default {

  props:['nodelistdata'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      gotodetail(nodeId,nodeAddress){
          this.$router.push({path:'/mynodedetail',query:{nodeId:nodeId,nodeAddress:nodeAddress}})
      }
  },
  mounted() {
      console.log(this.nodelistdata)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "@/assets/scss/colors.scss";
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/common.scss';
.node-list{
    position: relative;
    background-position-y: 40px;
    .linear-bg{
        position: absolute;
        top: 40px;
        height: 100%;
        width: 100%;
        z-index: -1;
        background: linear-gradient(90deg,#F08740,#F06B40);
    }
     ul{
     width: 90%;
     margin: 0 auto;
       li{
           display: flex;
           flex-direction: column;
           background: #fff;
           border: 1px solid #F06B40;
           border-radius: 10px;
           margin-bottom: 24px;
           overflow: hidden;
           .top-right-active{
           align-self: flex-end;
           padding:2px 5px;
           height: 18px;
           line-height: 18px;
            font-size: 10px;
            color: #FDF9F4;
              text-align: center;
               background: linear-gradient(90deg,#F08740,#F06B40);
               border-radius: 0px 0px 0px 12px;
           }
           .top-right-active.no{
               background:#122F4D;
           }
           .top{
               display: flex;
               flex-direction: row;
            align-items: stretch;
            padding: 5px 0 5px 10px;
               .left-circle{
                   width: 30px;height: 30px;
                   background: linear-gradient(90deg,#F08740,#F06B40);
                   border-radius: 50%;
               }
               .name{
                  padding-top: 7px;
                 font-size: 14px;
                 color: $main-text-color;  
               }
               .mid-money,.right-present{
                   flex: 1;
               }
               .mid-money{
                padding-top: 7px;
                   text-align: center;
                   .txt{
                    font-size: 12px;
                    color: $main-text-color;  
                   }
                   .des{
                       padding-top: 5px;
                    font-size: 10px;
                    color: $second-text-color;  
                   }
               }
               .right-present{
                padding-top: 7px;
                   text-align: center;
                .txt{
                    font-size: 20px;
                    color: $orange-text-color;  
                   }
                   .des{
                    padding-top: 5px;
                    font-size: 10px;
                    color: $second-text-color;  
                   }
               }
           }

           .mid-line{
            width: 92%;
            margin: 0 auto;
            height: 1px;
            background: #F06B40;
        }
        .bottom{
            display: flex;
            flex-direction: row;
            padding: 14px 0;
            .des{
                flex: 1;
                .txt{
                    font-size: 13px;
                    color: $main-text-color;
                    text-align: center;
                }
                .num{
                    padding-top: 5px;
                    font-size: 10px;
                    color: $second-text-color;
                    text-align: center;
                }
            }
        }
       }
    }
   
}
</style>
