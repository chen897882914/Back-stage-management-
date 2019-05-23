<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>轮播图</span>
    </div>
    <ul class="box">
      <li v-for="item in bannerList" :key="item.bannerId"> <img :src="item.url" > </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.getBannerList();
  },
  methods: {
    async getBannerList() {
      const url = '/banner/getList';
      const res = await this.$axios.get(url);
      console.log(res);
      this.bannerList = res.imgs;
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
  flex-flow: wrap row;
}
.box>li{
  margin: 0 5px 10px;
}
  img {
    width: 100px;
  }
  ul,li{
    list-style: none;
  }
</style>
