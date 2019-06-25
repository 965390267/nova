<template>
<diV class="ziya">
    <div class="avtor">
        <div class="circle"></div>nova wallet
    </div>
    <div class="ziyaed"><em>已质押</em>19000 NOVA</div>
    <div class="balance">
    <div class="canbalance">全部</div>
<input class="inputbalance" type="text" placeholder="输入数量">
</div>

<div class="smtip">交易费：0.0005ETH</div>
<div class="ordinary top active">
    <div class="left-txt ">立即赎回</div>
    <div class="right"></div>
</div>
<div class="ordinary bottom">
     <div class="left-txt">普通赎回</div>
      <div class="right"></div>
      </div>
<div class="submit-btn">质&nbsp;&nbsp;&nbsp;&nbsp;押</div>
<div class="note">
<p>说明</p>
<p>普通赎回质押需等待21天，同时赎回期间的质押不会产生交易</p>
<p>
立即赎回质押可立即到账，同时扣除总额10%的手续费并永久销毁</p>

</div>
</diV>
    
</template>
<script>
import inputcount from '@/components/inputcount.vue'
export default {
    components:{

    },
    data(){
return {

}
    }
}
</script>

<style lang="scss" scoped>
.ziya{
    height: 100%;
    background: #FDF9F4;
    overflow: hidden;
}
.avtor{
     width: 90%;
    margin: 15px auto;
display: flex;
align-items: center;
color: #122F4D;
font-size: 19px;
.circle{
    margin-right:5px; 
    width: 30px;
    height: 30px;
    background: -webkit-gradient(linear, left top, right top, from(#F08740), to(#F06B40));
    background: linear-gradient(90deg, #F08740, #F06B40);
    border-radius: 50%;
}
}
.ziyaed{
    width: 80%;
    margin: 0 auto;
    em{
        font-size: 14px;
        color: #122F4D;
        padding-right: 15px;
    }
    font-size: 13px;
    color: #979FA5;

}
.balance{
    width: 90%;
    margin: 0 auto;
    margin-top:20px; 
    position: relative;
    .canbalance{
        position: absolute;
        right: 15px;
        top: 14px;
        color: #F08A40;
        font-size: 13px;
    }
.inputbalance{
    width: 100%;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    border: 1px solid #F07440;
    background: transparent;
    outline: none;
    border-radius: 8px;
}
}

.smtip{
     width: 90%;
   
    margin: 0 auto;
    margin-top: 5px;
    text-align: right;
    font-size: 10px;
    color: #979FA5;
}
.ordinary{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
   height: 45px;
   align-items: center;
   border-top: 1px solid #C5C7C8;
 .left-txt{
     padding-left: 10px;
 color: #122F4D;
 font-size: 13px;
 }
 .right{
   display: none;
   background:url('../assets/img/choose@2x.png') no-repeat;
   background-size: 100% 100%;
   width: 45px;
   height: 45px;
 }
}
.ordinary.top{
   margin-top: 30px;
}
.ordinary.bottom{
    border-bottom: 1px solid #C5C7C8;
}
.active .right{
    display: block;
}
.active .left-txt {
    color: #F08A40;
}
.submit-btn{
    width: 90%;
    height: 36px;
    margin: 0 auto;
    margin-top:30px; 
     background: linear-gradient(90deg,#F08740,#F06B40);
     border-radius: 20px;
     line-height: 36px;
     color: #fff;
     text-align: center;
}
.ziya .note {
    padding: 40px 10px;
}
.ziya .note p{
  color: #979FA5;
  font-size: 12px;
  text-align: left;
  padding: 2px 0;
}
</style>

