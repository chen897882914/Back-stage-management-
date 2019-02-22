<template>
  <el-card class="box-card">
    <div slot="header">
      <span>添加电影</span>
    </div>
    <el-form ref="form" action method="post" style="width:80%">
      <el-form-item v-for="(value,key) in attrDesc" :label="value" label-width="120px" :key="key">
        <el-input v-model="formData[key]" :placeholder="`请输入${value}`"></el-input>
      </el-form-item>
      <!--图片上传-->
      <el-form-item label="logo图片" label-width="120px" class="rel">
        <el-input v-model="formData['logoUrl']" placeholder="请输入图片地址"></el-input>
        <el-upload
          class="uploader"
          action="http://localhost:3000/upload"
          :show-file-list="false"
          :on-success="handleUpload"
        >
          <i class="el-icon-upload f24 avatar-uploader-icon vam"></i>
          <span class="vam">上传图片</span>
          <img class="preview vam" :src="formData['logoUrl']">
        </el-upload>
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
      formData: model.formData,
      loading: false
    };
  },
  created() {
    console.log(model);
    this.formData.districtId = this.$route.params.districtId;
  },
  methods: {
    handleUpload(res) {
      console.log(this);
      this.formData.logoUrl = "http://localhost:3000" + res.imgUrl;
    },

    submit() {
      this.loading = true;
      try {
        model.add(this.formData).then(res => {
          //						 this.$router.push('/film/list');
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

<style>
.vam {
  vertical-align: middle;
}
.uploader {
  margin-top: 10px;
}
.preview {
  width: 50px;
  margin-left: 20px;
}
</style>