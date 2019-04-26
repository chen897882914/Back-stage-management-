(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-6ca3"],{

/***/ "PFMK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/district/add.vue?vue&type=template&id=21b4bd44&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"box-card"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("添加区域")])]),_vm._v(" "),_c('el-form',{ref:"form",staticStyle:{"width":"80%"},attrs:{"action":"","method":"post"}},[_c('el-form-item',{attrs:{"label":"城市编号","label-width":"120px"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.form.cityId),callback:function ($$v) {_vm.$set(_vm.form, "cityId", $$v)},expression:"form.cityId"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"城市名称","label-width":"120px"}},[_c('el-input',{attrs:{"disabled":""},model:{value:(_vm.form.cityName),callback:function ($$v) {_vm.$set(_vm.form, "cityName", $$v)},expression:"form.cityName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"区域名称","label-width":"120px"}},[_c('el-input',{attrs:{"placeholder":"区域名称"},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("添加")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/district/add.vue?vue&type=template&id=21b4bd44&

// EXTERNAL MODULE: ./src/views/district/model.js
var model = __webpack_require__("ZteL");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/district/add.vue?vue&type=script&lang=js&
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


/* harmony default export */ var addvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      attrDesc: model["a" /* default */].attrDesc,
      form: model["a" /* default */].form,
      loading: false
    };
  },
  created: function created() {
    this.form = {
      cityId: this.$route.params.cityId,
      cityName: this.$route.params.cityName
    };
  },

  methods: {
    submit: function submit() {
      var _this = this;

      this.loading = true;
      try {
        model["a" /* default */].add(this.form).then(function (res) {
          //					this.$router.push('/city/list');
          _this.loading = false;
        });
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/district/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var district_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/district/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  district_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "add.vue"
/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "ZteL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("t3Un");


// 属性说明
var attrDesc = {
  cityId: '城市id',
  cityName: '城市名称',
  name: '区域名称'
};

var form = {
  cityId: '',
  cityName: '',
  name: ''
};

var getList = function getList() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/district/getList',
    method: 'get'
  });
};

var add = function add(district) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/district/add',
    method: 'get',
    params: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, district)
  });
};

var del = function del(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/district/delById',
    method: 'get',
    params: { id: id }
  });
};

var getDetail = function getDetail(districtId) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/district/findById',
    method: 'get',
    params: { districtId: districtId }
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

/***/ })

}]);