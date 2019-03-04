<template>
  <el-card class="box-card">
    <div slot="header">
      <span>影片列表</span>
    </div>
    <el-table :data="list" stripe style="width:100%;" v-loading="loading">
      <el-table-column prop="name" label="城市名称"></el-table-column>
      <el-table-column prop="pinyin" label="城市拼音"></el-table-column>
      <el-table-column :formatter="formatter" prop="isHot" label="热门城市"></el-table-column>
      <el-table-column fixed="right" align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">
            <router-link :to="`/district/add/${scope.row.cityId}/cityName/${scope.row.name}`">添加区域</router-link>
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
      try {
        const res = await model.getList();
        this.list = res.data.cities;
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },

    formatter(row, column, cellValue, index) {
      console.log(row);
      return row.isHot == "true" ? "是" : "否";
    },

    async del(item) {
      try {
        const res = await model.del(item.cityId);
        // 查找下标
        let index = this.list.findIndex(value => {
          return value.cityId === item.cityId;
        });
        this.list.splice(index, 1);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

