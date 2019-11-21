<template>
  <!-- 弹出框默认隐藏 -->
  <div class="container">
    <van-popup :value="value" @input="$emit('input',$event)" @open="isReport=false">
      <van-cell-group v-if="!isReport">
        <van-cell @click="dislikes">不感兴趣</van-cell>
        <van-cell is-link @click="isReport=true">反馈垃圾内容</van-cell>
        <van-cell>拉黑作者</van-cell>
      </van-cell-group>
      <van-cell-group v-else>
        <van-cell icon="arrow-left" @click="isReport=false">返回</van-cell>
        <van-cell
          @click="report(item.value)"
          v-for="item in reports"
          :key="item.value"
        >{{item.label}}</van-cell>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { dislikes, report } from '@/api/article'
import { reports } from '@/api/constants'
export default {
  //   props: ['value'],
  props: {
    // 控制对话框显示隐藏
    value: {
      type: Boolean,
      default: false
    },
    // 当前文章ID
    articleId: {
      type: String,
      default: null
    }
  },
  data: function () {
    return {
      // 默认状态 未点击举报
      isReport: false,
      reports
    }
  },
  methods: {
    /// / 举报
    async report (type) {
      try {
        await report(this.articleId, type)
        // 提示
        this.$toast.success('举报成功')
        // 关闭对话框
        this.$emit('input', false)
        // 通知父组件删除对应文章
        this.$emit('on-report')
      } catch (e) {
        if (e.response && e.response.status === 409) {
          return this.$toast.fail('重复举报')
        }
        this.$toast.fail('举报失败')
      }
    },
    // 不感兴趣
    async dislikes () {
      try {
        await dislikes(this.articleId)
        // 提示
        this.$toast({ type: 'success', message: '操作成功' })
        // 关闭
        this.$emit('input', false)
        // 删除文章
        this.$emit('on-success', this.articleId)
      } catch (e) {
        this.$toast({ type: 'fail', message: '操作失败' })
      }
    }
  }
}
</script>

<style scoped lang='less'>
.van-popup {
  width: 80%;
  border-radius: 4px;
}
</style>
