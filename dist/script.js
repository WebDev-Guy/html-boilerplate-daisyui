/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");

const steamWrapper = document.getElementById("steam-wrapper");
const steamPaths = [
    // You can add more custom SVG path curves here for even better realism
    "M64.2,40.6c-2.7,23.8,18,21,18.3,39.6c0.3,17.5-31.7,16.8-32.8,36c1.5,26.9,39.4,18.9,41.4,49.5c1.8,27.8-42.1,37.8-41,53.1",
    "M39.2,10.5C41.3,30.2,24,27.9,24.8,43.2C25.4,55.1,50.5,58.9,50.5,73c0,19.3-29.7,20.6-31.3,45.8c-1.9,30.8,37.8,25.6,40.4,57.7",
    "M95.7,56c1.8,18.8,13,16.6,12.4,31.2C107.6,98.6,86,102.1,86,115.6c0,18.5,28,19.2,28.6,50.6c0.5,24.3-29.5,36.5-27.6,47.4"
];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createSteamPath(pathData, cloudClass) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.classList.add("steam-cloud", cloudClass);
    // Add inline style for subtle random drifting + realism
    const driftX = getRandomInt(-10, 10); // horizontal drift
    const scaleX = 1 + Math.random() * 0.2;
    const delay = getRandomInt(0, 10);
    const duration = getRandomInt(18, 36);
    path.style.animation = `float-steam ${duration}s ease-in-out ${delay}s infinite`;
    path.style.transform = `translateX(${driftX}px) scaleX(${scaleX.toFixed(2)})`;
    return path;
}
function generateSteamClouds(cloudCount = 10) {
    if (!steamWrapper)
        return;
    for (let i = 0; i < cloudCount; i++) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "-10 -20 150 250");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("class", "steam-flow");
        const groupCount = getRandomInt(1, 3); // 1–3 steam paths per group
        for (let j = 0; j < groupCount; j++) {
            const pathData = steamPaths[getRandomInt(0, steamPaths.length - 1)];
            const cloudClass = `cloud-${getRandomInt(1, 3)}`; // Assign cloud-1 to cloud-3
            const path = createSteamPath(pathData, cloudClass);
            svg.appendChild(path);
        }
        steamWrapper.appendChild(svg);
    }
    setTimeout(() => {
        const steam = document.getElementById('steam-wrapper');
        if (steam) {
            steam.style.opacity = '1';
        }
    }, 600);
}
generateSteamClouds(5); // Increase for denser steam

})();

/******/ })()
;