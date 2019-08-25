<template>
  <div class="home">
    <div class="top-card-wrap">
      <div class="top-card-bg">
        <div class="switch-cn-en" @click="openLang($event)">
          {{zh}}
          <em class="arrow" :style="{ transform:'rotateZ('+deg+'deg)' }"></em>
        </div>
        <div class="switch-wrap" @click="changeLang()" v-if="switchstate">
          <div class="switch-wrap-blur1"></div>
          <div class="switch-wrap-blur2">{{en}}</div>
        </div>
      </div>
      <div class="top-card">
        <div class="card-top-des">
          <div class="card-tit1">
            <div class="card-tit1-left">ETH Wallet</div>
            <div class="card-tit1-right">{{ETH.toFixed(6)}} ETH</div>
          </div>
          <div class="card-tit2">
            <div class="card-tit1-left">{{hiddenMidAddress}}</div>
            <!-- <div class="card-tit1-right">￥{{totalAssets}}</div> 暂时去掉，后续开发-->
          </div>
        </div>
        <div class="toal-money">{{ $t('index.total')}}</div>
        <div class="money">{{totalAssets}} NOVA</div>
        <div class="rmb">￥{{(totalAssets*CNY).toFixed(6)}}</div>
        <!-- 暂时去掉，后续开发 -->
        <div class="card-mid">
          <div class="rest des">
            <div class="tit">{{$t('index.balance')}}</div>
            <div class="num">{{balance}}</div>
          </div>
          <div class="yestoday des">
            <div class="tit">{{$t('index.yesterdayIncome')}}</div>
            <div class="num">{{yesterdayIncome}}</div>
          </div>
          <div class="total des">
            <div class="tit">{{$t('index.totalIncome')}}</div>
            <div class="num">{{totalIncome}}</div>
          </div>
          <div class="backing des">
            <div class="tit">{{$t('index.pendingAmount')}}</div>
            <div class="num">{{pendingAmount}}</div>
          </div>
        </div>
        <div class="card-choose-btn">
          <mu-button
            class="card-choose-sub-btn"
            @click="gotoList()"
            round
            full-width
          >{{$t('index.choosenode')}}</mu-button>
        </div>
      </div>
    </div>
    <!-- card部分 -->
    <!-- 使用教程，常见问题 -->
    <div class="mid-problem">
      <mu-button to="/rule" class="btn">
        <div class="txt">{{$t('index.usenote')}}</div>
        <div class="icon rule"></div>
      </mu-button>
      <mu-button to="/problem" class="btn">
        <div class="icon problem"></div>
        <div class="txt">{{$t('index.problem')}}</div>
      </mu-button>
    </div>

    <h2 class="mynode">{{$t('index.mynode')}}</h2>
    <node-list :nodelistdata="nodelistdata"></node-list>
  </div>
</template>

