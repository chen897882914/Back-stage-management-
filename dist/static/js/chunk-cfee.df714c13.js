(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-cfee"],{

/***/ "0O45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/city/edit.vue?vue&type=template&id=4091abc4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"box-card"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("添加城市")])]),_vm._v(" "),_c('el-form',{ref:"form",staticStyle:{"width":"60%"}},[_c('el-form-item',{attrs:{"label":"城市Id","label-width":"120px"}},[_c('el-input',{attrs:{"placeholder":""},model:{value:(_vm.cityId),callback:function ($$v) {_vm.cityId=$$v},expression:"cityId"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"城市名称","label-width":"120px"}},[_c('el-input',{attrs:{"placeholder":"请输入城市名称"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"城市拼音","label-width":"120px"}},[_c('el-input',{attrs:{"placeholder":"请输入城市拼音"},model:{value:(_vm.pinyin),callback:function ($$v) {_vm.pinyin=$$v},expression:"pinyin"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label-width":"120px","label":"热门城市"}},[_c('el-switch',{attrs:{"active-text":_vm.isHot?'是':'否'},model:{value:(_vm.isHot),callback:function ($$v) {_vm.isHot=$$v},expression:"isHot"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("添加")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/city/edit.vue?vue&type=template&id=4091abc4&

// EXTERNAL MODULE: ./src/utils/http.js
var http = __webpack_require__("dRp0");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/city/edit.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//


/* harmony default export */ var editvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      cityId: '',
      name: '',
      pinyin: '',
      isHot: false,
      loading: false
    };
  },
  created: function created() {
    this.cityId = this.$route.params.cityId;
    this.getCityDetail();
  },

  methods: {
    getCityDetail: function getCityDetail() {
      var _this = this;

      var url = '/city/findById';
      var data = {
        cityId: this.cityId
      };
      http["a" /* default */].post(url, data).then(function (res) {
        _this.name = res.data.city.name;
        _this.pinyin = res.data.city.pinyin;
        _this.isHot = !!res.data.city.isHot;
        _this.loading = false;
      });
    },
    submit: function submit() {
      this.loading = true;
    }
  }
});
// CONCATENATED MODULE: ./src/views/city/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var city_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/city/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  city_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "edit.vue"
/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "dRp0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var env = 'test';
// 设置基本路径
switch (env) {
  case 'dev':
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = 'http://192.168.1.67:3000/admin';
    break;
  case 'test':
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = 'http://132.232.87.95:3000/admin';
    break;
  case 'prod':
  // todo
}

var get = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get;
var post = axios__WEBPACK_IMPORTED_MODULE_0___default.a.post;

/* harmony default export */ __webpack_exports__["a"] = ({
  get: get,
  post: post
});

/***/ })

}]);