<template>
  <div class="rule">
      <div class="card">
          Nova基金会的愿景是为去中心化金融搭建一个长期并可持续发展的生态系统，Nova激励协议项目代币NOVA将起到关键性作用，故Nova基金会决定推出NOVA质押计划(NOVA Staking Economy)。
      </div>
      <div class="rule-title">规则如下:</div>
      <div class="sm-card">
         参与限制：
任何持有NOVA代币的人都可以将NOVA自主选择质押进任意节点。质押后立即成为节点参与者。
      </div>
       <div class="sm-card">
      质押数量限制：≥100万NOVA。
      </div>
       <div class="sm-card">
     申请节点：
任何人都可向官方申请建立自己的节点，且节点质押数量>0的时候节点正式成立，申请人自动成为节点负责人。
      </div>
       <div class="sm-card">
       节点规则：
节点分为有效节点和无效节点，参与质押可按规则获得收益的节点即为有效节点。初始有限节点为1（当总质押数量 < 3000万时，系统自动将质押数量最多的节点归为有效节点）总质押数量（所有节点质押数量相加）每增加3000万系统自动增加2个有效节点（选取质押数量最多两个节点成为有效节点），成为有效节点则可按比例获得收益。
      </div>
        <div class="sm-card">
节点收益规则：
用户可随时选择赎回质押进节点的代币，但至少质押满24小时才有获取收益的资格。
      </div>
        <div class="sm-card">
收益于每日下午15:00（新加坡时间）结算并发放至账户中，收益将自动存入可用余额。

      </div>
       <div class="zhiya-title">规则如下:</div>

       <div class="desc">
           <p class="gongshi"></p>
           <p>B代表年化收益</p>
           <p>N代表质押总额</p>
         
       </div>
        <div class="shouyi-title">节点参与者将按质押比例获得节点每日收益。</div>
  </div>
</template>

<script>

export default {
  name: 'rule',
  components:{

  }
}
</script>

<style lang='scss'>
.rule{
    background: url('../assets/img/question-bg@2x.png') no-repeat;
    background-size: 100% 100%;
  .card{
      width: 76%;
      margin:  0 auto;
      padding: 25px;
      font-size: 18px;
      border-radius: 15px;
      background: #FDF9F4;
      color: #122F4D;
        box-shadow: 0 0 16px 0 rgba(0,0,0,.4);
  }
  .rule-title{
      width: 75%;
      margin: 10px auto;
      margin-top: 30px;
      background: #122F4D;
      text-align: center;
      padding: 5px 0;
      color: #F08A40;
      font-size: 20px;
      border-radius: 20px;
        box-shadow: 0 0 16px 0 rgba(0,0,0,.4);
  }
  .sm-card{
      position: relative;
       width: 76%;
      margin:  25px auto;
      padding: 25px;
      font-size: 18px;
      border-radius: 15px;
      background: #FDF9F4;
      color: #122F4D;
      border: 1px solid #F08A40;
       counter-increment: index;
       box-shadow: 0 0 16px 0 rgba(0,0,0,.4);
  }
  .sm-card::before{
      content: counter(index);
  position: absolute;
  left: 8px;
  top: -6px;
  background: url('../assets/img/rank@2x.png') no-repeat;
  background-size: contain;
  width: 18px;
  height: 36px;
  color: #fff;
  text-align: center;
  font-size: 14px;
  }
    .zhiya-title{
      width: 75%;
      margin: 10px auto;
      background: #F08A40;
      text-align: center;
      padding: 5px 0;
      color: #122F4D;
      font-size: 18px;
      border-radius: 20px;
        box-shadow: 0 0 16px 0 rgba(0,0,0,.4);
  }
    .desc{
        width: 60%;
        margin: 0 auto;
        padding: 10px 0;
        .gongshi{
            height: 50px;
   background: url('../assets/img/gongshi.png') no-repeat;
  background-size: contain;
        }
    }
  .desc p{
      text-align: left;
      padding: 3px 0;
  }
  .shouyi-title{
       width: 90%;
      margin: 10px auto;
      margin-bottom: 36px;
      background: #F08A40;
      text-align: center;
      padding: 8px 0;
      color: #122F4D;
      font-size: 14px;
      border-radius: 20px;
        box-shadow: 0 0 16px 0 rgba(0,0,0,.4);
  }
}



</style>
