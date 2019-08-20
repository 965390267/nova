<template>
  <diV class="ziya">
    <div class="avtor">
      <!-- <div class="circle"></div>nova wallet -->
       {{$route.query.nodeName}}
    </div>
    <div class="balance">
      <div class="canbalance">{{initDataObj.balance/1000}}NOVA</div>
      <div class="inputbalance">可用余额</div>
    </div>
    <div class="classinput">
      <div class="inputwrap">
        <div class="total" @click="setAll()">全部</div>
        <input class="inputcount" type="number" v-model="amount" placeholder="输入数量" />
      </div>
    </div>
    <!-- <div class="smtip">交易费：{{gasPrice}}ETH</div> -->
    <div class="submit-btn" @click="get()">更&nbsp;换&nbsp;节&nbsp;点&nbsp;质&nbsp;押</div>
    <div class="note">
      <p>更换节点说明：</p>
      <p>将您的NOVA选择一个新的节点进行质押。更换时间为21天，21天后更换至新的节点并开始产生收益。</p>
      <!-- <p>收益</p>
      <p>质押收益来自出块奖励和交易手续风险</p>
      <p>如果有效节点行为不端将可能会被罚没部分质押代币，比如有效节</p>
      <p>点双重签名，经常性离线。为了规避风险，请认真选择合格的验证</p>
      <p>节点</p> -->
    </div>
    <loading v-if="show"></loading>
  </diV>
</template>
<script>


import loading from "@/components/loading";
import { changePledge ,personalAssest} from "@/config";
export default {
  components: {},
  data() {
    return {
      initDataObj: {},
      amount: '' /* 用户输入的Nova数量，提交需要*1000 */,
      show: false,
      gasPrice: ""
    };
  },
  methods: {
    get() {
      this.show = true;
      this.amount=Number(this.amount); 
      if (this.amount == 0) return alert("输入数量不能为0");
          if(!this.$route.query.newAddress||!this.$route.query.oldAddress){
             alert("未取到列表节点地址，请返回重试");
             return this.$router.back(-1);
      } 
      if(!this.imtokenAddress){
             alert("未授权成功");
             return this.$router.back(-1);
      } 
      //imToken.callAPI("native.showLoading", "loading...");
      this.pay();
    },
    pay() {
      var obj = {
        userAddress: this.imtokenAddress, //转入方是自己的地址
        oldAddress: this.$route.query.oldAddress, //原来的老地址
        newAddress:this.$route.query.newAddress,//更换节点后的新地址
        amount: Number(this.amount) * 1000,
      };
      changePledge(obj)
        .then(res => {
          if (res.data.success) {      
            alert("更换节点质押成功");
            this.show = false;
            this.$router.back(-1);
          }
        })
        .catch(err => {
          alert(err)
          this.show = false;
        });
    },
    setAll() {/* 质押全部 */
      personalAssest(this.imtokenAddress).then(res => {
        var res = res.data;
        if (res.success) {
          this.initDataObj = res.data;
          this.amount =Number(res.data.balance) /1000;
        }else{
          Promise.reject(ret)
        }
      }).catch(err => {
           imToken.callAPI("native.hideLoading");
           alert(err)
          this.show = false;
        });
    },
    initData() {
      /* 初始的页面数据获取 */
      personalAssest(this.imtokenAddress).then(res => {
        var res = res.data;
        if (res.success) {
          this.initDataObj = res.data;
        }
      });
    }
  },
  mounted() {
    this.initData(); /* 数据初始化 */
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

.balance {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  .canbalance {
    position: absolute;
    right: 15px;
   
    color: #f08a40;
    font-size: 13px;
  }
  .inputbalance {
    width: 100%;
    margin: 0 auto;
  
    // border: 1px solid #F07440;
    background: transparent;
    outline: none;
    border-radius: 8px;
    color: #B3B7BA;
    font-size: 13px;
  }
}
.inputwrap {
  width: 100%;
  position: relative;
  .total {
    position: absolute;
    right: 0;
     height: 40px;
    line-height: 40px;
    width: 50px;
    text-align: center;
    color: #f08a40;
    font-size: 13px;
  }
  .inputcount {
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
.classinput {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
.smtip {
  width: 90%;

  margin: 0 auto;
  margin-top: 5px;
  text-align: right;
  font-size: 10px;
  color: #979fa5;
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

