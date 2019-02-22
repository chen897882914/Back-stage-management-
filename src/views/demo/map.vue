// 封装百度地图api
<template>
  <div class>
    <div class="search">
      <span slot="header">
        <span class="f999">选择地址</span>
        <el-input placeholder="请输入搜索关键字" id="suggestId"></el-input>
      </span>
      <div
        id="searchResultPanel"
        style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;"
      ></div>
    </div>
    <div id="map" class="ovh"></div>
  </div>
</template>

<script>
import BMap from "BMap";
export default {
  data() {
    return {
      map: ""
    };
  },
  mounted() {
    this.showMap();
    this.autoList();
  },

  methods: {
    showMap() {
      var myCity = new BMap.LocalCity();
      myCity.get(res => {
        console.log(res);
        this.map = new BMap.Map("map"); // 创建Map实例
        this.map.centerAndZoom(
          new BMap.Point(res.center.lng, res.center.lat),
          11
        );
      });
    },

    G(id) {
      return document.getElementById(id);
    },

    setPlace(myValue) {
      var self = this;
      this.map.clearOverlays(); //清除地图上所有覆盖物
      function myFun() {
        var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
        console.log(pp);
        self.map.centerAndZoom(pp, 18);
        self.map.addOverlay(new BMap.Marker(pp)); //添加标注
      }
      var local = new BMap.LocalSearch(self.map, {
        //智能搜索
        onSearchComplete: myFun
      });
      local.search(myValue);
    },

    autoList() {
      var self = this;
      var ac = new BMap.Autocomplete({
        //建立一个自动完成的对象
        input: "suggestId",
        location: self.map
      });
      ac.addEventListener("onhighlight", function(e) {
        return false;
        //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
          value =
            _value.province +
            _value.city +
            _value.district +
            _value.street +
            _value.business;
        }
        str =
          "FromItem<br />index = " +
          e.fromitem.index +
          "<br />value = " +
          value;

        value = "";
        if (e.toitem.index > -1) {
          _value = e.toitem.value;
          value =
            _value.province +
            _value.city +
            _value.district +
            _value.street +
            _value.business;
        }
        str +=
          "<br />ToItem<br />index = " +
          e.toitem.index +
          "<br />value = " +
          value;
        self.G("searchResultPanel").innerHTML = str;
      });

      var myValue;
      ac.addEventListener("onconfirm", function(e) {
        //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
        self.G("searchResultPanel").innerHTML =
          "onconfirm<br />index = " +
          e.item.index +
          "<br />myValue = " +
          myValue;
        self.setPlace(myValue);
      });
    }
  }
};
</script>

<style scoped lang="scss">
#map {
  height: 600px;
}
.el-input {
  margin-top: 10px;
}
.search {
  float: left;
  margin-right: 20px;
}
</style>