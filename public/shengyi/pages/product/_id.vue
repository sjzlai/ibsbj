
<template>
  <main>
    <el-row>
      <el-col :lg="{span: 20, offset: 2}" :sm="{span: 22, offset: 1}">
        <div class="pro_wrapper">
          <lung-breadcrumb></lung-breadcrumb>
          <div class="pro_wrap">
            <section class="title_menu hidden-sm-and-down">
              <ul>
                <li v-if="ClassNameList.length" v-for="(item, index) in ClassNameList" :key="index" class="gene_wrapper" :style="{height: !gene[index]? '': 4 * (item.goodsName.length + 1) + 'rem'}">
                  <div class="gene_top" @click="geneStart(index, item.goodsName.length)">
                    <span v-if="ClassNameList.length">{{item.gc_title}}</span>
                    <div v-if="item.goodsName.length">
                      <img :class="{gene_start:gene[index]}" src="../../static/images/title_show.png" alt="">
                    </div>
                  </div>
                  <div class="gene_bottom">
                    <span @click="LinkTo(goodsItem)" v-for="(goodsItem, index) in item.goodsName" :key="index">{{goodsItem.g_name}}</span>
                  </div>
                </li>
              </ul>
            </section>
            <product-list
              :table="true"
              :files="files"
              :trList="trList"
              :content="content">
              <div slot="bottle_big" class="img_big_show">
                <img v-if="photo.length" :src="imgResolve(photo[photoBig].gp_photo)" alt="">
              </div>
              <div slot="img_container" class="img_small_show">
                <div @click="imgLeft(-1)">
                  <img src="../../static/images/left.png" alt="">
                </div>
                <div @click="imgShow(index)" class="img_small" :style="{border: index===photoBig?'1px solid #e74c3c':'1px solid #ebebeb'}" v-for="(photoItem, index) in photo" :key="index">
                  <img :src="imgResolve(photoItem.gp_small)" alt="">
                </div>
                <div @click="imgLeft(1)">
                  <img src="../../static/images/right.png" alt="">
                </div>
              </div>
              <div slot="detail">
                <div v-html="content.contentText"></div>
              </div>
            </product-list>
          </div>
        </div>
      </el-col>
    </el-row>
  </main>
</template>
<script>
  import lungBreadcrumb from '../../components/breadcrumb.vue';
  import productList from '../../components/productList.vue';
  import { imgResolve } from '../../getData/utils';
  import {
    GoodsClassNameList,
    goodsInfo
  } from '../../getData';
  export default {
    components: {
      lungBreadcrumb,
      productList
    },
    props: [],
    data() {
      return {
        rotate: [false, false, false],
        gene: [false, false, false],
        ClassNameList: [],
        photo: [],
        photoBig: 0,
			  imgResolve,
			  content: {
				  title: '',
          text: '',
          condition: '',
				  period: '保质期：',
				  time: '',
				  contentText: '',
			  },
        trList: [{ artNo: '', spec: '', price: '' }],
        files: []
      };
    },
    async created() {
      // console.log(this.$router.params)
      let res = await goodsInfo(this.$route.params.id);
      this.InitData(res);
      let  GoodsClass = await GoodsClassNameList();
      this.ClassNameList =  GoodsClass.data.class;
      // console.log(this.ClassNameList)
    },
    methods: {
      rotateStart() {
        this.rotate = !this.rotate;
      },
      //展开列表
      geneStart(index, icon) {
        if (icon) {
          this.gene = this.gene.map((item, ind) => {
            let value = false;
            if (index == ind) {
              value = !item;
            }
            return value;
          })
        }
      },
      async LinkTo(item) {
        console.log(item)
        this.$router.push(`/product/${item.g_id}`);
      },
      InitData(res) {
        let data = [];
        this.photo = res.data.photo;
        // console.log(this.photo)
        this.content = {
          title: res.data.info[0].gc_title,
          text: res.data.info[0].g_jian,
          period: '保质期：',
          time: res.data.info[0].g_quality,
          contentText: res.data.info[0].g_content,
          condition: res.data.info[0].g_condition,
        };
        // console.log(res.data);
        res.data.num.map(item => {
          data.push({ artNo: item.n_number, spec: item.n_spec, price: item.n_price + '￥' });
        });
        this.trList = data;
        console.log(res.data.files)
        this.files = res.data.files;
      },
      imgShow(index) {
        this.photoBig = index;
      },
      imgLeft(num) {
        if (num === 1 && this.photoBig === 3) {
          this.photoBig = 0;
          return;
        }
        if (num === -1 && this.photoBig === 0) {
          this.photoBig = 3;
          return;
        }
        this.photoBig = this.photoBig + num;
      }
    },
  };

