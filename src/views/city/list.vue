<template>
  <div>
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
            @click="delable(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <city/> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 删除与cityId相对应的城市信息
    async delable(index, row) {
      const { cityId } = row;
      const data = {
        cityId
      };
      // 在数据库删除城市信息
      const url = '/city/delById';
      const res = await this.$axios.get(url, data);
      console.log(res);
      this.cityList.splice(index, 1);
    },
    // 获取数据
    async getList() {
      const url = '/city/getList';
      const res = await this.$axios.get(url);
      // console.log(res);
      this.cityList = res.cities;
    },
    // 将热门城市的true与false转换成是与否
    formatter(row, column, cellValue, index) {
      const text = cellValue ? '是' : '否';
      return text;
    }
  }
};
</script>

<style>

</style>
