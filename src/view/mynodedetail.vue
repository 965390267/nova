<template>
  <div v-cloak>
    <div class="nodedetail">
      <div class="card-bg">
        <div class="card">
          <div class="card-top">
            <div class="avtor">
              <div class="circle"></div>
              {{nodeMessage.nodeName}}
            </div>
            <div class="title">
              <div class="total">我的质押金额 (nova)</div>
              <div class="present">预计年化收益</div>
            </div>
            <div class="txt">
              <div class="total">{{nodeMessage.pledgeAmount/1000}}</div>
              <div class="present">{{(nodeMessage.returnrate*100).toFixed(2)}}%</div>
            </div>
          </div>
          <div class="mid-line"></div>
          <div class="node-speak">
            节点宣言
            <p>{{nodeMessage.declaration}}</p>
          </div>
        </div>
      </div>
      <!-- 节点详情下的列表 -->
      <div class="nodedetail_list">
        <ul class="shuhui">
          <li v-for="(item,index) in recentTransactionsList" :key="index">
            <template v-if="item.status==0">
              <div class="title">
                <div class="tit-left blodtxt">{{item.type==1?'赎回中':'质押中'}}</div>
                <div class="tit-right">交易正在打包</div>
              </div>
              <div class="title">
                <div class="tit-left">{{item.date}}</div>
                <div class="tit-right">{{item.amount/1000}} NOVA</div>
              </div>
            </template>
          </li>
        </ul>
        <h2>最近交易</h2>
        <ul class="latest">
          <li v-for="(item,index) in recentTransactionsList" :key="index">
            <!-- /* 
   @status 0(转账中) 1(转账完成) 2(转账失败)
            */-->
            <template v-if="item.status==1">
              <div class="title">
                <div class="tit-left">{{item.type==1?'赎回':'质押'}}</div>
                <div class="tit-right">{{item.type==1?'赎回成功':'质押成功'}}</div>
              </div>
              <div class="title">
                <div class="tit-left">{{item.date}}</div>
                <div class="tit-right">{{item.amount/1000}} NOVA</div>
              </div>
            </template>
            <template v-else-if="item.status==2">
              <div class="title">
                <div class="tit-left">{{item.type==1?'赎回':'质押'}}</div>
                <div class="tit-right">{{item.type==1?'赎回失败':'质押失败'}}</div>
              </div>
              <div class="title">
                <div class="tit-left">{{item.date}}</div>
                <div class="tit-right">{{item.amount/1000}} NOVA</div>
              </div>
            </template>
          </li>
        </ul>
      </div>

      <!-- 赎回和质押按钮 -->
      <div class="btn-wrap">
        <div class="left-btn" @click="shuihui(nodeMessage.address,nodeMessage.pledgeAmount)">赎回</div>

        <div class="right-btn" @click="zhiya(nodeMessage.address,nodeMessage.pledgeAmount)">质押</div>
      </div>
    </div>
  </div>
</template>

<script>
import { recentTransactions, myNodeDetail } from "@/config";
export default {
  data() {
    return {
      nodeMessage: { pledgeAmount: "", returnrate: "" },
      recentTransactionsList: [],
      isLoad:false
    };
  },
  computed: {},
  methods: {
    shuihui(address, pledgeAmount) {
      /* 
@{params} address节点地址
*/
   if(!this.isLoad)return  alert('数据加载中');
      if (address) {
        this.$router.push({
          path: "/suhui",
          query: { address: address, pledgeAmount: pledgeAmount }
        });
      } else {
        alert("未取到服务器节点");
      }
    },
    zhiya(address, pledgeAmount) {
       if(!this.isLoad)return alert('数据加载中');
      if (address) {
        this.$router.push({
          path: "/zhiya",
          query: { address: address, pledgeAmount: pledgeAmount }
        });
      } else {
        alert("未取到服务器节点");
      }
    }
  },
  mounted() {
     if (window.ethereum) {
        imToken.callAPI("native.showLoading", "loading...");
      }
    myNodeDetail(this.$route.query.nodeId, this.imtokenAddress).then(res => {
      if (window.ethereum) {
         imToken.callAPI('native.hideLoading')
      }
      if (res.data.success) {
        this.isLoad=true;
        this.nodeMessage = res.data.data;
        console.log(this.nodeMessage);
      }
    }).catch(err=>{
      if (window.ethereum) {
         imToken.callAPI('native.hideLoading')
      }
    })
    recentTransactions(this.imtokenAddress, this.$route.query.nodeAddress).then(
      res => {
        if (window.ethereum) {
         imToken.callAPI('native.hideLoading')
      }
        if (res.data.success) {
          this.recentTransactionsList = res.data.data;
        }
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/common.scss";
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
      font-size: 16px;
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
      font-size: 14px;
      font-weight: bold;
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
  background: #fff;
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
  padding-left: 10px;
  margin-top: 30px;
  p {
    font-size: 14px;
    color: #000;
    padding: 4px 0;
    margin-bottom: 20px;
  }
}
//节点详情下的列表
.nodedetail_list {
  padding: 10px 20px;
  li {
    margin: 25px 0;
  }
  h2 {
    color: #122f4d;
    font-weight: bold;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px 0;
    color: #858b8e;
    font-size: 14px;
    .tit-left.blodtxt {
      color: #122f4d;
      font-size: 16px;
      font-weight: bold;
    }
  }
}

.btn-wrap {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  .left-btn,
  .right-btn {
    width: 80px;
    height: 35px;
    background: linear-gradient(90deg, #f08740, #f06b40);
    text-align: center;
    line-height: 35px;
    border-radius: 8px;
    color: #fdf9f4;
    font-size: 13px;
    box-shadow: 2px 2px 0 0px #ccc;
  }
}
</style>
