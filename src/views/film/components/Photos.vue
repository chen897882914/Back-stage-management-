<template>
  <div>
    <el-form-item label="剧照" label-width="120px">
      <el-input v-if="!formData.photos.length">
        <el-button @click="plus" slot="append" icon="el-icon-plus"></el-button>
      </el-input>
      <el-input
        :class="{'mt-5': index > 0}"
        v-for="(item, index) in formData.photos"
        :key="index"
        :value="item"
      >
        <el-button
          @click="plus"
          v-if="index==formData.photos.length-1"
          slot="append"
          icon="el-icon-plus"
        ></el-button>
        <el-button @click="close(index)" v-else slot="append" icon="el-icon-close"></el-button>
      </el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: ["formData"],
  created() {},
  methods: {
    // 添加url
    plus(data) {
      this.formData.photos.push("");
    },
    // 删除url
    close(index) {
      this.formData.photos.splice(index, 1);
    }
  }
};
</script>

<style>
.mt-5 {
  margin-top: 5px;
}
</style>
