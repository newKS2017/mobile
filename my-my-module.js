(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-my-module"],{

/***/ "Cr73":
/*!*********************************!*\
  !*** ./src/app/my/my.module.ts ***!
  \*********************************/
/*! exports provided: MyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModule", function() { return MyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/public.module */ "UFnY");
/* harmony import */ var _my_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my.routing */ "cHHz");
/* harmony import */ var _my_my_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my/my.component */ "Pu38");

 //公用组件引入



class MyModule {
}
MyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyModule });
MyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyModule_Factory(t) { return new (t || MyModule)(); }, providers: [], imports: [[
            _public_public_module__WEBPACK_IMPORTED_MODULE_1__["PublicModule"],
            _my_routing__WEBPACK_IMPORTED_MODULE_2__["MyRouting"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyModule, { declarations: [_my_my_component__WEBPACK_IMPORTED_MODULE_3__["MyComponent"]], imports: [_public_public_module__WEBPACK_IMPORTED_MODULE_1__["PublicModule"],
        _my_routing__WEBPACK_IMPORTED_MODULE_2__["MyRouting"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ..._my_routing__WEBPACK_IMPORTED_MODULE_2__["routeds"]
                ],
                imports: [
                    _public_public_module__WEBPACK_IMPORTED_MODULE_1__["PublicModule"],
                    _my_routing__WEBPACK_IMPORTED_MODULE_2__["MyRouting"],
                ],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();


/***/ }),

/***/ "Pu38":
/*!***************************************!*\
  !*** ./src/app/my/my/my.component.ts ***!
  \***************************************/
/*! exports provided: MyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponent", function() { return MyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _public_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/footer/footer.component */ "C9Yq");



class MyComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyComponent.ɵfac = function MyComponent_Factory(t) { return new (t || MyComponent)(); };
MyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyComponent, selectors: [["app-my"]], decls: 2, vars: 0, template: function MyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "my\u6211\u7684\u7684\u7684\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_public_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my',
                templateUrl: './my.component.html',
                styleUrls: ['./my.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cHHz":
/*!**********************************!*\
  !*** ./src/app/my/my.routing.ts ***!
  \**********************************/
/*! exports provided: MyRouting, routeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRouting", function() { return MyRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeds", function() { return routeds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_my_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my/my.component */ "Pu38");





const routes = [
    { path: '', redirectTo: 'a2', pathMatch: 'full' },
    { path: 'a2', component: _my_my_component__WEBPACK_IMPORTED_MODULE_2__["MyComponent"] }
    // { path: '**', component: PageNotFoundComponent }
];
class MyRouting {
}
MyRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyRouting });
MyRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyRouting_Factory(t) { return new (t || MyRouting)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();
const routeds = [
    _my_my_component__WEBPACK_IMPORTED_MODULE_2__["MyComponent"]
];


/***/ })

}]);
//# sourceMappingURL=my-my-module.js.map