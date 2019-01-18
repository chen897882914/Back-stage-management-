<template>
	<el-card class="box-card">
		<div slot="header">
			<span>添加城市</span>
		</div>
		<el-form ref="form" action="" method="post" style="width:50%">
			<el-form-item label="" label-width="">
				<el-input v-model="city" placeholder="请输入城市名称"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submit">添加</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script type="text/javascript">
  import { add } from '@/api/city'
	export default {
		data() {
			return {
				city: '深圳'
			}
		},
		methods: {
			submit(){
				this.listLoading = true;
				try {
					 add(this.city).then(res=> {
					console.log(res);
					this.listLoading = false
				});
				} catch (error) {
					console.log(error);
				}
       
			}
		}
	}
</script>