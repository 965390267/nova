<template>
  <div class="changepage">
    <div class="navs">
      <nav>
        <p @click="toggle(0)" :class="{active:0==active}">{{$t('nodeswiper.effectnode')}}</p>
        <p class="line" @click="toggle(1)" :class="{active:1==active}">{{$t('nodeswiper.invalidnode')}}</p>
      </nav>
    </div>


    <div class="light-swiper">
  <div class="swiper-wrap">
    <div class="swipe-item">
       <effect-node-list :useParmsGetFrom='$route.query' :nodelistdata='nodelistdata'></effect-node-list>
    </div>
    <div class="swipe-item">
       <invalid-node-list :useParmsGetFrom='$route.query' :nodelistdata='nodelistdata'></invalid-node-list>
    </div>

  </div>
</div>
  </div>
</template>

<script>
import Swiper from 'light-swiper'/* c超级轻量的swiper地址https://my.oschina.net/keysITer/blog/3013447 */
import {nodeList} from '@/config'
import effectNodeList from "@/components/effectNode.vue";
import invalidNodeList from "@/components/invalidNode.vue";

export default {
  components: {
    effectNodeList,
    invalidNodeList,

  },

  data() {
    return {
      active: 0,
      mySwiper:null,
      nodelistdata:[]
    };
  },
  created() {

  },
  methods: {
    callback(index) {
      console.log(this);
    },
    toggle(index){
      this.active=index
      if(index){
         this.mySwiper.next()

      }else{
 this.mySwiper.prev()
      }
     
    }
  },mounted() {
     this.mySwiper = new Swiper(document.querySelector('.light-swiper'),{/* swiper切换 */
      // startSlide: sessionStorage.getItem('swiperIndex')||0,
       callback: (index, elem) =>{
         console.log(index);
         this.active=index;
        //  sessionStorage.setItem('swiperIndex',index)
       },
    });
        nodeList(this.imtokenAddress).then(res=>{/* 提案节点和普通节点列表数据 */
       if(res.data.success){
         this.nodelistdata=res.data.data
       }
       })
        imToken.callAPI('native.hideLoading');
    
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

.navs {
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
}
.navs nav {
  display: flex;
  width: 70%;
  margin: 0 auto;
  border-radius: 20px;
  border: 1px solid #707070;
  overflow: hidden;
}

.navs p {
  width: 50%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
}
.navs .line{
  border-left: 1px solid #707070;
}
.navs p.active {
  background: linear-gradient(90deg, #f08740, #f06b40);
}
/* swiper样式 */
.light-swiper {
   margin-top: 40px;
  overflow: hidden;
  position: relative;
}

.swiper-wrap {
  overflow: hidden;
  position: relative;
}
// .swiper-wrap::before{
//   content: '';
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 30px;
//   z-index: 999;
//   background: linear-gradient(rgba(255,255,255,.8),transparent);
// }
.swipe-item {
  float: left;
  width: 100%;
  position: relative;
  height: 70vh;/*写给不支持calc()的浏览器*/ 
  height:calc(100vh - 120px);
  overflow-y: scroll;
}

.changepage{
  min-height:100%;
  background: #FDF9F4;
  overflow: hidden;
}

</style>
