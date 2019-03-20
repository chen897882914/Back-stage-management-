(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-4cef"],{

/***/ "TGbK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("t3Un");


// 属性说明
var attrDesc = {
  name: '城市名称',
  pinyin: '城市拼音'
  // isHot: '热门城市'
};

var form = {
  cityId: '',
  isHot: false,
  name: '',
  pinyin: ''
};

var getList = function getList() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/city/getList',
    method: 'get'
  });
};

var add = function add(city) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/city/add',
    method: 'get',
    params: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, city)
  });
};

var del = function del(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/city/delById',
    method: 'get',
    params: { id: id }
  });
};

var getDetail = function getDetail(cityId) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/city/findById',
    method: 'get',
    params: { cityId: cityId }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  form: form,
  attrDesc: attrDesc,
  add: add,
  getDetail: getDetail,
  del: del,
  getList: getList
});

/***/ }),

/***/ "eMBD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/city/add.vue?vue&type=template&id=320d04d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"box-card"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("添加城市")])]),_vm._v(" "),_c('el-form',{ref:"form",staticStyle:{"width":"80%"},attrs:{"action":"","method":"post"}},[_vm._l((_vm.attrDesc),function(value,key){return _c('el-form-item',{key:key,attrs:{"label":value,"label-width":"120px"}},[_c('el-input',{attrs:{"placeholder":("请输入" + value)},model:{value:(_vm.form[key]),callback:function ($$v) {_vm.$set(_vm.form, key, $$v)},expression:"form[key]"}})],1)}),_vm._v(" "),_c('el-form-item',{attrs:{"label-width":"120px","label":"热门城市"}},[_c('el-switch',{attrs:{"active-text":_vm.form.isHot?'是':'否'},model:{value:(_vm.form.isHot),callback:function ($$v) {_vm.$set(_vm.form, "isHot", $$v)},expression:"form.isHot"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("添加")])],1)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/city/add.vue?vue&type=template&id=320d04d2&

// EXTERNAL MODULE: ./src/views/city/model.js
var model = __webpack_require__("TGbK");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/city/add.vue?vue&type=script&lang=js&
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


/* harmony default export */ var addvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      attrDesc: model["a" /* default */].attrDesc,
      form: model["a" /* default */].form,
      loading: false
    };
  },
  created: function created() {
    console.log(model["a" /* default */]);
  },

  methods: {
    submit: function submit() {
      var _this = this;

      this.loading = true;
      try {
        model["a" /* default */].add(this.form).then(function (res) {
          // this.$router.push('/city/list');
          _this.loading = false;
        });
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/city/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var city_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/city/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  city_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "add.vue"
/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);