<template>
  <div>
      <div class="nodedetail">
          <div class="card-bg">
              <div class="card">
                  <div class="card-top">
                       <div class="avtor"><div class="circle"></div>nova wallet</div>
                       <div class="title">
                           <div class="total">质押总额 (nova)</div>
                           <div class="present">预计年化收益</div>
                       </div>
                        <div class="txt">
                           <div class="total">265800</div>
                           <div class="present">12.77%</div>
                       </div>
                       </div>
                       <div class="mid-line"></div>
                 <div class="node-speak">
                     节点宣言
                     <p>
                         dsffdsfgdsfgdsgdsgfdg
                     </p>
                 </div>
              </div>
          </div>


          <!-- 赎回和质押按钮 -->
          <div class="btn-wrap">
              <div class="left-btn">赎回</div>
              <div class="right-btn">质押</div>
          </div>
          </div>   
  </div>
</template>

<script>

export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

@import "@/assets/scss/colors.scss";
@import '@/assets/scss/mixins.scss';
@import '@/assets/scss/common.scss';

.card-bg{
  
    position: relative;
    background: #122F4D;
    overflow: hidden;
    height: 260px;
    .card{
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 90%;
        margin-left: 5%;
        // height: 220px;
        z-index: 9;
        border-radius: 10px;
        background: #F08740;
        box-shadow:0px 9px 10px rgba(0,0,0,0.2);/*no*/
        
        .avtor{
            display: flex;
            align-items: center;
            padding: 5px 0 0 10px;
            font-size: 16px;
            color: #122F4D;
              .circle{
                  width: 45px;
                  height: 45px;
                  background: #fff;
                  border-radius: 50%;
                  margin-right:5px;
              }
        }
        .title{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 10px;
            color: #FDF9F4;
            font-size: 14px;
            font-weight: bold;
        }
        .txt{
             display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 10px;
            color: #E0BDAD;
            font-size: 14px;
            font-weight: bold;
            .total{
padding-left: 20px;
            }
            .present{
padding-right: 20px;
            }
        }
    }
}
.card-bg::after{
    position: absolute;
   content: '';
   top: 0;
   left: 0;
   width: 150%;
   height: 100%;
   background: #fff;
      transform: translate(0rem,2rem) rotateZ(-20deg);

}
.mid-line{
    height: 2px;
    background: #FDF9F4;
    margin: 0 10px;
}
.node-speak{
    font-size: 16px;
    color: #FDF9F4;
    padding-left: 10px;
    margin-top:30px; 
    p{
        font-size: 14px;
        color: #000;
        padding: 2px 0;
        margin-bottom: 20px;
    }
}


.btn-wrap{
    display: flex;
    justify-content: space-around;
    .left-btn,.right-btn{
        width: 80px;
        height: 35px;
        background: linear-gradient(90deg,#F08740,#F06B40);
        text-align: center;
        line-height: 35px;
        border-radius: 8px;
        color: #FDF9F4;
        font-size: 13px;
        box-shadow: 2px 2px 0 0px #ccc;
    }
}
</style>
