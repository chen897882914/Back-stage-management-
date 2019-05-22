<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>添加影院</span>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <!-- 表单 -->
      <Form :form="form"/>
      <!-- 选择地区 -->
      <Choice @getInFo="getInFo" @getAreaFo="getAreaFo"/>
      <!-- 按钮 -->
      <el-form-item class="btn">
        <el-button :loading="loading" type="primary" @click="onSubmit">添加影院</el-button>
        <router-link to="/cinema/list">
          <el-button>
            取消
          </el-button>
        </router-link>
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
  methods: {
    async onSubmit() {
      const data = this.form;
      const url = '/cinema/add';
      this.loading = true;
      try {
        // eslint-disable-next-line no-unused-vars
        const res = await this.$axios.post(url, data);
        this.loading = false;
        this.$message({
          message: '城市添加成功',
          type: 'success'
        });
        // console.log(res);
      } catch (error) {
        this.loading = false;
      }
    },
    getInFo(city) {
      this.form = {
        ...this.form,
        cityId: city.cityId,
        cityName: city.cityName[0].name
      };
    },
    getAreaFo(area) {
      this.form = {
        ...this.form,
        areaId: area.areaId,
        areaName: area.areaName[0].name
      };
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
