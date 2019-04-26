(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-49a6"],{

/***/ "WGRL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("t3Un");


// 属性说明
var attrDesc = {
  filmId: '电影id',
  advanceStopMins: 'advanceStopMins',
  payDay: '上映日期',
  showAt: '开始时间',
  endAt: '结束时间',
  filmLanguage: '电影语言',
  hallName: '影厅序号',
  imagery: '成影类型',
  isOnsell: '在售',
  marketPrice: '市场价格',
  salePrice: '售价'
};

var form = {
  filmId: '',
  payDay: '2019-01-19',
  advanceStopMins: 15,
  endAt: 1548390000,
  filmLanguage: '原声',
  hallName: '9号4K巨幕厅',
  imagery: '2D',
  isOnsell: true,
  marketPrice: 10000,
  salePrice: 3000,
  scheduleId: 951097166,
  showAt: 1548382800
};

var getList = function getList() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/schedule/getList',
    method: 'get'
  });
};

var add = function add(schedule) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/schedule/add',
    method: 'get',
    params: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, schedule)
  });
};

var del = function del(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/schedule/delById',
    method: 'get',
    params: { id: id }
  });
};

var getDetail = function getDetail(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/schedule/findById',
    method: 'get',
    params: { id: id }
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

/***/ "eCvB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/schedule/add.vue?vue&type=template&id=f406f6da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"box-card"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("添加城市")])]),_vm._v(" "),_c('el-form',{ref:"form",staticStyle:{"width":"80%"},attrs:{"action":"","method":"post"}},[_vm._l((_vm.attrDesc),function(value,key){return _c('el-form-item',{key:key,attrs:{"label":value,"label-width":"120px"}},[_c('el-input',{attrs:{"placeholder":("请输入" + value)},model:{value:(_vm.form[key]),callback:function ($$v) {_vm.$set(_vm.form, key, $$v)},expression:"form[key]"}})],1)}),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("添加")])],1)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/schedule/add.vue?vue&type=template&id=f406f6da&

// EXTERNAL MODULE: ./src/views/schedule/model.js
var model = __webpack_require__("WGRL");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/schedule/add.vue?vue&type=script&lang=js&
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
    this.form.filmId = this.$route.params.filmId;
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
// CONCATENATED MODULE: ./src/views/schedule/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var schedule_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/schedule/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  schedule_addvue_type_script_lang_js_,
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