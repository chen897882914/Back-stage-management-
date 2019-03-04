<template>
  <el-card class="box-card">
    <div slot="header">
      <span>添加电影</span>
    </div>
    <el-form ref="formData" action method="post" style="width:50%">
      <Form :formData="formData" @formChange="formChange"></Form>
      <el-form-item style="text-align: center;">
        <el-button type="primary" @click="submit" v-loading="loading">添加</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script type="text/javascript">
import Form from "./components/Form";
import model from "./model";
export default {
  data() {
    return {
      attrDesc: model.attrDesc,
      loading: false
    };
  },
  components: {
    Form
  },
  created() {
    // console.log(this.formData);
  },
  computed: {
    formData() {
      return this.$store.state.film;
    }
  },

  methods: {
    submit() {
      this.loading = true;
      try {
        model.add(this.formData).then(res => {
          // this.$router.push('/film/list');
          this.loading = false;
        });
      } catch (error) {
        this.loading = false;
      }
    },

    // 子组件修改了表单
    formChange(data) {
      this.form = {
        ...this.form,
        cityName: data.name,
        cityId: data.cityId,
        districtId: data.districtId
      };
    }
  }
};
</script>