<template>
  <div>
    <el-form ref="form" label-width="80px" size="mini">
      <el-form-item v-if="form.cityId" label="城市名称">
        <el-input :value="form.cityId" placeholder="输入城市名称" disabled class="input"/>
      </el-form-item>

      <el-form-item label="城市名称">
        <el-input v-model="form.name" placeholder="输入城市名称" class="input"/>
      </el-form-item>

      <el-form-item label="城市拼音">
        <el-input v-model="form.pinyin" placeholder="输入城市拼音" class="input"/>
      </el-form-item>

      <el-form-item label="热门城市">
        <el-switch
          v-model="form.isHot"
          :active-text="form.isHot?'是':'否'"
          class="switch"/>
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
