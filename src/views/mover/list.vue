<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>电影列表</span>
      </div>
      <el-table
        v-loading="loading"
        :data="tableData"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%"
      >
        <el-table-column label="上映时间" prop="poster" align="center" width="80">
          <template scope="scope">
            <img :src="scope.row.poster" width="70px" height="70px" alt>
          </template>
        </el-table-column>
        <el-table-column prop="name" align="center" width="100" label="电影名字"/>
        <el-table-column prop="category" align="center" label="剧情" width="180"/>
        <el-table-column prop="grade" align="center" label="评分"/>
        <el-table-column prop="director" align="center" label="导演名字"/>
        <el-table-column prop="language" align="center" width="180" label="语言"/>
        <el-table-column prop="nation" width="150" align="center" label="国家"/>
        <el-table-column label="操作" align="center" width="150">
          <template slot-scope="scope">
            <router-link :to="`/mover/edit/${scope.row.filmId}`">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </router-link>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      pageSize: 7,
      total: 0,
      pageNum: 1,
      loading: false
    };
  },
  created() {
    this.getList(this.pageNum, this.pageSize);
  },
  methods: {
    async getList(pageNum) {
      const url = '/film/getList';
      const data = {
        params: {
          pageNum,
          pageSize: this.pageSize
        }
      };
      this.loading = true;
      const res = await this.$axios.get(url, data);
      this.loading = false;
      console.log(res);
      this.tableData = res.films;
      this.total = res.total;
    },
    // time(row, column, cellValue, index) {
    //   const time = cellValue;
    //   const data = new Date(time);
    //   const Y = data.getFullYear();
    //   let M = data.getMonth() + 1;
    //   let D = data.getDate();
    //   const H = data.getHours();
    //   const Min = data.getMinutes();
    //   M = M < 10 ? '0' + M : M;
    //   D = D < 10 ? '0' + D : D;
    //   return `${Y}-${M}-${D}  ${H}:${Min}`;
    // },
    currentPage(pageNum) {
      this.getList(pageNum);
    }
  }
};
</script>

<style scoped>
.box-card {
  margin-bottom: 20px;
}
.page {
  display: flex;
  justify-content: center;
}
</style>
