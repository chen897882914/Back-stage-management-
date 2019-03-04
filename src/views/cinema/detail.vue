<template>
	<el-card class="box-card">
		<div slot="header">
			<span>影片详情</span>
		</div>
		<ul>
			<li v-for="(value,key) in attrDesc" :key="key" style="padding:10px 0;line-height: 1.5;">
				<strong>{{value}}</strong>: 
				<span>{{cinema[key]}}</span>
			</li>
		</ul>
	</el-card>
</template>

<script type="text/javascript">
  import model from './model'
	export default {
		data() {
			return {
				attrDesc: model.attrDesc,
                cinema: model.form,
				loading: false,
			}
		},
		created() {
			this.getDetail(this.$route.query.cinemaId);
		},
		
		methods: {
			async getDetail(id) {
				try {
					const res = await model.getDetail(id);
					this.cinema = res.data.cinema;
						
				} catch(err) {
					console.log(err);
				}
			}
		}
	}
</script>