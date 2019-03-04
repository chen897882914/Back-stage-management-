 <template>
  <el-card class="box-card">
    <div slot="header">
      <span>添加电影</span>
    </div>
    <el-form ref="form" action method="post" style="width:50%">
      <Form :form="form" :attrDesc="attrDesc"></Form>
      <el-form-item style="text-align: center;">
        <el-button type="primary" @click="submit" v-loading="loading">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

// <script type="text/javascript">
// import model from "./model";
// import Form from "./components/Form";
// export default {
//   data() {
//     return {
//       attrDesc: model.attrDesc,
//       form: model.form,
//       loading: false,
//       filmId: ""
//     };
//   },
//   components: {
//     Form
//   },
//   created() {
//     this.form.cinemaId = this.$route.params.cinemaId;
//     const filmId = this.$route.params.filmId;
//     this.filmId = filmId;
//     this.getDetail(filmId);
//   },
//   methods: {
//     async getDetail(id) {
//       try {
//         const res = await model.getDetail(id);
//         this.form = res.film; // 不生效
//         this.form.filmId = this.filmId;
//         // Object.assign({}, this.form, res.film); // 生效
//       } catch (err) {
//         console.log(err);
//       }
//     },

//     async submit() {
//       this.loading = true;
//       try {
//         const res = await model.update(this.form);
//         this.loading = false;
//       } catch (error) {
//         console.log(error);
//         this.loading = false;
//       }
//     }
//   }
// };
//
</script>

<template>
  <div>编辑</div>
</template>

<script>
// import model from "./model";
// import Form from "./components/Form";
// export default {
//   data() {
//     return {
//       attrDesc: model.attrDesc,
//       form: model.form,
//       loading: false,
//       filmId: ""
//     };
//   },
//   components: {
//     Form
//   },
//   created() {
//     this.form.cinemaId = this.$route.params.cinemaId;
//     const filmId = this.$route.params.filmId;
//     this.filmId = filmId;
//     this.getDetail(filmId);
//   },
//   methods: {
//     async getDetail(id) {
//       try {
//         const res = await model.getDetail(id);
//         this.form = res.film; // 不生效
//         this.form.filmId = this.filmId;
//         // Object.assign({}, this.form, res.film); // 生效
//       } catch (err) {
//         console.log(err);
//       }
//     },

//     async submit() {
//       this.loading = true;
//       try {
//         const res = await model.update(this.form);
//         this.loading = false;
//       } catch (error) {
//         console.log(error);
//         this.loading = false;
//       }
//     }
//   }
// };
//
</script>

<style>
</style>
