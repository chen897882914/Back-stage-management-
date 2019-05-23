<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>区域列表</span>
      </div>

      <template>
        <el-table
          v-loading="htmlLoading"
          :data="tableData"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          style="width: 100%"
        >
          <el-table-column prop="cityId" align="center" label="城市编码" width="210"/>
          <el-table-column prop="cityName" align="center" label="城市名字" width="180"/>
          <el-table-column prop="name" align="center" width="180" label="城市区域"/>
          <el-table-column prop="areaId" align="center" label="地区编码" width="210"/>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <router-link :to="`/region/edit/${scope.row.areaId}`">
                <el-button size="mini">编辑</el-button>
              </router-link>
              <el-button
                :loading="loading"
                size="mini"
                type="danger"
                @click="delable(scope.$index, scope.row.areaId)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-card>
    <el-pagination
      v-if="pageSize<total && pageSize === total"
      :total="total"
      :page-size="pageSize"
      background
      layout="prev, pager, next"
      class="page"
      @current-change="currentPage"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 6,
      loading: false,
      htmlLoading: false
    };
  },
  created() {
    this.getList(this.pageNum, this.pageSize);
  },
  methods: {
    async getList(pageNum) {
      const data = {
        params: {
          pageNum,
          pageSize: this.pageSize
        }
      };
      const url = '/area/getList';
      this.htmlLoading = true;
      const res = await this.$axios.get(url, data);
      this.htmlLoading = false;
      console.log(res);
      this.tableData = res.areas;
      this.total = res.total;
    },
    currentPage(pageNum) {
      this.getList(pageNum);
    },
    handleEdit() {
      alert('2222');
    },
    async delable(index, cityId) {
      // 提示弹窗
      this.$confirm('确定删除此城市信息吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 点击确定时触发
          this.delArea(index, cityId);
        })
        .catch(() => {
          // 点击取消时触发
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    async delArea(index, areaId) {
      const url = '/area/delById';
      this.loading = true;
      const data = {
        areaId
      };
      const res = await this.$axios.post(url, data);
      this.loading = false;
      this.$message({
        message: '删除成功',
        type: 'info'
      });
      this.tableData.splice(index, 1);
      console.log(res);
    }
  }
};
</script>

<style scoped>
.clearfix > span {
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
