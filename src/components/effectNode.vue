<template>
  <!-- 节点列表 -->

  <div class="node-list-wrap">
    <div class="nocontent" v-if="listdata.length==0">暂无数据~</div>
    <div class="node-list">
      <div class="linear-bg"></div>
      <ul>
        <li
          @click="gotodetail(item.nodeId,item.address,item.nodeName)"
          v-for="(item,index) in listdata"
          :key="index"
        >
          <!-- <div class="top-right-active">
                       不产生收益
          </div>-->
          <div class="top">
            <!-- <div class="left-circle"></div> -->
            <div class="name">{{item.nodeName}}</div>
            <div class="mid-money">
              <div class="txt">{{item.totalAmount/1000}}</div>
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
              <div class="txt">预计收益(天)</div>
              <div class="num">+{{plainEveryDayMoney(item)}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
 props:{
nodelistdata:Array,
useParmsGetFrom:Object
},
  data() {
    return {
      listdata: []
    };
  },
  watch: {
    nodelistdata(newData, prevData) {
      this.listdata = newData.filter(item => item.nodeStatus == 1);
    }
  },
  methods: {
    plainEveryDayMoney(item) {
      return (((item.pledgeAmount / 1000) * item.returnrate) / 365).toFixed(3);
    },
    gotodetail(nodeId, nodeAddress,nodeName) {
      if(this.useParmsGetFrom&&this.useParmsGetFrom.from&&this.useParmsGetFrom.from==="changenode"){/* 判断如果是从更换节点过来的，则点击后跳到更换节点质押页面 */
    if(nodeAddress==this.useParmsGetFrom.address){alert('不能选择和旧节点相同的地址质押'); return;}
   this.$router.push({/* 到更换节点页 */
        path: "/changenodeziya",
        query: { nodeId: nodeId, newAddress: nodeAddress,oldAddress:this.useParmsGetFrom.address , nodeName:nodeName }
      });
      }else{/* 到详情页 */
    this.$router.push({
        path: "/mynodedetail",
        query: { nodeId: nodeId, nodeAddress: nodeAddress,nodeName:nodeName }
      });
      }
  
    }
  },
  mounted() {
    console.log(this.useParmsGetFrom);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/mixins.scss";
@import "@/assets/scss/common.scss";
.nocontent {
  margin-top: 100px;
  text-align: center;
}
.node-list {
  position: relative;
  background-position-y: 40px;
  .linear-bg {
    position: absolute;
    top: 40px;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: linear-gradient(90deg, #f08740, #f06b40);
  }
  ul {
    width: 90%;
    margin: 0 auto;
    li {
      position: relative;
      display: flex;
      flex-direction: column;
      background: #fdf9f4;
      border-radius: 10px;
      margin-bottom: 24px;
      margin-top: 10px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.27);
      counter-increment: index;
      &::before {
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
      .top-right-active {
        align-self: flex-end;
        width: 70px;
        height: 18px;
        line-height: 18px;
        font-size: 10px;
        color: #fdf9f4;
        text-align: center;
        background: linear-gradient(90deg, #f08740, #f06b40);
        border-radius: 0px 0px 0px 12px;
      }
      .top {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        margin-top: 20px;
        padding: 5px 0 5px 10px;
        .left-circle {
          width: 30px;
          height: 30px;
          background: linear-gradient(90deg, #f08740, #f06b40);
          border-radius: 50%;
        }
        .name {
          padding-top: 7px;
          font-size: 18px;
          font-weight: 400;
          color: $main-text-color;
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
