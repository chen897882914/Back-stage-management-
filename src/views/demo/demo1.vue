<template>
  <div>{{list}}</div>
</template>

<script>
export default {
  data() {
    return {
      list: ""
    };
  },
  created() {
    this.getList();
  },

  methods: {
    async getList() {
      let url = "/city/getList";
      let res = await this.$axios.get(url);
      console.log(res);
      this.list = JSON.stringify(res);
    }
  }
};
</script>

<style>
</style>
