<template>
  <diV class="ziya">
    <div class="avtor">
      <!-- <div class="circle"></div> -->
      {{$route.query.nodeName}}
    </div>
    <div class="balance">
      <div class="canbalance">{{initDataObj.balance/1000}}NOVA</div>
      <div class="inputbalance">{{$t('zhiya.canusemoney')}}</div>
    </div>
    <div class="classinput">
      <div class="inputwrap">
        <div class="total" @click="setAll()">{{$t('zhiya.total')}}</div>
        <input
          class="inputcount"
          type="number"
          v-model="amount"
          :placeholder="$t('zhiya.placeholder')"
        />
      </div>
    </div>
    <div class="smtip">{{$t('zhiya.gasprice')}}{{gasPrice.toFixed(7)}}ETH</div>
    <mu-button class="submit-btn" @click="get()" v-html="$t('zhiya.zhiya')"></mu-button>
    <div class="note">
      <p>{{$t('zhiya.note1')}}</p>
      <p>{{$t('zhiya.note2')}}</p>
      <!-- <p>收益</p>
      <p>质押收益来自出块奖励和交易手续风险</p>
      <p>如果有效节点行为不端将可能会被罚没部分质押代币，比如有效节</p>
      <p>点双重签名，经常性离线。为了规避风险，请认真选择合格的验证</p>
      <p>节点</p>-->
    </div>
    <loading v-if="show"></loading>
  </diV>
