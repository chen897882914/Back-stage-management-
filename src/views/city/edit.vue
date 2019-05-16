<template>
  <div>
    <Form :form="form"/>
    <el-form ref="form" label-width="80px" size="mini">
      <el-form-item size="large">
        <el-button :loading = "loading" type="primary" @click="addCity" >提交</el-button>
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
  created() {
    this.getList();
  },
  methods: {
    // 获取城市详情
    async getList() {
      // 获取cityid
      const cityId = this.$route.params.cityId;
      const url = '/city/findById';
      const data = {
        params: {
          cityId
        }
      };
      const res = await this.$axios.get(url, data);
      this.form = res.city;
    },

    async addCity() {
      const url = '/city/edit';
      this.loading = true;
      const data = this.form;
      try {
        const res = await this.$axios.post(url, data);
        this.$message({
          message: '城市信息编辑成功',
          type: 'success'
        });
        this.loading = false;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>
