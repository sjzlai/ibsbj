<template>
  <div id="lung_cascader">
    <div class="hidden-sm-and-down pro_link">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item, index) in tabCart" :key="index" :to="{ path: item.to }">{{item.text}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="pro_link_small hidden-md-and-up hidden-xs-only">
      <el-cascader
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
    </div>
    <div class="container_tab hidden-sm-and-up" v-if="editableTabs.length">
      <el-tabs v-model="editableTabsValue" @tab-click="handleTab" type="card" @edit="handleTabsEdit">
        <el-tab-pane
          :key="item.name"
          v-for="(item, index) in editableTabs"
          :label="item.title"
          :name="item.name">
          {{item.content}}
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { GoodsClassNameList } from '../getData';
export default {
	name: 'lung-breadcrumb',
	data() {
		return {
			selectedOptions: [],
			options: [],
			editableTabsValue: '',
			editableTabs: [],
			tabIndex: 2,
			tabCart: [
				{to: '', text: ''}
			],
			pathData: {
				about: '关于我们',
				introduce: '公司介绍',
				job: '人才招聘',
				dynamic: '公司动态',
				product: '产品中心'
			},
			search: []
		};
	},
	watch: {
		async $route(to, from) {
			await this.includesPath(to.path);
			await this.tabLink(to.path);
		}
	},
	async created() {
		await this.includesPath(this.$route.path);
		await this.tabLink(this.$route.path);
	},
	methods: {
		handleTab(targetName, action) {
			let path = targetName.label;
			if (path == '公司介绍') {
				this.$router.push('/about/introduce');
			} else if (path == '人才招聘') {
				this.$router.push('/about/job');
			} else if (path == '公司动态') {
				this.$router.push('/about/dynamic');
			} else {
				let id;
				this.editableTabs.forEach(item => {
					if (path == item.title) {
						id = item.name;
					}
				})
				this.$router.push(`/product/${id}`);
			}
		},
		tabLink(path) {
			let tabCartArr = [];
			let pathLink = '';
			let pathArr = path.split('/');
			pathArr.forEach(item => {
				if (item.length) {
					let name;
					pathLink = pathLink + '/' + item;
						if (!isNaN(parseInt(item))) {
						this.search.forEach(value => {
							if (value.id == item) {
								name = value.name;
							}
						})
						tabCartArr.push({to: pathLink, text: this.pathData[name]});
					} else {
						tabCartArr.push({to: pathLink, text: this.pathData[item]});
					}
				}
			})
			this.tabCart = tabCartArr;
		},
		async includesPath(path) {
			if (path.includes('about')) {
				this.options = [
					{
						label: '关于我们',
						value: 'about',
						children: [
							{
								label: '公司介绍',
								value: 'introduce'
							},
							{
								label: '人才招聘',
								value: 'job'
							},
							{
								label: '公司动态',
								value: 'dynamic'
							}
						]
					}
				];
				this.editableTabs = [
							{
								title: '公司介绍',
								name: 'introduce'
							},
							{
								title: '人才招聘',
								name: 'job'
							},
							{
								title: '公司动态',
								name: 'dynamic'
							}
						];
			} else if (path.includes('product')) {
				let res = await GoodsClassNameList();
				res.data.class.forEach((item, index) => {
					this.options.push({label: item.gc_title, value: item.gc_title, children: []});
					item.goodsName.forEach(value => {
						this.options[index].children.push({label: value.g_name, value: value.g_name});
						this.pathData[value.g_name] = value.g_name;
						this.search.push({id: value.g_id, name: value.g_name});
						let number = new Number(value.g_id);
						this.editableTabs.push({title: value.g_name, name: number.toString()});
					})
				});
				this.options.forEach((key, i) => {
					if (key.children.length) {
						this.options[i].disabled = false;
					} else {
						this.options[i].disabled = true;
					}
				})
			}
		},
		handleChange(value) {
			if (value.includes('about')) {
				this.$router.push(`/${value[0]}/${value[1]}`);
			} else {
				let id;
				this.search.forEach(item => {
					if (item.name == value[1]) {
						id = item.id;
					}
				})
				this.$router.push(`/product/${id}`);
				this.tabLink(this.$route.path);
			}
		},
		handleTabsEdit(targetName, action) {
			if (action === 'add') {
				let newTabName = ++this.tabIndex + '';
				this.editableTabs.push({
					title: 'New Tab',
					name: newTabName,
					content: 'New Tab content',
				});
				this.editableTabsValue = newTabName;
			}
			if (action === 'remove') {
				let tabs = this.editableTabs;
				let activeName = this.editableTabsValue;
				if (activeName === targetName) {
					tabs.forEach((tab, index) => {
						if (tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}

				this.editableTabsValue = activeName;
				this.editableTabs = tabs.filter(tab => tab.name !== targetName);
			}
		},
	},
};
</script>
<style lang="scss" scoped>
#lung_cascader {
	.container_tab {
		background-color: #2c3e50;
	}
}
</style>


