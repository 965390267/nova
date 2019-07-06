<template>
  <div >
      <div class="right-icon"></div>
 <div class="problem">
     <div class="ico"></div>
     <div class="txt">常见问题</div>
 </div>
    <div class="left-question">1.什么是节点负责人</div>
    <div class="right-question-wrap">
 <div class="right-question">在Nova质押计划中任何人都可以申请成为节点负责人从而创建属于自己的节点，NOVA持有者可以将NOVA放入节点产生节点收益，而节点负责人可以拿到额外比例的奖励。同时节点负责人也可以是节点参与者。成为节点负责人后将获得Nova生态提案权，投票权。
</div>
    </div>
    <div class="left-question">1.什么是节点负责人</div>
    <div class="right-question-wrap">
 <div class="right-question">在Nova质押计划中任何人都可以申请成为节点负责人从而创建属于自己的节点，NOVA持有者可以将NOVA放入节点产生节点收益，而节点负责人可以拿到额外比例的奖励。同时节点负责人也可以是节点参与者。成为节点负责人后将获得Nova生态提案权，投票权。
</div>
    </div> 
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{

  }
}
</script>

<style lang='scss'>
.problem{
    overflow: hidden;
    margin-top: 20px;
    .txt{
        float: right;
        padding: 6px 0 6px 35px;
        width: 65%;
        background: #122F4D;
        color: #F08A40;
        font-size: 18px;
    }
}
.left-question{
    position: relative;
    width: 60%;
    height: 45px;
    line-height: 45px;
    box-shadow: 0 0 16px 0 #F08A40;
    margin-left: 45px;
    margin-top: 40px;
     background: #F08A40;
     font-size: 15px;
     font-weight: bold;
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
    width: 38px;
    height: 38px;
    background: url('../assets/img/q@2x.png') no-repeat;
    background-size: contain;
}
.right-question-wrap{
    overflow: hidden;
        margin-top: 36px;
        padding-top: 30px;
.right-question{
    float: right;
    position: relative;
    margin-right: 50px;
    width: 70%;
    background: #122F4D;
    color: #fff;
    font-size: 14px;
    padding: 15px 20px;
    border-radius: 15px;
}
.right-question::after{
      content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -70px;
    width: 0;
    height: 0;
    border: 30px solid transparent;
    border-left: 45px solid #122F4D;
}
.right-question::before{
      content: '';
    position: absolute;
    top: -13%;
    right: 13px;
    width: 38px;
    height: 38px;
    background: url('../assets/img/a@2x.png') no-repeat;
    background-size: contain;
}
}

</style>
