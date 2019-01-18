<template>
  <el-card class="box-card">
    <div slot="header">
      <span>城市列表</span>
    </div>
    <el-table :data="list" stripe style="width:100%;" v-loading="loading">
      <el-table-column prop="date" label="日期" ></el-table-column>
      <el-table-column prop="name" label="城市" ></el-table-column>
        <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { getList,del } from '@/api/city'
export default {
  data() {
    return {
      loading: false,
      list: []
    }
  },
  created() {
    this.getCityList();
  },

  methods: {
      async getCityList() {
        this.loading = true;
        try {
          const res = await getList();
          this.list = res.list;
          this.loading = false;
        } catch (error) {
          console.log(error);
          this.loading = false;
        }
      },

      async del(item) {
        try {
          const res = await del(item.objectId);
          // 查找下标
          let index = this.list.findIndex((value) => {
            return value.objectId === item.objectId;
          })
          this.list.splice(index,1);
        } catch (error) {
          console.log(error);
        }
      }
    }
    
}
</script>

