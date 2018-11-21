<template>
  <section class="title_content">
    <div class="content_detail">
      <article :class="{padding: pro_detail}">
        <div class="pro_img_show">
          <slot name="bottle_big"></slot>
          <div style="margin-top:2rem;" class="img_small_all">
            <slot name="img_container"></slot>
          </div>
        </div>
        <div :class="{pro_detail_if_show: pro_detail}" class="pro_detail_show">
          <h3>{{content.title}}</h3>
          <p v-if="content.text">{{content.text}}</p>
          <div v-if="content.time" class="quality">
            <span class="quality_attr">{{content.period}}</span>
            <span class="quality_value">{{content.time}}</span>
          </div>
          <!-- <div v-if="content.period" class="quality">
            <span class="quality_attr">{{content.period}}</span>
            <span class="quality_value">{{content.time}}</span>
          </div> -->
          <div v-if="content.condition" class="quality">
            <span class="quality_attr">保存条件：</span>
            <span class="quality_value">{{content.condition}}</span>
          </div>
          <div class="word_download">
            <span>相关文档：</span>
            <div v-if="files.length" class="word_download_img">
              <section v-for="(file, index) in files" :key="index">
                <img src="../static/images/word.png" alt="">
                <h4>{{file.file_title}}</h4>
                <a :href="`http://admin.ibs-bj.com/api/fileDown/file_id/${file.file_id}`" class="cover">
                  <img src="../static/images/download.png" alt="">
                </a>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div class="content_param">
      <slot name="tableShow"></slot>
      <table v-if="table">
        <thead>
          <tr>
            <th>货号</th>
            <th>规格(mg)</th>
            <th>参考价格</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in trList" :key="index">
            <td>{{item.artNo}}</td>
            <td>{{item.spec}}</td>
            <td>{{item.price}}</td>
          </tr>
        </tbody>
      </table>
      <div class="info_list">
        <slot name="detail"></slot>
      </div>
    </div>
  </section>
</template>
<script>
import { fileDown } from '../getData';
export default {
	name: 'product-list',
	props: ['content', 'trList', 'table', 'pro_detail', 'files'],
	data() {
		return {
			selectedOptions: [],
			options: [
				{
					value: 'productCenter',
					label: '产品中心',
				},
				{
					value: 'acid',
					label: '核酸提取和纯化',
				},
				{
					value: 'protein',
					label: '蛋白质表达与纯化',
					children: [
						{
							value: 'Apyrase',
							label: '三磷酸腺苷双磷酸酶Apyrase',
						},
						{
							value: 'ProteinA',
							label: 'ProteinA',
						},
						{
							value: 'IgG',
							label: 'IgG结合',
							children: [
								{
									value: 'one',
									label: 'one',
								},
							],
						},
					],
				},
				{
					value: 'equipment',
					label: '仪器设备',
				},
				{
					value: 'service',
					label: '技术服务',
				},
			],
			editableTabsValue: '2',
			editableTabs: [
				{
					title: '核酸提取和纯化',
					name: '1',
				},
				{
					title: '基因克隆',
					name: '2',
				},
				{
					title: '蛋白质表达与纯化',
					name: '3',
				},
				{
					title: '仪器设备',
					name: '4',
				},
				{
					title: '技术服务',
					name: '5',
				},
			],
			tabIndex: 2,
		};
	},
	methods: {
		async FileDown(id) {
			let res = await fileDown(id);
			console.log(res)
		}
	},
	created() {
		console.log(this.content)
	}
};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';

