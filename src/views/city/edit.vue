<template>
  <el-card class="box-card">
    <div slot="header">
      <span>添加城市</span>
    </div>
    <el-form ref="form" style="width:60%">
      <el-form-item label="城市Id" label-width="120px">
        <el-input v-model="cityId" placeholder/>
      </el-form-item>
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
        <el-button v-loading="loading" type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script type="text/javascript">
import $http from "@/utils/http";
export default {
  data() {
    return {
      cityId: "",
      name: "",
      pinyin: "",
      isHot: false,
      loading: false
    };
  },
  created() {
    this.cityId = this.$route.params.cityId;
    this.getCityDetail();
  },
  methods: {
    getCityDetail() {
      const url = "/city/findById";
      const data = {
        cityId: this.cityId
      };
      $http.post(url, data).then(res => {
        this.name = res.city.name;
        this.pinyin = res.city.pinyin;
        this.isHot = res.city.isHot;
        this.loading = false;
      });
    },
    submit() {
      this.loading = true;
      let url = "/city/edit";
      let data = {
        cityId: this.cityId,
        name: this.name,
        pinyin: this.pinyin,
        isHot: this.isHot
      };
      $http
        .post(url, data)
        .then(res => {
          this.loading = false;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        });
    }
  }
};
</script>
