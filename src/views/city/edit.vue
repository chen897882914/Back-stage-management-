<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>编辑城市</span>
      </div>
      <!-- 编辑城市表单 -->
      <Form :form="form"/>
      <el-form ref="form" label-width="80px" size="mini">
        <el-form-item size="large">
          <el-button :loading="loading" type="primary" @click="addCity">确认编辑</el-button>
          <el-button>
            <router-link to="/city/list">取消</router-link>
          </el-button>
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
    this.getList();
  },
  methods: {
    // 获取城市详情
    async getList() {
      // 获取cityid
      const cityId = this.$route.params.cityId;
      const url = '/city/findById';
      // get请求结构
      const data = {
        params: {
          cityId
        }
      };
      const res = await this.$axios.get(url, data);
      this.form = res.city;
    },
    // 提交编辑城市
    async addCity() {
      // 获取数据
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
        this.$router.go(-1);
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
