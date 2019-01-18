<template>
  <el-card class="box-card">
    <div slot="header">
      <span>城市列表</span>
    </div>
    <el-table :data="list" stripe style="width:100%;">
      <el-table-column prop="date" label="日期" ></el-table-column>
      <el-table-column prop="name" label="城市" ></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { getList } from '@/api/city'
export default {
  data() {
    return {
      list: [
        {
          date: '2018-1-19',
          name: '深圳'
        },
        {
          date: '2018-1-19',
          name: '上海'
        }
      ]
    }
  },
  created() {
    this.getCityList();
  },

  methods: {
      async getCityList() {
        try {
          const res = await getList();
          this.list = res.list;
          // debugger;
          console.log(res.list);
        } catch (error) {
          console.log(error);
        }
      }
    }
}
</script>

