<template>
  <el-form-item label="区域信息" label-width="120px">
    <el-select @change="selectCity" v-model="formData.cityId" placeholder="请选择城市">
      <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-select
      @change="selectDistrict"
      v-model="formData.districtId"
      style="margin-left: 20px;"
      placeholder="请选择区域"
    >
      <el-option
        v-for="item in districts"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </el-form-item>
</template>
<script>
import request from "@/utils/request";
export default {
  props: ["formData"],
  data() {
    return {
      cities: [],
      districts: []
    };
  },
  created() {
    this.getCityList();
  },

  methods: {
    async getCityList() {
      // 获取城市列表
      const url = "/city/getList";
      const res = await request({
        url,
        method: "get"
      });
      const cities = res.cities.map(item => {
        return {
          value: item.cityId,
          label: item.name
        };
      });
      this.cities = cities;
    },

    // 选择城市
    selectCity(cityId) {
      this.formData.cityId = cityId;
      this.formData.districtId = "";
      this.getDistrictList(cityId);
    },

    // 选择区域
    selectDistrict(districtId) {
      this.formData.districtId = districtId;
    },

    // 根据id查找区域
    async getDistrictList(cityId) {
      const url = "/district/findByCityId";
      const res = await request({
        url,
        method: "get",
        params: {
          cityId
        }
      });
      // 处理数组,使其符合下拉列表的格式
      const districts = res.districts.map(item => {
        return {
          value: item.objectId,
          label: item.name
        };
      });
      this.districts = districts;
    }
  }
};
</script>