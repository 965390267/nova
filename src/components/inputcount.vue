<template>
<div class="inputwrap">
    <div class="total">全部</div>
<input class="inputcount" type="text" placeholder="输入数量">
</div>
    
</template>


<style lang="scss" scoped>
.inputwrap{
    width: 100%;
    position: relative;
    .total{
        position: absolute;
        right: 15px;
        top: 14px;
        color: #F08A40;
        font-size: 13px;
    }
.inputcount{
    width: 100%;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
    border: 1px solid #F07440;
    background: transparent;
    outline: none;
    border-radius: 8px;
}
}

</style>

