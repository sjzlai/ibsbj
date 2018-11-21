<template>
  <div id="container_wrap">
    <section class="container_title">
      <h3 class="title">产品介绍</h3>
      <p class="product">Product Introduction</p>
      <p class="border"></p>
      <p class="introduction">先进的设计理念、精良的原料选购、规范的生产工艺</p>
    </section>
    <section class="container_wrapper">
      <el-row>
        <el-col :xs="{span: 22, offset: 1}" :sm="{span: 18, offset: 3}" :lg="{span: 14, offset: 5}">
          <div class="wrapper_main">
            <div class="main_top">DEALS OF THE DAY</div>
            <div v-if="goodsShowBoolean === index && goodsList" v-for="(goodsListItem, index) in goodsList" :key="index" class="main">
              <el-row>
                <el-col>
                  <div class="container_show">
                    <el-row>
                      <el-col :lg="{span: 8, offset: 1}" :sm="{span: 8, offset: 1}" :xs="{span: 10, offset: 1}">
                        <section class="drug_img">
                          <picture>
                            <source :srcset="imgResolve(goodsListItem.goodsImg[index].gp_photo)" media="(min-width: 768px)">
                            <source>
                            <img :src="imgResolve(goodsListItem.goodsImg[index].gp_small)">
                          </picture>
                        </section>
                      </el-col>
                      <el-col :lg="{span: 14}" :sm="{span: 15}" :xs="{span: 12}">
                        <section class="drug_param">
                          <section class="drug_title">
                            <h3>{{goodsListItem.g_name}}</h3>
                          </section>
                          <div class="border"></div>
                          <section class="percentage_wrap">
                            <section class="percentage_show">
                              <span class="percentage_title" v-if="goodsShowBoolean === index && goodsListItem.goodsNum[goodsNumIndex]">{{goodsListItem.goodsNum[goodsNumIndex].n_price}}$</span>
                            </section>
                            <section class="model_wrap">
                              <div class="model_top">
                                <el-row>
                                  <el-col :sm="{span: 7}">
                                    <span :style="{background: goodsNumIndex === 0?'#e74c3c': ''}" @click="goodsIndex(0)" class="first" v-if="goodsShowBoolean === index && goodsListItem.goodsNum[0]">{{goodsListItem.goodsNum[0].n_number}}</span>
                                  </el-col>
                                  <el-col :sm="{span: 7, offset: 1}">
                                    <span :style="{background: goodsNumIndex === 1?'#e74c3c': ''}" @click="goodsIndex(1)" class="last" v-if="goodsShowBoolean === index && goodsListItem.goodsNum[1]">{{goodsListItem.goodsNum[1].n_number}}</span>
                                  </el-col>
                                </el-row>
                              </div>
                              <div class="model_bottom">
                                <el-row>
                                  <el-col :sm="{span: 7}">
                                    <span :style="{background: goodsNumIndex === 2?'#e74c3c': ''}" @click="goodsIndex(2)" class="first" v-if="goodsShowBoolean === index && goodsListItem.goodsNum[2]">{{goodsListItem.goodsNum[2].n_number}}</span>
                                  </el-col>
                                  <el-col :sm="{span: 7, offset: 1}">
                                    <span :style="{background: goodsNumIndex === 3?'#e74c3c': ''}" @click="goodsIndex(3)" class="last" v-if="goodsShowBoolean === index && goodsListItem.goodsNum[3]">{{goodsListItem.goodsNum[3].n_number}}</span>
                                  </el-col>
                                </el-row>
                              </div>
                            </section>
                          </section>
                          <div class="border"></div>
                          <section class="time_wrap">
                            <div>
                              <img src="../static/images/save.png" alt="">
                              <span>{{goodsListItem.g_condition}}</span>
                            </div>
                            <div style="margin-left: 1.5rem;">
                              <img src="../static/images/time.png" alt="">
                              <span>保质期：{{goodsListItem.g_quality}}</span>
                            </div>
                          </section>
                        </section>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
              <!-- <el-row>
                <el-col>
                  <section class="button">
                    <div>
                      <span></span>
                      <span></span>
                    </div>
                  </section>
                </el-col>
              </el-row> -->
            </div>
            <div class="main_bottom">
              <div class="bottom_list bottom_list_first">
                <img src="../static/images/telphone.png" alt="">
                <span>电话咨询</span>
                <div class="bottom_message">
                  <div class="message_wrap">
                    <div class="message_arrow"></div>
                    <div class="message_inner">
                      <span>电话：010-51029778</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom_list bottom_list_second">
                <img src="../static/images/qq.png" alt="">
                <span>QQ咨询</span>
                <div class="bottom_message_second">
                  <div class="message_wrap">
                    <div class="message_arrow"></div>
                    <div class="message_inner">
                      <span>QQ：616872074</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom_list bottom_list_third">
                <img style="width: 1.8rem;height: 1.5rem;" src="../static/images/email.png" alt="">
                <span>邮箱咨询</span>
                <div class="bottom_message_third">
                  <div class="message_wrap">
                    <div class="message_arrow"></div>
                    <div class="message_inner">
                      <span>邮箱：zkzy@163.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
    <section class="container_title">
      <h3 class="title">最新资讯</h3>
      <p class="product">LatestInformation</p>
      <p class="border"></p>
      <p class="introduction">先进的设计理念、精良的原料选购、规范的生产工艺</p>
    </section>
    <section class="news_wrap">
      <el-row>
        <el-col :lg="{span: 18, offset: 3}" :sm="{span: 22, offset: 1}" :xs="{span: 22, offset: 1}">
          <div class="news_wrapper">
            <article class="hidden-xs-only">
              <div class="img_show">
                <img :src="imgResolve(newsNewList.art_thumb)" alt="">
              </div>
              <h3>{{newsNewList.art_title}}</h3>
              <p>{{newsNewList.art_description}}<router-link tag="span" :to="`/article/${newsNewList.art_id}`">【详情】</router-link>
              </p>
            </article>
            <div class="news_list">
              <ul>
                <router-link tag="li" :to="`/article/${item.art_id}`" v-for="(item, index) in newsList" :key="index" :class="{list_item : index}">
                  <h1>
                    <span :class="{list_title:index}">{{index > 9 ? '': 0}}{{index + 1}}</span>
                  </h1>
                  <article>
                    <h3>
                      <p :class="{list_title_small:index}">{{item.art_title}}</p>
                      <span class="hidden-md-only hidden-sm-only" :class="{list_time:index}">{{timeResolve(item.art_time)}}</span>
                    </h3>
                    <p :class="{list_content:index}">{{item.art_description}}</p>
                  </article>
                </router-link>
              </ul>
							<div class="list_more">
								<span @click="$router.push('/about/dynamic')">more >></span>
							</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import { goodsShow } from '../getData';
