<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>城市列表</span>
      </div>
      <!-- 城市列表 -->
      <el-table
        :data="cityList"
        style="width: 100%; margin-bottom: 20px;">
        <el-table-column
          prop="name"
          label="城市名称"
          align="center"
          width="180"/>
        <el-table-column
          prop="pinyin"
          label="城市拼音"
          align="center"
          width="180"/>
        <el-table-column
          :formatter="formatter"
          prop="isHot"
          align="center"
          label="是否热门"/>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <router-link :to="`/city/edit/${scope.row.cityId}`">
              <el-button
                size="mini">
                编辑
              </el-button>
            </router-link>
            <el-button
              size="mini"
              type="danger"
              @click="delable(scope.$index, scope.row.cityId)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分页 -->
    <el-pagination
      :total="total"
      :page-size="pageSize"
      background
      layout="prev, pager, next"
      class="page"
      @current-change="currentPage"/>

  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [],
      // 当前页
      pageNum: 1,
      // 每页条数
      pageSize: 5,
      // 总条数
      total: 0
    };
  },
  created() {
    this.getList(this.pageNum, this.pageSize);
  },
  methods: {
    // 删除与cityId相对应的城市信息
    async delable(index, cityId) {
      // 提示弹窗
      this.$confirm('确定删除此城市信息吗', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 点击确定时触发
        this.delCity(index, cityId);
      }).catch(() => {
        // 点击取消时触发
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 在数据库删除城市信息
    async delCity(index, cityId) {
      const url = '/city/delById';
      const data = {
        cityId
      };
      const res = await this.$axios.post(url, data);
      console.log(res);
      this.$message({
        type: 'success',
        message: '删除成功'
      });
      // 删除与页面对应的数据库的数据
      this.cityList.splice(index, 1);
    },
    // 获取数据
    async getList(pageNum) {
      // const pageNum = this.pageNum;
      // const pageSize = this.pageSize;
      const data = {
        params: {
          pageNum,
          pageSize: this.pageSize
        }
      };
      const url = '/city/getList';
      const res = await this.$axios.get(url, data);
      console.log(res);
      this.cityList = res.cities;
      this.total = res.total;
    },
    // 将热门城市的true与false转换成是与否
    formatter(row, column, cellValue, index) {
      const text = cellValue ? '是' : '否';
      return text;
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
