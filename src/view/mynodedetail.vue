<template>
  <div class="nodedetail" v-cloak>
    <div class="card-bg">
      <div class="card">
        <div class="card-top">
          <div class="avtor">
            <!-- <div class="circle"></div> -->
            {{nodeMessage.nodeName}}
          </div>
          <div class="title">
            <div class="total">{{$t('mynodedetail.zyje')}} (nova)</div>
            <div class="present">{{$t('mynodedetail.yeargetmoney')}}</div>
          </div>
          <div class="txt">
            <div class="total">{{nodeMessage.totalAmount/1000}}</div>
            <div class="present">{{(nodeMessage.returnrate*100).toFixed(2)}}%</div>
          </div>
        </div>
        <div class="mid-line"></div>
        <div class="node-speak">
          {{$t('mynodedetail.nodespeak')}}
          <p>{{nodeMessage.declaration}}</p>
        </div>
      </div>
    </div>
    <div class="nodedetail-mid">
      <div class="nodedetail-mid-note">
        <div class="leftnot"> {{$t('mynodedetail.myziyaje')}}(NOVA)</div>
        <mu-button  class="left-btn" :to='{path:"/moneyrecord",query:{nodeId:$route.query.nodeId,nodeAddress:imtokenAddress}}'>{{$t('mynodedetail.moneyrecord')}}</mu-button>
      </div>
      <div>
        <mu-text-field
          full-width
          disabled
          color="rgba(240,113,64,1)"
          v-model="totalmoney"
          :placeholder="nodeMessage.pledgeAmount/1000"
        ></mu-text-field>
        <br />
      </div>
      <!-- 赎回和质押更换节点按钮 -->
      <div class="btn-list">
        <mu-button v-if='nodeMessage.totalAmount/1000>0'
          class="shuihui-btn"
          @click="shuihui(nodeMessage.address,nodeMessage.pledgeAmount,nodeMessage.nodeName)"
        >{{$t('mynodedetail.shuhui')}}</mu-button>
        <mu-button
          class="zhiya-btn"
          @click="zhiya(nodeMessage.address,nodeMessage.pledgeAmount,nodeMessage.nodeName)"
        >{{$t('mynodedetail.zhiya')}}</mu-button>
        <mu-button v-if='nodeMessage.totalAmount/1000>0'
          class="change-btn"
          @click="changenode(nodeMessage.address,nodeMessage.pledgeAmount)"
        >{{$t('mynodedetail.changenodezy')}}</mu-button>
      </div>
    </div>
    <!-- 节点详情下的列表 -->
     <h2 class="big-title" v-if='recentTransactionsListLength>0'>{{$t('mynodedetail.acounting')}}</h2>
    <div class="nodedetail_list">
      <ul class="shuhui">
        <li v-for="(item,index) in recentTransactionsList" :key="index">
          <template v-if="item.status==4">
            <div class="title">
              <div class="tit-left blodtxt" v-if='item.type==0'>{{$t('mynodedetail.zhiyaing')}}</div>
               <div class="tit-left blodtxt" v-else-if='item.type==1'>{{$t('mynodedetail.shuhuiing')}}</div>
                <div class="tit-left blodtxt" v-else-if='item.type==3'>{{$t('mynodedetail.changeing')}}</div>
              <div class="tit-right">{{$t('mynodedetail.packageing')}}</div>
            </div>
            <div class="title">
              <div class="tit-left">{{formatDateToYear(item.date)}}</div>
              <div class="tit-mid">{{formatDateToHour(item.date)}}</div>
              <div class="tit-right">{{item.amount/1000}} NOVA</div>
            </div>
            <div class="cancel-btn-wrap">
              <mu-button class="cancel-btn" v-if='item.type==1&&item.status==4' @click="cancelNode(nodeMessage.address,item.transactionId)">{{$t('mynodedetail.cancelshuhui')}}</mu-button>
              <mu-button class="cancel-btn" v-else-if='item.type=3' @click="cancelNode(nodeMessage.address,item.transactionId)">{{$t('mynodedetail.cancelchange')}}</mu-button>
            </div>
          </template>

        </li>
      </ul>
      <h2 class="big-title">{{$t('mynodedetail.nearamount')}}</h2>
      <ul class="latest">
        <li v-for="(item,index) in recentTransactionsList" :key="index">
          <!-- /* 
            *@status 0(转账中) 1(转账完成) 2(转账失败) 3(转账撤销) 4(转账等待)
            *@type   0(质押)  1(赎回)   2(手续费) 3(质押转换)
            @note 每一个type对应着所有的status，比如，质押有，转账中，转账完成，转账失败，转账撤销以及转账等待
          */-->
          <template v-if="item.status==1&&item.type==0"><!-- 质押成功的交易 -->
            <div class="title">
              <div class="tit-left" >{{$t('mynodedetail.zhiya')}}</div>     
              <div class="tit-right">{{$t('mynodedetail.zhiyasuccess')}}</div>
            </div>
            <div class="content">
              <div class="tit-left">{{formatDateToYear(item.date)}}</div>
              <div class="tit-time">{{formatDateToHour(item.date)}}</div>
              <div class="tit-right">{{item.amount/1000}} NOVA</div>
            </div>
          </template>
          <template v-else-if="item.status==2&&item.type==0"><!-- 质押失败的交易 -->
            <div class="title">
            <div class="tit-left" >{{$t('mynodedetail.zhiya')}}</div>
              <div class="tit-right" >{{$t('mynodedetail.zhiyafailed')}}</div>
            </div>
            <div class="content">
              <div class="tit-left">{{formatDateToYear(item.date)}}</div>
              <div class="tit-time">{{formatDateToHour(item.date)}}</div>
              <div class="tit-right">{{item.amount/1000}} NOVA</div>
            </div>
          </template>
           <template v-else-if="item.status==2&&item.type==1"><!-- 赎回失败的交易 -->
            <div class="title">
            <div class="tit-left" >{{$t('mynodedetail.shuhui')}}</div>
              <div class="tit-right" >{{$t('mynodedetail.shuihuifailed')}}</div>
            </div>
            <div class="content">
              <div class="tit-left">{{formatDateToYear(item.date)}}</div>
              <div class="tit-time">{{formatDateToHour(item.date)}}</div>
              <div class="tit-right">{{item.amount/1000}} NOVA</div>
            </div>
          </template>
            <template v-else-if="item.status==1&&item.type==1"><!-- 赎回成功的交易 -->
            <div class="title">
            <div class="tit-left" >{{$t('mynodedetail.shuhui')}}</div>
              <div class="tit-right" >{{$t('mynodedetail.shuihuisuccess')}}</div>
            </div>
            <div class="content">
              <div class="tit-left">{{formatDateToYear(item.date)}}</div>
              <div class="tit-time">{{formatDateToHour(item.date)}}</div>
              <div class="tit-right">{{item.amount/1000}} NOVA</div>
            </div>
          </template>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import { recentTransactions, myNodeDetail,cancelNodeRedeem } from "@/config";