import { imgResolve, timeResolve } from '../getData/utils';
export default {
	components: {},
	async asyncData({ app, error }) {
		let data = {
			goodsList: [],
			goodsShowBoolean: 0,
			newsList: [],
			newsNewList: {},
		};
		let res;
		let news;
		let newsNew;
		let baseUrl;
		if (process.env.NODE_ENV === 'production') {
			baseUrl = 'http://admin.ibs-bj.com';
		} else {
			baseUrl = '';
		}

		try {
			res = await app.$axios.$get(`${baseUrl}/api/goodsShow`);
		} catch (err) {
			throw new Error('http://admin.ibs-bj.com/api/goodsShow请求出错');
		}
		try {
			news = await app.$axios.$get(`${baseUrl}/api/newsList`);
		} catch (err) {
			throw new Error('http://admin.ibs-bj.com/api/newsList请求出错');
		}
		try {
			newsNew = await app.$axios.$get(`${baseUrl}/api/newsNew`);
		} catch (err) {
			throw new Error('http://admin.ibs-bj.com/api/newsNew请求出错');
		}
		console.log(res.data);
		data.goodsList = res.data.goodsInfo;
		data.newsList = news.data;
		data.newsNewList = newsNew.data;
		return data;
	},
	data() {
		return {
			imgResolve,
			timeResolve,
			goodsNumIndex: 0
		};
	},
	methods: {
		goodsIndex(index) {
			this.goodsNumIndex = index;
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../css/common.scss';
#container_wrap {
	width: 100%;
	section {
		&.container_title {
			h3 {
				margin-top: 5rem;
				text-align: center;
				@include sc(2.4rem, $dark);
				font-family: 'MicrosoftYaHei';
			}
			p {
				margin-top: 0.5rem;
				text-align: center;
				padding: 0 1rem;
				&.product {
					@include sc(1.2rem, $dark);
					font-family: HiraginoSansGB-W3;
				}
				&.border {
					@include wh(3.7rem, 0.3rem);
					margin: 0 auto;
					margin-top: 1rem;
					border-radius: 0.15rem;
					background-color: #4d4d4d;
				}
				&.introduction {
					@include sc(1.4rem, #808080);
					font-family: HiraginoSansGB-W3;
				}
			}
		}
		&.container_wrapper {
			margin-top: 2.5rem;
			.wrapper_main {
				position: relative;
				.main_top {
					@include wh(20rem, 4rem);
					position: absolute;
					left: -10rem;
					top: 45%;
					z-index: 1;
					line-height: 4rem;
					text-align: center;
					@include sc(1.7rem, #ECF0F1);
					background-color: $dark-green;
					transform: rotate(90deg);
				}
				.main {
					width: 100%;
					.container_show {
						padding: 4rem 0 2rem 0;
						background-color: $white;
						section.drug_img {
							margin-left: 2rem;
							img {
								display: block;
								min-width: 60%;
								max-width: 80%;
							}
						}
						section.drug_param {
							flex-grow: 1;
							.drug_title {
								h3 {
									@include sc(1.4rem, $dark);
								}
							}
							div.border {
								@include wh(80%, 1px);
								margin: 2rem 0;
								border-radius: 1px;
								background-color: #e6e6e6;
							}
							.percentage_wrap {
								.percentage_show {
									display: flex;
									margin-bottom: 2rem;
									.percentage_title {
										@include sc(2.8rem, #FC4349);
									}
									.percentage_detail {
										display: flex;
										flex-direction: column;
										padding-left: 2rem;
										span {
											@include sc(1.4rem, $dark);
										}
									}
								}
								.model_wrap {
									div {
										span {
											display: inline-block;
											@include wh(13rem, 3.3rem);
											text-align: center;
											line-height: 3.3rem;
											border-radius: 1rem;
											background-color: $dark-green;
											@include sc(1.2rem, $white);
										}
										&.model_top {
											margin-bottom: 1rem;
										}
									}
								}
							}
							.time_wrap {
								div {
									display: inline-block;
									span {
										margin-left: 1rem;
										@include sc(1.2rem, $dark);
									}
								}
							}
						}
					}
				}
				.main_bottom {
					height: 23rem;
					@include fj(space-between);
					flex-direction: column;
					position: absolute;
					top: 10%;
					right: -3rem;
					.bottom_list {
						position: relative;
						@include flexCenter;
						flex-direction: column;
						@include wh(6rem, 6rem);
						border-radius: 4.5rem;
						background-color: $dark-green;
						img {
							@include imgWh(block, 1.5rem, 1.8rem);
						}
						span {
							margin-top: 0.6rem;
							@include sc(1rem, $white);
						}
						.bottom_message {
							display: none;
							background-color: #2c3e50;
							position: absolute;
							left: 100%;
							transform: translateX(1rem);
							border-radius: 1rem;
							.message_wrap {
								width: 100%;
								height: 100%;
								position: relative;
								.message_arrow {
									position: absolute;
									left: 0;
									bottom: 50%;
									transform: translate(-50%, 50%) rotate(45deg);
									width: 1.6rem;
									height: 1.6rem;
									border-radius: 0.5rem;
									// border-right: 1px solid #f0f0f0;
									// border-bottom: 1px solid #f0f0f0;
									background-color: #2c3e50;
								}
								.message_inner {
									width: 100%;
									height: 100%;
									padding: 1rem;
									background: #2c3e50;
									// border: 1px solid #f0f0f0;
									border-radius: 1rem;
									@include fj(center);
									align-items: center;
									& > span {
										line-height: 1.5;
										margin: 0;
										// flex-grow: 1;
										white-space: nowrap;
										@include sc(1.5rem, $white);
									}
								}
							}
						}
						.bottom_message_second {
							display: none;
							background-color: #2c3e50;
							position: absolute;
							left: 100%;
							transform: translateX(1rem);
							border-radius: 1rem;
							.message_wrap {
								width: 100%;
								height: 100%;
								position: relative;
								.message_arrow {
									position: absolute;
									left: 0;
									bottom: 50%;
									transform: translate(-50%, 50%) rotate(45deg);
									width: 1.6rem;
									height: 1.6rem;
									border-radius: 0.5rem;
									// border-right: 1px solid #f0f0f0;
									// border-bottom: 1px solid #f0f0f0;
									background-color: #2c3e50;
								}
								.message_inner {
									width: 100%;
									height: 100%;
									padding: 1rem;
									background: #2c3e50;
									// border: 1px solid #f0f0f0;
									border-radius: 1rem;
									@include fj(center);
									align-items: center;
									& > span {
										line-height: 1.5;
										margin: 0;
										// flex-grow: 1;
										white-space: nowrap;
										@include sc(1.5rem, $white);
									}
								}
							}
						}
						.bottom_message_third {
							display: none;
							background-color: #2c3e50;
							position: absolute;
							left: 100%;
							transform: translateX(1rem);
							border-radius: 1rem;
							.message_wrap {
								width: 100%;
								height: 100%;
								position: relative;
								.message_arrow {
									position: absolute;
									left: 0;
									bottom: 50%;
									transform: translate(-50%, 50%) rotate(45deg);
									width: 1.6rem;
									height: 1.6rem;
									border-radius: 0.5rem;
									// border-right: 1px solid #f0f0f0;
									// border-bottom: 1px solid #f0f0f0;
									background-color: #2c3e50;
								}
								.message_inner {
									width: 100%;
									height: 100%;
									padding: 1rem;
									background: #2c3e50;
									// border: 1px solid #f0f0f0;
									border-radius: 1rem;
									@include fj(center);
									align-items: center;
									& > span {
										line-height: 1.5;
										margin: 0;
										// flex-grow: 1;
										white-space: nowrap;
										@include sc(1.5rem, $white);
									}
								}
							}
						}
					}
					.bottom_list_first:hover {
						background: #e74c3c;
						.bottom_message {
							display: block;
						}
					}
					.bottom_list_second:hover {
						background: #e74c3c;
						.bottom_message_second {
							display: block;
						}
					}
					.bottom_list_third:hover {
						background: #e74c3c;
						.bottom_message_third {
							display: block;
						}
					}
				}
			}
			// .button {
			//   width: 100%;
			//   @include fj(center);
			//   padding-bottom: 2rem;
			//   background-color: $white;
			//   div {
			//     width: 4rem;
			//     @include fj(space-between);
			//     span {
			//       display: inline-block;
			//       @include wh(1rem, 1rem);
			//       background-color: #2c3e50;
			//       border-radius: 0.5rem;
			//     }
			//   }
			// }
		}
		&.news_wrap {
			margin-top: 2.5rem;
			.news_wrapper {
				display: flex;
				article {
					width: 40%;
					.img_show {
						img {
							@include imgWh(block, 100%, 100%);
						}
					}
					h3 {
						line-height: 5rem;
						@include sc(1.6rem, $dark);
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					p {
						@include sc(1.4rem, #666666);
						span {
							@include sc(1.4rem, #FC4349);
						}
					}
				}
				.news_list {
					width: 55%;
					margin-left: 5%;
					ul {
						li {
							display: flex;
							background-color: $dark-green;
							&.list_item {
								background-color: #f5f5f5;
							}
							h1 {
								@include flexCenter;
								padding-left: 1rem;
								span {
									text-decoration: underline;
									@include sc(5rem, $white);
									font-family: RTWSShangGoG0v1-ExLightCond;
									&.list_title {
										@include sc(5rem, #ccc);
									}
								}
							}
							article {
								flex-grow: 1;
								h3 {
									@include fj(space-between);
									padding-right: 0.5rem;
									& > p {
										line-height: 4rem;
										padding-right: 1rem;
										font-weight: 600;
										overflow: hidden;
										white-space: nowrap;
										text-overflow: ellipsis;
										@include sc(1.4rem, $white);
										&.list_title_small {
											@include sc(1.4rem, $dark);
										}
									}
									span {
										line-height: 4rem;
										@include sc(1.4rem, $white);
										overflow: hidden;
										white-space: nowrap;
										text-overflow: ellipsis;
										&.list_time {
											@include sc(1.4rem, #666);
										}
									}
								}
								p {
									@include sc(1.4rem, $white);
									padding-right: 0.5rem;
									padding-left: 1rem;
									line-height: 3rem;
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
									&.list_content {
										@include sc(1.4rem, #666);
									}
								}
							}
						}
						li + li {
							margin-top: 2rem;
						}
					}
					.list_more {
						width: 100%;
						margin-top: 1.5rem;
						@include fj(flex-end);
						span {
							@include sc(1.4rem, #fc4349);
						}
					}
				}
			}
		}
	}
}

@media screen and (max-width: 768px) {
	#container_wrap {
		section {
			&.container_wrapper {
				.wrapper_main {
					.main_top {
						@include wh(16rem, 3.2rem);
						position: absolute;
						left: -8rem;
						top: 45%;
						z-index: 1;
						line-height: 3.2rem;
						text-align: center;
						@include sc(1.3rem, #ECF0F1);
						background-color: $dark-green;
						transform: rotate(90deg);
					}
					.main {
						.container_show {
							section.drug_param {
								.model_wrap {
									div {
										span {
											&.last {
												margin-left: 0;
												margin-top: 1rem;
											}
										}
										&.model_top {
											margin-bottom: 1rem;
										}
									}
								}
							}
							section.drug_img {
								margin-top: 10rem;
							}
						}
					}
					.main_bottom {
						height: 18rem;
						position: absolute;
						right: -1rem;
						top: 20%;
						.bottom_list {
							@include wh(5rem, 5rem);
							border-radius: 2.5rem;
							background-color: $dark-green;
							img {
								@include imgWh(block, 1.3rem, 1.6rem);
							}
							span {
								margin-top: 0.4rem;
							}
						}
					}
				}
			}
			&.news_wrap {
				.news_list {
					width: 100% !important;
					margin-left: 0 !important;
				}
			}
		}
	}
}
</style>
