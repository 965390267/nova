<template>
  <!-- 节点列表 -->
  <div class="node-list">
    <div class="linear-bg"></div>
    <ul>
      <li
        v-for="(item,index) in nodelistdata"
        :key="index"
        @click="gotodetail(item.nodeId,item.address)"
      >
        <div class="top-right-active no" v-if="item.nodeStatus==0">普通节点</div>
        <div class="top-right-active" v-else>提案节点</div>
        <div class="top">
          <!-- <div class="left-circle"></div> -->
          <div class="name"><div class="bigtxt">{{item.nodeName}}</div><div class="spacewhite"></div></div>
          <div class="mid-money">
            <div class="txt">{{item.totalAmount/1000}}NOVA</div>
            <div class="des">质押总额</div>
          </div>
          <div class="right-present">
            <div class="txt">{{(item.returnrate*100).toFixed(2)}}%</div>
            <div class="des">预计年化收益</div>
          </div>
        </div>
        <div class="mid-line"></div>
        <div class="bottom">
          <div class="des">
            <div class="txt">质押</div>
            <div class="num">{{item.pledgeAmount/1000}}</div>
          </div>
          <div class="des">
            <div class="txt">收益</div>
            <div class="num">{{item.totalIncome/1000}}</div>
          </div>
          <div class="des">
            <div class="txt">预计收益（天）</div>
            <div class="num">+{{plainEveryDayMoney(item)}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["nodelistdata"],
  data() {
    return {
     
    };
  },
  computed: {
    
  },
  methods: {
      plainEveryDayMoney(item) {
      return (((item.pledgeAmount / 1000) * item.returnrate) / 365).toFixed(3);
    },
    gotodetail(nodeId, nodeAddress) {
      this.$router.push({
        path: "/mynodedetail",
        query: { nodeId: nodeId, nodeAddress: nodeAddress }
      });
    }
  },
  mounted() {
    console.log(this.nodelistdata);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/common.scss";
.node-list {
  position: relative;
  background-position-y: 40px;
  .linear-bg {
    position: absolute;
    top: 40px;
    height: 100%;
    width: 100%;
    z-index:5;
    background: linear-gradient(90deg, #f08740, #f06b40);
  }
  ul {
    width: 90%;
    margin: 0 auto;
    li {
      position: relative;
      display: flex;
      flex-direction: column;
      background: #FDF9F4;
      // border: 1px solid #f06b40;
      border-radius: 10px;
      margin-bottom: 24px;
      box-shadow:0px 3px 24px rgba(0,0,0,0.27);
      overflow: hidden;
      z-index: 10;
      .top-right-active {
        align-self: flex-end;
        padding: 2px 8px;
        height: 18px;
        line-height: 18px;
        font-size: 10px;
        color: #fdf9f4;
        text-align: center;
        background: linear-gradient(90deg, #f08740, #f06b40);
        // border-radius: 0px 0px 0px 12px;
      }
      .top-right-active.no {
        background: #122f4d;
      }
      .top {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 0 5px 10px;
        // .left-circle {
        //   width: 30px;
        //   height: 30px;
        //   background: linear-gradient(90deg, #f08740, #f06b40);
        //   border-radius: 50%;
        // }
        .name {
          padding-top: 7px;
          padding-left: 6px;
          font-size: 18px;
          font-weight:400;
          color: $main-text-color;
          .spacewhite{
            height: 20px;
          }
        }
        .mid-money,
        .right-present {
          flex: 1;
        }
        .mid-money {
          padding-top: 7px;
          text-align: center;
          .txt {
            font-size: 12px;
             font-weight:400;
            color: $main-text-color;
          }
          .des {
            padding-top: 5px;
            font-size: 10px;
            color: $second-text-color;
          }
        }
        .right-present {
          padding-top: 7px;
          text-align: center;
          .txt {
            font-size: 20px;
            color: $orange-text-color;
          }
          .des {
            padding-top: 5px;
            font-size: 10px;
            color: $second-text-color;
          }
        }
      }

      .mid-line {
        width: 92%;
        margin: 0 auto;
        height: 1px;
        background: #707070;
      }
      .bottom {
        display: flex;
        flex-direction: row;
        padding: 14px 0;
        .des {
          flex: 1;
          .txt {
            font-size: 13px;
            color: $main-text-color;
            font-weight: 400;
            text-align: center;
          }
          .num {
            padding-top: 5px;
            font-size: 10px;
            color: $second-text-color;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
