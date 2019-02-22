<template>
  <el-card class="box-card">
    <div slot="header">
      <span>影片列表</span>
    </div>
    <el-table :data="list" stripe style="width:100%;" v-loading="loading">
      <el-table-column prop :label="attrDesc['poster']">
        <template slot-scope="scope">
          <img :src="scope.row.poster" style="width: 70px;height: 70px;">
        </template>
      </el-table-column>
      <el-table-column prop="name" label="城市"></el-table-column>
      <el-table-column prop="grade" label="评分"></el-table-column>
      <el-table-column prop="director" :label="attrDesc['director']"></el-table-column>
      <el-table-column prop="nation" :label="attrDesc['nation']"></el-table-column>
      <el-table-column prop="runtime" :label="attrDesc['runtime']"></el-table-column>
      <el-table-column prop="isPresale" :label="attrDesc['isPresale']"></el-table-column>
      <el-table-column prop="isSale" :label="attrDesc['isSale']"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">
            <router-link :to="`/schedule/add/${scope.row.filmId}`">添加计划</router-link>
          </el-button>
          <el-button type="text" size="small">
            <router-link :to="`/film/detail?filmId=${scope.row.filmId}`">详情</router-link>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import model from "./model";
export default {
  data() {
    return {
      loading: false,
      attrDesc: model.attrDesc,
      list: [
        {
          name: "", // 电影名字
          grade: "", // 评分
          director: "", // 主演
          nation: "", // 国家
          runtime: "", // 影片时长
          isPresale: "", // 预售
          isSale: "", // 在售
          poster: "" // 缩略图
        }
      ]
    };
  },
  created() {
    this.getList();
  },

  methods: {
    async getList() {
      this.loading = true;
      try {
        const res = await model.getList();
        this.list = res.data.films;
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },

    async del(item) {
      try {
        const res = await model.del(item.objectId);
        // 查找下标
        let index = this.list.findIndex(value => {
          return value.objectId === item.objectId;
        });
        this.list.splice(index, 1);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

