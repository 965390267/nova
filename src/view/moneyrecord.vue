<template>
  <div class="recorddetail">
    <div class="totalmoney">
      <div class="top">
        <div class="shoyyi">收益</div>
        <div class="jine">累计收益</div>
      </div>
      <div class="bottom">
        <div class="time">2019-02-01</div>
        <div class="amount">4854564848Nova</div>
      </div>
    </div>
    <ul class="recordlist">
      <li>
        <div class="top">
          <div class="shoyyi">收益</div>
          <div class="jine">+6564.05</div>
        </div>
        <div class="bottom">
          <div class="time">2019-02-01</div>
          <div class="amount">4854564848Nova</div>
        </div>
      </li>
       <li>
        <div class="top">
          <div class="shoyyi">收益</div>
          <div class="jine">+6564.05</div>
        </div>
        <div class="bottom">
          <div class="time">2019-02-01</div>
          <div class="amount">4854564848Nova</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.recorddetail {
    height: 100%;
  background: #fdf9f4;
}
.totalmoney {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  border-bottom: 1px solid rgba(188,191,193,1);
  .top,
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4px 0;
    .shoyyi,
    .jine {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(240, 137, 64, 1);
    }
    .time,
    .amount {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(179, 183, 186, 1);
    }
  }
}

.recordlist {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  li{
      margin: 4px 0;
      padding: 4px 0;
      border-bottom: 1px solid rgba(188,191,193,1);
  }
  .top,
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4px 0;
    .shoyyi,
    .jine {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(240, 137, 64, 1);
    }
    .time,
    .amount {
      font-size: 15px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #696A6B;
    }
  }
}
</style>