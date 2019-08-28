<template>
  <diV class="ziya">
    <div class="avtor">
      <!-- <div class="circle"></div>nova wallet -->
      {{$route.query.nodeName}}
    </div>
    <div class="ziyaed">
      <em>{{$t('shuhui.zhiyaed')}}</em>
      <em class="txt">{{$route.query.pledgeAmount/1000}} NOVA</em>
    </div>
    <div class="balance">
      <div class="canbalance" @click="setAll()">{{$t('shuhui.total')}}</div>
      <input
        class="inputbalance"
        type="number"
        v-model="amount"
        :placeholder="$t('shuhui.placeholder')"
      />
    </div>

    <!-- <div class="smtip">交易费：{{gasPrice}}ETH</div> -->
    <div class="ordinary top" :class="{active:index==0}" @click="choosetype(0)">
      <div class="left-txt">{{$t('shuhui.atonceshuhui')}}</div>
      <div class="right"></div>
    </div>
    <div class="ordinary bottom" :class="{active:index==1}" @click="choosetype(1)">
      <div class="left-txt">{{$t('shuhui.normalshuhui')}}</div>
      <div class="right"></div>
    </div>
    <div class="submit-btn" @click="submit()" v-html="$t('shuhui.shuhui')"></div>
    <div class="note">
      <p>{{$t('shuhui.note')}}</p>
      <p>{{$t('shuhui.note1')}}</p>
    </div>
    <Alert :content="alertcontent" @certain="certain"></Alert>
  </diV>
</template>
<script>
import { getNodeRedeem, personalAssest } from "@/config";
import Alert from "@/components/alert.vue";
export default {
  components: {
    Alert
  },
  data() {
    return {
      index: 0,
      amount: "",
      blance: 0,
      gasPrice: "",
      show: false,
      alertcontent:''
    };
  },
  watch:{
    amount(val){
      if(val>this.$route.query.pledgeAmount/1000){
        return alert(this.$t('shuhui.amountLimit'))
      }
    }
  },
  methods: {
    choosetype(index) {
      this.index = index;
    },
    certain(data) {
      console.log(data);
      if (data) {
        this.get();
      }
    },
    submit() {
      if(this.index==0){
       this.alertcontent=this.$t('components.alert.atoncetext')
      }else{
        this.alertcontent=this.$t('components.alert.slowtext')
      }
      this.bus.$emit("alert", true);
    },
    get() {
      this.show = true;

      // imToken.callAPI("native.showLoading", "loading...");
      if (this.amount == 0) return alert(this.$t("shuhui.numbernotzero"));
      this.amount = Number(this.amount);
      if (!this.$route.query.address) {
        alert(this.$t("shuhui.nogetaddress"));
        return this.$router.back(-1);
      }
      if (!this.imtokenAddress) {
        alert(this.$t("shuhui.noauthtoken"));
        return this.$router.back(-1);
      }
      // this.bus.$emit('loading',true)
      var obj = {
        fromAddress: this.$route.query.address, //服务器地址
        toAddress: this.imtokenAddress, //钱包地址
        amount: this.amount * 1000,
        type: this.index
      };
      getNodeRedeem(obj)
        .then(res => {
          // imToken.callAPI("native.hideLoading");
          if (res.data.success) {
            this.show = false;
            alert(this.$t("shuhui.changenodealert"));
            this.$router.back(-1);
          } else {
            Promise.reject(ret);
            this.show = false;
          }
        })
        .catch(err => {
          // imToken.callAPI("native.hideLoading");
          alert(err);
          this.show = false;
        });
    },
    setAll() {
      // personalAssest(this.imtokenAddress).then(res => {
      //   var res = res.data;
      //   if (res.success) {
      //this.balance = this.$route.query.nodeMessage.pledgeAmount
      this.amount = this.$route.query.pledgeAmount / 1000;
      //   }
      // });
    },
    initData() {
      /* 初始的页面数据获取 */
      // personalAssest(this.imtokenAddress).then(res => {
      //   var res = res.data;
      //   if (res.success) {
      //     this.balance = res.data.pendingAmount
      //   }
      // });
      //   var eth = new Eth(web3.currentProvider);
      // eth.getBalance(this.imtokenAddress)
      //                   .then((info)=>{
      //                      this.ETH =info/1000000000000000000;
      //                     alert(info/1000000000000000000);/* 1000000000000000000是eth的单位，和nova除以1000是一个道理 */
      //                   })
      //                   .catch(function(info){
      //                     alert(info);
      //                   });
      //        eth.estimateGas({
      //         to: this.$route.query.address,
      //         data: "0xb48b7e5bf6563b3e0a85055821a83deb8cfc12f6"
      //       }).then(res=>{
      // this.gasPrice =res
      //       })
    }
  },
  mounted() {
    //this.initData(); /* 数据初始化 */
  }
};
</script>

<style lang="scss" scoped>
.ziya {
  height: 100%;
  background: #fdf9f4;
  overflow: hidden;
}
.avtor {
  width: 90%;
  margin: 15px auto;
  display: flex;
  align-items: center;
  color: #122f4d;
  font-size: 19px;
  .circle {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#f08740),
      to(#f06b40)
    );
    background: linear-gradient(90deg, #f08740, #f06b40);
    border-radius: 50%;
  }
}
.ziyaed {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  em {
    font-size: 14px;
    color: #122f4d;
    font-weight: 400;
    padding-right: 15px;
  }
  .txt {
    color: #979fa5;
  }
  font-size: 13px;
  color: #979fa5;
}
.balance {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  .canbalance {
    position: absolute;
    right: 0;
    // top: 14px;
    height: 40px;
    line-height: 40px;
    width: 50px;
    text-align: center;
    color: #f08a40;
    font-size: 13px;
  }
  .inputbalance {
    width: 100%;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    border: 1px solid #f07440;
    background: transparent;
    outline: none;
    border-radius: 8px;
  }
}

.smtip {
  width: 90%;

  margin: 0 auto;
  margin-top: 5px;
  text-align: right;
  font-size: 10px;
  color: #979fa5;
}
.ordinary {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 45px;
  align-items: center;
  border-top: 1px solid #c5c7c8;
  .left-txt {
    padding-left: 10px;
    color: #122f4d;
    font-size: 13px;
  }
  .right {
    display: none;
    background: url("../assets/img/choose@2x.png") no-repeat;
    background-size: 100% 100%;
    width: 45px;
    height: 45px;
  }
}
.ordinary.top {
  margin-top: 30px;
}
.ordinary.bottom {
  border-bottom: 1px solid #c5c7c8;
}
.active .right {
  display: block;
}
.active .left-txt {
  color: #f08a40;
}
.submit-btn {
  width: 90%;
  height: 36px;
  margin: 0 auto;
  margin-top: 30px;
  background: linear-gradient(90deg, #f08740, #f06b40);
  border-radius: 20px;
  line-height: 36px;
  color: #fff;
  text-align: center;
}
.ziya .note {
  padding: 40px 10px;
}
.ziya .note p {
  color: #979fa5;
  font-size: 12px;
  text-align: left;
  padding: 2px 0;
  line-height: 20px;
  letter-spacing: 2px;
}
</style>

