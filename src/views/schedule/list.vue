<template>
  <el-card class="box-card">
    <div slot="header">
      <span>影片列表</span>
    </div>
    <el-table :data="list" stripe style="width:100%;" v-loading="loading">
      <el-table-column prop="filmLanguage" label="电影语言"></el-table-column>
      <el-table-column prop="hallName" label="影厅"></el-table-column>
      <el-table-column prop="showAt" label="开始时间"></el-table-column>
      <el-table-column prop="endAt" label="结束时间"></el-table-column>
      <el-table-column fixed="right" align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">
            <router-link :to="`/schedule/detail?scheduleId=${scope.row.scheduleId}`">详情</router-link>
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
      list: []
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
        this.list = res.data.schedules;
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
        const res = await model.del(item.scheduleId);
        // 查找下标
        let index = this.list.findIndex(value => {
          return value.scheduleId === item.scheduleId;
        });
        this.list.splice(index, 1);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