export default {
  data() {
    return {
      nodeMessage: { pledgeAmount: "", returnrate: "", nodeName: "" },
      recentTransactionsList: [],
      isLoad: false,
      totalmoney: ""
    };
  },
  computed: {
    recentTransactionsListLength(){
      let newArr=  this.recentTransactionsList.filter(item=>{
         return item.status==4
      })
      return newArr.length;
    }
  },
  methods: {

    formatDateToYear(date) {
      /* 格式化时间根据空格左边为年月日，右边为时分秒 */

      try {
        return date.split(" ")[0];
      } catch (error) {
        return date;
      }
    },
    formatDateToHour(date) {
      /* 格式化时间根据空格左边为年月日，右边为时分秒 */
      try {
        return date.split(" ")[1];
      } catch (error) {
        return date;
      }
    },
    shuihui(address, pledgeAmount, nodeName) {
      /* 赎回 */
      /* 
@{params} address节点地址
*/
      if (!this.isLoad) return  alert(this.$t('mynodedetail.dadaloading'));
      if (address) {
        this.$router.push({
          path: "/suhui",
          query: {
            address: address,
            pledgeAmount: pledgeAmount,
            nodeName: nodeName
          }
        });
      } else {
        alert(this.$t('mynodedetail.nogetservicenode'));
      }
    },
    zhiya(address, pledgeAmount, nodeName) {
      /* 节点质押 */
      if (!this.isLoad) return alert(this.$t('mynodedetail.dadaloading'));
      if (address) {
        this.$router.push({
          path: "/zhiya",
          query: {
            address: address,
            pledgeAmount: pledgeAmount,
            nodeName: nodeName
          }
        });
      } else {
        alert(this.$t('mynodedetail.nogetservicenode'));
      }
    },
    changenode(address,pledgeAmount) {
      /* 更换节点质押 */

      if (!this.isLoad) return alert(this.$t('mynodedetail.dadaloading'));
      if (address) {
        this.$router.push({
          path: "/nodeswiper",
          query: {
            address: address,
            pledgeAmount:pledgeAmount,
            from: "changenode",
          }
        });
      } else {
        alert(this.$t('mynodedetail.nogetservicenode'));
      }
    },
    cancelNode(fromAddress,transactionId){

      let toAddress=this.imtokenAddress;
      cancelNodeRedeem({fromAddress,transactionId,toAddress}).then(res=>{
        if(res.data.success){
         alert(this.$t('mynodedetail.canceled'));
         this.initData()
        }else{
          Promise.reject(res)
        }

      }).catch(err=>{
        alert(this.$t('mynodedetail.canceled'));
      })
    },
    initData(){
    if (window.ethereum) {
      imToken.callAPI("native.showLoading", "loading...");
    }
    myNodeDetail(this.$route.query.nodeId, this.imtokenAddress)
      .then(res => {
        if (window.ethereum) {
          imToken.callAPI("native.hideLoading");
        }
        if (res.data.success) {
          this.isLoad = true;
          this.nodeMessage = res.data.data;
          console.log(this.nodeMessage);
        }
      })
      .catch(err => {
        if (window.ethereum) {
          imToken.callAPI("native.hideLoading");
        }
      });
    recentTransactions(this.imtokenAddress, this.$route.query.nodeAddress).then(
      res => {
        if (window.ethereum) {
          imToken.callAPI("native.hideLoading");
        }
        if (res.data.success) {
          this.recentTransactionsList = res.data.data;
        }
      }
    );
    }
  },
  mounted() {
  this.initData()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/common.scss";
.nodedetail {
  height: 100%;
  background: #fdf9f4;
  overflow-y: auto;
}
[v-cloak] {
  display: none;
}
.card-bg {
  position: relative;
  background: #122f4d;
  overflow: hidden;
  height: 260px;
  .card {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 90%;
    margin-left: 5%;
    // height: 220px;
    z-index: 9;
    border-radius: 10px;
    background: #f08740;
    box-shadow: 0px 9px 10px rgba(0, 0, 0, 0.2); /*no*/

    .avtor {
      display: flex;
      align-items: center;
      padding: 5px 0 0 10px;
      font-size: 23px;
      color: #122f4d;
      .circle {
        width: 45px;
        height: 45px;
        background: #fff;
        border-radius: 50%;
        margin-right: 5px;
      }
    }
    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 10px;
      color: #fdf9f4;
      font-size: 15px;
      font-weight: 600;
    }
    .txt {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 10px 10px;
      color: #e0bdad;
      font-size: 14px;
      font-weight: bold;
      .total {
        padding-left: 20px;
      }
      .present {
        padding-right: 20px;
      }
    }
  }
}
.card-bg::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 150%;
  height: 100%;
  background: #fdf9f4;
  transform: translate(0rem, 2rem) rotateZ(-20deg);
}
.mid-line {
  height: 2px;
  background: #fdf9f4;
  margin: 0 10px;
}
.node-speak {
  font-size: 16px;
  color: #fdf9f4;
  font-weight: 600;
  padding-left: 10px;
  margin-top: 30px;
  p {
    font-size: 14px;
    color: #000;
    padding: 4px 0;
    margin-bottom: 20px;
  }
}

