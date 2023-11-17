'use strict';
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = '_ssr_src_mocks_server_js';
exports.ids = ['_ssr_src_mocks_server_js'];
exports.modules = {
  /***/ '(ssr)/./src/mocks/handlers.js':
    /*!*******************************!*\
  !*** ./src/mocks/handlers.js ***!
  \*******************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handlers: () => (/* binding */ handlers)\n/* harmony export */ });\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! msw */ "(ssr)/./node_modules/msw/lib/index.js");\n/* harmony import */ var msw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(msw__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handlers = [\n    msw__WEBPACK_IMPORTED_MODULE_0__.rest.get(`/msw/api/posts`, (req, res, ctx)=>{\n        return res(ctx.status(200), ctx.delay(1000), ctx.json({\n            data: [\n                {\n                    userId: 1,\n                    id: 1,\n                    title: "hello world",\n                    body: "it is body"\n                },\n                {\n                    userId: 2,\n                    id: 2,\n                    title: "hello world",\n                    body: "it is body"\n                },\n                {\n                    userId: 3,\n                    id: 3,\n                    title: "hello world",\n                    body: "it is body"\n                }\n            ]\n        }));\n    })\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvbW9ja3MvaGFuZGxlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBRXBCLE1BQU1DLFdBQVc7SUFDdEJELHFDQUFJQSxDQUFDRSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDQyxLQUFLQyxLQUFLQztRQUNwQyxPQUFPRCxJQUNMQyxJQUFJQyxNQUFNLENBQUMsTUFDWEQsSUFBSUUsS0FBSyxDQUFDLE9BQ1ZGLElBQUlHLElBQUksQ0FBQztZQUNQQyxNQUFNO2dCQUNKO29CQUNFQyxRQUFRO29CQUNSQyxJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFSCxRQUFRO29CQUNSQyxJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFSCxRQUFRO29CQUNSQyxJQUFJO29CQUNKQyxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2FBQ0Q7UUFDSDtJQUVKO0NBQ0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1yZWFjdC1jaGFrcmF1aS8uL3NyYy9tb2Nrcy9oYW5kbGVycy5qcz9lNTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc3QgfSBmcm9tICdtc3cnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZXJzID0gW1xyXG4gIHJlc3QuZ2V0KGAvbXN3L2FwaS9wb3N0c2AsIChyZXEsIHJlcywgY3R4KSA9PiB7XHJcbiAgICByZXR1cm4gcmVzKFxyXG4gICAgICBjdHguc3RhdHVzKDIwMCksXHJcbiAgICAgIGN0eC5kZWxheSgxMDAwKSxcclxuICAgICAgY3R4Lmpzb24oe1xyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcklkOiAxLFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgdGl0bGU6ICdoZWxsbyB3b3JsZCcsXHJcbiAgICAgICAgICAgIGJvZHk6ICdpdCBpcyBib2R5JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogMixcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnaGVsbG8gd29ybGQnLFxyXG4gICAgICAgICAgICBib2R5OiAnaXQgaXMgYm9keScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VySWQ6IDMsXHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICB0aXRsZTogJ2hlbGxvIHdvcmxkJyxcclxuICAgICAgICAgICAgYm9keTogJ2l0IGlzIGJvZHknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgICk7XHJcbiAgfSksXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJyZXN0IiwiaGFuZGxlcnMiLCJnZXQiLCJyZXEiLCJyZXMiLCJjdHgiLCJzdGF0dXMiLCJkZWxheSIsImpzb24iLCJkYXRhIiwidXNlcklkIiwiaWQiLCJ0aXRsZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./src/mocks/handlers.js\n',
      );

      /***/
    },

  /***/ '(ssr)/./src/mocks/server.js':
    /*!*****************************!*\
  !*** ./src/mocks/server.js ***!
  \*****************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   server: () => (/* binding */ server)\n/* harmony export */ });\n/* harmony import */ var msw_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! msw/node */ "(ssr)/./node_modules/msw/lib/node/index.mjs");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ "(ssr)/./src/mocks/handlers.js");\n\n\nconst server = (0,msw_node__WEBPACK_IMPORTED_MODULE_1__.setupServer)(..._handlers__WEBPACK_IMPORTED_MODULE_0__.handlers);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvbW9ja3Mvc2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUNEO0FBRS9CLE1BQU1FLFNBQVNGLHFEQUFXQSxJQUFJQywrQ0FBUUEsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1yZWFjdC1jaGFrcmF1aS8uL3NyYy9tb2Nrcy9zZXJ2ZXIuanM/MTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR1cFNlcnZlciB9IGZyb20gJ21zdy9ub2RlJztcclxuaW1wb3J0IHsgaGFuZGxlcnMgfSBmcm9tICcuL2hhbmRsZXJzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBzZXR1cFNlcnZlciguLi5oYW5kbGVycyk7XHJcbiJdLCJuYW1lcyI6WyJzZXR1cFNlcnZlciIsImhhbmRsZXJzIiwic2VydmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/mocks/server.js\n',
      );

      /***/
    },
};
