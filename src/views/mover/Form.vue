<template>
  <div class="box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="类别">
        <el-input v-model="form.category" class="input"/>
      </el-form-item>
      <el-form-item label="导演名字">
        <el-input v-model="form.director" class="input"/>
      </el-form-item>

      <el-form-item label="电影名字">
        <el-input v-model="form.name" class="input"/>
      </el-form-item>

      <el-form-item label="评分">
        <el-input v-model="form.grade" class="input"/>
      </el-form-item>
      <el-form-item label="语言">
        <el-input v-model="form.language" class="input"/>
      </el-form-item>
      <el-form-item label="播放时长">
        <el-input v-model="form.runtime" class="input"/>
      </el-form-item>
      <el-form-item label="电影类型">
        <el-radio v-model="form.filmType" label="2D">2D</el-radio>
        <el-radio v-model="form.filmType" label="3D">3D</el-radio>
      </el-form-item>
      <el-form-item label="是否预售">
        <el-switch v-model="form.isPresale" :active-text="form.isPresale?'是':'否'"/>
      </el-form-item>
      <!-- <el-form-item label="时间类型">
        <el-input v-model="form.timeType" class="input"/>
      </el-form-item>-->
      <el-form-item label="上映时间">
        <div class="block">
          <el-date-picker v-model="form.premiereAt" type="datetime" placeholder="选择日期时间"/>
        </div>
      </el-form-item>
      <el-form-item label="是否特价">
        <el-switch v-model="form.isSale" :active-text="form.isSale?'是':'否'"/>
      </el-form-item>
      <el-form-item label="国家">
        <el-input v-model="form.nation" class="input"/>
      </el-form-item>
      <el-form-item label="介绍">
        <el-input v-model="form.desc" type="textarea" class="input"/>
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
      // form: {}
    };
  }
};
</script>

<style scoped>
</style>