//节点详情中间
.nodedetail-mid {
  width: 90%;
  margin: 10px auto;
  .nodedetail-mid-note {
    display: flex;
    justify-content: space-between;

    .leftnote {
      font-size: 14px;
      font-weight: 400;
      color: rgba(17, 46, 75, 1);
    }
    .left-btn {
      width: 100px;
      height: 24px;
      border: 1px solid rgba(112, 112, 112, 1);
      border-radius: 30px;
      color: #112e4b;
      background: transparent;
    }
  }
  .btn-list {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    .shuihui-btn {
      border: 1px solid rgba(240, 113, 64, 1);
      background: transparent;
      border-radius: 6px;
      color: #505355;
    }
    .zhiya-btn,
    .change-btn {
      background: linear-gradient(
        90deg,
        rgba(240, 138, 64, 1) 0%,
        rgba(240, 104, 64, 1) 100%
      );
      color: #fdf9f4;
      border-radius: 6px;
    }
  }
}
.nodedetail_list {
  margin-top: 10px;
}
//节点详情下的列表
.shuhui {

  li {
    width: 90%;
    margin: 0px auto 20px auto;
    background: rgba(199, 198, 197, 0.6);
    padding: 0 4px;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 0;
    color: #696a6b;
    font-size: 14px;
    font-weight: 400;
  }
  .cancel-btn-wrap {
    display: flex;
    justify-content: flex-end;
    padding: 0 5px 6px 0;
    .cancel-btn {
      width: 95px;
      height: 22px;
      color: #122f4d;
      font-size: 14px;
      border-radius: 50px;
      background: transparent;
      border: 1px solid rgba(240, 107, 64, 1);
    }
  }
}
//最近交易下的列表
.big-title {
  padding-left: 5%;
  color: #f06b40;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
}
//节点详情下的列表
.latest {
  li {
    width: 90%;
    margin: 20px auto;
  }
  li:nth-child(1) {
    margin-top: 0;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 0;
    color: #122f4d;
    font-size: 15px;
    font-weight: 400;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 0;
    color: #696a6b;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
  }
}
// .btn-wrap {
//   display: flex;
//   justify-content: space-around;
//   margin-bottom: 40px;
//   .left-btn,
//   .right-btn {
//     width: 80px;
//     height: 35px;
//     background: linear-gradient(90deg, #f08740, #f06b40);
//     text-align: center;
//     line-height: 35px;
//     border-radius: 8px;
//     color: #fdf9f4;
//     font-size: 13px;
//     box-shadow: 2px 2px 0 0px #ccc;
//   }

// }
</style>
