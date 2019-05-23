<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>上传图片</span>
    </div>
    <el-upload
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      class="upload-demo"
      action="http://132.232.87.95:3000/admin/banner/upload"
      list-type="picture"
    >
      <el-button size="small" type="primary">上传图片</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  onClick() {
    alert('1212');
  }
};
</script>

<style>
</style>
