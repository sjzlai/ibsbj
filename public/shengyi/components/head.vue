<template>
  <div id="header">
    <header>
      <el-row>
        <el-col :xs="{span: 2, offset: 11}" :lg="{span: 7}" :sm="{span: 8}">
          <section class="logo_wrap">
            <img @click="$router.push('/')" class="logo" src="../static/images/logo.png" alt="">
          </section>
        </el-col>
        <el-col class="hidden-xs-only" :lg="{span: 12}" :sm="{span: 16}">
          <section class="nav_wrap">
            <ul>
              <router-link :style="{color:item.link?'': '#999', cursor: 'pointer'}" :class="{liActive: liActive === index}" v-for="(item, index) in liTarget" :key="index" tag="li" :to="item.link">{{item.text}}</router-link>
            </ul>
          </section>
        </el-col>
        <el-col :xs="{span: 3, offset: 7}">
          <section class="menu">
            <img @click="coverShow" src="../static/images/mune.svg" alt="">
          </section>
        </el-col>
      </el-row>
    </header>
    <main>
      <picture>
        <source srcset="../static/images/home_big.png" media="(min-width: 768px)">
        <source>
        <img src="../static/images/home_small.png">
      </picture>
    </main>
  </div>

</template>

<script>
import { goodsShow } from '../getData';

export default {
	name: 'head-top',
	components: {},
	data() {
		return {
			liTarget: [
				{ text: '首页', link: '/' },
				{ text: '产品中心', link: '/product/1' },
				{ text: '技术支持', link: '' },
				{ text: '订购指南', link: '/order' },
				{ text: '关于我们', link: '/about/introduce' },
				{ text: '联系我们', link: '/contact' },
			],
			liActive: '',
		};
	},
	methods: {
		//阴影层的显示
		coverShow() {
			this.$emit('coverShow');
		},
	},
	watch: {
    //路由监听  改变导航背景颜色
		$route(to, from) {
			if (to.path === '/') {
				this.liActive = 0;
			} else if (to.path.includes('/product')) {
				this.liActive = 1;
			} else if (to.path.includes('/order')) {
				this.liActive = 3;
			} else if (to.path.includes('/about')) {
				this.liActive = 4;
			} else if (to.path.includes('/contact')) {
				this.liActive = 5;
			} else {
				this.liActive = '';
			}
		},
	},
	async created() {
		let path = this.$route.path;
		if (path === '/') {
			this.liActive = 0;
		} else if (path.includes('/product')) {
			this.liActive = 1;
		} else if (path.includes('/order')) {
			this.liActive = 3;
		} else if (path.includes('/about')) {
			this.liActive = 4;
		} else if (path.includes('/contact')) {
			this.liActive = 5;
		} else {
			this.liActive = '';
		}
		let res = await goodsShow();
		this.liTarget = [
			{ text: '首页', link: '/' },
			{ text: '产品中心', link: `/product/${res.data.goodsInfo[0].g_id}` },
			{ text: '技术支持', link: '' },
			{ text: '订购指南', link: '/order' },
			{ text: '关于我们', link: '/about/introduce' },
			{ text: '联系我们', link: '/contact' },
		]
		// console.log(res);
	}
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
header {
	@include wh(100%, 6rem);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9999;
	background-color: rgba(44, 62, 80, 0.7);
	section {
		height: 6rem;
		&.logo_wrap {
			@include flexCenter;
			img {
				@include wh(4.5rem, 4rem);
				display: block;
			}
		}
		&.nav_wrap {
			ul {
				@include fj(space-between);
				align-items: center;
				li {
					width: 9rem;
					margin-top: 1.5rem;
					line-height: 3rem;
					border-radius: 1rem;
					text-align: center;
					@include sc(1.6rem, white);
					&.liActive {
						background-color: #e74c3c;
					}
				}
			}
		}
		&.menu {
			display: none;
		}
	}
}

main {
	width: 100%;
	img {
		display: block;
		width: 100%;
	}
}

@media screen and (max-width: 992px) {
	header {
		section {
			&.nav_wrap {
				ul {
					li {
						// line-height: 6rem;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 768px) {
	header {
		height: 5rem;
		section {
			height: 5rem;
			&.menu {
				display: block;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
	main {
		img {
			max-height: 30rem;
		}
	}
}
</style>
