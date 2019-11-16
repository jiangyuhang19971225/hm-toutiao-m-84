<template>
  <div class="container">
    <van-tabs swipeable>
      <van-tab :key="index" v-for="index in 8" :title="'标签 ' + index">
        <div class="scroll-wrapper">
          <van-list v-model="upLoading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in articles" :key="item">{{item}}</van-cell>
          </van-list>
        </div>
      </van-tab>
    </van-tabs>
    <span class="bar_btn" slot="nav-right">
      <van-icon name="wap-nav"></van-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: 'home-index',
  data: function () {
    return {
      // ----列表需要的数据----
      // 上拉加载中
      upLoading: false,
      // 是否全部加载完成
      finished: false,
      // 文章列表
      articles: []
    }
  },
  methods: {
    onLoad () {
      // @load特点：默认在组件初始化会加载一次。
      // @load特点：当加载的内容渲染后不足一屏，继续触发一次。
      // @load事件触发条件：往上滑动到底部触发。
      // 业务：获取列表数据进行渲染  现在是模拟
      window.setTimeout(() => {
        // 数据加载成功
        // 1. 结束加载中效果
        this.upLoading = false
        // 2. 模拟下数据
        const data = []
        // 每次加载一次 往后生成十条数据 [1-10] [11-20] ...
        for (let i = this.articles.length; i < this.articles.length + 10; i++) {
          data.push(i + 1)
        }
        // 追加
        this.articles.push(...data)
        // 3. 判断数据是否全部加载完毕  假设50条
        if (this.articles.length >= 50) {
          this.finished = true
        }
        console.log('ok')
      }, 1000)
    }
  }
}
</script>

<style scoped lang="less">
.van-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
  /deep/ .van-tabs__wrap {
    height: 36px;
    padding-right: 36px;
    .van-tab {
      line-height: 36px;
    }
    .van-tabs__line {
      background-color: #3296fa;
      height: 2px;
    }
  }
  /deep/ .van-tabs__content {
    flex: 1;
    overflow: hidden;
  }
  /deep/ .van-tab__pane {
    height: 100%;
    .scroll-wrapper {
      height: 100%;
      overflow-y: auto;
    }
  }
}
.bar_btn {
  width: 36px;
  height: 35px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 999;
    box-shadow: 0 0 10px #999;
    transform: scale(1, 0.6);
  }
  .van-icon-wap-nav {
    width: 100%;
    height: 100%;
    background: #fff;
    text-align: center;
    line-height: 35px;
    position: relative;
    z-index: 1000;
    &::before {
      font-size: 20px;
    }
  }
}
</style>