.title_content {
	flex-grow: 1;
	margin-left: 2.5rem;
	.content_detail {
		article {
			width: 100%;
			padding-top: 4rem;
			padding-bottom: 3rem;
			background-color: $main-bg;
			@include fj(space-between);
			.pro_img_show {
				width: 40rem;
				height: 20rem;
				// flex-grow: 1;
				// width: 50%;
				.img_big_show {
					width: 100%;
					height: 100%;
					& > img {
						height: 100%;
						display: block;
						margin: 0 auto;
					}
				}
				.img_small_show {
					width: 80%;
					margin: 0 auto;
					margin-top: 1rem;
					@include fj(space-between);
					align-items: center;
					& > div {
						width: 5.7rem;
						& > img {
							display: block;
							margin: 0.7rem auto;
						}
					}
					& > div + div {
						border: 1px solid #ebebeb;
						&:last-child {
							border: 0;
						}
					}
					.img_small {
						width: 5rem;
						height: 5rem;
						&>img{
							display: block;
							width: 80%;
						}
					}
				}
			}
			.pro_detail_show {
				// flex-grow: 1;
				width: 50%;
				padding-right: 3rem;
				h3 {
					@include sc(2rem, $dark);
				}
				p {
					@include sc(1.4rem, #666666);
					margin-top: 4rem;
				}
				.quality {
					margin-top: 4rem;
					.quality_attr {
						@include sc(1.4rem, #999999);
						font-family: 'HiraginoSansGB-W3';
					}
					.quality_value {
						@include sc(1.4rem, #666666);
					}
				}
				.word_download {
					margin-top: 4rem;
					@include fj(flex-start);
					& > span {
						@include sc(1.4rem, #999999);
						flex-shrink: 0;
					}
					.word_download_img {
						@include fj(space-around);
						& > section {
							position: relative;
							margin-left: 3rem;
							h4 {
								text-align: center;
								@include sc(1.4rem, $dark);
							}
							.cover {
								display: block;
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								opacity: 0;
								background-color: rgba(59, 59, 59, 0.8);
								@include flexCenter;
								border-radius: 0.7rem;
								transition: all 0.4s;
							}
						}
						& > section:hover {
							.cover {
								opacity: 1;
							}
						}
					}
				}
			}
			.pro_detail_if_show {
				@include fj(space-between);
				flex-direction: column;
				p {
					margin-top: 0;
				}
				.quality {
					margin-top: 0;
				}
				.word_download {
					margin-top: 0;
				}
			}
			&.padding {
				padding-bottom: 2rem;
			}
		}
	}
}
.content_param {
	margin-top: 3rem;
	table {
		width: 100%;
		thead {
			width: 100%;
			tr {
				width: 100%;
				background-color: $dark-green;
				th {
					line-height: 5rem;
					text-align: center;
					@include sc(1.6rem, $white);
				}
				th + th {
					border-left: 1px solid #fff;
				}
			}
		}
		tbody {
			width: 100%;
			tr {
				td {
					line-height: 3rem;
					text-align: center;
					@include sc(1.4rem, $dark);
				}
				td + td {
					border-left: 1px solid #fff;
				}
				td:last-child {
					color: #e74c3c;
				}
			}
			tr:nth-child(odd) {
				background-color: $white;
			}
			tr:nth-child(even) {
				background-color: #ebebeb;
			}
		}
	}
	.info_list {
		margin-top: 3rem;
		p {
			@include sc(1.4rem, #666666);
			strong {
				@include sc(1.4rem, dark);
				font-weight: 600;
			}
			&.apyrase_text {
				line-height: 4rem;
			}
		}
		p + p {
			margin-top: 1rem;
		}
	}
}

@media screen and (max-width: 992px) {
	.title_content {
		margin-left: 0;
		.content_detail {
			article {
				.pro_img_show {
					.img_big_show {
						& > img {
						}
					}
					.img_small_show {
						width: 95%;
						& > div {
							& > img {
							}
						}
						& > div + div {
							&:last-child {
							}
						}
					}
				}
				.pro_detail_show {
					padding: 2rem;
					.quality {
						.quality_attr {
						}
						.quality_value {
						}
					}
					.word_download {
						& > span {
						}
						.word_download_img {
							& > section {
								h4 {
								}
								.cover {
								}
							}
							& > section:hover {
								.cover {
								}
							}
						}
					}
				}
			}
		}
	}
	// }
	.content_param {
		table {
			thead {
				tr {
					th {
					}
					th + th {
					}
				}
			}
			tbody {
				tr {
					td {
					}
					td + td {
					}
					td:last-child {
					}
				}
				tr:nth-child(odd) {
				}
				tr:nth-child(even) {
				}
			}
		}
		.info_list {
			p {
				strong {
				}
			}
			p + p {
			}
		}
	}
}
@media screen and (max-width: 768px) {
	.title_content {
		margin-left: 0;
		.content_detail {
			article {
				display: block;
				.pro_img_show {
					width: 100%;
					.img_big_show {
						width: 100%;
						& > img {
						}
					}
					.img_small_show {
						width: 95%;
						& > div {
							& > img {
							}
						}
						& > div + div {
							&:last-child {
							}
						}
					}
				}
				.pro_detail_show {
					h3 {
					}
					p {
					}
					.quality {
						.quality_attr {
						}
						.quality_value {
						}
					}
					.word_download {
						& > span {
						}
						.word_download_img {
							& > section {
								h4 {
								}
								.cover {
								}
							}
							& > section:hover {
								.cover {
								}
							}
						}
					}
				}
				.pro_detail_if_show {
					h3 {
						margin-top: 1rem;
					}
					& > div.quality {
						margin-top: 1rem;
					}
					& > div.word_download {
						margin-top: 1rem;
					}
				}
			}
		}
	}
	.content_param {
		table {
			thead {
				tr {
					th {
					}
					th + th {
					}
				}
			}
			tbody {
				tr {
					td {
					}
					td + td {
					}
					td:last-child {
					}
				}
				tr:nth-child(odd) {
				}
				tr:nth-child(even) {
				}
			}
		}
		.info_list {
			margin: 0;
			padding: 2rem;
			p {
				strong {
				}
			}
			p + p {
			}
		}
	}
}
</style>
