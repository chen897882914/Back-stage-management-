<template>
  <div>
    <Form :form="form"/>
    <el-form ref="form" label-width="80px" size="mini">
      <el-form-item size="large">
        <el-button :loading = "loading" type="primary" @click="addCity">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
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
  methods: {
    async addCity() {
      console.log('this.form', this.form);
      const url = '/city/add';
      this.loading = true;
      const data = this.form;
      const res = await this.$axios.post(url, data);
      this.$message({
        message: '城市添加成功',
        type: 'success'
      });
      this.loading = false;
      console.log(res);
    }
  }
};
</script>

<style>
</style>
