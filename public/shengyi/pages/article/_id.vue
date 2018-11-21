<template>
  <div class="news_wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>热点文章</el-breadcrumb-item>
    </el-breadcrumb>
    <h3>{{title}}</h3>
    <div class="time">
      <span>{{timeResolve(time)}}</span>
      <span style="margin-left: 4rem;">来源：生仪网</span>
    </div>
    <div class="news_details">
      <div v-html="content"></div>
    </div>
  </div>
</template>
<script>
import { newsInfo } from '../../getData';
import { timeResolve } from '../../getData/utils';
export default {
  data() {
    return {
      title: '',
      content: '',
      time: '',
      timeResolve
    }
  },
  async created() {
    let id = this.$route.params.id;
    let res = await newsInfo(id);
    this.title = res.data.art_title;
    this.content = res.data.art_content;
    this.time = res.data.art_time;
  }
}
</script>

<style lang="scss" scoped>
  @import '../../css/common.scss';
  .news_wrap {
    width: 80%;
    margin: 0 auto;
    margin-top: 3rem;
    &>h3 {
      @include sc(2rem, $dark);
      margin-top: 2rem;
    }
    .time {
      margin-top: 2rem;
      &>span {
        @include sc(1.4rem, #999);
      }
    }
    .news_details {
      margin-top: 2rem;
    }
  }
</style>


