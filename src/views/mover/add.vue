<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加电影</span>
      </div>
      <Form :form="form"/>
      <Photos :form="form"/>
      <Poster :form="form"/>
      <Actors :form="form"/>
      <el-form ref="form" :model="form" label-width="80px" class="btn">
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="onSubmit">立即添加</el-button>
          <el-button @click="geyOut">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Form from './Form';
import Photos from './Photos';
import Poster from './Poster';
import Actors from './Actors';
export default {
  components: {
    Form,
    Photos,
    Poster,
    Actors
  },
  data() {
    return {
      loading: false,
      form: {
        category: '',
        director: '',
        premiereAt: '',
        name: '',
        photos: [],
        actors: [],
        poster: '',
        grade: '',
        language: '',
        runtime: '',
        filmType: '2D',
        isPresale: false,
        timeType: '',
        isSale: false,
        synopsis: '',
        nation: ''
      }
    };
  },
  created() {
    this.getaaa();
  },
  methods: {
    getaaa() {
      console.log('form', this.form);
    },
    async onSubmit() {
      const url = '/film/add';
      const data = this.form;
      this.loading = true;
      try {
        const res = await this.$axios.post(url, data);
        this.loading = false;
        console.log(res);
        console.log('form', this.form);
        this.$message({
          message: '添加成功',
          type: 'success'
        });
      } catch (error) {
        this.loading = false;
        this.$message({
          message: '添加失败',
          type: 'info'
        });
      }
    },
    geyOut() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
