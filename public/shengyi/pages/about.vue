<template>
  <div id="about">
    <el-row>
      <el-col :lg="{span: 20, offset: 2}" :sm="{span: 22, offset: 1}">
        <div class="main_wrapper">
          <div class="tab_wrap">
            <lung-breadcrumb></lung-breadcrumb>
          </div>
          <div class="main_wrap">
            <div class="title_menu hidden-sm-and-down">
              <ul>
                <router-link tag="li" to=""><span class="first_list">关于我们</span><span class="second_list">About Us</span></router-link>
                <router-link :class="{isActive: checked[0]}" tag="li" to="/about/introduce"><span :style="{color: checked[0]?'#fff':'#333'}" class="first_list">公司介紹</span></router-link>
                <router-link :class="{isActive: checked[1]}" tag="li" to="/about/job"><span :style="{color: checked[1]?'#fff':'#333'}" class="first_list">人才招聘</span></router-link>
                <router-link :class="{isActive: checked[2]}" tag="li" to="/about/dynamic"><span :style="{color: checked[2]?'#fff':'#333'}" class="first_list">公司动态</span></router-link>
              </ul>
            </div>
            <nuxt-child />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import lungBreadcrumb from '../components/breadcrumb.vue';
import job from './about/job.vue';
export default {
	components: {
		lungBreadcrumb,
		job,
	},
	data() {
		return {
			checked: [false, false, false]
		}
	},
	watch: {
		$route(to, from) {
			if (to.path == '/about/introduce') {
				this.checked = [true, false, false];
			} else if(to.path == '/about/job') {
				this.checked = [false, true, false];
			} else if (to.path == '/about/dynamic') {
				this.checked = [false, false, true];
			} else {
				this.checked = [false, false, false];
			}
		}
	},
	created() {
		if (this.$route.path == '/about/introduce') {
			this.checked = [true, false, false];
		} else if(this.$route.path == '/about/job') {
			this.checked = [false, true, false];
		} else if (this.$route.path == '/about/dynamic') {
			this.checked = [false, false, true];
		} else {
			this.checked = [false, false, false];
		}
	}
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
#about {
	.main_wrapper {
		margin-top: 2.5rem;
		.tab_wrap {
		}
		.main_wrap {
			width: 100%;
			display: flex;
			margin-top: 2.5rem;
			.title_menu {
				width: 24rem;
				flex-shrink: 0;
				background-color: #f0f0f0;
				ul {
					li {
						padding: 0 1.5rem;
						line-height: 4rem;
						background-color: #e5e7e8;
						.first_list {
							@include sc(1.6rem, $dark);
						}
					}
					li:first-child {
						background-color: $dark-green;
						.first_list {
							color: $white;
						}
						.second_list {
							margin-left: 1rem;
							@include sc(1.2rem, #808b96);
						}
					}
					li + li {
						border-top: 1px solid $white;
						&.isActive {
							background-color: #e74c3c;
						}
					}
				}
			}
		}
	}
}

@media screen and (max-width: 992px) {
	#about {
		.main_wrapper {
			.tab_wrap {
			}
			.main_wrap {
				.title_menu {
					ul {
						li {
							.first_list {
							}
						}
						li:first-child {
							.first_list {
							}
							.second_list {
							}
						}
						li + li {
							&.isActive {
							}
						}
					}
				}
			}
		}
	}
}

@media screen and (max-width: 768px) {
	#about {
		.main_wrapper {
        margin-top: 0;      
			.tab_wrap {
			}
			.main_wrap {
        margin-top: 0;        
				.title_menu {
					ul {
						li {
							.first_list {
							}
						}
						li:first-child {
							.first_list {
							}
							.second_list {
							}
						}
						li + li {
							&.isActive {
							}
						}
					}
				}
			}
		}
	}
}
</style>

