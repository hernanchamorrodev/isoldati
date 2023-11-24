/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function(){\r\n\r\n        // utilizar provider y geocoder\r\n\r\n        const latitud = document.querySelector(\"#lat\").value || -34.6141937;\r\n        const longitud = document.querySelector('#lng').value || -58.4593684;\r\n        const mapa = L.map('map').setView([latitud, longitud], 12);\r\n\r\n        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n            attribution: 'Mapa CABA',\r\n            maxZoom: 18,\r\n        }).addTo(mapa);\r\n\r\n        // PIN\r\n        const marker = new L.marker([latitud, longitud], {\r\n            draggable: true,\r\n            autoPan: true\r\n        }).addTo(mapa);\r\n\r\n        // detectar lat long \r\n        marker = addEventListener('moveend', (e) => {\r\n            marker = e.target;\r\n            const posicion = marker.getLatLng();\r\n            mapa.panTo(new L.LatLng(posicion.lat, posicion.lng));\r\n            document.querySelector('#lat').value = posicion.lat;\r\n            document.querySelector('#lng').value = posicion.lng;\r\n\r\n        });\r\n    }\r\n)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://bienesraices_mvc/./src/js/map.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/map.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;