</script>
<style lang="scss" scoped>
  @import '../../css/common.scss';

  main {
    .pro_wrapper {
      width: 100%;
      margin-top: 2.5rem;
      .pro_wrap {
        width: 100%;
        @include fj(space-between);
        margin-top: 2.5rem;
        .title_menu {
          width: 24rem;
          flex-shrink: 0;
          background-color: $main-bg;
          ul {
            li {
              padding: 0 1.5rem;
              line-height: 4rem;
              background-color: #e5e7e8;
              @include sc(1.6rem, $dark);
              &.protein_wrapper {
                height: 4rem;
                padding: 0;
                overflow: hidden;
                transition: all 0.4s;
                .protein_top {
                  @include fj(space-between);
                  align-items: center;
                  padding: 0 1.5rem;
                  img {
                    display: block;
                    max-width: 100%;
                    flex-shrink: 0;
                    transition: all 0.4s;
                    transform: rotate(0deg);
                    &.protein_start {
                      transform: rotate(180deg);
                    }
                  }
                }
                .protein_bottom {
                  padding: 0 1.5rem;
                  background-color: #f2f2f2;
                  span {
                    display: block;
                    width: 100%;
                    border-top: 1px solid #f5f5f5;
                  }
                }
              }
              &.protein_bottom_show {
                height: 12rem;
              }
              &.gene_wrapper {
                height: 4rem;
                padding: 0;
                overflow: hidden;
                transition: all 0.4s;
                .gene_top {
                  @include fj(space-between);
                  align-items: center;
                  padding: 0 1.5rem;
                  img {
                    display: block;
                    max-width: 100%;
                    flex-shrink: 0;
                    transition: all 0.4s;
                    transform: rotate(0deg);
                    &.gene_start {
                      transform: rotate(180deg);
                    }
                  }
                }
                .gene_bottom {
                  padding: 0 1.5rem;
                  background-color: #f2f2f2;
                  span {
                    display: block;
                    width: 100%;
                    border-top: 1px solid #f5f5f5;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                }
              }
              &.gene_bottom_show {
                height: 2*8rem;
              }
            }
            li+li {
              margin-top: 0.5rem;
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
                th+th {
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
                td+td {
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
            }
            p+p {
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    main {
      .pro_wrapper {
        .pro_wrap {
          .title_menu {
            ul {
              li {
                &.protein_wrapper {
                  .protein_top {
                    img {
                      &.protein_start {}
                    }
                  }
                  .protein_bottom {
                    span {}
                  }
                }
                &.protein_bottom_show {}
                &.gene_wrapper {
                  .gene_top {
                    img {
                      &.gene_start {}
                    }
                  }
                  .gene_bottom {
                    span {}
                  }
                }
                &.gene_bottom_show {}
              }
              li+li {}
            }
          }
          .content_param {
            table {
              thead {
                tr {
                  th {}
                  th+th {}
                }
              }
              tbody {
                tr {
                  td {}
                  td+td {}
                  td:last-child {}
                }
                tr:nth-child(odd) {}
                tr:nth-child(even) {}
              }
            }
            .info_list {
              p {
                strong {}
              }
              p+p {}
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    main {
      .pro_wrapper {
        margin-top: 0;
        .pro_wrap {
          margin-top: 0;
          .title_menu {
            ul {
              li {
                &.protein_wrapper {
                  .protein_top {
                    img {
                      &.protein_start {}
                    }
                  }
                  .protein_bottom {
                    span {}
                  }
                }
                &.protein_bottom_show {}
                &.gene_wrapper {
                  .gene_top {
                    img {
                      &.gene_start {}
                    }
                  }
                  .gene_bottom {
                    span {}
                  }
                }
                &.gene_bottom_show {}
              }
              li+li {}
            }
          }
          .content_param {
            table {
              thead {
                tr {
                  th {}
                  th+th {}
                }
              }
              tbody {
                tr {
                  td {}
                  td+td {}
                  td:last-child {}
                }
                tr:nth-child(odd) {}
                tr:nth-child(even) {}
              }
            }
            .info_list {
              margin: 0;
              padding: 2rem;
              p {
                strong {}
              }
              p+p {}
            }
          }
        }
      }
    }
  }

</style>


