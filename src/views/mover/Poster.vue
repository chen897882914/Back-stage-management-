<template>
  <div>
    <div>
      <p>海报</p>
      <img v-show="form.poster" :src="form.poster" class="img">
    </div>
    <el-upload
      :on-success="onSuccess"
      :file-list="fileList"
      class="upload-demo"
      action="http://132.232.87.95:3000/admin/film/upload"
      list-type="picture"
    >
      <el-button v-if="!form.poster" size="small" type="primary">点击上传</el-button>
      <el-button v-else size="small" type="primary">编辑头像</el-button>
    </el-upload>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['form'],
  data() {
    return {
      show: true,
      fileList: []
    };
  },
  methods: {
    onSuccess(item) {
      this.form.poster = item.image.url;
      this.fileList = [];
      console.log('item', item);
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img {
  width: 70px;
  height: 70px;
}
</style>
