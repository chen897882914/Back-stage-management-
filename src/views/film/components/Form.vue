<style scoped lang="scss">
.el-cascader {
  width: 100%;
}
</style>

<template>
  <div>
    <el-form-item label="电影名称" label-width="120px">
      <el-input v-model="formData.name"></el-input>
    </el-form-item>
    <el-form-item label="海报" label-width="120px">
      <el-input v-model="formData.poster"></el-input>
    </el-form-item>
    <!-- 地区信息 -->
    <AreaInfo :formData="formData" @handleChange="handleChange"></AreaInfo>
    <el-form-item label="导演" label-width="120px">
      <el-input v-model="formData.director"></el-input>
    </el-form-item>
    <el-form-item label="分类" label-width="120px">
      <el-input v-model="formData.category" placeholder="请输入分类,多个类别用 | 隔开"></el-input>
    </el-form-item>
    <el-form-item label="简介" label-width="120px">
      <el-input :rows="5" type="textarea" v-model="formData.synopsis"></el-input>
    </el-form-item>
    <el-form-item label="产地" label-width="120px">
      <el-input v-model="formData.nation"></el-input>
    </el-form-item>
    <el-form-item label="语言" label-width="120px">
      <el-input v-model="formData.language"></el-input>
    </el-form-item>
    <el-form-item label="时长" label-width="120px">
      <el-input v-model="formData.runtime"></el-input>
    </el-form-item>
    <!-- 剧照 -->
    <Photos :formData="formData"></Photos>
    <el-form-item label="评分" label-width="120px">
      <el-input v-model="formData.grade"></el-input>
    </el-form-item>
    <el-form-item label="类型" label-width="120px">
      <el-radio-group v-model="formData.type">
        <el-radio label="2D"></el-radio>
        <el-radio label="3D"></el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="首映式" label-width="120px">
      <div class="block">
        <el-date-picker
          v-model="formData.premiereAt"
          type="datetime"
          placeholder="选择日期时间"
          align="right"
        ></el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label-width="120px" label="预售">
      <el-switch v-model="isPresale" :active-text="isPresale?'预售中':'未开卖'"></el-switch>
    </el-form-item>
    <!-- <el-form-item label-width="120px" label="售卖中">
        <el-switch v-model="formData.isSale" :active-text="formData.isSale?'热卖中':'售罄'"></el-switch>
    </el-form-item>-->
  </div>
</template>

<script>
import AreaInfo from "./AreaInfo";
import Photos from "./Photos";
export default {
  created() {},
  computed: {
    formData() {
      return this.$store.state.film;
    },
    isPresale: {
      get() {
        return this.formData.isPresale === "yes";
      },
      set(flag) {
        this.formData.isPresale = flag ? "yes" : "no";
      }
    }
  },
  data() {
    return {
      // 图片
      selectedOptions: []
    };
  },
  components: {
    AreaInfo,
    Photos
  },
  methods: {
    handleChange(data) {
      this.formData.cityId = data[0];
      this.$emit("formChange", data);
    }
  }
};
</script>
