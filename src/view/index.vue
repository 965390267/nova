<template>
  <div>
    <div class="top-card-wrap">
      <div class="top-card-bg"></div>
      <div class="top-card">
        <div class="card-top-des">
          <div class="card-tit1">
            <div class="card-tit1-left">ETH Wallet</div>
            <div class="card-tit1-right">{{ETH}} ETH</div>
          </div>
          <div class="card-tit2">
            <div class="card-tit1-left">{{hiddenMidAddress}}</div>
            <!-- <div class="card-tit1-right">￥{{totalAssets}}</div> 暂时去掉，后续开发-->
          </div>
        </div>

        <div class="toal-money">总资产</div>
        <div class="money">{{totalAssets/1000}} NOVA</div>
        <!-- <div class="rmb">￥{{totalAssets}}</div> 暂时去掉，后续开发-->
        <div class="card-mid">
          <div class="rest des">
            <div class="tit">可用余额</div>
            <div class="num">{{balance/1000}}</div>
          </div>
          <div class="yestoday des">
            <div class="tit">昨日收益</div>
            <div class="num">{{yesterdayIncome}}</div>
          </div>
          <div class="total des">
            <div class="tit">累计收益</div>
            <div class="num">{{totalIncome}}</div>
          </div>
          <div class="backing des">
            <div class="tit">赎回中</div>
            <div class="num">{{pendingAmount}}</div>
          </div>
        </div>
        <div class="card-choose-btn">
          <div class="card-choose-sub-btn" @click="gotoList()">选择节点质押</div>
        </div>
      </div>
    </div>
    <!-- card部分 -->
    <!-- 使用教程，常见问题 -->
    <div class="mid-problem">
      <router-link to="/problem">
        <div class="leftbg">
          <div class="txt">常见问题</div>
          <div class="icon"></div>
        </div>
      </router-link>
    </div>
    <router-link to="/rule">
      <div class="use-lesson">
        <div class="rightbg">
          <div class="txt">使用教程</div>
          <div class="icon"></div>
        </div>
      </div>
    </router-link>
    <h2 class="mynode">我的节点</h2>
    <node-list :nodelistdata="nodelistdata"></node-list>
  </div>
</template>

