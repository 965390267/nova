<template>
<diV class="ziya">
    <div class="avtor">
        <div class="circle"></div>nova wallet
    </div>
    <div class="balance">
    <div class="canbalance">1000NOVA</div>
<input class="inputbalance" type="text" placeholder="可用余额">
</div>
<div class="classinput">
<inputcount></inputcount>
</div>
<div class="smtip">交易费：0.0005ETH</div>
<div class="submit-btn">质&nbsp;&nbsp;&nbsp;&nbsp;押</div>
<div class="note">
<p>质押</p>
<p>质押NOVA给有效节点可以随时赎回，但赎回质押需要等待21天</p>
<p>收益</p>
<p>质押收益来自出块奖励和交易手续风险</p>
<p>如果有效节点行为不端将可能会被罚没部分质押代币，比如有效节</p>
<p>点双重签名，经常性离线。为了规避风险，请认真选择合格的验证</p>
<p>节点
</p>
</div>

</diV>
    
</template>
<script>
import inputcount from '@/components/inputcount.vue'
export default {
    components:{
inputcount
    },
    data(){

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
.classinput{
     width: 90%;
    margin: 0 auto;
    margin-top:20px; 
}
.smtip{
     width: 90%;
   
    margin: 0 auto;
    margin-top: 5px;
    text-align: right;
    font-size: 10px;
    color: #979FA5;
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

