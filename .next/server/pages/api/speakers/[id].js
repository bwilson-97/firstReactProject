"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/speakers/[id]";
exports.ids = ["pages/api/speakers/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/[id].js":
/*!************************************!*\
  !*** ./pages/api/speakers/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//import speakerData from '../../../src/SpeakerData';\n\n\nconst { promisify  } = __webpack_require__(/*! util */ \"util\");\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));\nconst delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms)\n    )\n;\nasync function handler(req, res) {\n    //res.status(200).send(JSON.stringify(speakerData,null,2));\n    const method = req === null || req === void 0 ? void 0 : req.method;\n    const id = parseInt(req === null || req === void 0 ? void 0 : req.query.id);\n    const recordFromBody = req === null || req === void 0 ? void 0 : req.body;\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    switch(method){\n        case \"POST\":\n            await postMethod();\n            break;\n        case \"PUT\":\n            await putMethod();\n            break;\n        case \"DELETE\":\n            await deleteMethod();\n            break;\n        default:\n            res.status(501).send(`Method ${method} not implemented`);\n            console.log(`Method ${method} not implemented`);\n    }\n    async function putMethod() {\n        try {\n            const readFileData = await readFile(jsonFile);\n            await delay(1000);\n            const speakers = JSON.parse(readFileData).speakers;\n            if (!speakers) {\n                res.status(404).send(\"Error: Request failed with status code 404\");\n            } else {\n                const newSpeakersArray = speakers.map(function(rec) {\n                    return rec.id == id ? recordFromBody : rec;\n                });\n                writeFile(jsonFile, JSON.stringify({\n                    speakers: newSpeakersArray\n                }, null, 2));\n                res.setHeader(\"Content-Type\", \"application/json\");\n                res.status(200).send(JSON.stringify(recordFromBody, null, 2));\n                console.log(`PUT /api/speakers/${id}  status: 200`);\n            }\n        } catch (e) {\n            res.status(500).send(`PUT /api/speakers/${id}  status: 500 unexpected error`);\n            console.log(`PUT /api/speakers/${id}  status: 200`, e);\n        }\n    }\n    async function deleteMethod() {\n        try {\n            const readFileData = await readFile(jsonFile);\n            await delay(1000);\n            const speakers = JSON.parse(readFileData).speakers;\n            if (!speakers) {\n                res.status(404).send(\"Error: Request failed with status code 404\");\n            } else {\n                const newSpeakersArray = speakers.filter(function(rec) {\n                    return rec.id != id;\n                });\n                writeFile(jsonFile, JSON.stringify({\n                    speakers: newSpeakersArray\n                }, null, 2));\n                res.setHeader(\"Content-Type\", \"application/json\");\n                res.status(200).send(JSON.stringify(speakers.find((rec)=>rec.id == id\n                ), null, 2));\n                console.log(`DELETE /api/speakers/${id}  status: 200`);\n            }\n        } catch (e) {\n            res.status(500).send(`DELETE /api/speakers/${id}  status: 500 unexpected error`);\n            console.log(`DELETE /api/speakers/${id}  status: 200`, e);\n        }\n    }\n    async function postMethod() {\n        try {\n            const readFileData = await readFile(jsonFile);\n            await delay(1000);\n            const speakers = JSON.parse(readFileData).speakers;\n            if (!speakers) {\n                res.status(404).send(\"Error: Request failed with status code 404\");\n            } else {\n                const idNew = speakers.reduce((accumulator, currentValue)=>{\n                    const idCurrent = parseInt(currentValue.id);\n                    return idCurrent > accumulator ? idCurrent : accumulator;\n                }, 0) + 1;\n                const newSpeakerRec = {\n                    ...recordFromBody,\n                    id: idNew.toString()\n                };\n                const newSpeakersArray = [\n                    newSpeakerRec,\n                    ...speakers\n                ];\n                writeFile(jsonFile, JSON.stringify({\n                    speakers: newSpeakersArray\n                }, null, 2));\n                res.setHeader(\"Content-Type\", \"application/json\");\n                res.status(200).send(JSON.stringify(newSpeakerRec, null, 2));\n                console.log(`POST /api/speakers/${id}  status: 200`);\n            }\n        } catch (e) {\n            res.status(500).send(`POST /api/speakers/${id}  status: 500 unexpected error`);\n            console.log(`POST /api/speakers/${id}  status: 200`, e);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BlYWtlcnMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLEVBQXFEO0FBRTlCO0FBQ0o7QUFFbkIsS0FBSyxDQUFDLENBQUMsQ0FBQ0UsU0FBUyxFQUFDLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxrQkFBTTtBQUNwQyxLQUFLLENBQUNDLFFBQVEsR0FBR0YsU0FBUyxDQUFDRCxvREFBVztBQUN0QyxLQUFLLENBQUNJLFNBQVMsR0FBR0gsU0FBUyxDQUFDRCxxREFBWTtBQUN4QyxLQUFLLENBQUNLLEtBQUssSUFBSUMsRUFBRSxHQUFLLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFQyxPQUFPLEdBQUtDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFRixFQUFFOzs7QUFFdEQsZUFBZUksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEVBQTJEO0lBRTNELEtBQUssQ0FBQ0MsTUFBTSxHQUFHRixHQUFHLGFBQUhBLEdBQUcsS0FBSEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxHQUFHLENBQUVFLE1BQU07SUFDMUIsS0FBSyxDQUFDQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0osR0FBRyxhQUFIQSxHQUFHLEtBQUhBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsR0FBRyxDQUFFSyxLQUFLLENBQUNGLEVBQUU7SUFDakMsS0FBSyxDQUFDRyxjQUFjLEdBQUdOLEdBQUcsYUFBSEEsR0FBRyxLQUFIQSxJQUFJLENBQUpBLENBQVMsR0FBVEEsSUFBSSxDQUFKQSxDQUFTLEdBQVRBLEdBQUcsQ0FBRU8sSUFBSTtJQUNoQyxLQUFLLENBQUNDLFFBQVEsR0FBR3BCLG1EQUFZLENBQUMsQ0FBSSxLQUFFLENBQVM7SUFFN0MsTUFBTSxDQUFFYyxNQUFNO1FBQ1osSUFBSSxDQUFDLENBQU07WUFDVCxLQUFLLENBQUNPLFVBQVU7WUFDaEIsS0FBSztRQUNQLElBQUksQ0FBQyxDQUFLO1lBQ1IsS0FBSyxDQUFDQyxTQUFTO1lBQ2YsS0FBSztRQUNQLElBQUksQ0FBQyxDQUFRO1lBQ1gsS0FBSyxDQUFDQyxZQUFZO1lBQ2xCLEtBQUs7O1lBRUxWLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxFQUFFLE9BQU8sRUFBRVgsTUFBTSxDQUFDLGdCQUFnQjtZQUN0RFksT0FBTyxDQUFDQyxHQUFHLEVBQUUsT0FBTyxFQUFFYixNQUFNLENBQUMsZ0JBQWdCOzttQkFHbENRLFNBQVMsR0FBRyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDTSxZQUFZLEdBQUcsS0FBSyxDQUFDeEIsUUFBUSxDQUFDZ0IsUUFBUTtZQUM1QyxLQUFLLENBQUNkLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLEtBQUssQ0FBQ3VCLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksRUFBRUMsUUFBUTtZQUNsRCxFQUFFLEdBQUdBLFFBQVEsRUFBRSxDQUFDO2dCQUNkaEIsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBNEM7WUFDbkUsQ0FBQyxNQUFNLENBQUM7Z0JBQ04sS0FBSyxDQUFDTyxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDSSxHQUFHLENBQUMsUUFBUSxDQUFFQyxHQUFHLEVBQUUsQ0FBQztvQkFDcEQsTUFBTSxDQUFDQSxHQUFHLENBQUNuQixFQUFFLElBQUlBLEVBQUUsR0FBR0csY0FBYyxHQUFHZ0IsR0FBRztnQkFDNUMsQ0FBQztnQkFDRDdCLFNBQVMsQ0FDUGUsUUFBUSxFQUNSVSxJQUFJLENBQUNLLFNBQVMsQ0FBQyxDQUFDO29CQUFDTixRQUFRLEVBQUVHLGdCQUFnQjtnQkFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBRXhEbkIsR0FBRyxDQUFDdUIsU0FBUyxDQUFDLENBQWMsZUFBRSxDQUFrQjtnQkFDaER2QixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0ssSUFBSSxDQUFDSyxTQUFTLENBQUNqQixjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzNEUSxPQUFPLENBQUNDLEdBQUcsRUFBRSxrQkFBa0IsRUFBRVosRUFBRSxDQUFDLGFBQWE7WUFDbkQsQ0FBQztRQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVzQixDQUFDLEVBQUUsQ0FBQztZQUNYeEIsR0FBRyxDQUNBVyxNQUFNLENBQUMsR0FBRyxFQUNWQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUVWLEVBQUUsQ0FBQyw4QkFBOEI7WUFDOURXLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLGtCQUFrQixFQUFFWixFQUFFLENBQUMsYUFBYSxHQUFHc0IsQ0FBQztRQUN2RCxDQUFDO0lBQ0gsQ0FBQzttQkFFY2QsWUFBWSxHQUFHLENBQUM7UUFDN0IsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNLLFlBQVksR0FBRyxLQUFLLENBQUN4QixRQUFRLENBQUNnQixRQUFRO1lBQzVDLEtBQUssQ0FBQ2QsS0FBSyxDQUFDLElBQUk7WUFDaEIsS0FBSyxDQUFDdUIsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsWUFBWSxFQUFFQyxRQUFRO1lBQ2xELEVBQUUsR0FBR0EsUUFBUSxFQUFFLENBQUM7Z0JBQ2RoQixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUE0QztZQUNuRSxDQUFDLE1BQU0sQ0FBQztnQkFDTixLQUFLLENBQUNPLGdCQUFnQixHQUFHSCxRQUFRLENBQUNTLE1BQU0sQ0FBQyxRQUFRLENBQUVKLEdBQUcsRUFBRSxDQUFDO29CQUN2RCxNQUFNLENBQUNBLEdBQUcsQ0FBQ25CLEVBQUUsSUFBSUEsRUFBRTtnQkFDckIsQ0FBQztnQkFDRFYsU0FBUyxDQUNQZSxRQUFRLEVBQ1JVLElBQUksQ0FBQ0ssU0FBUyxDQUFDLENBQUM7b0JBQUNOLFFBQVEsRUFBRUcsZ0JBQWdCO2dCQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFFeERuQixHQUFHLENBQUN1QixTQUFTLENBQUMsQ0FBYyxlQUFFLENBQWtCO2dCQUNoRHZCLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUNsQkssSUFBSSxDQUFDSyxTQUFTLENBQ1pOLFFBQVEsQ0FBQ1UsSUFBSSxFQUFFTCxHQUFHLEdBQUtBLEdBQUcsQ0FBQ25CLEVBQUUsSUFBSUEsRUFBRTttQkFDbkMsSUFBSSxFQUNKLENBQUM7Z0JBR0xXLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLHFCQUFxQixFQUFFWixFQUFFLENBQUMsYUFBYTtZQUN0RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRXNCLENBQUMsRUFBRSxDQUFDO1lBQ1h4QixHQUFHLENBQ0FXLE1BQU0sQ0FBQyxHQUFHLEVBQ1ZDLElBQUksRUFBRSxxQkFBcUIsRUFBRVYsRUFBRSxDQUFDLDhCQUE4QjtZQUNqRVcsT0FBTyxDQUFDQyxHQUFHLEVBQUUscUJBQXFCLEVBQUVaLEVBQUUsQ0FBQyxhQUFhLEdBQUdzQixDQUFDO1FBQzFELENBQUM7SUFDSCxDQUFDO21CQUVjaEIsVUFBVSxHQUFHLENBQUM7UUFDM0IsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNPLFlBQVksR0FBRyxLQUFLLENBQUN4QixRQUFRLENBQUNnQixRQUFRO1lBQzVDLEtBQUssQ0FBQ2QsS0FBSyxDQUFDLElBQUk7WUFDaEIsS0FBSyxDQUFDdUIsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsWUFBWSxFQUFFQyxRQUFRO1lBQ2xELEVBQUUsR0FBR0EsUUFBUSxFQUFFLENBQUM7Z0JBQ2RoQixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUE0QztZQUNuRSxDQUFDLE1BQU0sQ0FBQztnQkFDTixLQUFLLENBQUNlLEtBQUssR0FDVFgsUUFBUSxDQUFDWSxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxHQUFLLENBQUM7b0JBQzlDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHNUIsUUFBUSxDQUFDMkIsWUFBWSxDQUFDNUIsRUFBRTtvQkFDMUMsTUFBTSxDQUFDNkIsU0FBUyxHQUFHRixXQUFXLEdBQUdFLFNBQVMsR0FBR0YsV0FBVztnQkFDMUQsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUVYLEtBQUssQ0FBQ0csYUFBYSxHQUFHLENBQUM7dUJBQUkzQixjQUFjO29CQUFFSCxFQUFFLEVBQUV5QixLQUFLLENBQUNNLFFBQVE7Z0JBQUcsQ0FBQztnQkFFakUsS0FBSyxDQUFDZCxnQkFBZ0IsR0FBRyxDQUFDYTtvQkFBQUEsYUFBYTt1QkFBS2hCLFFBQVE7Z0JBQUEsQ0FBQztnQkFDckR4QixTQUFTLENBQ1BlLFFBQVEsRUFDUlUsSUFBSSxDQUFDSyxTQUFTLENBQUMsQ0FBQztvQkFBQ04sUUFBUSxFQUFFRyxnQkFBZ0I7Z0JBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUV4RG5CLEdBQUcsQ0FBQ3VCLFNBQVMsQ0FBQyxDQUFjLGVBQUUsQ0FBa0I7Z0JBQ2hEdkIsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNLLElBQUksQ0FBQ0ssU0FBUyxDQUFDVSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQzFEbkIsT0FBTyxDQUFDQyxHQUFHLEVBQUUsbUJBQW1CLEVBQUVaLEVBQUUsQ0FBQyxhQUFhO1lBQ3BELENBQUM7UUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFc0IsQ0FBQyxFQUFFLENBQUM7WUFDWHhCLEdBQUcsQ0FDQVcsTUFBTSxDQUFDLEdBQUcsRUFDVkMsSUFBSSxFQUFFLG1CQUFtQixFQUFFVixFQUFFLENBQUMsOEJBQThCO1lBQy9EVyxPQUFPLENBQUNDLEdBQUcsRUFBRSxtQkFBbUIsRUFBRVosRUFBRSxDQUFDLGFBQWEsR0FBR3NCLENBQUM7UUFDeEQsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3RSZWFjdFByb2plY3QvLi9wYWdlcy9hcGkvc3BlYWtlcnMvW2lkXS5qcz84NjE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHNwZWFrZXJEYXRhIGZyb20gJy4uLy4uLy4uL3NyYy9TcGVha2VyRGF0YSc7XHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZShcInV0aWxcIik7XHJcbmNvbnN0IHJlYWRGaWxlID0gcHJvbWlzaWZ5KGZzLnJlYWRGaWxlKTtcclxuY29uc3Qgd3JpdGVGaWxlID0gcHJvbWlzaWZ5KGZzLndyaXRlRmlsZSk7XHJcbmNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIC8vcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoc3BlYWtlckRhdGEsbnVsbCwyKSk7XHJcblxyXG4gIGNvbnN0IG1ldGhvZCA9IHJlcT8ubWV0aG9kO1xyXG4gIGNvbnN0IGlkID0gcGFyc2VJbnQocmVxPy5xdWVyeS5pZCk7XHJcbiAgY29uc3QgcmVjb3JkRnJvbUJvZHkgPSByZXE/LmJvZHk7XHJcbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIik7XHJcblxyXG4gIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICBhd2FpdCBwb3N0TWV0aG9kKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICBhd2FpdCBwdXRNZXRob2QoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgIGF3YWl0IGRlbGV0ZU1ldGhvZCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAxKS5zZW5kKGBNZXRob2QgJHttZXRob2R9IG5vdCBpbXBsZW1lbnRlZGApO1xyXG4gICAgICBjb25zb2xlLmxvZyhgTWV0aG9kICR7bWV0aG9kfSBub3QgaW1wbGVtZW50ZWRgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHB1dE1ldGhvZCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XHJcbiAgICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgICBpZiAoIXNwZWFrZXJzKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgbmV3U3BlYWtlcnNBcnJheSA9IHNwZWFrZXJzLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVjLmlkID09IGlkID8gcmVjb3JkRnJvbUJvZHkgOiByZWM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd3JpdGVGaWxlKFxyXG4gICAgICAgICAganNvbkZpbGUsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHNwZWFrZXJzOiBuZXdTcGVha2Vyc0FycmF5IH0sIG51bGwsIDIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShyZWNvcmRGcm9tQm9keSwgbnVsbCwgMikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBQVVQgL2FwaS9zcGVha2Vycy8ke2lkfSAgc3RhdHVzOiAyMDBgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXNcclxuICAgICAgICAuc3RhdHVzKDUwMClcclxuICAgICAgICAuc2VuZChgUFVUIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogNTAwIHVuZXhwZWN0ZWQgZXJyb3JgKTtcclxuICAgICAgY29uc29sZS5sb2coYFBVVCAvYXBpL3NwZWFrZXJzLyR7aWR9ICBzdGF0dXM6IDIwMGAsIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWV0aG9kKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xyXG4gICAgICBhd2FpdCBkZWxheSgxMDAwKTtcclxuICAgICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICAgIGlmICghc3BlYWtlcnMpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBuZXdTcGVha2Vyc0FycmF5ID0gc3BlYWtlcnMuZmlsdGVyKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgICAgIHJldHVybiByZWMuaWQgIT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd3JpdGVGaWxlKFxyXG4gICAgICAgICAganNvbkZpbGUsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHNwZWFrZXJzOiBuZXdTcGVha2Vyc0FycmF5IH0sIG51bGwsIDIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICBzcGVha2Vycy5maW5kKChyZWMpID0+IHJlYy5pZCA9PSBpZCksXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIDJcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBERUxFVEUgL2FwaS9zcGVha2Vycy8ke2lkfSAgc3RhdHVzOiAyMDBgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXNcclxuICAgICAgICAuc3RhdHVzKDUwMClcclxuICAgICAgICAuc2VuZChgREVMRVRFIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogNTAwIHVuZXhwZWN0ZWQgZXJyb3JgKTtcclxuICAgICAgY29uc29sZS5sb2coYERFTEVURSAvYXBpL3NwZWFrZXJzLyR7aWR9ICBzdGF0dXM6IDIwMGAsIGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gcG9zdE1ldGhvZCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XHJcbiAgICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xyXG4gICAgICBpZiAoIXNwZWFrZXJzKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgaWROZXcgPVxyXG4gICAgICAgICAgc3BlYWtlcnMucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkQ3VycmVudCA9IHBhcnNlSW50KGN1cnJlbnRWYWx1ZS5pZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpZEN1cnJlbnQgPiBhY2N1bXVsYXRvciA/IGlkQ3VycmVudCA6IGFjY3VtdWxhdG9yO1xyXG4gICAgICAgICAgfSwgMCkgKyAxO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdTcGVha2VyUmVjID0geyAuLi5yZWNvcmRGcm9tQm9keSwgaWQ6IGlkTmV3LnRvU3RyaW5nKCkgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3U3BlYWtlcnNBcnJheSA9IFtuZXdTcGVha2VyUmVjLCAuLi5zcGVha2Vyc107XHJcbiAgICAgICAgd3JpdGVGaWxlKFxyXG4gICAgICAgICAganNvbkZpbGUsXHJcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHNwZWFrZXJzOiBuZXdTcGVha2Vyc0FycmF5IH0sIG51bGwsIDIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShuZXdTcGVha2VyUmVjLCBudWxsLCAyKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFBPU1QgL2FwaS9zcGVha2Vycy8ke2lkfSAgc3RhdHVzOiAyMDBgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXNcclxuICAgICAgICAuc3RhdHVzKDUwMClcclxuICAgICAgICAuc2VuZChgUE9TVCAvYXBpL3NwZWFrZXJzLyR7aWR9ICBzdGF0dXM6IDUwMCB1bmV4cGVjdGVkIGVycm9yYCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBQT1NUIC9hcGkvc3BlYWtlcnMvJHtpZH0gIHN0YXR1czogMjAwYCwgZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbInBhdGgiLCJmcyIsInByb21pc2lmeSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsIndyaXRlRmlsZSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiaWQiLCJwYXJzZUludCIsInF1ZXJ5IiwicmVjb3JkRnJvbUJvZHkiLCJib2R5IiwianNvbkZpbGUiLCJwb3N0TWV0aG9kIiwicHV0TWV0aG9kIiwiZGVsZXRlTWV0aG9kIiwic3RhdHVzIiwic2VuZCIsImNvbnNvbGUiLCJsb2ciLCJyZWFkRmlsZURhdGEiLCJzcGVha2VycyIsIkpTT04iLCJwYXJzZSIsIm5ld1NwZWFrZXJzQXJyYXkiLCJtYXAiLCJyZWMiLCJzdHJpbmdpZnkiLCJzZXRIZWFkZXIiLCJlIiwiZmlsdGVyIiwiZmluZCIsImlkTmV3IiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJjdXJyZW50VmFsdWUiLCJpZEN1cnJlbnQiLCJuZXdTcGVha2VyUmVjIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/[id].js"));
module.exports = __webpack_exports__;

})();