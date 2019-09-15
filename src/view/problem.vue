<template>
  <div>
    <div class="right-icon"></div>
    <div class="problem">
      <div class="txt">{{$t('problem.problem')}}</div>
      <div class="ico"></div>
    </div>
    <div class="left-question">1.{{$t('problem.q1')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q1note')}}</div>
    </div>
    <div class="left-question">2.{{$t('problem.q2')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q2note')}}</div>
    </div>

    <div class="left-question">3.{{$t('problem.q3')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q3note')}}</div>
    </div>

    <div class="left-question">4.{{$t('problem.q4')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q4note')}}</div>
    </div>

    <div class="left-question">5.{{$t('problem.q5')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q5note')}}</div>
    </div>

    <div class="left-question">6.{{$t('problem.q6')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q6note')}}</div>
    </div>

    <div class="left-question">7.{{$t('problem.q7')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q7note')}}</div>
    </div>

    <div class="left-question">8.{{$t('problem.q8')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q8note')}}</div>
    </div>

      <div class="left-question">9.{{$t('problem.q9')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q9note')}}</div>
    </div>

      <div class="left-question">10.{{$t('problem.q10')}}</div>
    <div class="right-question-wrap">
      <div class="right-question">{{$t('problem.q10note')}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "problem",
  components: {}
};
</script>

<style lang='scss'>
.problem {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  overflow: hidden;
  margin-top: 20px;
  .ico {
    margin-right: 10px;
    width: 24px;
    height: 32px;
    background: url("../assets/img/book@2x.png") no-repeat;
    background-size: contain;
  }
  .txt {
    padding: 6px 0 6px 35px;
    width: 65%;
    background: #122f4d;
    color: #f08a40;
    font-size: 18px;
  }
}
.left-question {
  display: inline-block;
  position: relative;
  height: 45px;
  line-height: 45px;
  padding-left: 4px;
  padding-right: 14px;
  box-shadow: 0 0 16px 0 #f08a40;
  margin-left: 35px;
  margin-top: 40px;
  background: #f08a40;
  font-size: 14px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 0 6px 6px 0;
}
.left-question::before {
  content: "";
  position: absolute;
  top: 0;
  left: -55px;
  width: 0;
  height: 0;
  border: 23px solid transparent;
  border-right: 35px solid #f08a40;
}
.left-question::after {
  content: "";
  position: absolute;
  top: -27px;
  left: -17px;
  width: 32px;
  height: 32px;
  background: url("../assets/img/q@2x.png") no-repeat;
  background-size: contain;
}
.right-question-wrap {
  overflow: hidden;
  margin-top: 20px;
  padding-top: 30px;
  .right-question {
    float: right;
    position: relative;
    margin-right: 40px;
    width: 70%;
    background: #122f4d;
    color: #fff;
    font-size: 14px;
    padding: 15px 20px;
    border-radius: 15px;
    line-height: 28px;
    letter-spacing:1px;
    text-align: justify;
  }
  .right-question::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -55px;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left: 35px solid #122f4d;
  }
  .right-question::before {
    content: "";
    position: absolute;
    top: -20px;
    right: 13px;
    width: 32px;
    height: 32px;
    background: url("../assets/img/a@2x.png") no-repeat;
    background-size: contain;
  }
}
</style>
