<template>
  <div class="container">
    <van-action-sheet
      :value="value"
      @closed="editing=false"
      @input="$emit('input', $event)"
      title="编辑频道"
    >
      <div class="channel">
        <div class="tit">
          我的频道：
          <span class="tip">点击可进入频道</span>
          <van-button v-if="!editing" @click="editing=true" size="mini" type="info" plain>编辑</van-button>
          <van-button v-else @click="editing=false" size="mini" type="danger" plain>完成</van-button>
        </div>
        <van-grid class="van-hairline--left">
          <van-grid-item v-for="index in 8" :key="index">
            <span class="f12">频道{{index}}</span>
            <van-icon class="btn" name="cross"></van-icon>
          </van-grid-item>
        </van-grid>
      </div>
      <div class="channel">
        <div class="tit">可选频道：</div>
        <van-grid class="van-hairline--left">
          <van-grid-item v-for="index in 8" :key="index">
            <span class="f12">频道{{index}}</span>
            <van-icon class="btn" name="plus"></van-icon>
          </van-grid-item>
        </van-grid>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editing: false
    }
  }
}
</script>

<style scoped lang='less'>
.van-action-sheet {
  max-height: 100%;
  height: 100%;
  .van-action-sheet__header {
    background: #3296fa;
    color: #fff;
    .van-icon-close {
      color: #fff;
    }
  }
}
.channel {
  padding: 10px;
  .tit {
    line-height: 3;
    .tip {
      font-size: 10px;
      color: #999;
    }
  }
  .van-button {
    float: right;
    margin-top: 7px;
  }
  .btn {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #ddd;
    font-size: 12px;
    color: #fff;
  }
  .f12 {
    font-size: 12px;
    color: #555;
  }
  .red {
    color: red;
  }
}
</style>
