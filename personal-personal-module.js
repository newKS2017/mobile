(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personal-personal-module"],{

/***/ "SRLV":
/*!*********************************************!*\
  !*** ./src/app/personal/personal.module.ts ***!
  \*********************************************/
/*! exports provided: PersonalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalModule", function() { return PersonalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/public.module */ "UFnY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _personal_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal.routing */ "rjzu");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./personal/personal.component */ "hhi1");

 //公用组件引入




class PersonalModule {
}
PersonalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonalModule });
PersonalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonalModule_Factory(t) { return new (t || PersonalModule)(); }, providers: [], imports: [[
            _public_public_module__WEBPACK_IMPORTED_MODULE_1__["PublicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _personal_routing__WEBPACK_IMPORTED_MODULE_3__["PersonalRouting"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonalModule, { declarations: [_personal_personal_component__WEBPACK_IMPORTED_MODULE_4__["PersonalComponent"]], imports: [_public_public_module__WEBPACK_IMPORTED_MODULE_1__["PublicModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _personal_routing__WEBPACK_IMPORTED_MODULE_3__["PersonalRouting"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ..._personal_routing__WEBPACK_IMPORTED_MODULE_3__["routeds"]
                ],
                imports: [
                    _public_public_module__WEBPACK_IMPORTED_MODULE_1__["PublicModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _personal_routing__WEBPACK_IMPORTED_MODULE_3__["PersonalRouting"],
                ],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();


/***/ }),

/***/ "hhi1":
/*!*********************************************************!*\
  !*** ./src/app/personal/personal/personal.component.ts ***!
  \*********************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _public_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/footer/footer.component */ "C9Yq");



class PersonalComponent {
    constructor() { }
    ngOnInit() {
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(); };
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 2, vars: 0, template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u989D\u55EF\u4E2A\u4EBA\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-personal',
                templateUrl: './personal.component.html',
                styleUrls: ['./personal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rjzu":
/*!**********************************************!*\
  !*** ./src/app/personal/personal.routing.ts ***!
  \**********************************************/
/*! exports provided: PersonalRouting, routeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalRouting", function() { return PersonalRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeds", function() { return routeds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal/personal.component */ "hhi1");





const routes = [
    { path: '', redirectTo: 'ps', pathMatch: 'full' },
    { path: 'ps', component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__["PersonalComponent"] }
    // { path: '**', component: PageNotFoundComponent }
];
class PersonalRouting {
}
PersonalRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PersonalRouting });
PersonalRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PersonalRouting_Factory(t) { return new (t || PersonalRouting)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonalRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routeds = [
    _personal_personal_component__WEBPACK_IMPORTED_MODULE_2__["PersonalComponent"]
];


/***/ })

}]);
//# sourceMappingURL=personal-personal-module.js.map