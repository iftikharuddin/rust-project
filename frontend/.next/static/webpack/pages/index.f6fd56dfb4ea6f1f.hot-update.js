"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/solanapdas.json":
/*!****************************************!*\
  !*** ./src/components/solanapdas.json ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = JSON.parse('{"address":"5sf3oNJKEARM9ia6yew3xGVcct8244xHxLEPQ4F2cFQb","metadata":{"name":"solanapdas","version":"0.1.0","spec":"0.1.0","description":"Created with Anchor"},"instructions":[{"name":"create","discriminator":[24,30,200,40,5,28,7,119],"accounts":[{"name":"bank","writable":true,"pda":{"seeds":[{"kind":"const","value":[98,97,110,107,97,99,99,111,117,110,116]},{"kind":"account","path":"user"}]}},{"name":"user","writable":true,"signer":true},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[{"name":"name","type":"string"}]},{"name":"deposit","discriminator":[242,35,198,137,82,225,242,182],"accounts":[{"name":"bank","writable":true},{"name":"user","writable":true,"signer":true},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[{"name":"amount","type":"u64"}]},{"name":"withdraw","discriminator":[183,18,70,156,148,109,161,34],"accounts":[{"name":"bank","writable":true},{"name":"user","writable":true,"signer":true}],"args":[{"name":"amount","type":"u64"}]}],"accounts":[{"name":"Bank","discriminator":[142,49,166,242,50,66,97,188]}],"types":[{"name":"Bank","type":{"kind":"struct","fields":[{"name":"name","type":"string"},{"name":"balance","type":"u64"},{"name":"owner","type":"pubkey"}]}}]}');

/***/ })

});