<template>
  <div id="job">
    <aside class="job_title">
      <p>北京中科生仪科技有限公司于2009年成立，公司以先进生命科学技术和装备的研发、生产、销售、服务作为主营业务。公司自成立以来，专注于发展自己的专利技术，研发自主产权的生物技术产品和服务平台。 现公司招纳贤才，诚邀你的加入</p>
    </aside>
    <section>
      <article class="first_job">
        <h3>招聘职位：实验技术员</h3>
        <section style="margin-top: 2rem;">
          <h4>职位描述：</h4>
          <p>1. 负责分子生物学相关产品研发过程中的 实验室技术工作，包括实验方案的设计及相关分子生物学实验的操作；</p>
          <p>2. 完成公司或上级安排的其它任务。</p>
        </section>
        <section>
          <h4>岗位要求 ：</h4>
          <p>1. 分子生物学相关专业，本科及以上学历，有相关工作经验优先；</p>
          <p>2. 熟悉分子生物学相关的实验操作，如核酸的提取与纯化，核酸电泳，PCR，基因克隆；</p>
          <p>3. 具有较强的实验动手能力和学习能力，实验操作认真负责；</p>
          <p> 4. 具有较强的团队协作能力和沟通能力，积极发现并解决实验过程中的问题。</p>
        </section>
      </article>
      <article class="second_job">
        <h3>招聘职位：结构工程师 </h3>
        <section style="margin-top: 2rem;">
          <h4>职位描述：</h4>
          <p>1. 按公司流程对产品进行独立设计开发策划，并且组织与实施；</p>
          <p>2. 负责产品的机械结构设计，负责机械相关文件的编制和输出；</p>
          <p>3. 完成产品设计的基本计算和验证；负责结构的方案设计和工程图纸的绘制与输出；</p>
          <p>4. 与电气，工艺人员等相关同事的沟通工作，并且协助解决相关的问题；</p>
          <p> 5. 协助产品部做好专利图的绘制和编写工作； </p>
          <p>6. 上级分配的其它相关工作。</p>
        </section>
        <section>
          <h4>岗位要求：</h4>
          <p>1. 本科，两年以上机械设计工作经验；</p>
          <p>2. 软件使用技术，能够熟练使用AutoCAD,SolidWorks或其它三维设计软件进行实体设计及二维图纸绘制,熟悉ANSYS有限元分析、熟悉流体分析软件优先 </p>
          <p>3. 具有一定的塑胶模具、五金模具相关知识,熟悉塑胶和五金基本加工工艺,</p>
          <p>4. 熟悉各种金属常用材料，以及非金属的材料；精通产品表面处理工艺及各类零件的成型工艺并要求有一定的产品化经验；</p>
          <p>5. 有一定的医疗器械产品的研发经验，并且对耗材类产品的设计和成型工艺有一定工作经验者优先。</p>
        </section>
      </article>
    </section>
  </div>
</template>

<script>
export default {
	name: 'job',
};
</script>

<style lang="scss" scoped>
@import '../../css/common.scss';
#job {
	flex-grow: 1;
	margin-left: 2.5rem;
	padding: 3rem;
	background-color: $main-bg;
	.job_title {
		& > p {
			line-height: 2;
			@include sc(1.4rem, $dark);
		}
	}
	& > section {
		article {
			margin-top: 2rem;
			h3 {
				@include sc(1.4rem, #E74C3C);
				font-weight: 600;
			}
			& > section {
				h4 {
					margin-top: 0.6rem;
					@include sc(1.4rem, $dark);
					font-weight: 600;
				}
				p {
					line-height: 2;
					@include sc(1.4rem, $dark);
				}
			}
		}
	}
}

@media screen and (max-width: 992px) {
	#job {
    margin-left: 0;
		.job_title {
			& > p {
			}
		}
		& > section {
			article {
				h3 {
				}
				& > section {
					h4 {
					}
					p {
					}
				}
			}
		}
	}
}
</style>


