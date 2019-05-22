<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>编辑影院</span>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <!-- 表单 -->
      <Form :form="form"/>
      <!-- 选择地区 -->
      <Choice :form="form"/>
      <!-- 按钮 -->
      <el-form-item class="btn">
        <el-button :loading="loading" type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="toTop">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import Form from './Form';
import Choice from './Choice';
export default {
  components: {
    Form,
    Choice
  },
  data() {
    return {
      loading: false,
      form: {}
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    // 请求数据
    async getDetail() {
      const url = '/cinema/getDetail';
      const data = {
        cinemaId: this.$route.params.cinemaId
      };
      const res = await this.$axios.post(url, data);
      console.log(res);
      this.form = res.cinema;
    },

    async onSubmit() {
      const url = '/cinema/edit';
      this.loading = true;
      const data = {
        params: {
          ...this.form
        }
      };
      try {
        const res = await this.$axios.get(url, data);
        this.loading = false;
        console.log('edit', res);
        this.$message({
          message: '城市编辑成功',
          type: 'success'
        });
      } catch (error) {
        this.loading = false;
      }
    },
    toTop() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
  .btn {
    display: flex;
    justify-content: center;
  }
</style>
