<template>
  <el-card class="box-card">
    <div slot="header">
      <span>影片列表</span>
    </div>
    <el-table v-loading="loading" :data="list" stripe style="width:80%;">
      <el-table-column align="center" prop="name" label="城市名称"/>
      <el-table-column align="center" prop="pinyin" label="城市拼音"/>
      <el-table-column :formatter="formatter" align="center" prop="isHot" label="热门城市"/>
      <el-table-column fixed="right" align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          <el-button type="text" size="small">
            <router-link :to="`/city/edit/${scope.row.cityId}`">编辑</router-link>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import $http from "@/utils/http";
export default {
  data() {
    return {
      loading: false,
      list: [
        {
          isHot: "1",
          name: "北京",
          pinyin: "beijing"
        }
      ]
    };
  },
  created() {
    this.getCityList();
  },

  methods: {
    async getCityList() {
      this.loading = true;
      const url = "/city/getList";
      $http
        .post(url)
        .then(res => {
          this.list = res.cities;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },

    formatter(row, column, cellValue, index) {
      return row.isHot ? "是" : "否";
    },

    async del(item) {
      const url = "/city/delById";
      this.loading = true;
      const data = {
        cityId: item.cityId
      };
      $http
        .post(url, data)
        .then(res => {
          this.loading = false;
          const index = this.list.findIndex(value => {
            return value.cityId === item.cityId;
          });
          this.list.splice(index, 1);
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  }
};
</script>

