<template>
  <diV class="ziya">
    <div class="avtor">
      <!-- <div class="circle"></div>nova wallet -->
       {{$route.query.nodeName}}
    </div>
    <div class="balance">
      <div class="canbalance">{{$route.query.pledgeAmount/1000}} NOVA</div>
      <div class="inputbalance">{{$t('changenodezy.canusemoney')}}</div>
    </div>
    <div class="classinput">
      <div class="inputwrap">
        <div class="total" @click="setAll()">{{$t('changenodezy.total')}}</div>
        <input class="inputcount" type="number" v-model="amount" :placeholder="$t('changenodezy.inputamount')" />
      </div>
    </div>
    <!-- <div class="smtip">交易费：{{gasPrice}}ETH</div> -->
    <div class="submit-btn" @click="submit()" v-html="$t('changenodezy.changenode')"></div>
    <div class="note">
      <p>{{$t('changenodezy.note1')}}</p>
      <p>{{$t('changenodezy.note2')}}</p>
      <!-- <p>收益</p>
      <p>质押收益来自出块奖励和交易手续风险</p>
      <p>如果有效节点行为不端将可能会被罚没部分质押代币，比如有效节</p>
      <p>点双重签名，经常性离线。为了规避风险，请认真选择合格的验证</p>
      <p>节点</p> -->
    </div>
        <Alert :content="alertcontent" @certain="certain"></Alert>
  </diV>
</template>
<script>


import Alert from "@/components/alert";
import { changePledge } from "@/config";
export default {
  components: {
    Alert
  },
  data() {
    return {
      amount: '' /* 用户输入的Nova数量，提交需要*1000 */,
      show: false,
      gasPrice: 0,
       alertcontent:''
    };
  },
  methods: {
     certain(data) {
      console.log(data);
      if (data) {
        this.get();
      }
    },
    submit() {
        this.alertcontent=this.$t('components.alert.changenodepledgetext1')+this.amount+this.$t('components.alert.changenodepledgetext2')+this.$route.query.nodeName+this.$t('components.alert.changenodepledgetext3')
       this.bus.$emit("alert", true);
    },
    get() {
      this.show = true;
      this.amount=Number(this.amount); 
      if (this.amount == 0) return alert(this.$t('changenodezy.numbernotzero'));
          if(!this.$route.query.nodeId||!this.$route.query.oldNodeId){
             alert(this.$t('changenodezy.nogetaddress'));
             return this.$router.back(-1);
      } 
      if(!this.imtokenAddress){
             alert(this.$t('changenodezy.noauthtoken'));
             return this.$router.back(-1);
      } 
      //imToken.callAPI("native.showLoading", "loading...");
      this.pay();
    },
    pay() {
      var obj = {
        userAddress: this.imtokenAddress, //转入方是自己的地址
        oldNodeId: this.$route.query.oldNodeId, //原来的老地址{更换为nodeId字段}
        newNodeId:this.$route.query.nodeId,//更换节点后的新地址
        amount: Number(this.amount) * 1000,
      };
      changePledge(obj)
        .then(res => {
          if (res.data.success) {      
           alert(this.$t('changenodezy.changenodealert'));
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
          this.amount = this.$route.query.pledgeAmount/1000;
    },

  },
  mounted() {
  
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

