<template>
  <div class="alert" v-if="loading">
    <div class="alert-box">
      <p class="alert-txt">请授权给nova使用钱包链接</p>
      <div class="btn-wrap">
        <div class="clsoe-btn close" @click="loading=false">取消</div>
        <div class="clsoe-btn">确认</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    };
  },
  created() {
    var that = this;
    this.bus.$on("loading", function(data) {
      console.log(data);

      that.loading = !!data;
    });
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
    width: 70%;
    height: 30%;
    //transform:translate(50%,50%);
    background: #fff;
    border-radius: 15px;
    .alert-txt {
      text-align: center;
      padding: 10px 0;
      margin-top: 50px;
      color: #122f4d;
      font-size: 14px;
    }
    .btn-wrap {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      .clsoe-btn {
        width: 60px;
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