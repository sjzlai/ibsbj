<template>
  <div id="dynamic">
    <ul>
      <router-link tag="li" :to="`/article/${item.art_id}`" v-for="(item, index) in newsListShow" :key="index">
        <div class="dynamic_list">
          <section class="dynamic_img"><img :src="imgResolve(item.art_thumb)" alt=""></section>
          <section class="dynamic_content">
            <div class="dynamic_title">
              <h3>{{item.art_title}}</h3>
              <h4>{{timeResolve(item.art_time)}}</h4>
            </div>
            <div class="dynamic_text">
              <p><span>{{item.art_description}}</span><span>【详情】</span></p>
            </div>
          </section>
        </div>
      </router-link>
    </ul>

  </div>
</template>

<script>
	import { newsLists } from '../../getData';
	import { imgResolve, timeResolve } from '../../getData/utils';
export default {
	data() {
		return {
			imgResolve,
			timeResolve,
			//cate_id: 1,//文章分类
			page_id: 9,//文章数量
			newsListShow: [],//动态列表
		}
	},
	async created() {
		let res = await newsLists(this.page_id);
		this.newsListShow = res.data.data;
	}
};
</script>

<style lang="scss" scoped>
@import '../../css/common.scss';
#dynamic {
	flex-grow: 1;
	margin-left: 2.5rem;
	padding: 3rem;
	background-color: $main-bg;
	ul {
		li {
			.dynamic_list {
        @include fj(space-between);
				.dynamic_img {
          align-self: center;
					flex-shrink: 0;
					@include wh(14rem, 9rem);
					img {
						display: block;
						@include wh(100%, 100%);
					}
				}
				.dynamic_content {
					margin-left: 2rem;
					flex-grow: 1;
					@include fj(space-between);
					flex-direction: column;
					.dynamic_title {
						@include fj(space-between);
						h3 {
              flex-grow: 1;
              padding-right: 1rem;
              @include sc(1.4rem, $dark);
              font-weight: 600;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis; 
						}
						h4 {
              flex-shrink: 0;
							@include sc(1.2rem, #999999);
						}
					}
					.dynamic_text {
						p {
              @include fj(space-between);
              align-items: flex-end;
              line-height: 2;
              font-size: 0;
              span:first-child{
                @include sc(1.2rem, #999999);
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              span:last-child {
                flex-shrink: 0;
                vertical-align: bottom;
                line-height: 1;
                @include sc(1.2rem, #E74C3C);
              }
						}
					}
				}
			}
    }
    li + li{
      margin-top: 2rem;
    }
	}
}

@media screen and (max-width: 992px) {
	#dynamic {
    margin-left: 0;
    padding: 0.5rem;
		ul {
			li {
				.dynamic_list {
					.dynamic_img {
					}
					.dynamic_content {
            margin-left: 0.5rem;
						.dynamic_title {
							h3 {
							}
							h4 {
							}
						}
						.dynamic_text {
							p {
								span {
								}
							}
						}
					}
				}
			}
		}
	}
}

@media screen and (max-width: 768px) {
	#dynamic {
    margin-left: 0;
    padding: 0.5rem;
		ul {
			li {
				.dynamic_list {
					.dynamic_img {
            @include wh(9rem, 5rem);
					}
					.dynamic_content {
						.dynamic_title {
							h3 {
							}
							h4 {
							}
						}
						.dynamic_text {
							p {
								span {
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>


