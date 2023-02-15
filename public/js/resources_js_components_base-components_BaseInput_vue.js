"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_base-components_BaseInput_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inheritAttrs: false,
  data: function data() {
    return {
      data: "",
      counter: 0,
      icon: "visibility"
    };
  },
  props: {
    label: {
      type: String,
      "default": ""
    },
    validation: {
      type: Object,
      "default": ""
    },
    validationTextType: {
      type: String,
      "default": ""
    },
    required: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": "text"
    },
    mask: {
      type: String,
      "default": ""
    },
    validationsInput: {
      type: Object,
      "default": function _default() {
        return {
          required: true,
          format: false,
          minLength: false,
          maxLength: false,
          minValue: false,
          maxValue: false,
          isValidDui: false,
          isValidNit: false,
          isValidIsss: false,
          isValidAfp: false,
          isValidConamypeId: false,
          isValidNrc: false,
          email: false,
          showPassword: false
        };
      }
    },
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 150
    },
    readonly: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    type: function type(val) {
      this.icon = this.type == "password" ? "visibility" : "visibility_off";
    }
  },
  mounted: function mounted() {
    this.data = this.$attrs.value;
    this.validation.$reset();
  },
  updated: function updated() {
    this.data = this.validation.$model;
  },
  methods: {
    updateValue: function updateValue() {
      this.validation.$model = this.data;
      this.$emit("input", this.data);
    },
    validateText: function validateText() {
      if (this.data) {
        switch (this.validationTextType) {
          case "default":
            this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
            this.data = this.data.replace(/^([a-zA-Z0-9])\1{4}/gi, "");
            break;

          case "only-letters":
            this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
            break;

          case "only-numbers":
            this.data = this.data.replace(/[^0-9\-]/g, "");
            break;

          case "none":
            break;

          case "only-repeats":
            this.data = this.data.replace(/^([a-zA-Z0-9])\1{4}/g, "");
            break;

          default:
            break;
        }
      }

      this.validation.$model = this.data;
      this.$emit("keyup", this.data);
    },
    showPassword: function showPassword() {
      var show = this.type == "password" ? "text" : "password";
      this.$emit("update-password", {
        show: show
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-text-field--outlined {\r\n  border-color: #1976d2 !important;\n}\n.v-text-field--outlined.v-input--is-focused fieldset,\r\n.v-text-field--outlined.v-input--has-state fieldset {\r\n  border-color: #2d52a8 !important;\n}\n.v-text-field__details {\r\n  display: none;\n}\n.material-icons {\r\n  width: 30px;\r\n  height: auto;\n}\np {\r\n  margin-bottom: 0px;\r\n  height: 20px;\r\n  line-height: 20px; /* same as height! */\r\n  display: flex;\r\n  justify-content: left;\r\n  align-content: center;\r\n  flex-direction: row;\n}\r\n", "",{"version":3,"sources":["webpack://./resources/js/components/base-components/BaseInput.vue"],"names":[],"mappings":";AAiSA;EACA,gCAAA;AACA;AAEA;;EAEA,gCAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA,EAAA,oBAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\r\n  <div>\r\n    <v-text-field\r\n      dense\r\n      :label=\"label\"\r\n      outlined\r\n      v-model.trim=\"data\"\r\n      :class=\"{\r\n        'is-invalid': validation.$error,\r\n        'is-valid': !validation.$invalid,\r\n      }\"\r\n      :key=\"counter\"\r\n      :min=\"min\"\r\n      :max=\"max\"\r\n      :type=\"type\"\r\n      :readonly=\"readonly\"\r\n      @input=\"updateValue\"\r\n      v-mask=\"mask\"\r\n      @keyup=\"validateText()\"\r\n      autocomplete=\"new-password\"\r\n      class=\"mb-1\"\r\n    >\r\n      <v-icon\r\n        slot=\"append\"\r\n        color=\"green\"\r\n        v-if=\"validationsInput.showPassword\"\r\n        @click=\"showPassword()\"\r\n      >\r\n        {{ icon }}\r\n      </v-icon>\r\n    </v-text-field>\r\n    <v-container class=\"mb-0 pt-0 my-auto orange-text\">\r\n      <template v-if=\"!validation.$params.required\">\r\n        <v-row class=\"pt-0\" v-if=\"!validation.$params.required\">\r\n          <p class=\"mb-0 mt-1 text-muted\">(Campo opcional)</p>\r\n        </v-row>\r\n      </template>\r\n      <template>\r\n        <v-row\r\n          v-if=\"validation.$error && validation.$params.required\"\r\n          class=\"pt-0\"\r\n        >\r\n          <p class=\"mb-0 mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> Campo requerido.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.minLength && !validation.minLength\">\r\n          <p class=\"pl-0 mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            {{ validation.$params.minLength.min }} carácter mínimo.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.maxLength && !validation.maxLength\">\r\n          <p class=\"pl-0 pr-0 mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            {{ validation.$params.maxLength.max }} caracteres máximo.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.minValue && !validation.minValue\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            {{ validation.$params.minValue.min }} es el valor mínimo.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.maxValue && !validation.maxValue\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            {{ validation.$params.minValue.max }} el valor máximo.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.format && !validation.isValidNumber\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> Formato inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.https && !validation.https\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> El enlace debe de\r\n            iniciar con 'https://'\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.url && !validation.url\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> El texto debe de ser un\r\n            enlace de internet.\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.isValidDui && !validation.isValidDui\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> DUI inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.isValidNit && !validation.isValidNit\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> NIT inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.isValidIsss && !validation.isValidIsss\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> ISSS inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.isValidAfp && !validation.isValidAfp\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> AFP inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row\r\n          v-if=\"\r\n            validation.$params.isValidConamypeId &&\r\n            !validation.isValidConamypeId\r\n          \"\r\n        >\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> ID de Conamype inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.isValidNrc && !validation.isValidNrc\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> NRC inválido\r\n          </p>\r\n        </v-row>\r\n        <v-row v-if=\"validation.$params.email && !validation.email\">\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> Formato de correo\r\n            electrónico inválido.\r\n          </p>\r\n        </v-row>\r\n        <v-row\r\n          v-if=\"validation.$params.sameAsPassword && !validation.sameAsPassword\"\r\n        >\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i> Contraseñas deben\r\n            coincidir.\r\n          </p>\r\n        </v-row>\r\n        <v-row\r\n          v-if=\"\r\n            validation.$params.isValidPassword && !validation.isValidPassword\r\n          \"\r\n        >\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            1 mayúscula mínimo.\r\n          </p>\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            1 minúscula mínimo.\r\n          </p>\r\n          <p class=\"mt-1\">\r\n            <i class=\"material-icons\">error_outline</i>\r\n            13 caracteres máximo.\r\n          </p>\r\n        </v-row>\r\n      </template>\r\n    </v-container>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  inheritAttrs: false,\r\n  data() {\r\n    return {\r\n      data: \"\",\r\n      counter: 0,\r\n      icon: \"visibility\",\r\n    };\r\n  },\r\n  props: {\r\n    label: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    validation: {\r\n      type: Object,\r\n      default: \"\",\r\n    },\r\n    validationTextType: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    required: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n    type: {\r\n      type: String,\r\n      default: \"text\",\r\n    },\r\n    mask: {\r\n      type: String,\r\n      default: \"\",\r\n    },\r\n    validationsInput: {\r\n      type: Object,\r\n      default: () => {\r\n        return {\r\n          required: true,\r\n          format: false,\r\n          minLength: false,\r\n          maxLength: false,\r\n          minValue: false,\r\n          maxValue: false,\r\n          isValidDui: false,\r\n          isValidNit: false,\r\n          isValidIsss: false,\r\n          isValidAfp: false,\r\n          isValidConamypeId: false,\r\n          isValidNrc: false,\r\n          email: false,\r\n          showPassword: false,\r\n        };\r\n      },\r\n    },\r\n    min: {\r\n      type: Number,\r\n      default: 0,\r\n    },\r\n    max: {\r\n      type: Number,\r\n      default: 150,\r\n    },\r\n    readonly: {\r\n      type: Boolean,\r\n      default: false,\r\n    },\r\n  },\r\n  watch: {\r\n    type(val) {\r\n      this.icon = this.type == \"password\" ? \"visibility\" : \"visibility_off\";\r\n    },\r\n  },\r\n  mounted() {\r\n    this.data = this.$attrs.value;\r\n    this.validation.$reset();\r\n  },\r\n  updated() {\r\n    this.data = this.validation.$model;\r\n  },\r\n  methods: {\r\n    updateValue() {\r\n      this.validation.$model = this.data;\r\n      this.$emit(\"input\", this.data);\r\n    },\r\n\r\n    validateText() {\r\n      if (this.data) {\r\n        switch (this.validationTextType) {\r\n          case \"default\":\r\n            this.data = this.data.replace(\r\n              /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\r\n              \"\"\r\n            );\r\n            this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/gi, \"\");\r\n            break;\r\n          case \"only-letters\":\r\n            this.data = this.data.replace(\r\n              /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\r\n              \"\"\r\n            );\r\n            break;\r\n          case \"only-numbers\":\r\n            this.data = this.data.replace(/[^0-9\\-]/g, \"\");\r\n            break;\r\n          case \"none\":\r\n            break;\r\n          case \"only-repeats\":\r\n            this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/g, \"\");\r\n            break;\r\n          default:\r\n            break;\r\n        }\r\n      }\r\n\r\n      this.validation.$model = this.data;\r\n      this.$emit(\"keyup\", this.data);\r\n    },\r\n\r\n    showPassword() {\r\n      const show = this.type == \"password\" ? \"text\" : \"password\";\r\n\r\n      this.$emit(\"update-password\", { show });\r\n    },\r\n  },\r\n};\r\n</script>\r\n\r\n<style>\r\n.v-text-field--outlined {\r\n  border-color: #1976d2 !important;\r\n}\r\n\r\n.v-text-field--outlined.v-input--is-focused fieldset,\r\n.v-text-field--outlined.v-input--has-state fieldset {\r\n  border-color: #2d52a8 !important;\r\n}\r\n\r\n.v-text-field__details {\r\n  display: none;\r\n}\r\n\r\n.material-icons {\r\n  width: 30px;\r\n  height: auto;\r\n}\r\n\r\np {\r\n  margin-bottom: 0px;\r\n  height: 20px;\r\n  line-height: 20px; /* same as height! */\r\n  display: flex;\r\n  justify-content: left;\r\n  align-content: center;\r\n  flex-direction: row;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=template&id=7e2bcf61& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&");
/* harmony import */ var _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=script&lang=js& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.render,
  _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base-components/BaseInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=template&id=7e2bcf61& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-text-field",
        {
          directives: [
            {
              name: "mask",
              rawName: "v-mask",
              value: _vm.mask,
              expression: "mask",
            },
          ],
          key: _vm.counter,
          staticClass: "mb-1",
          class: {
            "is-invalid": _vm.validation.$error,
            "is-valid": !_vm.validation.$invalid,
          },
          attrs: {
            dense: "",
            label: _vm.label,
            outlined: "",
            min: _vm.min,
            max: _vm.max,
            type: _vm.type,
            readonly: _vm.readonly,
            autocomplete: "new-password",
          },
          on: {
            input: _vm.updateValue,
            keyup: function ($event) {
              return _vm.validateText()
            },
          },
          model: {
            value: _vm.data,
            callback: function ($$v) {
              _vm.data = typeof $$v === "string" ? $$v.trim() : $$v
            },
            expression: "data",
          },
        },
        [
          _vm.validationsInput.showPassword
            ? _c(
                "v-icon",
                {
                  attrs: { slot: "append", color: "green" },
                  on: {
                    click: function ($event) {
                      return _vm.showPassword()
                    },
                  },
                  slot: "append",
                },
                [_vm._v("\n      " + _vm._s(_vm.icon) + "\n    ")]
              )
            : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "mb-0 pt-0 my-auto orange-text" },
        [
          !_vm.validation.$params.required
            ? [
                !_vm.validation.$params.required
                  ? _c("v-row", { staticClass: "pt-0" }, [
                      _c("p", { staticClass: "mb-0 mt-1 text-muted" }, [
                        _vm._v("(Campo opcional)"),
                      ]),
                    ])
                  : _vm._e(),
              ]
            : _vm._e(),
          _vm._v(" "),
          [
            _vm.validation.$error && _vm.validation.$params.required
              ? _c("v-row", { staticClass: "pt-0" }, [
                  _c("p", { staticClass: "mb-0 mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(" Campo requerido.\n        "),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.minLength && !_vm.validation.minLength
              ? _c("v-row", [
                  _c("p", { staticClass: "pl-0 mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.validation.$params.minLength.min) +
                        " carácter mínimo.\n        "
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.maxLength && !_vm.validation.maxLength
              ? _c("v-row", [
                  _c("p", { staticClass: "pl-0 pr-0 mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.validation.$params.maxLength.max) +
                        " caracteres máximo.\n        "
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.minValue && !_vm.validation.minValue
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.validation.$params.minValue.min) +
                        " es el valor mínimo.\n        "
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.maxValue && !_vm.validation.maxValue
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.validation.$params.minValue.max) +
                        " el valor máximo.\n        "
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.format && !_vm.validation.isValidNumber
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(" Formato inválido\n        "),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.https && !_vm.validation.https
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(
                      " El enlace debe de\n          iniciar con 'https://'\n        "
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.url && !_vm.validation.url
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(
                      " El texto debe de ser un\n          enlace de internet.\n        "
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.isValidDui && !_vm.validation.isValidDui
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(" DUI inválido\n        "),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.isValidNit && !_vm.validation.isValidNit
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(" NIT inválido\n        "),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.isValidIsss && !_vm.validation.isValidIsss
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(" ISSS inválido\n        "),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.isValidAfp && !_vm.validation.isValidAfp
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(" AFP inválido\n        "),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.isValidConamypeId &&
            !_vm.validation.isValidConamypeId
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(" ID de Conamype inválido\n        "),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.isValidNrc && !_vm.validation.isValidNrc
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(" NRC inválido\n        "),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.email && !_vm.validation.email
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(
                      " Formato de correo\n          electrónico inválido.\n        "
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.sameAsPassword &&
            !_vm.validation.sameAsPassword
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v(
                      " Contraseñas deben\n          coincidir.\n        "
                    ),
                  ]),
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.validation.$params.isValidPassword &&
            !_vm.validation.isValidPassword
              ? _c("v-row", [
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v("\n          1 mayúscula mínimo.\n        "),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v("\n          1 minúscula mínimo.\n        "),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mt-1" }, [
                    _c("i", { staticClass: "material-icons" }, [
                      _vm._v("error_outline"),
                    ]),
                    _vm._v("\n          13 caracteres máximo.\n        "),
                  ]),
                ])
              : _vm._e(),
          ],
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfYmFzZS1jb21wb25lbnRzX0Jhc2VJbnB1dF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdLQSxpRUFBZTtBQUNmQSxxQkFEQTtBQUVBQyxNQUZBLGtCQUVBO0FBQ0E7QUFDQUEsY0FEQTtBQUVBQyxnQkFGQTtBQUdBQztBQUhBO0FBS0EsR0FSQTtBQVNBQztBQUNBQztBQUNBQyxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBQztBQUNBRCxrQkFEQTtBQUVBO0FBRkEsS0FMQTtBQVNBRTtBQUNBRixrQkFEQTtBQUVBO0FBRkEsS0FUQTtBQWFBRztBQUNBSCxtQkFEQTtBQUVBO0FBRkEsS0FiQTtBQWlCQUE7QUFDQUEsa0JBREE7QUFFQTtBQUZBLEtBakJBO0FBcUJBSTtBQUNBSixrQkFEQTtBQUVBO0FBRkEsS0FyQkE7QUF5QkFLO0FBQ0FMLGtCQURBO0FBRUE7QUFDQTtBQUNBRyx3QkFEQTtBQUVBRyx1QkFGQTtBQUdBQywwQkFIQTtBQUlBQywwQkFKQTtBQUtBQyx5QkFMQTtBQU1BQyx5QkFOQTtBQU9BQywyQkFQQTtBQVFBQywyQkFSQTtBQVNBQyw0QkFUQTtBQVVBQywyQkFWQTtBQVdBQyxrQ0FYQTtBQVlBQywyQkFaQTtBQWFBQyxzQkFiQTtBQWNBQztBQWRBO0FBZ0JBO0FBbkJBLEtBekJBO0FBOENBQztBQUNBbkIsa0JBREE7QUFFQTtBQUZBLEtBOUNBO0FBa0RBb0I7QUFDQXBCLGtCQURBO0FBRUE7QUFGQSxLQWxEQTtBQXNEQXFCO0FBQ0FyQixtQkFEQTtBQUVBO0FBRkE7QUF0REEsR0FUQTtBQW9FQXNC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QkFBcUI7QUFDakQsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELDhCQUE4QiwrQkFBK0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRCw4QkFBOEIsK0JBQStCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELDhCQUE4QiwrQkFBK0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRCw4QkFBOEIsK0JBQStCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pELDhCQUE4QiwrQkFBK0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQsOEJBQThCLCtCQUErQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRCw4QkFBOEIsK0JBQStCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDalVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlP2I0YzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzQ2ODMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzFkMDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWU/NTk2MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZT8yYWE3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzk1NGIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2LXRleHQtZmllbGRcclxuICAgICAgZGVuc2VcclxuICAgICAgOmxhYmVsPVwibGFiZWxcIlxyXG4gICAgICBvdXRsaW5lZFxyXG4gICAgICB2LW1vZGVsLnRyaW09XCJkYXRhXCJcclxuICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICdpcy1pbnZhbGlkJzogdmFsaWRhdGlvbi4kZXJyb3IsXHJcbiAgICAgICAgJ2lzLXZhbGlkJzogIXZhbGlkYXRpb24uJGludmFsaWQsXHJcbiAgICAgIH1cIlxyXG4gICAgICA6a2V5PVwiY291bnRlclwiXHJcbiAgICAgIDptaW49XCJtaW5cIlxyXG4gICAgICA6bWF4PVwibWF4XCJcclxuICAgICAgOnR5cGU9XCJ0eXBlXCJcclxuICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxyXG4gICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZVwiXHJcbiAgICAgIHYtbWFzaz1cIm1hc2tcIlxyXG4gICAgICBAa2V5dXA9XCJ2YWxpZGF0ZVRleHQoKVwiXHJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXHJcbiAgICAgIGNsYXNzPVwibWItMVwiXHJcbiAgICA+XHJcbiAgICAgIDx2LWljb25cclxuICAgICAgICBzbG90PVwiYXBwZW5kXCJcclxuICAgICAgICBjb2xvcj1cImdyZWVuXCJcclxuICAgICAgICB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5zaG93UGFzc3dvcmRcIlxyXG4gICAgICAgIEBjbGljaz1cInNob3dQYXNzd29yZCgpXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IGljb24gfX1cclxuICAgICAgPC92LWljb24+XHJcbiAgICA8L3YtdGV4dC1maWVsZD5cclxuICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cIm1iLTAgcHQtMCBteS1hdXRvIG9yYW5nZS10ZXh0XCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIXZhbGlkYXRpb24uJHBhcmFtcy5yZXF1aXJlZFwiPlxyXG4gICAgICAgIDx2LXJvdyBjbGFzcz1cInB0LTBcIiB2LWlmPVwiIXZhbGlkYXRpb24uJHBhcmFtcy5yZXF1aXJlZFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtYi0wIG10LTEgdGV4dC1tdXRlZFwiPihDYW1wbyBvcGNpb25hbCk8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlPlxyXG4gICAgICAgIDx2LXJvd1xyXG4gICAgICAgICAgdi1pZj1cInZhbGlkYXRpb24uJGVycm9yICYmIHZhbGlkYXRpb24uJHBhcmFtcy5yZXF1aXJlZFwiXHJcbiAgICAgICAgICBjbGFzcz1cInB0LTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibWItMCBtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiBDYW1wbyByZXF1ZXJpZG8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5taW5MZW5ndGggJiYgIXZhbGlkYXRpb24ubWluTGVuZ3RoXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInBsLTAgbXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT5cclxuICAgICAgICAgICAge3sgdmFsaWRhdGlvbi4kcGFyYW1zLm1pbkxlbmd0aC5taW4gfX0gY2Fyw6FjdGVyIG3DrW5pbW8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5tYXhMZW5ndGggJiYgIXZhbGlkYXRpb24ubWF4TGVuZ3RoXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInBsLTAgcHItMCBtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPlxyXG4gICAgICAgICAgICB7eyB2YWxpZGF0aW9uLiRwYXJhbXMubWF4TGVuZ3RoLm1heCB9fSBjYXJhY3RlcmVzIG3DoXhpbW8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5taW5WYWx1ZSAmJiAhdmFsaWRhdGlvbi5taW5WYWx1ZVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPlxyXG4gICAgICAgICAgICB7eyB2YWxpZGF0aW9uLiRwYXJhbXMubWluVmFsdWUubWluIH19IGVzIGVsIHZhbG9yIG3DrW5pbW8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5tYXhWYWx1ZSAmJiAhdmFsaWRhdGlvbi5tYXhWYWx1ZVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPlxyXG4gICAgICAgICAgICB7eyB2YWxpZGF0aW9uLiRwYXJhbXMubWluVmFsdWUubWF4IH19IGVsIHZhbG9yIG3DoXhpbW8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5mb3JtYXQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZE51bWJlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiBGb3JtYXRvIGludsOhbGlkb1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uLiRwYXJhbXMuaHR0cHMgJiYgIXZhbGlkYXRpb24uaHR0cHNcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gRWwgZW5sYWNlIGRlYmUgZGVcclxuICAgICAgICAgICAgaW5pY2lhciBjb24gJ2h0dHBzOi8vJ1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uLiRwYXJhbXMudXJsICYmICF2YWxpZGF0aW9uLnVybFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiBFbCB0ZXh0byBkZWJlIGRlIHNlciB1blxyXG4gICAgICAgICAgICBlbmxhY2UgZGUgaW50ZXJuZXQuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkRHVpICYmICF2YWxpZGF0aW9uLmlzVmFsaWREdWlcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gRFVJIGludsOhbGlkb1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZE5pdCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkTml0XCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IE5JVCBpbnbDoWxpZG9cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWRJc3NzICYmICF2YWxpZGF0aW9uLmlzVmFsaWRJc3NzXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IElTU1MgaW52w6FsaWRvXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkQWZwICYmICF2YWxpZGF0aW9uLmlzVmFsaWRBZnBcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gQUZQIGludsOhbGlkb1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgPHYtcm93XHJcbiAgICAgICAgICB2LWlmPVwiXHJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkQ29uYW15cGVJZCAmJlxyXG4gICAgICAgICAgICAhdmFsaWRhdGlvbi5pc1ZhbGlkQ29uYW15cGVJZFxyXG4gICAgICAgICAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IElEIGRlIENvbmFteXBlIGludsOhbGlkb1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZE5yYyAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkTnJjXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IE5SQyBpbnbDoWxpZG9cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbi4kcGFyYW1zLmVtYWlsICYmICF2YWxpZGF0aW9uLmVtYWlsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IEZvcm1hdG8gZGUgY29ycmVvXHJcbiAgICAgICAgICAgIGVsZWN0csOzbmljbyBpbnbDoWxpZG8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC92LXJvdz5cclxuICAgICAgICA8di1yb3dcclxuICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uLiRwYXJhbXMuc2FtZUFzUGFzc3dvcmQgJiYgIXZhbGlkYXRpb24uc2FtZUFzUGFzc3dvcmRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gQ29udHJhc2XDsWFzIGRlYmVuXHJcbiAgICAgICAgICAgIGNvaW5jaWRpci5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgIDx2LXJvd1xyXG4gICAgICAgICAgdi1pZj1cIlxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZFBhc3N3b3JkICYmICF2YWxpZGF0aW9uLmlzVmFsaWRQYXNzd29yZFxyXG4gICAgICAgICAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+XHJcbiAgICAgICAgICAgIDEgbWF5w7pzY3VsYSBtw61uaW1vLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPlxyXG4gICAgICAgICAgICAxIG1pbsO6c2N1bGEgbcOtbmltby5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT5cclxuICAgICAgICAgICAgMTMgY2FyYWN0ZXJlcyBtw6F4aW1vLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvdi1yb3c+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3YtY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFwiXCIsXHJcbiAgICAgIGNvdW50ZXI6IDAsXHJcbiAgICAgIGljb246IFwidmlzaWJpbGl0eVwiLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBsYWJlbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvblRleHRUeXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogXCJcIixcclxuICAgIH0sXHJcbiAgICByZXF1aXJlZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB0eXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogXCJ0ZXh0XCIsXHJcbiAgICB9LFxyXG4gICAgbWFzazoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbnNJbnB1dDoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBmb3JtYXQ6IGZhbHNlLFxyXG4gICAgICAgICAgbWluTGVuZ3RoOiBmYWxzZSxcclxuICAgICAgICAgIG1heExlbmd0aDogZmFsc2UsXHJcbiAgICAgICAgICBtaW5WYWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICBtYXhWYWx1ZTogZmFsc2UsXHJcbiAgICAgICAgICBpc1ZhbGlkRHVpOiBmYWxzZSxcclxuICAgICAgICAgIGlzVmFsaWROaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgaXNWYWxpZElzc3M6IGZhbHNlLFxyXG4gICAgICAgICAgaXNWYWxpZEFmcDogZmFsc2UsXHJcbiAgICAgICAgICBpc1ZhbGlkQ29uYW15cGVJZDogZmFsc2UsXHJcbiAgICAgICAgICBpc1ZhbGlkTnJjOiBmYWxzZSxcclxuICAgICAgICAgIGVtYWlsOiBmYWxzZSxcclxuICAgICAgICAgIHNob3dQYXNzd29yZDogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtaW46IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwLFxyXG4gICAgfSxcclxuICAgIG1heDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDE1MCxcclxuICAgIH0sXHJcbiAgICByZWFkb25seToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgdHlwZSh2YWwpIHtcclxuICAgICAgdGhpcy5pY29uID0gdGhpcy50eXBlID09IFwicGFzc3dvcmRcIiA/IFwidmlzaWJpbGl0eVwiIDogXCJ2aXNpYmlsaXR5X29mZlwiO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLiRhdHRycy52YWx1ZTtcclxuICAgIHRoaXMudmFsaWRhdGlvbi4kcmVzZXQoKTtcclxuICB9LFxyXG4gIHVwZGF0ZWQoKSB7XHJcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnZhbGlkYXRpb24uJG1vZGVsO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdXBkYXRlVmFsdWUoKSB7XHJcbiAgICAgIHRoaXMudmFsaWRhdGlvbi4kbW9kZWwgPSB0aGlzLmRhdGE7XHJcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCB0aGlzLmRhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICB2YWxpZGF0ZVRleHQoKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudmFsaWRhdGlvblRleHRUeXBlKSB7XHJcbiAgICAgICAgICBjYXNlIFwiZGVmYXVsdFwiOlxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcclxuICAgICAgICAgICAgICAvW15BLVrDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDsVxcJyAnXS9naSxcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eKFthLXpBLVowLTldKVxcMXs0fS9naSwgXCJcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIm9ubHktbGV0dGVyc1wiOlxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcclxuICAgICAgICAgICAgICAvW15BLVrDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDsVxcJyAnXS9naSxcclxuICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIm9ubHktbnVtYmVyc1wiOlxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvW14wLTlcXC1dL2csIFwiXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJub25lXCI6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIm9ubHktcmVwZWF0c1wiOlxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXihbYS16QS1aMC05XSlcXDF7NH0vZywgXCJcIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZhbGlkYXRpb24uJG1vZGVsID0gdGhpcy5kYXRhO1xyXG4gICAgICB0aGlzLiRlbWl0KFwia2V5dXBcIiwgdGhpcy5kYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd1Bhc3N3b3JkKCkge1xyXG4gICAgICBjb25zdCBzaG93ID0gdGhpcy50eXBlID09IFwicGFzc3dvcmRcIiA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xyXG5cclxuICAgICAgdGhpcy4kZW1pdChcInVwZGF0ZS1wYXNzd29yZFwiLCB7IHNob3cgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4udi10ZXh0LWZpZWxkLS1vdXRsaW5lZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWlzLWZvY3VzZWQgZmllbGRzZXQsXHJcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWhhcy1zdGF0ZSBmaWVsZHNldCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmQ1MmE4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52LXRleHQtZmllbGRfX2RldGFpbHMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyAvKiBzYW1lIGFzIGhlaWdodCEgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG48L3N0eWxlPlxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XFxufVxcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWlzLWZvY3VzZWQgZmllbGRzZXQsXFxyXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQudi1pbnB1dC0taGFzLXN0YXRlIGZpZWxkc2V0IHtcXHJcXG4gIGJvcmRlci1jb2xvcjogIzJkNTJhOCAhaW1wb3J0YW50O1xcbn1cXG4udi10ZXh0LWZpZWxkX19kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXG59XFxucCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDsgLyogc2FtZSBhcyBoZWlnaHQhICovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWlTQTtFQUNBLGdDQUFBO0FBQ0E7QUFFQTs7RUFFQSxnQ0FBQTtBQUNBO0FBRUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0E7QUFFQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBLEVBQUEsb0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdj5cXHJcXG4gICAgPHYtdGV4dC1maWVsZFxcclxcbiAgICAgIGRlbnNlXFxyXFxuICAgICAgOmxhYmVsPVxcXCJsYWJlbFxcXCJcXHJcXG4gICAgICBvdXRsaW5lZFxcclxcbiAgICAgIHYtbW9kZWwudHJpbT1cXFwiZGF0YVxcXCJcXHJcXG4gICAgICA6Y2xhc3M9XFxcIntcXHJcXG4gICAgICAgICdpcy1pbnZhbGlkJzogdmFsaWRhdGlvbi4kZXJyb3IsXFxyXFxuICAgICAgICAnaXMtdmFsaWQnOiAhdmFsaWRhdGlvbi4kaW52YWxpZCxcXHJcXG4gICAgICB9XFxcIlxcclxcbiAgICAgIDprZXk9XFxcImNvdW50ZXJcXFwiXFxyXFxuICAgICAgOm1pbj1cXFwibWluXFxcIlxcclxcbiAgICAgIDptYXg9XFxcIm1heFxcXCJcXHJcXG4gICAgICA6dHlwZT1cXFwidHlwZVxcXCJcXHJcXG4gICAgICA6cmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIlxcclxcbiAgICAgIEBpbnB1dD1cXFwidXBkYXRlVmFsdWVcXFwiXFxyXFxuICAgICAgdi1tYXNrPVxcXCJtYXNrXFxcIlxcclxcbiAgICAgIEBrZXl1cD1cXFwidmFsaWRhdGVUZXh0KClcXFwiXFxyXFxuICAgICAgYXV0b2NvbXBsZXRlPVxcXCJuZXctcGFzc3dvcmRcXFwiXFxyXFxuICAgICAgY2xhc3M9XFxcIm1iLTFcXFwiXFxyXFxuICAgID5cXHJcXG4gICAgICA8di1pY29uXFxyXFxuICAgICAgICBzbG90PVxcXCJhcHBlbmRcXFwiXFxyXFxuICAgICAgICBjb2xvcj1cXFwiZ3JlZW5cXFwiXFxyXFxuICAgICAgICB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0LnNob3dQYXNzd29yZFxcXCJcXHJcXG4gICAgICAgIEBjbGljaz1cXFwic2hvd1Bhc3N3b3JkKClcXFwiXFxyXFxuICAgICAgPlxcclxcbiAgICAgICAge3sgaWNvbiB9fVxcclxcbiAgICAgIDwvdi1pY29uPlxcclxcbiAgICA8L3YtdGV4dC1maWVsZD5cXHJcXG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVxcXCJtYi0wIHB0LTAgbXktYXV0byBvcmFuZ2UtdGV4dFxcXCI+XFxyXFxuICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcIiF2YWxpZGF0aW9uLiRwYXJhbXMucmVxdWlyZWRcXFwiPlxcclxcbiAgICAgICAgPHYtcm93IGNsYXNzPVxcXCJwdC0wXFxcIiB2LWlmPVxcXCIhdmFsaWRhdGlvbi4kcGFyYW1zLnJlcXVpcmVkXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm1iLTAgbXQtMSB0ZXh0LW11dGVkXFxcIj4oQ2FtcG8gb3BjaW9uYWwpPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICA8L3RlbXBsYXRlPlxcclxcbiAgICAgIDx0ZW1wbGF0ZT5cXHJcXG4gICAgICAgIDx2LXJvd1xcclxcbiAgICAgICAgICB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRlcnJvciAmJiB2YWxpZGF0aW9uLiRwYXJhbXMucmVxdWlyZWRcXFwiXFxyXFxuICAgICAgICAgIGNsYXNzPVxcXCJwdC0wXFxcIlxcclxcbiAgICAgICAgPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibWItMCBtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IENhbXBvIHJlcXVlcmlkby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMubWluTGVuZ3RoICYmICF2YWxpZGF0aW9uLm1pbkxlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJwbC0wIG10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT5cXHJcXG4gICAgICAgICAgICB7eyB2YWxpZGF0aW9uLiRwYXJhbXMubWluTGVuZ3RoLm1pbiB9fSBjYXLDoWN0ZXIgbcOtbmltby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMubWF4TGVuZ3RoICYmICF2YWxpZGF0aW9uLm1heExlbmd0aFxcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJwbC0wIHByLTAgbXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPlxcclxcbiAgICAgICAgICAgIHt7IHZhbGlkYXRpb24uJHBhcmFtcy5tYXhMZW5ndGgubWF4IH19IGNhcmFjdGVyZXMgbcOheGltby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMubWluVmFsdWUgJiYgIXZhbGlkYXRpb24ubWluVmFsdWVcXFwiPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPlxcclxcbiAgICAgICAgICAgIHt7IHZhbGlkYXRpb24uJHBhcmFtcy5taW5WYWx1ZS5taW4gfX0gZXMgZWwgdmFsb3IgbcOtbmltby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMubWF4VmFsdWUgJiYgIXZhbGlkYXRpb24ubWF4VmFsdWVcXFwiPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPlxcclxcbiAgICAgICAgICAgIHt7IHZhbGlkYXRpb24uJHBhcmFtcy5taW5WYWx1ZS5tYXggfX0gZWwgdmFsb3IgbcOheGltby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMuZm9ybWF0ICYmICF2YWxpZGF0aW9uLmlzVmFsaWROdW1iZXJcXFwiPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBGb3JtYXRvIGludsOhbGlkb1xcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb24uJHBhcmFtcy5odHRwcyAmJiAhdmFsaWRhdGlvbi5odHRwc1xcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IEVsIGVubGFjZSBkZWJlIGRlXFxyXFxuICAgICAgICAgICAgaW5pY2lhciBjb24gJ2h0dHBzOi8vJ1xcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb24uJHBhcmFtcy51cmwgJiYgIXZhbGlkYXRpb24udXJsXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gRWwgdGV4dG8gZGViZSBkZSBzZXIgdW5cXHJcXG4gICAgICAgICAgICBlbmxhY2UgZGUgaW50ZXJuZXQuXFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWREdWkgJiYgIXZhbGlkYXRpb24uaXNWYWxpZER1aVxcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IERVSSBpbnbDoWxpZG9cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZE5pdCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkTml0XFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gTklUIGludsOhbGlkb1xcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkSXNzcyAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkSXNzc1xcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IElTU1MgaW52w6FsaWRvXFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWRBZnAgJiYgIXZhbGlkYXRpb24uaXNWYWxpZEFmcFxcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IEFGUCBpbnbDoWxpZG9cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgPC92LXJvdz5cXHJcXG4gICAgICAgIDx2LXJvd1xcclxcbiAgICAgICAgICB2LWlmPVxcXCJcXHJcXG4gICAgICAgICAgICB2YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZENvbmFteXBlSWQgJiZcXHJcXG4gICAgICAgICAgICAhdmFsaWRhdGlvbi5pc1ZhbGlkQ29uYW15cGVJZFxcclxcbiAgICAgICAgICBcXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IElEIGRlIENvbmFteXBlIGludsOhbGlkb1xcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkTnJjICYmICF2YWxpZGF0aW9uLmlzVmFsaWROcmNcXFwiPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBOUkMgaW52w6FsaWRvXFxyXFxuICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDwvdi1yb3c+XFxyXFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbi4kcGFyYW1zLmVtYWlsICYmICF2YWxpZGF0aW9uLmVtYWlsXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gRm9ybWF0byBkZSBjb3JyZW9cXHJcXG4gICAgICAgICAgICBlbGVjdHLDs25pY28gaW52w6FsaWRvLlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgPHYtcm93XFxyXFxuICAgICAgICAgIHYtaWY9XFxcInZhbGlkYXRpb24uJHBhcmFtcy5zYW1lQXNQYXNzd29yZCAmJiAhdmFsaWRhdGlvbi5zYW1lQXNQYXNzd29yZFxcXCJcXHJcXG4gICAgICAgID5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gQ29udHJhc2XDsWFzIGRlYmVuXFxyXFxuICAgICAgICAgICAgY29pbmNpZGlyLlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgICAgPHYtcm93XFxyXFxuICAgICAgICAgIHYtaWY9XFxcIlxcclxcbiAgICAgICAgICAgIHZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkUGFzc3dvcmQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZFBhc3N3b3JkXFxyXFxuICAgICAgICAgIFxcXCJcXHJcXG4gICAgICAgID5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT5cXHJcXG4gICAgICAgICAgICAxIG1hecO6c2N1bGEgbcOtbmltby5cXHJcXG4gICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPlxcclxcbiAgICAgICAgICAgIDEgbWluw7pzY3VsYSBtw61uaW1vLlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+XFxyXFxuICAgICAgICAgICAgMTMgY2FyYWN0ZXJlcyBtw6F4aW1vLlxcclxcbiAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8L3Ytcm93PlxcclxcbiAgICAgIDwvdGVtcGxhdGU+XFxyXFxuICAgIDwvdi1jb250YWluZXI+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcXHJcXG4gIGRhdGEoKSB7XFxyXFxuICAgIHJldHVybiB7XFxyXFxuICAgICAgZGF0YTogXFxcIlxcXCIsXFxyXFxuICAgICAgY291bnRlcjogMCxcXHJcXG4gICAgICBpY29uOiBcXFwidmlzaWJpbGl0eVxcXCIsXFxyXFxuICAgIH07XFxyXFxuICB9LFxcclxcbiAgcHJvcHM6IHtcXHJcXG4gICAgbGFiZWw6IHtcXHJcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxyXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxyXFxuICAgIH0sXFxyXFxuICAgIHZhbGlkYXRpb246IHtcXHJcXG4gICAgICB0eXBlOiBPYmplY3QsXFxyXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxyXFxuICAgIH0sXFxyXFxuICAgIHZhbGlkYXRpb25UZXh0VHlwZToge1xcclxcbiAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICBkZWZhdWx0OiBcXFwiXFxcIixcXHJcXG4gICAgfSxcXHJcXG4gICAgcmVxdWlyZWQ6IHtcXHJcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcclxcbiAgICB9LFxcclxcbiAgICB0eXBlOiB7XFxyXFxuICAgICAgdHlwZTogU3RyaW5nLFxcclxcbiAgICAgIGRlZmF1bHQ6IFxcXCJ0ZXh0XFxcIixcXHJcXG4gICAgfSxcXHJcXG4gICAgbWFzazoge1xcclxcbiAgICAgIHR5cGU6IFN0cmluZyxcXHJcXG4gICAgICBkZWZhdWx0OiBcXFwiXFxcIixcXHJcXG4gICAgfSxcXHJcXG4gICAgdmFsaWRhdGlvbnNJbnB1dDoge1xcclxcbiAgICAgIHR5cGU6IE9iamVjdCxcXHJcXG4gICAgICBkZWZhdWx0OiAoKSA9PiB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXHJcXG4gICAgICAgICAgZm9ybWF0OiBmYWxzZSxcXHJcXG4gICAgICAgICAgbWluTGVuZ3RoOiBmYWxzZSxcXHJcXG4gICAgICAgICAgbWF4TGVuZ3RoOiBmYWxzZSxcXHJcXG4gICAgICAgICAgbWluVmFsdWU6IGZhbHNlLFxcclxcbiAgICAgICAgICBtYXhWYWx1ZTogZmFsc2UsXFxyXFxuICAgICAgICAgIGlzVmFsaWREdWk6IGZhbHNlLFxcclxcbiAgICAgICAgICBpc1ZhbGlkTml0OiBmYWxzZSxcXHJcXG4gICAgICAgICAgaXNWYWxpZElzc3M6IGZhbHNlLFxcclxcbiAgICAgICAgICBpc1ZhbGlkQWZwOiBmYWxzZSxcXHJcXG4gICAgICAgICAgaXNWYWxpZENvbmFteXBlSWQ6IGZhbHNlLFxcclxcbiAgICAgICAgICBpc1ZhbGlkTnJjOiBmYWxzZSxcXHJcXG4gICAgICAgICAgZW1haWw6IGZhbHNlLFxcclxcbiAgICAgICAgICBzaG93UGFzc3dvcmQ6IGZhbHNlLFxcclxcbiAgICAgICAgfTtcXHJcXG4gICAgICB9LFxcclxcbiAgICB9LFxcclxcbiAgICBtaW46IHtcXHJcXG4gICAgICB0eXBlOiBOdW1iZXIsXFxyXFxuICAgICAgZGVmYXVsdDogMCxcXHJcXG4gICAgfSxcXHJcXG4gICAgbWF4OiB7XFxyXFxuICAgICAgdHlwZTogTnVtYmVyLFxcclxcbiAgICAgIGRlZmF1bHQ6IDE1MCxcXHJcXG4gICAgfSxcXHJcXG4gICAgcmVhZG9ubHk6IHtcXHJcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcclxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcclxcbiAgICB9LFxcclxcbiAgfSxcXHJcXG4gIHdhdGNoOiB7XFxyXFxuICAgIHR5cGUodmFsKSB7XFxyXFxuICAgICAgdGhpcy5pY29uID0gdGhpcy50eXBlID09IFxcXCJwYXNzd29yZFxcXCIgPyBcXFwidmlzaWJpbGl0eVxcXCIgOiBcXFwidmlzaWJpbGl0eV9vZmZcXFwiO1xcclxcbiAgICB9LFxcclxcbiAgfSxcXHJcXG4gIG1vdW50ZWQoKSB7XFxyXFxuICAgIHRoaXMuZGF0YSA9IHRoaXMuJGF0dHJzLnZhbHVlO1xcclxcbiAgICB0aGlzLnZhbGlkYXRpb24uJHJlc2V0KCk7XFxyXFxuICB9LFxcclxcbiAgdXBkYXRlZCgpIHtcXHJcXG4gICAgdGhpcy5kYXRhID0gdGhpcy52YWxpZGF0aW9uLiRtb2RlbDtcXHJcXG4gIH0sXFxyXFxuICBtZXRob2RzOiB7XFxyXFxuICAgIHVwZGF0ZVZhbHVlKCkge1xcclxcbiAgICAgIHRoaXMudmFsaWRhdGlvbi4kbW9kZWwgPSB0aGlzLmRhdGE7XFxyXFxuICAgICAgdGhpcy4kZW1pdChcXFwiaW5wdXRcXFwiLCB0aGlzLmRhdGEpO1xcclxcbiAgICB9LFxcclxcblxcclxcbiAgICB2YWxpZGF0ZVRleHQoKSB7XFxyXFxuICAgICAgaWYgKHRoaXMuZGF0YSkge1xcclxcbiAgICAgICAgc3dpdGNoICh0aGlzLnZhbGlkYXRpb25UZXh0VHlwZSkge1xcclxcbiAgICAgICAgICBjYXNlIFxcXCJkZWZhdWx0XFxcIjpcXHJcXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcXHJcXG4gICAgICAgICAgICAgIC9bXkEtWsOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOxXFxcXCcgJ10vZ2ksXFxyXFxuICAgICAgICAgICAgICBcXFwiXFxcIlxcclxcbiAgICAgICAgICAgICk7XFxyXFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14oW2EtekEtWjAtOV0pXFxcXDF7NH0vZ2ksIFxcXCJcXFwiKTtcXHJcXG4gICAgICAgICAgICBicmVhaztcXHJcXG4gICAgICAgICAgY2FzZSBcXFwib25seS1sZXR0ZXJzXFxcIjpcXHJcXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcXHJcXG4gICAgICAgICAgICAgIC9bXkEtWsOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOxXFxcXCcgJ10vZ2ksXFxyXFxuICAgICAgICAgICAgICBcXFwiXFxcIlxcclxcbiAgICAgICAgICAgICk7XFxyXFxuICAgICAgICAgICAgYnJlYWs7XFxyXFxuICAgICAgICAgIGNhc2UgXFxcIm9ubHktbnVtYmVyc1xcXCI6XFxyXFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL1teMC05XFxcXC1dL2csIFxcXCJcXFwiKTtcXHJcXG4gICAgICAgICAgICBicmVhaztcXHJcXG4gICAgICAgICAgY2FzZSBcXFwibm9uZVxcXCI6XFxyXFxuICAgICAgICAgICAgYnJlYWs7XFxyXFxuICAgICAgICAgIGNhc2UgXFxcIm9ubHktcmVwZWF0c1xcXCI6XFxyXFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14oW2EtekEtWjAtOV0pXFxcXDF7NH0vZywgXFxcIlxcXCIpO1xcclxcbiAgICAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgICAgICBkZWZhdWx0OlxcclxcbiAgICAgICAgICAgIGJyZWFrO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICB0aGlzLnZhbGlkYXRpb24uJG1vZGVsID0gdGhpcy5kYXRhO1xcclxcbiAgICAgIHRoaXMuJGVtaXQoXFxcImtleXVwXFxcIiwgdGhpcy5kYXRhKTtcXHJcXG4gICAgfSxcXHJcXG5cXHJcXG4gICAgc2hvd1Bhc3N3b3JkKCkge1xcclxcbiAgICAgIGNvbnN0IHNob3cgPSB0aGlzLnR5cGUgPT0gXFxcInBhc3N3b3JkXFxcIiA/IFxcXCJ0ZXh0XFxcIiA6IFxcXCJwYXNzd29yZFxcXCI7XFxyXFxuXFxyXFxuICAgICAgdGhpcy4kZW1pdChcXFwidXBkYXRlLXBhc3N3b3JkXFxcIiwgeyBzaG93IH0pO1xcclxcbiAgICB9LFxcclxcbiAgfSxcXHJcXG59O1xcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZT5cXHJcXG4udi10ZXh0LWZpZWxkLS1vdXRsaW5lZCB7XFxyXFxuICBib3JkZXItY29sb3I6ICMxOTc2ZDIgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQudi1pbnB1dC0taXMtZm9jdXNlZCBmaWVsZHNldCxcXHJcXG4udi10ZXh0LWZpZWxkLS1vdXRsaW5lZC52LWlucHV0LS1oYXMtc3RhdGUgZmllbGRzZXQge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjMmQ1MmE4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi52LXRleHQtZmllbGRfX2RldGFpbHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1hdGVyaWFsLWljb25zIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyAvKiBzYW1lIGFzIGhlaWdodCEgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOVswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2UyYmNmNjEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEluZm9ybcOhdGljYVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNNQ1xcXFxhZ2VuZGEtZGlnaXRhbFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZTJiY2Y2MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZTJiY2Y2MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZTJiY2Y2MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTJiY2Y2MSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZTJiY2Y2MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05WzBdLnJ1bGVzWzBdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTlbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2UyYmNmNjEmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtdGV4dC1maWVsZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1hc2tcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1hc2tcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5tYXNrLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hc2tcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBrZXk6IF92bS5jb3VudGVyLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTFcIixcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52YWxpZGF0aW9uLiRlcnJvcixcbiAgICAgICAgICAgIFwiaXMtdmFsaWRcIjogIV92bS52YWxpZGF0aW9uLiRpbnZhbGlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGRlbnNlOiBcIlwiLFxuICAgICAgICAgICAgbGFiZWw6IF92bS5sYWJlbCxcbiAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgICAgbWluOiBfdm0ubWluLFxuICAgICAgICAgICAgbWF4OiBfdm0ubWF4LFxuICAgICAgICAgICAgdHlwZTogX3ZtLnR5cGUsXG4gICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm5ldy1wYXNzd29yZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGlucHV0OiBfdm0udXBkYXRlVmFsdWUsXG4gICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZhbGlkYXRlVGV4dCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kYXRhID0gdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIiA/ICQkdi50cmltKCkgOiAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnZhbGlkYXRpb25zSW5wdXQuc2hvd1Bhc3N3b3JkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJhcHBlbmRcIiwgY29sb3I6IFwiZ3JlZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dQYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc2xvdDogXCJhcHBlbmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBcIiArIF92bS5fcyhfdm0uaWNvbikgKyBcIlxcbiAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0wIHB0LTAgbXktYXV0byBvcmFuZ2UtdGV4dFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICAhX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5yZXF1aXJlZFxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgIV92bS52YWxpZGF0aW9uLiRwYXJhbXMucmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCB7IHN0YXRpY0NsYXNzOiBcInB0LTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMCBtdC0xIHRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIoQ2FtcG8gb3BjaW9uYWwpXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRlcnJvciAmJiBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLnJlcXVpcmVkXG4gICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCB7IHN0YXRpY0NsYXNzOiBcInB0LTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wIG10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQ2FtcG8gcmVxdWVyaWRvLlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLm1pbkxlbmd0aCAmJiAhX3ZtLnZhbGlkYXRpb24ubWluTGVuZ3RoXG4gICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJwbC0wIG10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52YWxpZGF0aW9uLiRwYXJhbXMubWluTGVuZ3RoLm1pbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgY2Fyw6FjdGVyIG3DrW5pbW8uXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLm1heExlbmd0aCAmJiAhX3ZtLnZhbGlkYXRpb24ubWF4TGVuZ3RoXG4gICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJwbC0wIHByLTAgbXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5tYXhMZW5ndGgubWF4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBjYXJhY3RlcmVzIG3DoXhpbW8uXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLm1pblZhbHVlICYmICFfdm0udmFsaWRhdGlvbi5taW5WYWx1ZVxuICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5taW5WYWx1ZS5taW4pICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIGVzIGVsIHZhbG9yIG3DrW5pbW8uXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLm1heFZhbHVlICYmICFfdm0udmFsaWRhdGlvbi5tYXhWYWx1ZVxuICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5taW5WYWx1ZS5tYXgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIGVsIHZhbG9yIG3DoXhpbW8uXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLmZvcm1hdCAmJiAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZE51bWJlclxuICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBGb3JtYXRvIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLmh0dHBzICYmICFfdm0udmFsaWRhdGlvbi5odHRwc1xuICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIiBFbCBlbmxhY2UgZGViZSBkZVxcbiAgICAgICAgICBpbmljaWFyIGNvbiAnaHR0cHM6Ly8nXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLnVybCAmJiAhX3ZtLnZhbGlkYXRpb24udXJsXG4gICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiIEVsIHRleHRvIGRlYmUgZGUgc2VyIHVuXFxuICAgICAgICAgIGVubGFjZSBkZSBpbnRlcm5ldC5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZER1aSAmJiAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZER1aVxuICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBEVUkgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZE5pdCAmJiAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZE5pdFxuICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBOSVQgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZElzc3MgJiYgIV92bS52YWxpZGF0aW9uLmlzVmFsaWRJc3NzXG4gICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIElTU1MgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZEFmcCAmJiAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZEFmcFxuICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBBRlAgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZENvbmFteXBlSWQgJiZcbiAgICAgICAgICAgICFfdm0udmFsaWRhdGlvbi5pc1ZhbGlkQ29uYW15cGVJZFxuICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBJRCBkZSBDb25hbXlwZSBpbnbDoWxpZG9cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkTnJjICYmICFfdm0udmFsaWRhdGlvbi5pc1ZhbGlkTnJjXG4gICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE5SQyBpbnbDoWxpZG9cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5lbWFpbCAmJiAhX3ZtLnZhbGlkYXRpb24uZW1haWxcbiAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCIgRm9ybWF0byBkZSBjb3JyZW9cXG4gICAgICAgICAgZWxlY3Ryw7NuaWNvIGludsOhbGlkby5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuc2FtZUFzUGFzc3dvcmQgJiZcbiAgICAgICAgICAgICFfdm0udmFsaWRhdGlvbi5zYW1lQXNQYXNzd29yZFxuICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIiBDb250cmFzZcOxYXMgZGViZW5cXG4gICAgICAgICAgY29pbmNpZGlyLlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkUGFzc3dvcmQgJiZcbiAgICAgICAgICAgICFfdm0udmFsaWRhdGlvbi5pc1ZhbGlkUGFzc3dvcmRcbiAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgMSBtYXnDunNjdWxhIG3DrW5pbW8uXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIDEgbWluw7pzY3VsYSBtw61uaW1vLlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAxMyBjYXJhY3RlcmVzIG3DoXhpbW8uXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF0sXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sIm5hbWVzIjpbImluaGVyaXRBdHRycyIsImRhdGEiLCJjb3VudGVyIiwiaWNvbiIsInByb3BzIiwibGFiZWwiLCJ0eXBlIiwidmFsaWRhdGlvbiIsInZhbGlkYXRpb25UZXh0VHlwZSIsInJlcXVpcmVkIiwibWFzayIsInZhbGlkYXRpb25zSW5wdXQiLCJmb3JtYXQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiaXNWYWxpZER1aSIsImlzVmFsaWROaXQiLCJpc1ZhbGlkSXNzcyIsImlzVmFsaWRBZnAiLCJpc1ZhbGlkQ29uYW15cGVJZCIsImlzVmFsaWROcmMiLCJlbWFpbCIsInNob3dQYXNzd29yZCIsIm1pbiIsIm1heCIsInJlYWRvbmx5Iiwid2F0Y2giLCJ2YWwiLCJtb3VudGVkIiwidXBkYXRlZCIsIm1ldGhvZHMiLCJ1cGRhdGVWYWx1ZSIsInZhbGlkYXRlVGV4dCIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9