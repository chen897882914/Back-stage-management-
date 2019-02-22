<template>
  <el-card class="box-card">
    <div slot="header">
      <span>影片列表</span>
    </div>
    <el-table :data="list" stripe style="width:100%;" v-loading="loading">
      <el-table-column prop="name" label="区域名称"></el-table-column>
      <el-table-column prop="city.name" label="城市名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">
            <router-link :to="`/cinema/add/${scope.row.districtId}`">添加影院</router-link>
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
          name: "北区",
          city: {
            name: ""
          },
          pinyin: "beijing"
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
        this.list = res.data.districts;
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },

    formatter(row, column, cellValue, index) {
      console.log(row);
      return row.isHot == 1 ? "是" : "否";
    },

    async del(item) {
      try {
        const res = await model.del(item.districtId);
        // 查找下标
        let index = this.list.findIndex(value => {
          return value.districtId === item.districtId;
        });
        this.list.splice(index, 1);
      } catch (error) {
        console.log(error);
      }
    },
    async addCinema(item) {
      // todo
    }
  }
};
</script>

