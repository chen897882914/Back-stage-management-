(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-e5f6"],{

/***/ "Gnxc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/demo/map.vue?vue&type=template&id=08f5380b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('div',{staticClass:"search"},[_c('span',{attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"f999"},[_vm._v("选择地址")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"请输入搜索关键字","id":"suggestId"}})],1),_vm._v(" "),_c('div',{staticStyle:{"border":"1px solid #C0C0C0","width":"150px","height":"auto","display":"none"},attrs:{"id":"searchResultPanel"}})]),_vm._v(" "),_c('div',{staticClass:"ovh",attrs:{"id":"map"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/demo/map.vue?vue&type=template&id=08f5380b&scoped=true&

// EXTERNAL MODULE: external "BMap"
var external_BMap_ = __webpack_require__("cfOQ");
var external_BMap_default = /*#__PURE__*/__webpack_require__.n(external_BMap_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/demo/map.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var mapvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      map: ""
    };
  },
  mounted: function mounted() {
    this.showMap();
    this.autoList();
  },


  methods: {
    showMap: function showMap() {
      var _this = this;

      var myCity = new external_BMap_default.a.LocalCity();
      myCity.get(function (res) {
        console.log(res);
        _this.map = new external_BMap_default.a.Map("map"); // 创建Map实例
        _this.map.centerAndZoom(new external_BMap_default.a.Point(res.center.lng, res.center.lat), 11);
      });
    },
    G: function G(id) {
      return document.getElementById(id);
    },
    setPlace: function setPlace(myValue) {
      var self = this;
      this.map.clearOverlays(); //清除地图上所有覆盖物
      function myFun() {
        var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
        console.log(pp);
        self.map.centerAndZoom(pp, 18);
        self.map.addOverlay(new external_BMap_default.a.Marker(pp)); //添加标注
      }
      var local = new external_BMap_default.a.LocalSearch(self.map, {
        //智能搜索
        onSearchComplete: myFun
      });
      local.search(myValue);
    },
    autoList: function autoList() {
      var self = this;
      var ac = new external_BMap_default.a.Autocomplete({
        //建立一个自动完成的对象
        input: "suggestId",
        location: self.map
      });
      ac.addEventListener("onhighlight", function (e) {
        return false;
        //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
          value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
          _value = e.toitem.value;
          value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        self.G("searchResultPanel").innerHTML = str;
      });

      var myValue;
      ac.addEventListener("onconfirm", function (e) {
        //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        self.G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
        self.setPlace(myValue);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/demo/map.vue?vue&type=script&lang=js&
 /* harmony default export */ var demo_mapvue_type_script_lang_js_ = (mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/demo/map.vue?vue&type=style&index=0&id=08f5380b&scoped=true&lang=scss&
var mapvue_type_style_index_0_id_08f5380b_scoped_true_lang_scss_ = __webpack_require__("H/Or");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/demo/map.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  demo_mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "08f5380b",
  null
  
)

component.options.__file = "map.vue"
/* harmony default export */ var map = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "H/Or":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_id_08f5380b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rZ/M");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_id_08f5380b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_id_08f5380b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_style_index_0_id_08f5380b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "rZ/M":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);