</template>
<script>
import loading from "@/components/loading";
import { getNodePledge, personalAssest, getGas } from "@/config";
export default {
  components: {},
  data() {
    return {
      initDataObj: {
        balance: 0
      },
      amount: "" /* 用户输入的Nova数量，提交需要*1000 */,
      show: false,
      gasPrice: 0,
      lockSubmit: true
    };
  },
  watch: {
    amount(val) {
      if (val > this.initDataObj.balance / 1000) {
        this.amount = Number(
          val.toString().substring(0, val.toString().length - 1)
        );
        return imToken.callAPI(
          "native.toastInfo",
          this.$t("shuhui.amountLimit")
        );
      }
    }
  },
  methods: {
    get() {
      this.show = true;
      this.amount = Number(this.amount);

      if (this.amount == 0) return alert(this.$t("zhiya.numbernotzero"));
      if (!this.$route.query.nodeId) {/* 地址必须存在 */
        alert(this.$t("zhiya.nogetaddress"));
        return this.$router.back(-1);
      }
      if (!this.imtokenAddress) {
        alert(this.$t("zhiya.noauthtoken"));
        return this.$router.back(-1);
      }
      // this.bus.$emit('loading',true)
      imToken.callAPI("native.showLoading", "loading...");
      var abi = [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_value", type: "uint256" }
          ],
          name: "approve",
          outputs: [{ name: "success", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            { name: "_from", type: "address" },
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" }
          ],
          name: "transferFrom",
          outputs: [{ name: "success", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [{ name: "amount", type: "uint256" }],
          name: "withdrawEther",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [{ name: "_value", type: "uint256" }],
          name: "burn",
          outputs: [{ name: "success", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [{ name: "_value", type: "uint256" }],
          name: "unfreeze",
          outputs: [{ name: "success", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [{ name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" }
          ],
          name: "transfer",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [{ name: "", type: "address" }],
          name: "freezeOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [{ name: "_value", type: "uint256" }],
          name: "freeze",
          outputs: [{ name: "success", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            { name: "", type: "address" },
            { name: "", type: "address" }
          ],
          name: "allowance",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            { name: "initialSupply", type: "uint256" },
            { name: "tokenName", type: "string" },
            { name: "decimalUnits", type: "uint8" },
            { name: "tokenSymbol", type: "string" }
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor"
        },
        { payable: true, stateMutability: "payable", type: "fallback" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "to", type: "address" },
            { indexed: false, name: "value", type: "uint256" }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: false, name: "value", type: "uint256" }
          ],
          name: "Burn",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: false, name: "value", type: "uint256" }
          ],
          name: "Freeze",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: false, name: "value", type: "uint256" }
          ],
          name: "Unfreeze",
          type: "event"
        }
      ];

      if (typeof web3 !== "undefined") {
        console.debug(web3.currentProvider);
        web3 = new Web3(web3.currentProvider);
      } else {
        alert("No currentProvider for web3");
      }
      function transferNova(b, c, d, e, f, g, h) {
        var h = new Eth(b);
        h.accounts().then(function(accounts) {
          imToken.callAPI("native.hideLoading");
          const Nova = h.contract(c, {
            from: accounts[0]
          });
          const nova = Nova.at(f);
          nova
            .transfer(d, e, {
              from: web3.eth.accounts[0]
            })
            .then(function(a) {
              g(String(a));
            })
            .catch(function(a) {
              h(String(a));
            });
        });
      }
      function balanceOfNova(b, c, d, e, f) {
        var g = new Eth(b);
        g.accounts().then(function(accounts) {
          const Nova = g.contract(c, {
            from: accounts[0]
          });
          var h = Nova.at(e);
          h.balanceOf(d)
            .then(function(a) {
              f(a[0].toNumber(10));
            })
            .catch(function(a) {
              f(String(a));
            });
        });
      }

      function approveNova(b, c, d, e, f) {
        var g = new Eth(b);
        g.accounts().then(function(accounts) {
          const Nova = g.contract(c, {
            from: accounts[0]
          });
          var h = Nova.at(e);
          h.balanceOf(d)
            .then(function(a) {
              f(a[0].toNumber(10));
            })
            .catch(function(a) {
              f(String(a));
            });
        });
      }

      function approveNova(provider, novaAbi, novaAddress, callBackBalance) {
        var eth = new Eth(provider);
        eth.accounts().then(accounts => {
          const Nova = eth.contract(novaAbi, {
            from: accounts[0]
          });
          var nova = Nova.at(novaAddress);
          nova
            .approve(novaAddress, 10000000000000, {
              from: web3.eth.accounts[0]
            })
            .then(function(info) {
              alert(info);
            })
            .catch(function(info) {
              alert(info);
            });
        });
      }

      //授权 授权按钮触发这个
      // approveNova(web3.currentProvider, abi, '0xb48b7e5bf6563b3e0a85055821a83deb8cfc12f6', (res)=>{
      // alert(res)
      //  alert(JSON.stringify(res))
      // })
      // 20000000是20Nova，要乘6个0
      // 质押 质押按钮触发这个 function transferNova(provider, novaAbi, toAddress, amountOfNova, gasPrice, novaAddress, callBackTransfer)
      if (this.lockSubmit) {
        this.lockSubmit = false;
        transferNova(
          web3.currentProvider,
          abi,
          this.$route.query.address,
          Number(this.amount) * 1000,
          "0xb48b7e5bf6563b3e0a85055821a83deb8cfc12f6",
          hash => {
           
            this.lockSubmit = true;
             if (window.ethereum) {
            imToken.callAPI("native.hideLoading");
             }
            this.pay(hash);
          },
          err => {
            if (window.ethereum) {
            imToken.callAPI("native.hideLoading");
            }
            this.lockSubmit = true;
          }
        );
      }
    let timer=  setTimeout(()=>{
       timer=null;
        this.lockSubmit = true;
         if (window.ethereum) {
          imToken.callAPI("native.hideLoading");
         }
      },2000)
      // 查询Nova余额触发这个 function balanceOfNova(provider, novaAbi, queryAddress, novaAddress, callBackBalance)
      // balanceOfNova(
      //   web3.currentProvider,
      //   abi,
      //   this.imtokenAddress,
      //   "0xb48b7e5bf6563b3e0a85055821a83deb8cfc12f6",
      //   res => {
      //     imToken.callAPI("native.hideLoading");
      //     imToken.callAPI('native.toastInfo', res)
      //   }
      // );
    },
    pay(hash) {
      var obj = {
        fromAddress: this.imtokenAddress, //转入方是自己的地址
        nodeId: this.$route.query.nodeId, //转入方
        amount: Number(this.amount) * 1000,
        txnHash: hash
      };
      getNodePledge(obj)
        .then(res => {
          // alert(JSON.stringify(res));
          if (res.data.success) {
            alert(this.$t("zhiya.zhiyanodealert"));
            this.show = false;
            this.$router.back(-1);
          }
        })
        .catch(err => {

          this.show = false;
        });
    },
    setAll() {
      personalAssest(this.imtokenAddress)
        .then(res => {
          var res = res.data;
          if (res.success) {
            this.initDataObj = res.data;
            this.amount = Number(res.data.balance) / 1000;
          } else {
            Promise.reject(ret);
          }
        })
        .catch(err => {
           if (window.ethereum) {
          imToken.callAPI("native.hideLoading");
           }
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
      //        var eth = new Eth(web3.currentProvider);
      //       eth.estimateGas({
      //         to: this.$route.query.address,
      //         data: "0xb48b7e5bf6563b3e0a85055821a83deb8cfc12f6"
      //       }).then(res=>{
      // this.gasPrice =res
      //       })
    }
  },
  mounted() {
    this.initData(); /* 数据初始化 */
    getGas().then(res => {
      this.gasPrice = res.data.data.gas / 1000000000000000000;
    });
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
    // height: 40px;
    // line-height: 40px;
    // border: 1px solid #F07440;
    background: transparent;
    outline: none;
    border-radius: 8px;
    color: #b3b7ba;
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
  display: block;
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

