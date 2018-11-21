<template>
  <div id="contact">
    <div style="margin-top: 3rem;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>联系我们</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <main style="margin-top: 3rem;">
      <section class="list_wrap">
        <ul>
          <li class="first">
            <div class="wrapper">
              <span class="contact">联系我们</span>
              <span class="contact_small">Contact Us</span>
            </div>
          </li>
          <li class="second">
            <div class="list_wrapper">
              <img src="../static/images/address_03.png" alt="">
              <span>地址：北京市北京经济技术开发区科创六街88号3号楼三层308室</span>
            </div>
          </li>
          <li class="second third">
            <div class="list_wrapper">
              <img src="../static/images/youbian_07.png" alt="">
              <span>邮编：101111</span>
            </div>
          </li>
          <li class="second third">
            <div class="list_wrapper">
              <img src="../static/images/dianhua.png" alt="">
              <span>电话：010-51029778</span>
            </div>
          </li>
          <li class="second third">
            <div class="list_wrapper">
              <img src="../static/images/chuanzhen_12.png" alt="">
              <span>传真：010-51029778</span>
            </div>
          </li>
          <li class="second third">
            <div class="list_wrapper">
              <img src="../static/images/youbian_07.png" alt="">
              <span>邮件：zkzy@163.com</span>
            </div>
          </li>
        </ul>
      </section>
      <section class="img_show">
        <!-- <div><img src="../static/images/entry_03.png" alt=""></div> -->
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
#contact {
  width: 80%;
  margin: 0 auto;
  main {
    @include fj(flex-start);
    .list_wrap {
      display: inline-block;
      width: 40%;
      margin-right: 3%;
      ul {
        margin: 0;
        li {
          height: 5rem;
          background: #f0f0f0;
          padding: 0 1rem;
          &.first {
            display: flex;
            align-items: center;
            background: #2C3E50;
            .wrapper {
              .contact {
                @include sc(1.8rem, $white);
              }
              .contact_small {
                padding-left: 1.5rem;
                @include sc(1.2rem, #808B96);
              }
            }
          }
          &.second {
            @include fj(flex-start);
            align-items: center;
            .list_wrapper {
              display: flex;
              align-items: center;
              &>span {
                @include sc(1.4rem, #666);
                padding-left: 1rem;
              }
            }
          }
          &.third {
            margin-top: 0.2rem;
          }
        }
      }
    }
    .img_show {
      width: 57%;
      height: 30.8rem;
      display: inline-block;
      background: url('../static/images/entry_03.png');
      background-size: 100% 100%;
      // &>div {
      //   width: 100%;
      //   &>img {
      //     width: 100%;
      //   }
      // }
    }
  }
}
</style>


