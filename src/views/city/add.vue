<template>
  <el-card class="box-card">
    <div slot="header">
      <span>添加城市</span>
    </div>
    <el-form ref="form" style="width:60%">
      <el-form-item label="城市名称" label-width="120px">
        <el-input v-model="name" placeholder="请输入城市名称"/>
      </el-form-item>
      <el-form-item label="城市拼音" label-width="120px">
        <el-input v-model="pinyin" placeholder="请输入城市拼音"/>
      </el-form-item>

      <el-form-item label-width="120px" label="热门城市">
        <el-switch v-model="isHot" :active-text="isHot?'是':'否'"/>
      </el-form-item>
      <el-form-item style="text-align: center;">
        <el-button v-loading="loading" type="primary" @click="submit">添加</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script type="text/javascript">
import $http from "@/utils/http";
export default {
  data() {
    return {
      name: "深圳",
      pinyin: "shenzhen",
      isHot: false,
      loading: false
    };
  },
  created() {},
  methods: {
    submit() {
      this.loading = true;
      const url = "/city/add";
      const data = {
        name: this.name,
        pinyin: this.pinyin,
        isHot: this.isHot
      };
      $http
        .post(url, data)
        .then(res => {
          debugger;
          this.$router.push("/city/list");
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
        });
    }
  }
};
</script>
