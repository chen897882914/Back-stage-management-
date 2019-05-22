<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>编辑地区</span>
    </div>
    <Form :form="form"/>
    <el-form ref="form" label-width="80px" size="mini">
      <el-form-item size="large">
        <el-button :loading = "loading" type="primary" @click="addCity">提交</el-button>
        <el-button @click="geyOut">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import Form from './Form';
export default {
  components: {
    Form
  },
  data() {
    return {
      form: {},
      loading: false
    };
  },
  created() {
    this.getAreaDetail();
    // this.form = {
    //   ...this.form,
    //   cityId: this.$route.params.cityId,
    //   cityName: this.$route.params.cityName
    // };
  },
  methods: {
    async getAreaDetail() {
      const url = '/area/getDetail';
      const areaId = this.$route.params.areaId;
      const data = {
        params: {
          areaId
        }
      };
      const res = await this.$axios.get(url, data);
      this.form = res.area;
      console.log(res);
    },

    async addCity() {
      const url = '/area/edit';
      const data = {
        ...this.form
      };
      this.loading = true;
      const res = await this.$axios.post(url, data);
      this.loading = false;
      this.$message({
        message: '编辑成功',
        type: 'success'
      });
      console.log(res);
    },
    geyOut() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>

</style>
