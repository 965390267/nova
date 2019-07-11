<template>
  <div class="changepage">
    <div class="navs">
      <nav>
        <p @click="toggle(0)" :class="{active:0==active}">有效节点</p>
        <p @click="toggle(1)" :class="{active:1==active}">待生效节点</p>
        <!-- <p
            v-for="(item,$index) in arrs" :key='$index'
            @click="toggle($index)"
            :class="{active:$index==active}"
        >{{item}}</p>-->
      </nav>
    </div>

    <!-- Swiper -->
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <div class="swiper-slide">
        <effect-node-list :nodelistdata='nodelistdata'></effect-node-list>
      </div>
      <div class="swiper-slide">
         <invalid-node-list :nodelistdata='nodelistdata'></invalid-node-list>
      </div>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import {nodeList} from '@/config'
import effectNodeList from "@/components/effectNode.vue";
import invalidNodeList from "@/components/invalidNode.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    effectNodeList,
    invalidNodeList,
    swiper,
    swiperSlide
  },

  data() {
    return {
      active: 0,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: false,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          // 使用es6的箭头函数，使this指向vue对象
          slideChangeTransitionStart: () => {
            // 通过$refs获取对应的swiper对象
            let swiper = this.$refs.mySwiper.swiper;
            // let i = swiper.activeIndex;
            this.active=swiper.activeIndex;
          }
        }
      },
      nodelistdata:null
    };
  },
  created() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    callback(index) {
      console.log(this);
    },
    toggle(index){
       this.$refs.mySwiper.swiper.slideTo(index)
    }
  },mounted() {
        nodeList(this.imtokenAddress).then(res=>{
       if(res.data.success){
         this.nodelistdata=res.data.data
  // this.$router.push({path:'/nodeswiper',query:{}})
       }
       })
        imToken.callAPI('native.hideLoading')
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.changepage{
  min-height:100%;
  background: #FDF9F4;
  overflow: hidden;
}
.swiper-container{
  margin-top: 50px;
}
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
  border: 1px solid #ee7b42;
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
.navs p.active {
  background: linear-gradient(90deg, #f08740, #f06b40);
}
.swiper-container{
  min-height: 70vh;
}

</style>
