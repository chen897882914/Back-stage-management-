<template>
  <div>
    <div style="width: 100%">
      <p>演职人员</p>
      <template>
        <el-table :data="form.actors" style="width: 100%">
          <el-table-column label="演员头像" prop="poster" align="center">
            <template scope="scope">
              <img :src="scope.row.avatarAddress" width="70px" height="70px" alt>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="演员名字"/>
          <el-table-column prop="role" label="演员职务"/>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

      <el-form :inline="true" class="demo-form-inline inline">
        <el-form-item label="演员名字">
          <el-input v-model="name" placeholder="演员名字"/>
        </el-form-item>
        <el-form-item label="演员职务">
          <el-input v-model="role" placeholder="演员职务"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="outMit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-upload
      :on-success="onSuccess"
      :file-list="fileList"
      class="upload-demo"
      action="http://132.232.87.95:3000/admin/film/upload"
      list-type="picture"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['form'],
  data() {
    return {
      name: '',
      url: '',
      role: '',
      fileList: []
    };
  },
  methods: {
    onSuccess(item) {
      this.url = item.image.url;
      this.fileList = [];
      // console.log('form', this.form);
    },
    outMit() {
      const data = {
        name: this.name,
        avatarAddress: this.url,
        role: this.role
      };
      this.form.actors.push(data);
      console.log('form', this.form);
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
      this.form.actors.splice(index, 1);
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
.inline {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
