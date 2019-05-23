<template>
  <div>
    <div>
      <p>剧照</p>
      <template>
        <el-table :data="form.photos" style="width: 100%">
          <el-table-column prop="url" label="日期">
            <template scope="scope">
              <img :src="scope.row.url" width="70px" height="70px" alt>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- <div v-for="(photos,index) in form.photos" :key="index" class="photos">
        <img :src="photos.url" class="img">
        <el-button size="mini" type="danger" @click="getOut(index)">删除</el-button>
      </div>
      </div>-->
      <el-upload
        :on-success="success"
        :file-list="fileList"
        class="upload-demo"
        action="http://132.232.87.95:3000/admin/film/upload"
        list-type="picture"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['form'],
  data() {
    return {
      fileList: [],
      loading: false
    };
  },
  methods: {
    success(file) {
      console.log('file', file);
      this.form.photos.push(file.image);
      this.fileList = [];
    },
    handleDelete(index) {
      this.$confirm('确定删除此图片信息吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.delAcyors(index);
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    delAcyors(index) {
      this.$message({
        message: '删除成功',
        type: 'success'
      });
      this.form.photos.splice(index, 1);
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
.photos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.table {
  display: flex;
  justify-content: space-between;
}
</style>