<script>
import NodeList from "@/components/homeListNode.vue";
import { personalAssest, getMyNodeList, getNovaCNY } from "@/config";
export default {
  components: {
    NodeList
  },
  name: "index",
  data() {
    return {
      deg: 0,
      zh: "中文",
      en: "English",
      switchstate: false,
      nodeaddress: this.imtokenAddress,
      balance: "",
      ETH: 0,
      pendingAmount: "",
      totalAssets: "",
      totalIncome: "",
      yesterdayIncome: "",
      nodelistdata: null,
      CNY: 0
    };
  },
  computed: {
    hiddenMidAddress() {
      return this.nodeaddress.replace(/(.{10}).*(.{10})/, "$1******$2");
    }
  },
  beforeCreate() {},
  methods: {
    openLang(e) {
      if (!this.switchstate) {
        this.deg = 180;
      } else {
        this.deg = 0;
      }
      this.switchstate = !this.switchstate;
    },
    changeLang(temp) {
      this.switchstate = false;
      this.deg = 0;
      var temp = this.zh;
      this.zh = this.en;
      this.en = temp;
      if (this.zh == "中文") {
        this.$i18n.locale = "zh"; //改变当前语言
      } else {
        this.$i18n.locale = "en"; //改变当前语言
      }
      localStorage.setItem("language", this.zh);

      // 　　　　localStorage.language=temp;
    },
    gotoList() {
      if (window.ethereum) {
        imToken.callAPI("native.showLoading", "loading...");
      }
      this.$router.push({ path: "/nodeswiper" });
    }
  },
  mounted() {
    let language = localStorage.getItem("language");
    if (language == "中文") {
      this.zh = "中文";
      this.en = "English";
      this.$i18n.locale = "zh"; //改变当前语言
    } else {
      this.zh = "English";
      this.en = "中文";
      this.$i18n.locale = "en"; //改变当前语言
    }
    if (window.ethereum) {
      imToken.callAPI("native.showLoading", "loading...");
    }
    if (!this.imtokenAddress) {
      alert(this.$t('index.alertauth'));
    }
    personalAssest(this.imtokenAddress)
      .then(res => {
        var res = res.data;
        if (window.ethereum) {
          imToken.callAPI("native.hideLoading");
        }
        if (res.success) {
          this.balance = res.data.balance / 1000;
          this.yesterdayIncome = res.data.yesterdayIncome / 1000;
          this.totalIncome = res.data.totalIncome / 1000;
          this.totalAssets = res.data.totalAssets / 1000;
          this.pendingAmount = res.data.pendingAmount / 1000;
        }
      })
      .catch(err => {
        alert(err);
        if (window.ethereum) {
          imToken.callAPI("native.hideLoading");
        }
      });

    getMyNodeList(this.imtokenAddress)
      .then(res => {
        if (window.ethereum) {
          imToken.callAPI("native.hideLoading");
        }
        if (res.data.success) {
          this.nodelistdata = res.data.data;
        }
      })
      .catch(err => {
        alert(err);
        if (window.ethereum) {
          imToken.callAPI("native.hideLoading");
        }
      });
    getNovaCNY().then(res => {
      /* nova转人民币汇率 */
      this.CNY = res.data.data.cny;
    });
    try {
      var eth = new Eth(web3.currentProvider);
      eth
        .getBalance(this.imtokenAddress) /* 钱包以太币获取方法 */
        .then(info => {
          this.ETH =
            info /
            1000000000000000000; /* 1000000000000000000是eth的单位，和nova除以1000是一个道理 */
          // alert(info/1000000000000000000);
        })
        .catch(function(info) {
          // alert(info);
        });
    } catch (error) {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/common.scss";
.home {
  background: #fdf9f4;
}
.top-card-wrap {
  position: relative;

  height: 340px; /*no*/
  overflow: hidden;
  // min-height: 390px;
  .top-card-bg {
    position: relative;
    height: 340px; /*no*/
    //@include setbg("../assets/img/m-top-bg@2x.png");
    background-color: #122f4d;
    .switch-cn-en {
      display: flex;
      align-items: center;
      position: absolute;
      right: 25px;
      top: 2px;
      color: #fff;
      height: 24px;
      line-height: 24px;
      .arrow {
        display: inline-block;
        width: 12px;
        height: 6px;
        margin-left: 4px;
        background: url("../assets/img/arrow@2x.png") no-repeat;
        background-size: 100% 100%;
      }
    }

    .switch-wrap {
      position: absolute;
      right: 20px;
      top: 20px;
      width: 60px;
      height: 30px;
      border-radius: 0px 0px 5px 5px;
      overflow: hidden;
      .switch-wrap-blur1 {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 20;
        background: rgba(0, 0, 0, 0.6);
        filter: blur(1px);
      }
      .switch-wrap-blur2 {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 21;
        color: #fff;
        line-height: 30px;
        text-align: center;
      }
    }
  }
  .top-card-bg::after {
    position: absolute;
    content: "";
    top: 0;
    left: -30px;
    width: 150%;
    height: 100%;
    background: linear-gradient(90deg, #f08740, #f06b40);
    -webkit-transform: translate(0rem, 2rem) rotateZ(-20deg);
    transform: translate(0rem, 2rem) rotateZ(-20deg);
  }
  .toal-money {
    text-align: center;
    padding-top: 20px; /*no*/
    font-size: 11px;
    color: $main-text-color;
  }
  .money {
    text-align: center;
    padding-top: 5px;
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
    padding: 8px 15px 15px 15px; /*no*/
    // border-bottom: 1px dotted $main-text-color;
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
    width: 120px;
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
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  .btn {
    position: relative;
    width: 130px;
    height: 55px;
    margin-top: 14px;
    background: #f08740;

    .txt {
      color: #122f4d;
      font-size: 15px;
      font-weight: bold;
          text-transform: capitalize;
    }
    .icon {
      width: 18px;
      height: 24px;
    }
    .rule {
      background: url("../assets/img/book@2x.png") no-repeat;
      background-size: 100% 100%;
      margin-left: 10px;
    }
    .problem {
      background: url("../assets/img/light@2x.png") no-repeat;
      background-size: 100% 100%;
      margin-right: 10px;
    }
  }
}

.mynode {
  font-size: 16px;
  color: $orange-text-color;
  font-weight: bold;
  margin: 20px 0 15px 16px;
  letter-spacing: 2px;
}
</style>
