<template>
  <div class="alert" v-if="loading">
    <div class="alert-box">
      <p class="alert-txt">{{content}}</p>
      <div class="btn-wrap">
        <div class="clsoe-btn close" @click="loading=false">{{$t('components.alert.cancel')}}</div>
        <div class="clsoe-btn" @click="ceratin()">{{$t('components.alert.certain')}}</div>
      </div>
    </div>
  </div>
</template>
<script>
let self=this;
export default {
  props:{
   content:{
      type:String,
   }
  },
  data() {
    return {
      loading: false
    };
  },
  created() {
    var that = this;
    this.bus.$on("alert", function(data) {
      that.loading = !!data;
    });
  },
  methods:{
    ceratin(){
      this.$emit('certain',true)
    }
  }
};
</script>
<style lang="scss">
.alert {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .alert-box {
    display: flex;
    flex-direction: column;
    width: 86%;
    height: 30%;
    background: #fff;
    border-radius: 15px;
    .alert-txt {
         text-align: center;
    padding: 0.2rem 0;
    color: #122f4d;
    font-size: 0.28rem;
    height: 75%;
    padding: 30px 15px 0 15px;
    }
    .btn-wrap {
      display: flex;
      justify-content: center;
    
      .clsoe-btn {
        width: 70px;
        margin: 0 auto;
        background: #f08a40;
        color: #fff;
        padding: 8px 6px;
        text-align: center;
        border-radius: 8px;
        line-height: 17px;
      }
      .close {
        background: none;
        border: 1px solid #f08a40;
        color: #122f4d;
      }
    }
  }
}
</style>