/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = 'vendor-chunks/is-node-process';
exports.ids = ['vendor-chunks/is-node-process'];
exports.modules = {
  /***/ '(ssr)/./node_modules/is-node-process/lib/index.js':
    /*!***************************************************!*\
  !*** ./node_modules/is-node-process/lib/index.js ***!
  \***************************************************/
    /***/ (module) => {
      eval(
        'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// src/index.ts\nvar src_exports = {};\n__export(src_exports, {\n  isNodeProcess: () => isNodeProcess\n});\nmodule.exports = __toCommonJS(src_exports);\nfunction isNodeProcess() {\n  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {\n    return true;\n  }\n  if (typeof process !== "undefined") {\n    const type = process.type;\n    if (type === "renderer" || type === "worker") {\n      return false;\n    }\n    return !!(process.versions && process.versions.node);\n  }\n  return false;\n}\n// Annotate the CommonJS export names for ESM import in node:\n0 && (0);\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtbm9kZS1wcm9jZXNzL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxDQUVMO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcmVhY3QtY2hha3JhdWkvLi9ub2RlX21vZHVsZXMvaXMtbm9kZS1wcm9jZXNzL2xpYi9pbmRleC5qcz9jOWE4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIHNyY19leHBvcnRzID0ge307XG5fX2V4cG9ydChzcmNfZXhwb3J0cywge1xuICBpc05vZGVQcm9jZXNzOiAoKSA9PiBpc05vZGVQcm9jZXNzXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKHNyY19leHBvcnRzKTtcbmZ1bmN0aW9uIGlzTm9kZVByb2Nlc3MoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSBcIlJlYWN0TmF0aXZlXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCB0eXBlID0gcHJvY2Vzcy50eXBlO1xuICAgIGlmICh0eXBlID09PSBcInJlbmRlcmVyXCIgfHwgdHlwZSA9PT0gXCJ3b3JrZXJcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISEocHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbi8vIEFubm90YXRlIHRoZSBDb21tb25KUyBleHBvcnQgbmFtZXMgZm9yIEVTTSBpbXBvcnQgaW4gbm9kZTpcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICBpc05vZGVQcm9jZXNzXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-node-process/lib/index.js\n',
      );

      /***/
    },

  /***/ '(ssr)/./node_modules/is-node-process/lib/index.mjs':
    /*!****************************************************!*\
  !*** ./node_modules/is-node-process/lib/index.mjs ***!
  \****************************************************/
    /***/ (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isNodeProcess: () => (/* binding */ isNodeProcess)\n/* harmony export */ });\n// src/index.ts\nfunction isNodeProcess() {\n  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {\n    return true;\n  }\n  if (typeof process !== "undefined") {\n    const type = process.type;\n    if (type === "renderer" || type === "worker") {\n      return false;\n    }\n    return !!(process.versions && process.versions.node);\n  }\n  return false;\n}\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtbm9kZS1wcm9jZXNzL2xpYi9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXJlYWN0LWNoYWtyYXVpLy4vbm9kZV9tb2R1bGVzL2lzLW5vZGUtcHJvY2Vzcy9saWIvaW5kZXgubWpzPzI0YTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL2luZGV4LnRzXG5mdW5jdGlvbiBpc05vZGVQcm9jZXNzKCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gXCJSZWFjdE5hdGl2ZVwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY29uc3QgdHlwZSA9IHByb2Nlc3MudHlwZTtcbiAgICBpZiAodHlwZSA9PT0gXCJyZW5kZXJlclwiIHx8IHR5cGUgPT09IFwid29ya2VyXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICEhKHByb2Nlc3MudmVyc2lvbnMgJiYgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQge1xuICBpc05vZGVQcm9jZXNzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-node-process/lib/index.mjs\n',
      );

      /***/
    },
};
