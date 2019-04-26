(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-59c7"],{

/***/ "1R9N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/cinema/add.vue?vue&type=template&id=82c9797a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"box-card"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("添加电影")])]),_vm._v(" "),_c('el-form',{ref:"form",staticStyle:{"width":"80%"},attrs:{"action":"","method":"post"}},[_vm._l((_vm.attrDesc),function(value,key){return _c('el-form-item',{key:key,attrs:{"label":value,"label-width":"120px"}},[_c('el-input',{attrs:{"placeholder":("请输入" + value)},model:{value:(_vm.form[key]),callback:function ($$v) {_vm.$set(_vm.form, key, $$v)},expression:"form[key]"}})],1)}),_vm._v(" "),_c('el-form-item',{staticClass:"rel",attrs:{"label":"logo图片","label-width":"120px"}},[_c('el-input',{attrs:{"placeholder":"请输入图片地址"},model:{value:(_vm.form['logoUrl']),callback:function ($$v) {_vm.$set(_vm.form, 'logoUrl', $$v)},expression:"form['logoUrl']"}}),_vm._v(" "),_c('el-upload',{staticClass:"uploader",attrs:{"action":"http://localhost:3000/upload","show-file-list":false,"on-success":_vm.handleUpload}},[_c('i',{staticClass:"el-icon-upload f24 avatar-uploader-icon vam"}),_vm._v(" "),_c('span',{staticClass:"vam"},[_vm._v("上传图片")]),_vm._v(" "),_c('img',{staticClass:"preview vam",attrs:{"src":_vm.form['logoUrl']}})])],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("添加")])],1)],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/cinema/add.vue?vue&type=template&id=82c9797a&

// EXTERNAL MODULE: ./src/views/cinema/model.js
var model = __webpack_require__("TJZt");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/cinema/add.vue?vue&type=script&lang=js&
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
    this.form.districtId = this.$route.params.districtId;
  },

  methods: {
    handleUpload: function handleUpload(res) {
      console.log(this);
      this.form.logoUrl = "http://localhost:3000" + res.imgUrl;
    },
    submit: function submit() {
      var _this = this;

      this.loading = true;
      try {
        model["a" /* default */].add(this.form).then(function (res) {
          //						 this.$router.push('/film/list');
          _this.loading = false;
        });
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/cinema/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var cinema_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/cinema/add.vue?vue&type=style&index=0&lang=css&
var addvue_type_style_index_0_lang_css_ = __webpack_require__("HsV8");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/cinema/add.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cinema_addvue_type_script_lang_js_,
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

/***/ "CsK4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "HsV8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("CsK4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "TJZt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("t3Un");


// 属性说明
var attrDesc = {
  name: '影院名称',
  address: '地址',
  // longitude: '经度',
  // latitude: '纬度',
  // gpsAddress: '经纬度',
  // districtId: '区域id',
  // districtName: '区域名称',
  // 'district': {
  //   'districtId': 440304,
  //   'name': '福田区'
  // },
  phone: '电话',
  // telephones: '电话列表',
  // 'logoUrl': 'logo地址',
  // businessTime: 'businessTime',
  // notice: 'notice',
  // isVisited: '已观看',
  // 'services': [{
  //   'name': '儿童票',
  //   'description': '1.3米以下儿童可免费无座观影（MX4D厅除外），一名成人限带一名儿童（仅限1.3米以下）'
  // }, {
  //   'name': '停车',
  //   'description': '东海缤纷天地地下停车场，凭当日票根50元免停1小时，100元免停2小时'
  // }, {
  //   'name': '3D眼镜',
  //   'description': '为确保顾客观影卫生，请自带3D眼镜或前往前台购买，每副5元起'
  // }],
  // 'services': '服务',
  lowPrice: '低价'
  // Distance: '距离'
};

var form = {
  name: '老胡电影院-深圳分院1',
  address: '龙岗',
  longitude: 114.027958,
  latitude: 22.542708,
  // gpsAddress: '114.027958:22.542708',
  // cityId: 440300,
  cityName: '深圳市',
  districtId: '',
  // districtName: '福田区',
  // district: {
  //   districtId: 440304,
  //   name: '福田区'
  // },
  phone: '0755-32935088',
  // telephones: ['0755-32935088'],
  logoUrl: 'https://pic.maizuo.comusr/8119/4c825a0a7d23df9fed5b85caad9a4bc7.jpg',
  // businessTime: '',
  // notice: '',
  // isVisited: 0,
  // services: [
  //   {
  //     name: '儿童票',
  //     description:
  //       '1.3米以下儿童可免费无座观影（MX4D厅除外），一名成人限带一名儿童（仅限1.3米以下）'
  //   },
  //   {
  //     name: '停车',
  //     description:
  //       '东海缤纷天地地下停车场，凭当日票根50元免停1小时，100元免停2小时'
  //   },
  //   {
  //     name: '3D眼镜',
  //     description: '为确保顾客观影卫生，请自带3D眼镜或前往前台购买，每副5元起'
  //   }
  // ],
  lowPrice: 25,
  distance: 0
};

var getList = function getList() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/cinema/getList',
    method: 'get'
  });
};

var add = function add(cinema) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/cinema/add',
    method: 'get',
    params: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, cinema)
  });
};

var del = function del(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/cinema/delById',
    method: 'get',
    params: { id: id }
  });
};

var getDetail = function getDetail(cinemaId) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/cinema/findById',
    method: 'get',
    params: { cinemaId: cinemaId }
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