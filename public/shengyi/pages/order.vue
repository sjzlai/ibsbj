<template>
  <div id="order">
    <el-row>
      <el-col :lg="{span: 16, offset: 4}" :sm="{span: 20, offset: 2}" :xs="{span: 22, offset: 1}">
        <div style="margin-top: 3rem;">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订购指南</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="order_container">
          <section class="container_item">
            <h3 style="margin-top: 3rem;">订购指南</h3>
            <div class="contact">
              <section style="margin-left: 0;">
                <img src="../static/images/order_phone.png" alt="">
                <span>订购电话：010-51029778</span>
              </section>
              <section>
                <img src="../static/images/order_fax.png" alt="">
                <span>传 真：010-51029778</span>
              </section>
              <section>
                <img src="../static/images/order_email.png" alt="">
                <span>邮 箱：zkzy_order@163.com</span>
              </section>
            </div>
          </section>
          <section class="container_item">
            <h3>产品运输</h3>
            <div>
              <p>我公司承诺以快捷的运送方式保证用户及时收到订购的产品。常温保存的产品，采用铁路运输或快递的方式发货；需冷藏的产品，一般采用空运或快递方式发货。一次定货量达1000元以上的市区客户可免收运费, 不足1000元的订货或是偏远地区客户，我公司将收取适当运费。</p>
            </div>
          </section>
          <section class="container_item">
            <h3>付款方式</h3>
            <div>
              <p><span>本公司在发货的同时均附发票，高校、科研院所等后付款客户请在到货两周内付款。付款可采用转帐或电汇方式, 对于特殊情况可接收现金、支票支付。</span></p>
              <p><span>公司名称：</span><span>北京中科生仪科技有限公司</span></p>
              <p><span>开户行：</span><span>中国农业银行股份有限公司北京富源支行 </span></p>
              <p><span>银行账号：</span><span>11112201040011669</span></p>
              <p><span>纳税人识别号：</span><span>110192694969827</span></p>
            </div>
          </section>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import '../css/common.scss';
#order {
	width: 100%;
	.order_container {
    margin-top: 3rem;
		width: 100%;
		overflow: hidden;
		background-color: $main-bg;
		.container_item {
			h3 {
				line-height: 1;
				border-left: 4px solid $dark-green;
				text-indent: 2.5rem;
        font-weight: 600;
				@include sc(1.8rem, $dark);
			}
			div {
        padding: 3rem 3rem 3rem 2.5rem;
				p {
          line-height: 1.8;
          @include sc(1.4rem, $dark);
				}
				&.contact {
					section {
						display: inline-block;
						margin-left: 3rem;
						span {
              line-height: 1.8;
              margin-left: 1rem;
							@include sc(1.4rem, $dark);
						}
					}
				}
			}
		}
	}
}
</style>


