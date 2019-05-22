<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加城市</span>
      </div>
      <!-- 添加城市表单 -->
      <Form :form="form"/>
      <!-- 按钮 -->
      <el-form ref="form" label-width="80px" size="mini">
        <el-form-item size="large">
          <el-button :loading = "loading" :disabled="disabled" type="primary" @click="addCity">立即创建</el-button>
          <router-link to="/city/list">
            <el-button>
              取消
            </el-button>
          </router-link>
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
      disabled: false,
      form: {}
    };
  },
  methods: {
    async addCity() {
      const url = '/city/add';
      this.loading = true;
      this.disabled = true;
      const data = this.form;
      const res = await this.$axios.post(url, data);
      this.$message({
        message: '城市添加成功',
        type: 'success'
      });
      this.loading = false;
      this.disabled = false;
      console.log(res);
    }
  }
};
</script>

<style>
</style>
