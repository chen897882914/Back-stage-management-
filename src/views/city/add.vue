<template>
  <el-card class="box-card">
    <div slot="header">
      <span>添加城市</span>
    </div>
    <el-form ref="form" action method="post" style="width:80%">
      <el-form-item v-for="(value,key) in attrDesc" :label="value" label-width="120px" :key="key">
        <el-input v-model="form[key]" :placeholder="`请输入${value}`"></el-input>
      </el-form-item>

      <el-form-item label-width="120px" label="热门城市">
        <el-switch v-model="form.isHot" :active-text="form.isHot?'是':'否'"></el-switch>
      </el-form-item>
      <el-form-item style="text-align: center;">
        <el-button type="primary" @click="submit" v-loading="loading">添加</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script type="text/javascript">
import model from "./model";
export default {
  data() {
    return {
      attrDesc: model.attrDesc,
      form: model.form,
      loading: false
    };
  },
  created() {
    console.log(model);
  },
  methods: {
    submit() {
      this.loading = true;
      try {
        model.add(this.form).then(res => {
          // this.$router.push('/city/list');
          this.loading = false;
        });
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    }
  }
};
</script>