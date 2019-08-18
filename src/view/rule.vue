<template>
  <div class="rule">
    <div class="card">{{$t('rule.txt1')}}</div>
    <div class="rule-title">{{$t('rule.txt2')}}</div>
    <div class="sm-card">{{$t('rule.txt3')}}</div>
    <div class="sm-card">{{$t('rule.txt4')}}</div>
    <div class="sm-card">{{$t('rule.txt5')}}</div>
    <div class="sm-card">{{$t('rule.txt6')}}</div>
    <div class="sm-card">{{$t('rule.txt7')}}</div>
    <div class="sm-card">{{$t('rule.txt8')}}</div>
    <div class="zhiya-title">{{$t('rule.txt9')}}</div>
    <div class="desc">
      <p class="gongshi"></p>
      <p>{{$t('rule.txt10')}}</p>
      <p>{{$t('rule.txt11')}}</p>
    </div>
    <div class="shouyi-title">{{$t('rule.txt12')}}</div>
  </div>
</template>

<script>
export default {
  name: "rule",
  components: {}
};
</script>

<style lang='scss'>
.rule {
  background: url("../assets/img/question-bg@2x.png") no-repeat;
  background-size: 100% 100%;
  .card {
    width: 76%;
    margin: 0 auto;
    padding: 25px;
    font-size: 18px;
    border-radius: 15px;
    background: #fdf9f4;
    color: #122f4d;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.4);
  }
  .rule-title {
    width: 75%;
    margin: 10px auto;
    margin-top: 30px;
    background: #122f4d;
    text-align: center;
    padding: 5px 0;
    color: #f08a40;
    font-size: 20px;
    border-radius: 20px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.4);
  }
  .sm-card {
    position: relative;
    width: 76%;
    margin: 25px auto;
    padding: 25px;
    font-size: 18px;
    border-radius: 15px;
    background: #fdf9f4;
    color: #122f4d;
    border: 1px solid #f08a40;
    counter-increment: index;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.4);
  }
  .sm-card::before {
    content: counter(index);
    position: absolute;
    left: 8px;
    top: -6px;
    background: url("../assets/img/rank@2x.png") no-repeat;
    background-size: contain;
    width: 18px;
    height: 36px;
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
  .zhiya-title {
    width: 75%;
    margin: 10px auto;
    background: #f08a40;
    text-align: center;
    padding: 5px 0;
    color: #122f4d;
    font-size: 18px;
    border-radius: 20px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.4);
  }
  .desc {
    width: 60%;
    margin: 0 auto;
    padding: 10px 0;
    .gongshi {
      height: 50px;
      background: url("../assets/img/gongshi.png") no-repeat;
      background-size: contain;
    }
  }
  .desc p {
    text-align: left;
    padding: 3px 0;
  }
  .shouyi-title {
    width: 90%;
    margin: 10px auto;
    margin-bottom: 36px;
    background: #f08a40;
    text-align: center;
    padding: 8px 0;
    color: #122f4d;
    font-size: 14px;
    border-radius: 20px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.4);
  }
}
</style>
