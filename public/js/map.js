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

eval("__webpack_require__.r(__webpack_exports__);\n(\r\n    // ubicacion : Buenos aires\r\n    // zoom : 12\r\n    // tipo de mapa : satelite\r\n    // marcador : true\r\n\r\n    function(){\r\n        // Buenos Aires, Argentina\r\n        const latitud = documents.querySelector('#lat').value || -34.6036844;\r\n        const longitud = documents.querySelector('#lng').value || -58.3815591;\r\n        const mapa = L.map('map').setView([latitud, longitud], 12);\r\n\r\n        // Provider y geocoder\r\n        const geocodeService = L.esri.Geocoding.geocodeService();\r\n        \r\n\r\n        // Agregar el tile layer a openstreetmap\r\n        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n            attribution: '&copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors'\r\n            }).addTo(mapa);\r\n\r\n        let marker = L.marker([latitud, longitud], {\r\n            draggable: true,\r\n            title: \"Ubicalo en el mapa\",\r\n            alt: \"El mapa de Buenos Aires\",\r\n            riseOnHover: true,\r\n            autoPan: true,\r\n        })\r\n\r\n        marker.addTo(mapa);\r\n        // detectar movimiento del marcador\r\n        \r\n        marker.on('moveend', function(e){\r\n            marker = e.target;\r\n            const posicion = marker.getLatLng();\r\n            mapa.panTo(new L.LatLng(posicion.lat, posicion.lng));\r\n\r\n            // Reverse Geocoding, cuando el usuario reubica el marcador\r\n            geocodeService.reverse().latlng(posicion, 16).run(function(error, resultado){\r\n                marker.bindPopup(resultado.address.LongLabel);\r\n                marker.openPopup();\r\n\r\n                document.querySelector('.calle').value = resultado?.address?.Address ?? '';\r\n                document.querySelector('.lat').value = resultado?.latlng?.lat ?? '';\r\n                document.querySelector('.lng').value = resultado?.latlng?.lng ?? '';\r\n\r\n            }\r\n            );\r\n\r\n\r\n\r\n        });\r\n    }\r\n)();\r\n\r\n\r\n\n\n//# sourceURL=webpack://bienesraices_mvc/./src/js/map.js?");

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