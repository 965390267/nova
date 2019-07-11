<template>
  <div >
      <div class="right-icon"></div>
 <div class="problem">
    
     <div class="txt">常见问题</div>
      <div class="ico"></div>
 </div>
    <div class="left-question">1.什么是节点负责人</div>
    <div class="right-question-wrap">
 <div class="right-question">在Nova质押计划中任何人都可以申请成为节点负责人从而创建属于自己的节点，NOVA持有者可以将NOVA放入节点产生节点收益，而节点负责人可以拿到额外比例的奖励。同时节点负责人也可以是节点参与者。成为节点负责人后将获得Nova生态提案权，投票权。
</div>
    </div>
    <div class="left-question">2.什么是节点参与者？</div>
    <div class="right-question-wrap">
 <div class="right-question">在Nova基金会推出的Nova质押计划中，任何持有NOVA的人都可以自主选择将NOVA质押进合适的节点，通过质押来获得节点收益。
</div>
    </div> 

    <div class="left-question">3.为什么要质押NOVA？</div>
    <div class="right-question-wrap">
 <div class="right-question">Nova基金会将拿出投资孵化的项目收入回购NOVA代币存入节点作永久锁仓处理，将NOVA代币进行通缩。随着节点产生，质押的NOVA成线性增长过程中二级市场流通的代币同比例减少，NOVA代币的价格也会相应上升。随着节点参与者的增加最终将会形成良性质押生态，所有持币者都将获得丰厚的回报。
</div>
    </div>

    <div class="left-question">4.加入NOVA质押计划有哪些收益？</div>
    <div class="right-question-wrap">
 <div class="right-question">Nova基金会会拿出1亿代币作为质押模型的奖励给节点参与者。基金会将NOVA通行通缩，币价相应会提升。
</div>
    </div> 


    <div class="left-question">5.质押何时生效，质押多久后开始获得收益？</div>
    <div class="right-question-wrap">
 <div class="right-question">NOVA持有者将NOVA质押进节点后即刻生效并成为节点参与者，次日开始产生收益。</div>
    </div> 

        <div class="left-question">6.质押后能否赎回？</div>
    <div class="right-question-wrap">
 <div class="right-question">质押收益将在新加坡时间每日15:00发放到账户，并随时可将本金与收益作赎回。
</div>
    </div> 

        <div class="left-question"> 7.	节点负责人是否会向节点参与者收取「管理费」？</div>
    <div class="right-question-wrap">
 <div class="right-question">节点负责人的额外节点建立奖励由基金会出资。
</div>
    </div> 

        <div class="left-question">8.把NOVA质押进节点是否有风险？</div>
    <div class="right-question-wrap">
 <div class="right-question"> 被质押的NOVA会作锁仓处理，并可以随时赎回。如果节点参与者行为不端，作出不利于Nova生态发展的动作，将会有部分NOVA被罚没，相应节点负责人也会收到一定惩罚，所以节点负责人在接受节点参与者质押前应该对参与者进行严格的资质评估。
    </div>
    </div> 


  </div>
</template>

<script>

export default {
  name: 'problem',
  components:{

  }
}
</script>

<style lang='scss'>

.problem{
    display:flex;
    flex-direction:row-reverse ;
    align-items:center;
    overflow: hidden;
    margin-top: 20px;
    .ico{
        margin-right:10px;
    width: 24px;
    height: 32px;
    background: url('../assets/img/book@2x.png') no-repeat;
    background-size: contain;
    }
    .txt{
       
        padding: 6px 0 6px 35px;
        width: 65%;
        background: #122F4D;
        color: #F08A40;
        font-size: 18px;
    }
}
.left-question{
    display:inline-block;
    position: relative;

    height: 45px;
    line-height: 45px;
    box-shadow: 0 0 16px 0 #F08A40;
    margin-left: 45px;
    margin-top: 40px;
     background: #F08A40;
     font-size: 15px;
     font-weight: bold;
  
text-overflow:ellipsis;
white-space: nowrap;
}
.left-question::before{
    content: '';
    position: absolute;
    top: 0;
    left: -67px;
    width: 0;
    height: 0;
    border: 22px solid transparent;
    border-right: 45px solid #F08A40;
    
}
.left-question::after{
    content: '';
    position: absolute;
    top: -27px;
    left: -17px;
    width: 32px;
    height: 32px;
    background: url('../assets/img/q@2x.png') no-repeat;
    background-size: contain;
}
.right-question-wrap{
    overflow: hidden;
        margin-top: 20px;
        padding-top: 30px;
.right-question{
    float: right;
    position: relative;
    margin-right: 40px;
    width: 70%;
    background: #122F4D;
    color: #fff;
    font-size: 14px;
    padding: 15px 20px;
    border-radius: 15px;
    line-height:28px;
        letter-spacing: 2px;
       text-align:justify;
}
.right-question::after{
      content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -55px;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left: 35px solid #122F4D;
}
.right-question::before{
      content: '';
    position: absolute;
    top: -20px;
    right: 13px;
    width: 32px;
    height: 32px;
    background: url('../assets/img/a@2x.png') no-repeat;
    background-size: contain;
}
}

</style>
