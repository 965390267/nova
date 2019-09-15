<template>
  <div class="recorddetail">
    <div class="totalmoney">
      <div class="top">
        <div class="shoyyi">{{$t('moneyrecord.totalmoney')}}</div>
        <div class="jine">{{$t('moneyrecord.jine')}}</div>
      </div>
      <div class="bottom">
        <div class="time">{{totalAmount/1000}}NOVA</div>
        <div class="amount">{{totalIncome/1000}}NOVA</div>
      </div>
    </div>
    <ul class="recordlist">
      <li v-for="(item,index) in recordList" :key="index">
        <div class="top">
          <div class="shoyyi">{{$t('moneyrecord.shoyyi')}}</div>
          <div class="jine">+{{item.incomeAmount/1000}}</div>
        </div>
        <div class="bottom">
          <div class="time">{{formatDateToYear(item.createDate)}}</div>
          <div class="amount">{{item.pledgeAmount/1000}}NOVA</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { myIncomeRecode } from "@/config";
export default {
  data() {
    return {
      recordList: [],
      time: "",
      totalAmount: 0,
      totalIncome: 0,
      date: ""
    };
  },
  methods: {
    formatDateToYear(date) {
      /* 格式化时间根据空格左边为年月日，右边为时分秒 */

      try {
        return date.split(" ")[0];
      } catch (error) {
        return date;
      }
    },
    getYearMonthDay() {
      var date = new Date();
    let  Y = date.getFullYear() + "-";
    let  M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
    let   D = date.getDate() + " ";
      this.date = Y + M + D;
    }
  },
  mounted() {
    let { nodeId, nodeAddress } = this.$route.query;
    myIncomeRecode(nodeId, nodeAddress).then(res => {
        if(res.data.success){
      this.recordList = res.data.data.incomeRecodes;
      this.totalAmount = res.data.data.totalAmount;
      this.totalIncome = res.data.data.totalIncome;
        }
    });
    this.getYearMonthDay();
  }
};
</script>
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
  border-bottom: 1px solid rgba(188, 191, 193, 1);
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
  li {
    width: 96%;
    margin: 4px auto;

    border-bottom: 1px solid rgba(188, 191, 193, 1);
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
      color: #696a6b;
    }
  }
}
</style>