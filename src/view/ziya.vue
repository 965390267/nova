<template>
  <diV class="ziya">
    <div class="avtor">
      <div class="circle"></div>nova wallet
    </div>
    <div class="balance">
      <div class="canbalance">{{canuse}}NOVA</div>
      <div class="inputbalance">可用余额</div>
    </div>
    <div class="classinput">
      <div class="inputwrap">
        <div class="total" @click="getAll()">全部</div>
        <input class="inputcount" type="number" v-model="amount" placeholder="输入数量" />
      </div>
    </div>
    <!-- <div class="smtip">交易费：0.0005ETH</div> -->
    <div class="submit-btn" @click="get()">质&nbsp;&nbsp;&nbsp;&nbsp;押</div>
    <div class="note">
      <p>质押</p>
      <p>质押NOVA给有效节点可以随时赎回，但赎回质押需要等待7天</p>
      <p>收益</p>
      <p>质押收益来自出块奖励和交易手续风险</p>
      <p>如果有效节点行为不端将可能会被罚没部分质押代币，比如有效节</p>
      <p>点双重签名，经常性离线。为了规避风险，请认真选择合格的验证</p>
      <p>节点</p>
    </div>
    <loading v-if="show"></loading>
  </diV>
</template>
<script>
import loading from "@/components/loading";
import { getNodePledge, personalAssest } from "@/config";
export default {
  components: {},
  data() {
    return {
      money: "",
      amount: "",
      balance: "",
      show: false,
      canuse: ""
    };
  },
  methods: {
    get() {
      this.show = true;
      if (this.amount == 0) return alert("输入数量不能为0");
      // this.bus.$emit('loading',true)
      imToken.callAPI('native.showLoading', 'loading...');
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
      function transferNova(b, c, d, e, f, g) {
        var h = new Eth(b);
        h.accounts().then(function(accounts) {
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
              g(String(a));
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

      function callBack(data) {
        // TODO 回调，逻辑代码写在这里
        alert(data);
      }
     
      // alert(this.amount*1000)
      //授权 授权按钮触发这个
      // approveNova(web3.currentProvider, abi, '0xb48b7e5bf6563b3e0a85055821a83deb8cfc12f6', (res)=>{
      // alert(res)
      //  alert(JSON.stringify(res))
      // })
      // 20000000是20Nova，要乘6个0
      // 质押 质押按钮触发这个 function transferNova(provider, novaAbi, toAddress, amountOfNova, gasPrice, novaAddress, callBackTransfer)
      transferNova(
        web3.currentProvider,
        abi,
        this.$route.query.address,
        this.amount * 1000,
        "0xb48b7e5bf6563b3e0a85055821a83deb8cfc12f6",
        data => {
              imToken.callAPI('native.hideLoading')
          alert(`质押${data}`);
          this.pay(data);
        }
      );
      // 查询Nova余额触发这个 function balanceOfNova(provider, novaAbi, queryAddress, novaAddress, callBackBalance)
      balanceOfNova(
        web3.currentProvider,
        abi,
        this.imtokenAddress,
        "0xb48b7e5bf6563b3e0a85055821a83deb8cfc12f6",
        res => {
              imToken.callAPI('native.hideLoading')
          alert(res);
          alert(JSON.stringify(res));
        }
      );
    },
    pay(hash) {
      var obj = {
        fromAddress: this.imtokenAddress, //转入方是自己的地址
        toAddress: this.$route.query.address, //转入方
        amount: this.amount * 1000,
        txnHash: hash
      };
      getNodePledge(obj)
        .then(res => {
          alert(JSON.stringify(res));
          if (res.data.success) {
            alert("质押成功");
            this.show = false;
            this.$router.back(-1);
          }
        })
        .catch(err => {
          this.show = false;
        });
    },
    getAll() {
      personalAssest(this.imtokenAddress).then(res => {
        var res = res.data;
       
        if (res.success) {
          this.amount = res.data.balance;
        }
      });
    }
  },
  mounted() {
   
    personalAssest(this.imtokenAddress).then(res => {
      var res = res.data;
     
      if (res.success) {
        this.balance = res.data.balance;
        this.canuse = res.data.totalAssets - res.data.balance;
      }
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
    top: 14px;
    color: #f08a40;
    font-size: 13px;
  }
  .inputbalance {
    width: 100%;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    // border: 1px solid #F07440;
    background: transparent;
    outline: none;
    border-radius: 8px;
    color: #122f4d;
    font-size: 13px;
  }
}
.inputwrap {
  width: 100%;
  position: relative;
  .total {
    position: absolute;
    right: 15px;
    top: 14px;
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
}
</style>

