<template>
  <div id="introduce">
    <div class="introduce_img hidden-xs-only"><img src="../../static/images/home_big.png" alt=""></div>
    <div class="introduct_content">
      <p>北京中科生仪科技有限公司于2009年成立，公司以先进生命科学技术和装备的研发、生产、销售、服务作为主营业务，其中侧重点集中于便携式核酸分子检测技术设备，力求满足我国个体化医疗和现场化检测等市场领域对国产化技术装备的迫切需求。目前公司开发的主要产品是基于Lab-on-chip技术的手持式核酸实时定量分析系统。</p>
      <p style="margin-top: 1rem;">北京中科生仪科技有限公司获评为中关村高新技术企业，拥有一支由中科院多个研究领域的高级技术人才组成的技术核心团队。公司将始终立足于高品质的产品与服务，不断在技术、营销、品牌等方面积极探索，以实现产品性能与价格的完美结合。同时，充分发挥人才、技术、区域等优势，构建完善的服务营销网络，打造多品牌多层次的产品线以及顶尖的产品运营团队，发展成为中国领先的高科技医疗健康设备供应商。</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import '../../css/common.scss';
#introduce {
	flex-grow: 1;
	margin-left: 2.5rem;
	padding: 3rem;
	background-color: $main-bg;
	.introduce_img {
		width: 100%;
		img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.introduct_content {
		margin-top: 2rem;
		p {
			@include sc(1.4rem, $dark);
			line-height: 1.5;
		}
	}
}

@media screen and (max-width: 992px) {
	#introduce {
		.introduce_img {
			img {
			}
		}
		.introduct_content {
			p {
			}
		}
	}
}

@media screen and (max-width: 768px) {
	#introduce {
    margin-left: 0;
    padding: 0.5rem;
		.introduce_img {
			img {
			}
		}
		.introduct_content {
			p {
			}
		}
	}
}
</style>


