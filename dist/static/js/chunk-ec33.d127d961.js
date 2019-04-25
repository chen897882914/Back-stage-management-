(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-ec33"],{

/***/ "14Xm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u938");


/***/ }),

/***/ "D3Ub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__("4d7F");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),

/***/ "Kh1Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("shIy");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Photos_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "QKgP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/film/add.vue?vue&type=template&id=6b21bf22&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"box-card"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("添加电影")])]),_vm._v(" "),_c('el-form',{ref:"formData",staticStyle:{"width":"50%"},attrs:{"action":"","method":"post"}},[_c('Form',{attrs:{"formData":_vm.formData},on:{"formChange":_vm.formChange}}),_vm._v(" "),_c('el-form-item',{staticStyle:{"text-align":"center"}},[_c('el-button',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("添加")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/film/add.vue?vue&type=template&id=6b21bf22&

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("QbLZ");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/film/components/Form.vue?vue&type=template&id=0d04133b&scoped=true&
var Formvue_type_template_id_0d04133b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form-item',{attrs:{"label":"电影名称","label-width":"120px"}},[_c('el-input',{model:{value:(_vm.formData.name),callback:function ($$v) {_vm.$set(_vm.formData, "name", $$v)},expression:"formData.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"海报","label-width":"120px"}},[_c('el-input',{model:{value:(_vm.formData.poster),callback:function ($$v) {_vm.$set(_vm.formData, "poster", $$v)},expression:"formData.poster"}})],1),_vm._v(" "),_c('AreaInfo',{attrs:{"formData":_vm.formData},on:{"handleChange":_vm.handleChange}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"导演","label-width":"120px"}},[_c('el-input',{model:{value:(_vm.formData.director),callback:function ($$v) {_vm.$set(_vm.formData, "director", $$v)},expression:"formData.director"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"分类","label-width":"120px"}},[_c('el-input',{attrs:{"placeholder":"请输入分类,多个类别用 | 隔开"},model:{value:(_vm.formData.category),callback:function ($$v) {_vm.$set(_vm.formData, "category", $$v)},expression:"formData.category"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"简介","label-width":"120px"}},[_c('el-input',{attrs:{"rows":5,"type":"textarea"},model:{value:(_vm.formData.synopsis),callback:function ($$v) {_vm.$set(_vm.formData, "synopsis", $$v)},expression:"formData.synopsis"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"产地","label-width":"120px"}},[_c('el-input',{model:{value:(_vm.formData.nation),callback:function ($$v) {_vm.$set(_vm.formData, "nation", $$v)},expression:"formData.nation"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"语言","label-width":"120px"}},[_c('el-input',{model:{value:(_vm.formData.language),callback:function ($$v) {_vm.$set(_vm.formData, "language", $$v)},expression:"formData.language"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"时长","label-width":"120px"}},[_c('el-input',{model:{value:(_vm.formData.runtime),callback:function ($$v) {_vm.$set(_vm.formData, "runtime", $$v)},expression:"formData.runtime"}})],1),_vm._v(" "),_c('Photos',{attrs:{"formData":_vm.formData}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"评分","label-width":"120px"}},[_c('el-input',{model:{value:(_vm.formData.grade),callback:function ($$v) {_vm.$set(_vm.formData, "grade", $$v)},expression:"formData.grade"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"类型","label-width":"120px"}},[_c('el-radio-group',{model:{value:(_vm.formData.type),callback:function ($$v) {_vm.$set(_vm.formData, "type", $$v)},expression:"formData.type"}},[_c('el-radio',{attrs:{"label":"2D"}}),_vm._v(" "),_c('el-radio',{attrs:{"label":"3D"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"首映式","label-width":"120px"}},[_c('div',{staticClass:"block"},[_c('el-date-picker',{attrs:{"type":"datetime","placeholder":"选择日期时间","align":"right"},model:{value:(_vm.formData.premiereAt),callback:function ($$v) {_vm.$set(_vm.formData, "premiereAt", $$v)},expression:"formData.premiereAt"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label-width":"120px","label":"预售"}},[_c('el-switch',{attrs:{"active-text":_vm.isPresale?'预售中':'未开卖'},model:{value:(_vm.isPresale),callback:function ($$v) {_vm.isPresale=$$v},expression:"isPresale"}})],1)],1)}
var Formvue_type_template_id_0d04133b_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/film/components/Form.vue?vue&type=template&id=0d04133b&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/film/components/AreaInfo.vue?vue&type=template&id=d355b46a&
var AreaInfovue_type_template_id_d355b46a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form-item',{attrs:{"label":"区域信息","label-width":"120px"}},[_c('el-select',{attrs:{"placeholder":"请选择城市"},on:{"change":_vm.selectCity},model:{value:(_vm.formData.cityId),callback:function ($$v) {_vm.$set(_vm.formData, "cityId", $$v)},expression:"formData.cityId"}},_vm._l((_vm.cities),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})})),_vm._v(" "),_c('el-select',{staticStyle:{"margin-left":"20px"},attrs:{"placeholder":"请选择区域"},on:{"change":_vm.selectDistrict},model:{value:(_vm.formData.districtId),callback:function ($$v) {_vm.$set(_vm.formData, "districtId", $$v)},expression:"formData.districtId"}},_vm._l((_vm.districts),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}))],1)}
var AreaInfovue_type_template_id_d355b46a_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/film/components/AreaInfo.vue?vue&type=template&id=d355b46a&

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("14Xm");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("D3Ub");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/utils/request.js
var request = __webpack_require__("t3Un");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/film/components/AreaInfo.vue?vue&type=script&lang=js&


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


/* harmony default export */ var AreaInfovue_type_script_lang_js_ = ({
  props: ["formData"],
  data: function data() {
    return {
      cities: [],
      districts: []
    };
  },
  created: function created() {
    this.getCityList();
  },


  methods: {
    getCityList: function getCityList() {
      var _this = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var url, res, cities;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 获取城市列表
                url = "/city/getList";
                _context.next = 3;
                return Object(request["a" /* default */])({
                  url: url,
                  method: "get"
                });

              case 3:
                res = _context.sent;
                cities = res.cities.map(function (item) {
                  return {
                    value: item.cityId,
                    label: item.name
                  };
                });

                _this.cities = cities;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },


    // 选择城市
    selectCity: function selectCity(cityId) {
      this.formData.cityId = cityId;
      this.formData.districtId = "";
      this.getDistrictList(cityId);
    },


    // 选择区域
    selectDistrict: function selectDistrict(districtId) {
      this.formData.districtId = districtId;
    },


    // 根据id查找区域
    getDistrictList: function getDistrictList(cityId) {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var url, res, districts;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = "/district/findByCityId";
                _context2.next = 3;
                return Object(request["a" /* default */])({
                  url: url,
                  method: "get",
                  params: {
                    cityId: cityId
                  }
                });

              case 3:
                res = _context2.sent;

                // 处理数组,使其符合下拉列表的格式
                districts = res.districts.map(function (item) {
                  return {
                    value: item.objectId,
                    label: item.name
                  };
                });

                _this2.districts = districts;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/views/film/components/AreaInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AreaInfovue_type_script_lang_js_ = (AreaInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/film/components/AreaInfo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AreaInfovue_type_script_lang_js_,
  AreaInfovue_type_template_id_d355b46a_render,
  AreaInfovue_type_template_id_d355b46a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "AreaInfo.vue"
/* harmony default export */ var AreaInfo = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/film/components/Photos.vue?vue&type=template&id=df11df02&
var Photosvue_type_template_id_df11df02_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form-item',{attrs:{"label":"剧照","label-width":"120px"}},[(!_vm.formData.photos.length)?_c('el-input',[_c('el-button',{attrs:{"slot":"append","icon":"el-icon-plus"},on:{"click":_vm.plus},slot:"append"})],1):_vm._e(),_vm._v(" "),_vm._l((_vm.formData.photos),function(item,index){return _c('el-input',{key:index,class:{'mt-5': index > 0},attrs:{"value":item}},[(index==_vm.formData.photos.length-1)?_c('el-button',{attrs:{"slot":"append","icon":"el-icon-plus"},on:{"click":_vm.plus},slot:"append"}):_c('el-button',{attrs:{"slot":"append","icon":"el-icon-close"},on:{"click":function($event){_vm.close(index)}},slot:"append"})],1)})],2)],1)}
var Photosvue_type_template_id_df11df02_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/film/components/Photos.vue?vue&type=template&id=df11df02&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/film/components/Photos.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Photosvue_type_script_lang_js_ = ({
  props: ["formData"],
  created: function created() {},

  methods: {
    // 添加url
    plus: function plus(data) {
      this.formData.photos.push("");
    },

    // 删除url
    close: function close(index) {
      this.formData.photos.splice(index, 1);
    }
  }
});
// CONCATENATED MODULE: ./src/views/film/components/Photos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Photosvue_type_script_lang_js_ = (Photosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/film/components/Photos.vue?vue&type=style&index=0&lang=css&
var Photosvue_type_style_index_0_lang_css_ = __webpack_require__("Kh1Y");

// CONCATENATED MODULE: ./src/views/film/components/Photos.vue






/* normalize component */

var Photos_component = Object(componentNormalizer["a" /* default */])(
  components_Photosvue_type_script_lang_js_,
  Photosvue_type_template_id_df11df02_render,
  Photosvue_type_template_id_df11df02_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Photos_component.options.__file = "Photos.vue"
/* harmony default export */ var Photos = (Photos_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/film/components/Form.vue?vue&type=script&lang=js&
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
//
//
//



/* harmony default export */ var Formvue_type_script_lang_js_ = ({
  created: function created() {},

  computed: {
    formData: function formData() {
      return this.$store.state.film;
    },

    isPresale: {
      get: function get() {
        return this.formData.isPresale === "yes";
      },
      set: function set(flag) {
        this.formData.isPresale = flag ? "yes" : "no";
      }
    }
  },
  data: function data() {
    return {
      // 图片
      selectedOptions: []
    };
  },

  components: {
    AreaInfo: AreaInfo,
    Photos: Photos
  },
  methods: {
    handleChange: function handleChange(data) {
      this.formData.cityId = data[0];
      this.$emit("formChange", data);
    }
  }
});
// CONCATENATED MODULE: ./src/views/film/components/Form.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Formvue_type_script_lang_js_ = (Formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/film/components/Form.vue?vue&type=style&index=0&id=0d04133b&scoped=true&lang=scss&
var Formvue_type_style_index_0_id_0d04133b_scoped_true_lang_scss_ = __webpack_require__("T5Os");

// CONCATENATED MODULE: ./src/views/film/components/Form.vue






/* normalize component */

var Form_component = Object(componentNormalizer["a" /* default */])(
  components_Formvue_type_script_lang_js_,
  Formvue_type_template_id_0d04133b_scoped_true_render,
  Formvue_type_template_id_0d04133b_scoped_true_staticRenderFns,
  false,
  null,
  "0d04133b",
  null
  
)

Form_component.options.__file = "Form.vue"
/* harmony default export */ var Form = (Form_component.exports);
// EXTERNAL MODULE: ./src/views/film/model.js
var model = __webpack_require__("ri/G");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/views/film/add.vue?vue&type=script&lang=js&

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
      loading: false
    };
  },

  components: {
    Form: Form
  },
  created: function created() {
    // console.log(this.formData);
  },

  computed: {
    formData: function formData() {
      return this.$store.state.film;
    }
  },

  methods: {
    submit: function submit() {
      var _this = this;

      this.loading = true;
      try {
        model["a" /* default */].add(this.formData).then(function (res) {
          // this.$router.push('/film/list');
          _this.loading = false;
        });
      } catch (error) {
        this.loading = false;
      }
    },


    // 子组件修改了表单
    formChange: function formChange(data) {
      this.form = extends_default()({}, this.form, {
        cityName: data.name,
        cityId: data.cityId,
        districtId: data.districtId
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/film/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var film_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/film/add.vue





/* normalize component */

var add_component = Object(componentNormalizer["a" /* default */])(
  film_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

add_component.options.__file = "add.vue"
/* harmony default export */ var add = __webpack_exports__["default"] = (add_component.exports);

/***/ }),

/***/ "T5Os":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_0d04133b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fjDK");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_0d04133b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_0d04133b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_10_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_0d04133b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fjDK":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ls82":
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "ri/G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QbLZ");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("t3Un");


// 属性说明
var attrDesc = {
  name: '电影名称',
  filmId: '电影编号',
  poster: '海报',
  cityId: '城市编号',
  city: '城市',
  districtId: '区域编号',
  district: '区域',
  //	actors: "演员表",
  director: '导演',
  // category: '分类',
  // synopsis: '简介',
  //	filmType: "类别",
  nation: '产地',
  language: '语言',
  // videoId: 'videoId',
  // premiereAt: '首映式',
  // timeType: 'timeType',
  runtime: '影片时长',
  //	photos: "照片集",
  grade: '评分'
  // type: '类型'
  //	item: "item",
  // isPresale: '预售',
  // isSale: '售卖中'
};

var form = {
  name: '驯龙高手3',
  filmId: '',
  poster: 'https://static.maizuo.com/pc/v5/usr/movie/394c418ad9a14e301438176f3dd65028.jpg',
  actors: [],
  director: '迪恩·德布洛斯',
  category: ['动画', '奇幻', '冒险'],
  synopsis: '统领伯克岛的酋长嗝嗝，与阿丝翠德共同打造了一个奇妙而热闹的飞龙乌托邦。而一只雌性光煞飞龙的意外出现，加上一个前所未有的威胁的到来，令嗝嗝和没牙仔不得不离开自己唯一的家园，前往他们本以为只存在于神话之中的隐秘之境。在发现自己真正的命运之后，飞龙与骑士将携手殊死奋战，保护他们所珍爱的一切。',
  // filmType: {
  //   name: '2D',
  //   value: 1
  // },
  nation: '美国',
  language: '英语',
  // videoId: 'XMzk0OTI4NDYwOA==',
  premiereAt: '1551398400',
  // timeType: 3,
  runtime: '100',
  photos: [],
  grade: '7.8',
  // item: {
  //   name: '2D',
  //   type: 1
  // },
  type: '',
  isPresale: false
  // isSale: false


  // 需要的属性
};var needAttr = function needAttr(form, data) {
  for (var p in form) {
    form[p] = data[p];
  }
  return form;
};

var getList = function getList() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/film/getList',
    method: 'get'
  });
};

var getDistrictList = function getDistrictList() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/district/getList',
    method: 'get'
  });
};

var add = function add(film) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/film/add',
    method: 'post',
    data: film
  });
};
var update = function update(film) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/film/update',
    method: 'get',
    params: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, film)
  });
};

var del = function del(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/film/delById',
    method: 'get',
    params: { id: id }
  });
};

var getDetail = function getDetail(filmId) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/film/findById',
    method: 'get',
    params: { filmId: filmId }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  form: form,
  attrDesc: attrDesc,
  add: add,
  getDetail: getDetail,
  del: del,
  update: update,
  needAttr: needAttr,
  getList: getList,
  getDistrictList: getDistrictList
});

/***/ }),

/***/ "shIy":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "u938":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__("ls82");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ })

}]);