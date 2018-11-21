<template>

  <div id="root">
    <transition name="showcover">
      <div class="back_cover" @click="close" v-show="backCover"></div>
    </transition>
    <transition name="showlist">
      <div class="show" v-show="backCover">
        <ul>
          <li v-for="(item, index) in slideBar" :key="index" ><span @click="handleNav(item.title)">{{item.title}}</span></li>
        </ul>
      </div>showlist
    </transition>
    <head-top @coverShow="coverShow"></head-top>
    <nuxt/>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import headTop from '../components/head.vue';
  import footGuide from '../components/footer.vue';
  export default {
    components: {
      headTop,
      footGuide
    },
    data() {
      return {
        backCover: false,
        slideBar: [
          {title: '首页', link: '/'},
          {title: '产品中心', link: '/product/1'},
          {title: '技术支持', link: '/'},
          {title: '订购指南', link: '/order'},
          {title: '关于我们', link: '/about/introduce'},
          {title: '联系我们', link: '/contact'},
        ]
      }
    },
    methods: {
      handleNav(title) {
        let link;
        this.slideBar.forEach(item => {
          if (title == item.title) {
            link = item.link;
          }
        })
        if (link) {
          this.$router.push(link);
          this.backCover = false;
        }
        
      },
      coverShow() {
        this.backCover = !this.backCover;
      },
      close() {
        this.backCover = false;
      }
    },
  };


</script>

<style lang="scss">
  @import '../css/common.scss';
  #root{
    .show{
      @include wh(70%, 100%);
      position: absolute;
      top: 0;
      left: 100%;
      background-color: #2c3e50;
      z-index: 10011;
      transform: translateX(-100%);
      ul {
        margin-top: 3rem;
        li {
          @include fj(center);
          align-items: center;
          span{
            @include sc(24px, #fff);
            font-weight: 600;
            line-height: 6rem;
          }
          span:hover {
            color: #e74c3c;
            text-decoration: underline;
          }
        }
      }
    }
  }
  
  .showlist-enter-active,
  .showlist-leave-active {
    transition: all 0.4s;
  }

  .showlist-enter,
  .showlist-leave-active {
    opacity: 0;
  }

  .showcover-enter-active,
  .showcover-leave-active {
    transition: opacity 0.3s;
  }

  .showcover-enter,
  .showcover-leave-active {
    opacity: 0;
  }

  .back_cover {
    position: fixed;
    @include wh(100%, 100%);
    z-index: 10010;
    background-color: rgba(0, 0, 0, 0.3);
  }

</style>
