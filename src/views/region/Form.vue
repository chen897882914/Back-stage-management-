<template>
  <div>
    <el-form ref="form" label-width="80px" size="mini">

      <el-form-item label="城市编码">
        <el-input :value="form.cityId" disabled class="input"/>
      </el-form-item>

      <el-form-item v-if="form.areaId" label="地区编码" >
        <el-input v-model="form.areaId" disabled placeholder="地区编码" class="input"/>
      </el-form-item>

      <el-form-item label="城市名称">
        <el-input v-model="form.cityName" disabled placeholder="城市名称" class="input"/>
      </el-form-item>

      <el-form-item label="地区名字">
        <el-input v-model="form.name" placeholder="请输入地区名字" class="input"/>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['form']
};
</script>

<style scoped>

    .input {
        width: 250px;
    }
    .switch {
        margin-bottom: 20px;
        margin-left: 10px;
    }
</style>
