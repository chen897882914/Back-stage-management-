<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item v-if="form.cinemaId" label="影院编码" class="item">
        <el-input v-model="form.cinemaId" disabled/>
      </el-form-item>
      <el-form-item label="影院名称" class="item">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="影院地址" class="item">
        <el-input v-model="form.address"/>
      </el-form-item>
      <el-form-item label="最低价格" class="item">
        <el-input v-model="form.lowPrice"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['form'],
  data() {
    return {
    };
  }
};
</script>

<style scoped>
.item {
  margin-bottom: 10px;
}
</style>
