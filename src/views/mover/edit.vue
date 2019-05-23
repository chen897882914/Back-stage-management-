<template>
  <div>
    <el-card v-loading="allLoading" class="box-card">
      <div slot="header" class="clearfix">
        <span>编辑电影</span>
      </div>
      <Form :form="form"/>
      <Photos :form="form"/>
      <Poster :form="form"/>
      <Actors :form="form"/>
      <el-form ref="form" :model="form" label-width="80px" class="btn">
        <el-form-item>
          <el-button :loading="loading" type="primary" @click="onSubmit">确认编辑</el-button>
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
      allLoading: false,
      form: {}
    };
  },
  created() {
    this.getDateil();
  },
  methods: {
    async getDateil() {
      const filmId = this.$route.params.filmId;
      const data = {
        filmId
      };
      const url = '/film/getDetail';
      this.allLoading = true;
      const res = await this.$axios.post(url, data);
      this.allLoading = false;
      console.log(res);
      this.form = res.film;
    },
    async onSubmit() {
      const url = '/film/edit';
      const filmId = this.$route.params.filmId;
      const data = {
        ...this.form,
        filmId
      };
      try {
        this.loading = true;
        const res = await this.$axios.post(url, data);
        this.loading = false;
        this.$message({
          message: '城市信息编辑成功',
          type: 'success'
        });
        console.log(res);
        console.log(this.form);
      } catch (error) {
        this.loading = false;
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
