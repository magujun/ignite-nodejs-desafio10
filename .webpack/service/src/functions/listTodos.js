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

/***/ "./src/functions/listTodos.ts":
/*!************************************!*\
  !*** ./src/functions/listTodos.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _utils_dynamoDBClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dynamoDBClient */ \"./src/utils/dynamoDBClient.ts\");\n\nconst handle = async (event) => {\n    const { user_id } = event.pathParameters;\n    const response = await _utils_dynamoDBClient__WEBPACK_IMPORTED_MODULE_0__.document.scan({\n        TableName: 'todos',\n        IndexName: 'userTodos',\n        FilterExpression: 'user_id = :user_id',\n        ExpressionAttributeValues: {\n            ':user_id': user_id,\n        },\n    })\n        .promise();\n    const userTodos = response.Items.filter((todo) => todo.user_id === user_id);\n    if (userTodos.length > 0) {\n        return {\n            statusCode: 200,\n            body: JSON.stringify({\n                todos: userTodos,\n            }),\n            headers: {\n                'Content-Type': 'application/json',\n            },\n        };\n    }\n    return {\n        statusCode: 400,\n        body: JSON.stringify({\n            message: 'Invalid user!',\n        }),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2xpc3RUb2Rvcy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbml0ZS1ub2RlanMtZGVzYWZpbzEwLy4vc3JjL2Z1bmN0aW9ucy9saXN0VG9kb3MudHM/NzY4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSAnLi4vdXRpbHMvZHluYW1vREJDbGllbnQnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKFxuXHRldmVudCxcbikgPT4ge1xuXHRjb25zdCB7IHVzZXJfaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGRvY3VtZW50XG5cdFx0LnNjYW4oe1xuXHRcdFx0VGFibGVOYW1lOiAndG9kb3MnLFxuXHRcdFx0SW5kZXhOYW1lOiAndXNlclRvZG9zJyxcblx0XHRcdEZpbHRlckV4cHJlc3Npb246ICd1c2VyX2lkID0gOnVzZXJfaWQnLFxuXHRcdFx0RXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuXHRcdFx0XHQnOnVzZXJfaWQnOiB1c2VyX2lkLFxuXHRcdFx0fSxcblx0XHR9KVxuXHRcdC5wcm9taXNlKCk7XG5cdGNvbnN0IHVzZXJUb2RvcyA9IHJlc3BvbnNlLkl0ZW1zLmZpbHRlcihcblx0XHQodG9kbykgPT4gdG9kby51c2VyX2lkID09PSB1c2VyX2lkLFxuXHQpO1xuXHRpZiAodXNlclRvZG9zLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzQ29kZTogMjAwLFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHR0b2RvczogdXNlclRvZG9zLFxuXHRcdFx0fSksXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9LFxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRzdGF0dXNDb2RlOiA0MDAsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0bWVzc2FnZTogJ0ludmFsaWQgdXNlciEnLFxuXHRcdH0pLFxuXHR9O1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUVBO0FBR0E7QUFDQSwyRkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/listTodos.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/listTodos.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;