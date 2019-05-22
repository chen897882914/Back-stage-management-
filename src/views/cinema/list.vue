<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>影院列表</span>
      </div>
      <el-table
        v-loading="tableLoading"
        :data="tableData"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%">
        <el-table-column
          prop="name"
          align="center"
          label="影院名称"
          width="180"/>
        <el-table-column
          prop="address"
          align="center"
          label="影院地址"
          width="180"/>
        <el-table-column
          prop="lowPrice"
          align="center"
          label="最低价"/>
        <el-table-column
          prop="cityId"
          align="center"
          width="210"
          label="城市编码"/>
        <el-table-column
          prop="areaId"
          align="center"
          label="区域编码"
          width="210"/>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <router-link :to="`/cinema/edit/${scope.row.cinemaId}`">
              <el-button
                size="mini">
                编辑
              </el-button>
            </router-link>
            <el-button
              size="mini"
              type="danger">
              删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      tableLoading: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const url = '/cinema/getList';
      this.tableLoading = true;
      const res = await this.$axios.get(url);
      this.tableLoading = false;
      this.tableData = res.cinemas;
      console.log(res);
    },
    currentPage(pageNum) {
      this.getList(pageNum);
    }
  }
};
</script>
<style scoped>
.clearfix>span{
  margin-left: 55px;
}
.box-card {
  margin-bottom: 20px;
}

.page {
  display: flex;
  justify-content: center;
}
</style>

