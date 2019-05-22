<template>
  <div>

    <el-form ref="form" label-width="80px">
      <el-form-item label="选择区域" class="item">
        <el-select v-model="cityOptions.cityId" filterable placeholder="请选择" @change="toCityName(cityOptions.cityId)">
          <el-option
            v-for="item in cityOptions"
            :key="item.cityId"
            :label="item.name"
            :value="item.cityId"/>
        </el-select>
        <el-select v-model="areaOptions.areaId" filterable placeholder="请选择" @change="toAreaId(areaOptions.areaId)">
          <el-option
            v-for="item in areaOptions"
            :key="item.areaId"
            :label="item.name"
            :value="item.areaId"/>
        </el-select>
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
      cityOptions: [],
      areaOptions: [],
      cityId: '',
      value: ''
    };
  },
  created() {
    this.getCityId();
    // this.getAreaId();
  },
  methods: {
    async getCityId() {
      const url = '/city/allCity';
      const res = await this.$axios.get(url);
      this.cityOptions = res.cities;
    },

    async toCityName(cityId) {
      const url = '/area/findByCityId';
      const areaId = {
        params: {
          cityId
        }
      };
      const res = await this.$axios.get(url, areaId);
      // console.log('res', res);
      this.areaOptions = res.areas;

      const cityName = await
      this.cityOptions.filter(item => {
        return item.cityId === cityId;
      });
      const data = {
        cityId,
        cityName
      };
      // this.getAreaId(cityId);
      this.cityId = this.cityOptions.cityId;
      this.$emit('getInFo', data);
    },

    async toAreaId(areaId) {
      const areaName = await this.areaOptions.filter(item => {
        return item.areaId === areaId;
      });
      const areaData = {
        areaId,
        areaName
      };
      this.$emit('getAreaFo', areaData);
    }
  }
};
</script>

