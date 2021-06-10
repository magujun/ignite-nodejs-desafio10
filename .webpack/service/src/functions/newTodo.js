/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/newTodo.ts":
/*!**********************************!*\
  !*** ./src/functions/newTodo.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_dynamoDBClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dynamoDBClient */ \"./src/utils/dynamoDBClient.ts\");\n\n\n\nconst handle = async (event) => {\n    const { user_id } = event.pathParameters;\n    const { title, deadline, id } = JSON.parse(event.body);\n    const deadlineDate = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(deadline).format('YYYY-MM-DD');\n    console.log(deadlineDate);\n    await _utils_dynamoDBClient__WEBPACK_IMPORTED_MODULE_2__.document.put({\n        TableName: 'todos',\n        Item: {\n            id: id ? id : (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),\n            user_id,\n            title,\n            done: false,\n            deadline: deadlineDate,\n        },\n    })\n        .promise();\n    return {\n        statusCode: 201,\n        body: JSON.stringify({\n            message: 'New todo created!',\n        }),\n        headers: { 'Content-Type': 'application/json' },\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL25ld1RvZG8udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pdGUtbm9kZWpzLWRlc2FmaW8xMC8uL3NyYy9mdW5jdGlvbnMvbmV3VG9kby50cz8zNDllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkVjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSAnLi4vdXRpbHMvZHluYW1vREJDbGllbnQnO1xuXG5pbnRlcmZhY2UgSVRvZG8ge1xuXHRpZDogU3RyaW5nO1xuXHR1c2VyX2lkOiBTdHJpbmc7XG5cdHRpdGxlOiBTdHJpbmc7XG5cdGRvbmU6IEJvb2xlYW47XG5cdGRlYWRsaW5lOiBEYXRlO1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKFxuXHRldmVudCxcbikgPT4ge1xuXHRjb25zdCB7IHVzZXJfaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xuXHRjb25zdCB7IHRpdGxlLCBkZWFkbGluZSwgaWQgfSA9IEpTT04ucGFyc2UoXG5cdFx0ZXZlbnQuYm9keSxcblx0KSBhcyBJVG9kbztcblx0Y29uc3QgZGVhZGxpbmVEYXRlID0gZGF5anMoZGVhZGxpbmUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuXHRjb25zb2xlLmxvZyhkZWFkbGluZURhdGUpO1xuXHRhd2FpdCBkb2N1bWVudFxuXHRcdC5wdXQoe1xuXHRcdFx0VGFibGVOYW1lOiAndG9kb3MnLFxuXHRcdFx0SXRlbToge1xuXHRcdFx0XHRpZDogaWQgPyBpZCA6IHV1aWRWNCgpLFxuXHRcdFx0XHR1c2VyX2lkLFxuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0ZG9uZTogZmFsc2UsXG5cdFx0XHRcdGRlYWRsaW5lOiBkZWFkbGluZURhdGUsXG5cdFx0XHR9LFxuXHRcdH0pXG5cdFx0LnByb21pc2UoKTtcblxuXHRyZXR1cm4ge1xuXHRcdHN0YXR1c0NvZGU6IDIwMSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRtZXNzYWdlOiAnTmV3IHRvZG8gY3JlYXRlZCEnLFxuXHRcdH0pLFxuXHRcdGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuXHR9O1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBLHlFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/newTodo.ts\n");

/***/ }),

/***/ "./src/utils/dynamoDBClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamoDBClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: 'localhost',\n    endpoint: 'http://localhost:8000',\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE;\n};\nconst document = isOffline()\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vREJDbGllbnQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25pdGUtbm9kZWpzLWRlc2FmaW8xMC8uL3NyYy91dGlscy9keW5hbW9EQkNsaWVudC50cz9kOTBhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSAnYXdzLXNkayc7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG5cdHJlZ2lvbjogJ2xvY2FsaG9zdCcsXG5cdGVuZHBvaW50OiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwJyxcbn07XG5cbmNvbnN0IGlzT2ZmbGluZSA9ICgpID0+IHtcblx0cmV0dXJuIHByb2Nlc3MuZW52LklTX09GRkxJTkU7XG59O1xuXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSBpc09mZmxpbmUoKVxuXHQ/IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudChvcHRpb25zKVxuXHQ6IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/dynamoDBClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");;

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/newTodo.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;