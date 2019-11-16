<template>
  <div class="container">
    <!-- 当路由地址（path === $route.path）不是`我的`才显示 -->
    <!-- <van-nav-bar
      v-if="path!=='/user'"
      fixed
      title="黑马头条"
      right-text="搜索"
      @click-right="$router.push('/search')"
    />
    <div class="my-wrapper" :class="{noTop:path==='/user'}">
      <router-view></router-view>
    </div>

    </div>-->
    <router-view></router-view>
    <!-- <van-tabbar route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/question" icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>-->
  </div>
</template>

<script>
export default {
  computed: {
    path () {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang='less'>

</style>
