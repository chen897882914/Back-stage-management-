<template>
  <el-card class="box-card">
    <div slot="header">
      <span>影片列表</span>
    </div>
    <el-table :data="list" stripe style="width:100%;" v-loading="loading">
      <el-table-column prop="name" label="影院名称"></el-table-column>
      <el-table-column prop="address" label="影院地址"></el-table-column>
      <el-table-column prop="Distance" label="距离"></el-table-column>
      <el-table-column prop="lowPrice" label="最低价"></el-table-column>
      <el-table-column prop="gpsAddress" label="经纬度"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">
            <router-link :to="`/film/add/${scope.row.cinemaId}`">添加影片</router-link>
          </el-button>
          <el-button type="text" size="small">
            <router-link :to="`/cinema/detail?cinemaId=${scope.row.cinemaId}`">详情</router-link>
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
          name: "", // 影院名称
          address: "", // 影院地址
          Distance: "", // 距离
          lowPrice: "", // 最低价
          longitude: "", // '经度'
          latitude: "", // '纬度'
          gpsAddress: "" // '经纬度'
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
        this.list = res.data.cinemas;
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
    },

    async addFilm(item) {
      // todo
    }
  }
};
</script>

