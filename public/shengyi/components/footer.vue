<template>
   <footer>
    <section class="img_logo">
      <img src="../static/images/logo.png" alt="">
    </section>
     <el-row>
       <el-col class="hidden-xs-only" :lg="{span: 12, offset: 6}" :sm="{span: 16, offset: 4}">
        <section class="nav_list">
          <ul>
            <router-link tag="li" to="/">首页</router-link>
            <router-link tag="li" :to="link">研发中心</router-link>
            <router-link style="color: #999;" tag="li" to="">技术支持</router-link>
            <router-link tag="li" to="/order">订购指南</router-link>
            <router-link tag="li" to="/about/introduce">关于我们</router-link>
            <router-link tag="li" to="/contact">联系我们</router-link>
          </ul>
        </section>
       </el-col>
       <el-col :lg="{span: 8, offset: 8}" :sm="{span: 12, offset: 6}" :xs="{span: 22, offset: 1}">
        <section class="footer_bottom">
          <span>北京中科生仪科技有限公司© 京ICP备17037815号</span>
          <span>京公网安备</span>
        </section>
       </el-col>
     </el-row>
  </footer>
</template>
<script>
import { goodsShow } from '../getData';
export default {
	name: 'foot-guide',
	components: {},
	data() {
		return {
			link: ''
		};
	},
	async created() {
		let res = await goodsShow();
		this.link = `/product/${res.data.goodsInfo[0].g_id}`;
	}
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
footer {
	width: 100%;
  margin-top: 2rem;
  padding-bottom: 1rem;
	overflow: hidden;
	background-color: $dark-green;
	section {
		width: 100%;
		&.img_logo {
			margin-top: 2rem;
			img {
				display: block;
				margin: 0 auto;
			}
		}
		&.nav_list {
			margin-top: 2rem;
			ul {
				width: 100%;
				display: flex;
				li {
					width: 16.6666666%;
					text-align: center;
					@include sc(1.4rem, #DEEFFF);
				}
				li + li {
					border-left: 1px solid $white;
				}
			}
		}
		&.footer_bottom {
			margin-top: 1.5rem;
			@include fj(center);
			span {
				@include sc(1.2rem, #DEEFFF);
			}
		}
	}
}

@media screen and (max-width: 768px) {
	footer {
		section {
      &.img_logo {
        margin-top: 0.5rem;
        img{
          @include imgWh(block, 3.5rem, 3.5rem);
        }
      }
			&.footer_bottom {
        margin-top: 0.5rem;
        @include fj(center);
        align-items: center;
        flex-direction: column;
				span {
          text-align: center;
				}
			}
		}
	}
}
</style>