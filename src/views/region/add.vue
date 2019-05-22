<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加地区</span>
      </div>
      <!-- 添加城市表单 -->
      <Form :form="form"/>
      <el-form ref="form" label-width="80px" size="mini">
        <el-form-item size="large">
          <el-button :loading = "loading" type="primary" @click="addCity">立即创建</el-button>
          <el-button @click="geyOut">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Form from './Form';
export default {
  components: {
    Form
  },
  data() {
    return {
      loading: false,
      form: {}
    };
  },
  created() {
    this.form = {
      ...this.form,
      cityId: this.$route.params.cityId,
      cityName: this.$route.params.cityName
    };
  },
  methods: {
    async addCity() {
      const data = this.form;
      const url = '/area/add';
      this.loading = true;
      try {
        const res = await this.$axios.post(url, data);
        this.loading = false;
        console.log(res);
        this.$message({
          message: '添加成功',
          type: 'success'
        });
      } catch (error) {
        this.loading = false;
      }
    },
    geyOut() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
