<template>
  <div>
         <div class="top-card-wrap">
        <div class="top-card-bg"></div>
        <div class="top-card">
            <div class="card-top-des">
                <div class="card-tit1">
                    <div class="card-tit1-left">ETC Wallet</div>
                    <div class="card-tit1-right">1 ETC</div>
                </div>
                <div class="card-tit2">
                    <div class="card-tit1-left">sdgkjaoisdfiwohe foy3eifj</div>
                    <div class="card-tit1-right">￥2000</div>
                </div>
            </div>

            <div class="toal-money">总资产</div>
            <div class="money">20000 NOVA</div>
            <div class="rmb">￥185300</div>
            <div class="card-mid">
                <div class="rest des">
                    <div class="tit">可用余额</div>
                    <div class="num">1000</div>
                </div>
                <div class="yestoday des">
                    <div class="tit">昨日收益</div>
                    <div class="num">10</div>
                </div>
                <div class="total des">
                    <div class="tit">累计收益</div>
                    <div class="num">105</div>
                </div>
                <div class="backing des">
                    <div class="tit">赎回中</div>
                    <div class="num">~</div>
                </div>
            </div>
            <div class="card-choose-btn">
                <div class="card-choose-sub-btn">选择节点质押</div>
            </div>
        </div>
    </div>
    <!-- card部分 -->
    <!-- 使用教程，常见问题 -->
    <div class="mid-problem">
        <div class="leftbg">
            <div class="txt">常见问题</div>
            <div class="icon"></div>
        </div>
    </div>
    <div class="use-lesson">
        <div class="rightbg">
                <div class="txt">使用教程</div>
                <div class="icon"></div>
        </div>
    </div>
    <h2 class="mynode">我的节点</h2>
   <node-list></node-list>
  </div>
</template>

<script>
import NodeList from '@/components/homeListNode.vue'
export default {
    components:{
NodeList
    },
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
.top-card-wrap{
    position: relative;
   
    height: 360px;
    overflow: hidden;
    .top-card-bg{
        height: 280px;
        @include setbg('../assets/img/m-top-bg@2x.png');
    }

.toal-money{
    text-align: center;
    padding-top: 20px;
    font-size: 11px;
    color: $main-text-color;
}
.money{
    text-align: center;
    // padding-top: 10px;
    font-size: 18px;
    color: $orange-text-color;
}
.rmb{
    text-align: center;
    padding-top: 10px;
    font-size: 11px;
    color: $second-text-color;
}
.card-mid{
   display: flex;
   flex-direction: row; 
   padding:30px 15px 15px 15px;
   border-bottom: 1px dotted  $main-text-color;
   .des{
       display: flex;
       flex-direction: column;
       flex: 1;
       justify-content: center;
       .tit{
        font-size: 11px;
        color: $main-text-color;
        font-weight: bold;
        text-align: center;
       }
       .num{
           padding-top: 10px;
           text-align: center;
           font-size: 11px;
           color: $second-text-color;
       }
   }
}

}
.top-card{
    position: absolute;
    top: 0;
     background: #FDF9F4;
     width: 90%;
    margin-left: 5%;
    margin-top: 8%;
     border-radius: 10px;
     box-shadow:0px 9px 10px rgba(0,0,0,0.2);
     .card-top-des{
         display: flex;
         flex-direction: column;
         .card-tit1,.card-tit2{
             display: flex;
             flex-direction: row;
             .card-tit1-left,.card-tit1-right{
                 flex: 1;
             }
             .card-tit1{
                 font-weight: bold;
             }
             .card-tit1-right{
                 text-align: right;
             }
         }
     .card-tit1{
         padding: 15px 15px 0 15px;
         font-size: 16px;
         color: $main-text-color;
     }
     .card-tit2{
         padding: 8px 15px 0 15px;
         font-size: 11px;
         color: $second-text-color;
     }
 }
}
.card-choose-btn{
    display: flex;
    justify-content: flex-end;
    padding: 20px 0 10px 0;
    .card-choose-sub-btn{
         width: 100px;
         height: 34px;
         font-size: 11px;
         line-height: 34px;
         border-radius: 36px;
         color: #FDF9F4;
         text-align: center;
         margin-right: 20px;
         background: linear-gradient(90deg,#F08740,#F06B40);
    }
}

.mid-problem{
    .leftbg{
        position: relative;
        width: 82%;
        height: 40px;
        margin-top: 14px;
       
    @include setbg('../assets/img/tit1@2x.png');
    .txt{
        position: absolute;
        right: 76px;
        top: 11px;
        color: #FDF9F4;
        font-size: 16px;
    }
    .icon{
        position: absolute;
        right: 12px;
        top: 12px;
        color: #FDF9F4;
        font-size: 16px;
        width: 16px;
        height: 20px;
        @include setbg('../assets/img/book@2x.png');
    }
    }
}

.use-lesson{
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    .rightbg{
        position: relative;
        width: 82%;
        height: 40px;
    @include setbg('../assets/img/tit2@2x.png');
    .txt{
        position: absolute;
        left: 94px;
        top: 12px;
        color: #FDF9F4;
        font-size: 16px;
    }
    .icon{
        position: absolute;
        left: 12px;
        top: 10px;
        color: #FDF9F4;
        font-size: 16px;
        width: 16px;
        height: 20px;
        @include setbg('../assets/img/light@2x.png');
    }
    }
}
.mynode{
    font-size: 16px;
    color: $orange-text-color;
    font-weight: bold;
    margin: 20px 0 15px 10px;
}



</style>
