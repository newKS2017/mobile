(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["knowledge-knowledge-module"],{

/***/ "/zO+":
/*!************************************************!*\
  !*** ./src/app/knowledge/knowledge.routing.ts ***!
  \************************************************/
/*! exports provided: KnowledgeRouting, routeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeRouting", function() { return KnowledgeRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeds", function() { return routeds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge/knowledge.component */ "Jzt8");





const routes = [
    { path: '', redirectTo: 'a2', pathMatch: 'full' },
    { path: 'a2', component: _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_2__["KnowledgeComponent"] }
    // { path: '**', component: PageNotFoundComponent }
];
class KnowledgeRouting {
}
KnowledgeRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: KnowledgeRouting });
KnowledgeRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function KnowledgeRouting_Factory(t) { return new (t || KnowledgeRouting)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KnowledgeRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnowledgeRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routeds = [
    _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_2__["KnowledgeComponent"]
];


/***/ }),

/***/ "Jzt8":
/*!************************************************************!*\
  !*** ./src/app/knowledge/knowledge/knowledge.component.ts ***!
  \************************************************************/
/*! exports provided: KnowledgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeComponent", function() { return KnowledgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["../../login"]; };
class KnowledgeComponent {
    constructor() { }
    ngOnInit() {
    }
}
KnowledgeComponent.ɵfac = function KnowledgeComponent_Factory(t) { return new (t || KnowledgeComponent)(); };
KnowledgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KnowledgeComponent, selectors: [["app-knowledge"]], decls: 2, vars: 2, consts: [[3, "routerLink"]], template: function KnowledgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "knowledge works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrbm93bGVkZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnowledgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-knowledge',
                templateUrl: './knowledge.component.html',
                styleUrls: ['./knowledge.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jz7c":
/*!***********************************************!*\
  !*** ./src/app/knowledge/knowledge.module.ts ***!
  \***********************************************/
/*! exports provided: KnowledgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeModule", function() { return KnowledgeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _knowledge_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knowledge.routing */ "/zO+");
/* harmony import */ var _knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge/knowledge.component */ "Jzt8");




class KnowledgeModule {
}
KnowledgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: KnowledgeModule });
KnowledgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function KnowledgeModule_Factory(t) { return new (t || KnowledgeModule)(); }, providers: [], imports: [[
            _knowledge_routing__WEBPACK_IMPORTED_MODULE_1__["KnowledgeRouting"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](KnowledgeModule, { declarations: [_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_2__["KnowledgeComponent"]], imports: [_knowledge_routing__WEBPACK_IMPORTED_MODULE_1__["KnowledgeRouting"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnowledgeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ..._knowledge_routing__WEBPACK_IMPORTED_MODULE_1__["routeds"]
                ],
                imports: [
                    _knowledge_routing__WEBPACK_IMPORTED_MODULE_1__["KnowledgeRouting"],
                ],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=knowledge-knowledge-module.js.map