<script>
import NodeList from "@/components/homeListNode.vue";
import { personalAssest, getMyNodeList } from "@/config";
export default {
  components: {
    NodeList
  },
  name: "index",
  data() {
    return {
      nodeaddress: this.imtokenAddress,
      balance: "",
      ETH: "",
      pendingAmount: "",
      totalAssets: "",
      totalIncome: "",
      yesterdayIncome: "",
      pendingAmount: "",
      nodelistdata: null,
      nova: ""
    };
  },
  computed: {
    hiddenMidAddress() {
      return this.nodeaddress.replace(/(.{10}).*(.{10})/, "$1******$2");
    }
  },
  methods: {
    gotoList() {
      if (window.ethereum) {
        imToken.callAPI("native.showLoading", "loading...");
      }
      this.$router.push({ path: "/nodeswiper" });
    }
  },
  mounted() {
    personalAssest(this.imtokenAddress).then(res => {
      var res = res.data;
      console.log(res);
      if (res.success) {
        this.balance = res.data.balance;
        this.yesterdayIncome = res.data.yesterdayIncome;
        this.totalIncome = res.data.totalIncome;
        this.totalAssets = res.data.totalAssets;
        this.pendingAmount = res.data.pendingAmount;
      }
    });
    getMyNodeList(this.imtokenAddress).then(res => {
      console.log(res);
      if (res.data.success) {
        this.nodelistdata = res.data.data;
      }
    });
var eth = new Eth(web3.currentProvider);
eth.getBalance(this.imtokenAddress)/* 钱包以太币获取方法 */
                  .then((info)=>{
                     this.ETH =info/1000000000000000000;/* 1000000000000000000是eth的单位，和nova除以1000是一个道理 */
                    // alert(info/1000000000000000000);
                  })
                  .catch(function(info){
                    // alert(info);
                  });
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/common.scss";
.top-card-wrap {
  position: relative;

  height: 326px; /*no*/
  overflow: hidden;
  // min-height: 390px;
  .top-card-bg {
    height: 280px; /*no*/
    @include setbg("../assets/img/m-top-bg@2x.png");
  }

  .toal-money {
    text-align: center;
    padding-top: 20px; /*no*/
    font-size: 11px;
    color: $main-text-color;
  }
  .money {
    text-align: center;
    // padding-top: 10px;
    font-size: 18px;
    color: $orange-text-color;
  }
  .rmb {
    text-align: center;
    padding-top: 10px; /*no*/
    font-size: 11px;
    color: $second-text-color;
  }
  .card-mid {
    display: flex;
    flex-direction: row;
    padding: 30px 15px 15px 15px; /*no*/
    border-bottom: 1px dotted $main-text-color;
    .des {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      .tit {
        font-size: 11px;
        color: $main-text-color;
        font-weight: bold;
        text-align: center;
      }
      .num {
        padding-top: 10px; /*no*/
        text-align: center;
        font-size: 11px;
        color: $second-text-color;
      }
    }
  }
}
.top-card {
  position: absolute;
  top: 0;
  background: #fdf9f4;
  width: 90%;
  margin-left: 5%;
  margin-top: 30px; /*no*/
  border-radius: 10px; /*no*/
  box-shadow: 0px 9px 10px rgba(0, 0, 0, 0.2); /*no*/
  .card-top-des {
    display: flex;
    flex-direction: column;
    .card-tit1,
    .card-tit2 {
      display: flex;
      flex-direction: row;
      .card-tit1-left,
      .card-tit1-right {
        flex: 1;
      }
      .card-tit1 {
        font-weight: bold;
      }
      .card-tit1-right {
        text-align: right;
      }
    }
    .card-tit1 {
      padding: 15px 15px 0 15px; /*no*/
      font-size: 16px;
      color: $main-text-color;
    }
    .card-tit2 {
      padding: 8px 15px 0 15px; /*no*/
      font-size: 11px;
      color: $second-text-color;
    }
  }
}
.card-choose-btn {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0 10px 0;
  .card-choose-sub-btn {
    width: 100px;
    height: 34px;
    font-size: 11px;
    line-height: 34px;
    border-radius: 36px;
    color: #fdf9f4;
    text-align: center;
    margin-right: 20px;
    background: linear-gradient(90deg, #f08740, #f06b40);
  }
}

.mid-problem {
  .leftbg {
    position: relative;
    width: 82%;
    height: 40px;
    margin-top: 14px;

    @include setbg("../assets/img/tit1@2x.png");
    .txt {
      position: absolute;
      right: 76px;
      top: 11px;
      color: #fdf9f4;
      font-size: 16px;
    }
    .icon {
      position: absolute;
      right: 10px;
      top: 12px;
      color: #fdf9f4;
      font-size: 16px;
      width: 20px;
      height: 20px;
      @include setbg("../assets/img/book@2x.png");
    }
  }
}

.use-lesson {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  .rightbg {
    position: relative;
    width: 82%;
    height: 40px;
    @include setbg("../assets/img/tit2@2x.png");
    .txt {
      position: absolute;
      left: 94px;
      top: 12px;
      color: #fdf9f4;
      font-size: 16px;
    }
    .icon {
      position: absolute;
      left: 10px;
      top: 10px;
      color: #fdf9f4;
      font-size: 16px;
      width: 20px;
      height: 20px;
      @include setbg("../assets/img/light@2x.png");
    }
  }
}
.mynode {
  font-size: 16px;
  color: $orange-text-color;
  font-weight: bold;
  margin: 20px 0 15px 10px;
}
</style>
