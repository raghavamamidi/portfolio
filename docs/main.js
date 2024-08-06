"use strict";
(self["webpackChunkangular_portfolio"] = self["webpackChunkangular_portfolio"] || []).push([["main"],{

/***/ 8094:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AboutComponent {
  constructor() {
    this.title = "Welcome, I am Raghava Mamidi  ";
    this.paragraph = "I hold a B.Tech in Electrical and Electronics Engineering from the National Institute of Technology.";
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["about"]],
    decls: 11,
    vars: 2,
    consts: [["id", "about", 1, "about"], ["about", ""], [1, "about__details"], [1, "about__title"], [1, "about__paragraph"], ["href", "https://drive.google.com/file/d/103GabXKToxh5X9ksRHL-i-zMYb59CkNZ/view?usp=sharing"], [1, "btn-primary", "btn--color"], ["src", "assets/img/about.jpeg", "alt", "profilePicture", 1, "about__img"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.paragraph);
      }
    },
    styles: [".about[_ngcontent-%COMP%] {\n  height: 100vh;\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  background-color: #a0c4ff;\n}\n.about__details[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  color: #fff;\n}\n.about__title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2.5rem;\n}\n.about__paragraph[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n  margin-bottom: 15px;\n}\n.about__img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: auto;\n  max-width: 250px;\n  box-shadow: 10px -10px rgba(0, 0, 0, 0.6);\n  transition: 1s ease-in;\n}\n\n@media (max-width: 543px) {\n  .about__img[_ngcontent-%COMP%] {\n    max-width: 160px;\n    transition: 1s ease;\n  }\n  .about__details[_ngcontent-%COMP%] {\n    flex-basis: 90%;\n    justify-content: center;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWl4aW5zLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxhQUFBO0VDRE0sdUJBQUE7RUFFSixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJESHNCO0VBQ3hCLHlCQUxXO0FBTWI7QUFDRTtFQUNFLGVBQUE7RUFDQSxXRU5JO0FGT1I7QUFFRTtFQUNFLFdFVkk7RUZXSixpQkVSVztBRlFmO0FBR0U7RUFDRSxXRWZJO0VGZ0JKLGVFTlE7RUZPUixtQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUNXUTtFREhKO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQUpKO0VBT0U7SUFDRSxlQUFBO0lDdENFLHVCQUFBO0lBRUosYUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHNCRGtDMEI7RUFENUI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcbiRsaWdodC1ibHVlOiAjYTBjNGZmO1xuXG4uYWJvdXQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3cpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmx1ZTtcblxuICAmX19kZXRhaWxzIHtcbiAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTtcbiAgfVxuXG4gICZfX3BhcmFncmFwaCB7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBmb250LXNpemU6ICRwYXJhZ3JhcGg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggLTEwcHggJGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbjtcbiAgfVxufVxuXG5AaW5jbHVkZSBtcShzbSwgbWF4KXtcbiAgLmFib3V0IHtcbiAgICAmX19pbWcge1xuICAgICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICAgIHRyYW5zaXRpb246IDFzIGVhc2U7XG4gICAgfVxuXG4gICAgJl9fZGV0YWlscyB7XG4gICAgICBmbGV4LWJhc2lzOiA5MCU7XG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihjb2x1bW4pO1xuICAgIH1cbiAgfVxufSIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcigkZmxleGRpcmVjdGlvbiwkanVzdGlmeWNvbnRlbnQ6ZmFsc2Upe1xuXG4gICAgQGlmICRqdXN0aWZ5Y29udGVudCB7IGp1c3RpZnktY29udGVudDogJGp1c3RpZnljb250ZW50O31cbiAgICBAZWxzZSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGdyaWQtdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHg7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJGVsZW1lbnQpe1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGVsZW1lbnQge1xuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluICgjeyRpKjAuMnN9KSBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGdyaWQtdGVtcGxhdGUoJGxpbmUsJGNvbHVtbil7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZSwkY29sdW1uKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvdzozMDBweFxufVxuXG4vL01lZGlhIHF1ZXJ5IHRvIHVzZSBicmVha3BvaW50c1xuQG1peGluIG1xKCRicmVha3BvaW50LCAkdHlwZTogbWluKSB7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG4gICAgICAgIEBpZiAkdHlwZSA9PSBtYXgge1xuICAgICAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6ICRicmVha3BvaW50LXZhbHVlIC0gMXB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAoI3skdHlwZX0td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy9NZWRpYSBxdWVyeSB0byB1c2UgdGhlIHNjcmVlbiB3aXRoIG1pbmltdW0gYW5kIG1heGltdW0gc2l6ZVxuQG1peGluIG1xLWJldHdlZW4oJGxvd2VyLCR1cHBlcikge1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsJGxvd2VyKSBhbmQgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpIHtcbiAgICAgICAgJGxvd2VyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XG4gICAgICAgICR1cHBlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDooJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIgKSA9PSBmYWxzZSkge1xuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcbiAgICAgICB9XG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlciApID09IGZhbHNlKSB7XG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xuICAgICAgIH1cbiAgICB9XG59IiwiLy9Db2xvcnNcbiRncmF5MjE6ICMzNjM2MzY7XG4kYmx1ZTogIzE4NjhmZDtcbiRibHVlLWRhcms6ICMxOTMxNzU5OTtcbiRibHVlLWxpZ2h0OiAjYmJkZWZiO1xuJHdoaXRlOiAjZmZmO1xuXG4vL0ZvbnQgU2l6ZVxuJGZvbnQtc2l6ZS1oMTogMi41cmVtO1xuJGZvbnQtc2l6ZS1oMjogMnJlbTtcbiRmb250LXNpemUtaDM6IDEuNzVyZW07XG4kZm9udC1zaXplLWg0OiAxLjVyZW07XG4kZm9udC1zaXplLWg1OiAxLjI1cmVtO1xuJGZvbnQtc2l6ZS1oNjogMXJlbTtcblxuJHBhcmFncmFwaDogMXJlbTtcbiRwYXJhZ3JhcGgtc206IDEuNXJlbTtcbiRwYXJhZ3JhcGgtbGc6IDJyZW07XG5cbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kb3ZlcmxheTogcmdiYSgzMiwgMzIsIDMyLCAwLjc1KTtcblxuLy9Gb250XG4kZm9udC1vcGVuLXNlcmlmOiBcIk9wZW5zIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LXJvYm90bzogXCJSb2JvdG9cIjtcblxuLy9TY3JlZW5zIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xuJGJyZWFrcG9pbnRzIDogKFxuICAgIHhzOjAsIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG4gICAgc206NTQ0cHgsIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXG4gICAgbWQ6NzY4cHgsIC8vIE1lZGl1bSBzY3JlZW4gLyB0YWJsZXRcbiAgICBsZzo5OTJweCwgLy9MYXJnZSBzY3JlZW4gLyBkZXNrdG9wXG4gICAgeGw6MTIwMCwgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG4pOyJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact/contact.component */ 1117);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 1984);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill/skill.component */ 7693);






class AppComponent {
  constructor() {
    this.title = 'angular-portfolio';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 7,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "about")(3, "skill")(4, "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioComponent, _skill_skill_component__WEBPACK_IMPORTED_MODULE_4__.SkillComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 8094);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 1117);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3767);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 1984);
/* harmony import */ var _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skill/skill.component */ 7693);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);










class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioComponent, _skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule]
  });
})();

/***/ }),

/***/ 1117:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ 3730);
/* harmony import */ var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/scroll-animation.component */ 8837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class ContactComponent extends _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent {
  ngOnInit() {}
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵContactComponent_BaseFactory;
    return function ContactComponent_Factory(t) {
      return (ɵContactComponent_BaseFactory || (ɵContactComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](ContactComponent)))(t || ContactComponent);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["contact"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 14,
    vars: 2,
    consts: [["id", "contato", 1, "contato"], [1, "contato__title"], [1, "list"], [1, "list__item"], ["href", "https://github.com/raghavamamidi"], [1, "fab", "fa-github", "fa-3x"], ["href", "mailto:raghavamamidi18@gmail.com"], [1, "fas", "fa-envelope", "fa-3x"], [1, "fas", "fa-heart"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "For further details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 2)(4, "li", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 3)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Made with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " by Raghava");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
      }
    },
    styles: [".contato[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 50px;\n  background-color: #363636;\n  color: #fff;\n}\n.contato__title[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n\n.list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.list__item[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n@media (min-width: 0) and (max-width: 767px) {\n  .btn-secondary[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 70px;\n    padding: 6px;\n    font-size: 28px;\n    transition: 1s ease;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VDQ1EsdUJBQUE7RUFFSixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JETHNCO0VBQ3hCLGFBQUE7RUFDQSx5QkVMTztFRk1QLFdFRk07QUZJUjtBQUFFO0VBQ0UsbUJBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKOztBQ2dDUTtFRDVCTjtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQUFGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi5jb250YXRvIHtcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uKTtcbiAgcGFkZGluZzogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXkyMTtcbiAgY29sb3I6ICR3aGl0ZTtcblxuICAmX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxufVxuXG4ubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgJl9faXRlbSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuXG5AaW5jbHVkZSBtcS1iZXR3ZWVuKHhzLG1kKSB7XG4gIC5idG4tc2Vjb25kYXJ5IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcbiAgfVxufSIsIkBtaXhpbiBmbGV4LWNvbnRhaW5lcigkZmxleGRpcmVjdGlvbiwkanVzdGlmeWNvbnRlbnQ6ZmFsc2Upe1xuXG4gICAgQGlmICRqdXN0aWZ5Y29udGVudCB7IGp1c3RpZnktY29udGVudDogJGp1c3RpZnljb250ZW50O31cbiAgICBAZWxzZSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiAkZmxleGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGdyaWQtdGVtcGxhdGUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAwcHg7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkoJGVsZW1lbnQpe1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGVsZW1lbnQge1xuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluICgjeyRpKjAuMnN9KSBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIGdyaWQtdGVtcGxhdGUoJGxpbmUsJGNvbHVtbil7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkbGluZSwkY29sdW1uKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvdzozMDBweFxufVxuXG4vL01lZGlhIHF1ZXJ5IHRvIHVzZSBicmVha3BvaW50c1xuQG1peGluIG1xKCRicmVha3BvaW50LCAkdHlwZTogbWluKSB7XG4gICAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcbiAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcF9nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XG4gICAgICAgIEBpZiAkdHlwZSA9PSBtYXgge1xuICAgICAgICAgICAgJGJyZWFrcG9pbnQtdmFsdWU6ICRicmVha3BvaW50LXZhbHVlIC0gMXB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAoI3skdHlwZX0td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy9NZWRpYSBxdWVyeSB0byB1c2UgdGhlIHNjcmVlbiB3aXRoIG1pbmltdW0gYW5kIG1heGltdW0gc2l6ZVxuQG1peGluIG1xLWJldHdlZW4oJGxvd2VyLCR1cHBlcikge1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsJGxvd2VyKSBhbmQgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIpIHtcbiAgICAgICAgJGxvd2VyLWJyZWFrcG9pbnQ6bWFwLWdldCgkYnJlYWtwb2ludHMsICRsb3dlcik7XG4gICAgICAgICR1cHBlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiRsb3dlci1icmVha3BvaW50KSBhbmQgKG1heC13aWR0aDooJHVwcGVyLWJyZWFrcG9pbnQgLSAxKSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIgKSA9PSBmYWxzZSkge1xuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyRsb3dlcn0uJztcbiAgICAgICB9XG4gICAgICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlciApID09IGZhbHNlKSB7XG4gICAgICAgIEB3YXJuICdZb3VyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xuICAgICAgIH1cbiAgICB9XG59IiwiLy9Db2xvcnNcbiRncmF5MjE6ICMzNjM2MzY7XG4kYmx1ZTogIzE4NjhmZDtcbiRibHVlLWRhcms6ICMxOTMxNzU5OTtcbiRibHVlLWxpZ2h0OiAjYmJkZWZiO1xuJHdoaXRlOiAjZmZmO1xuXG4vL0ZvbnQgU2l6ZVxuJGZvbnQtc2l6ZS1oMTogMi41cmVtO1xuJGZvbnQtc2l6ZS1oMjogMnJlbTtcbiRmb250LXNpemUtaDM6IDEuNzVyZW07XG4kZm9udC1zaXplLWg0OiAxLjVyZW07XG4kZm9udC1zaXplLWg1OiAxLjI1cmVtO1xuJGZvbnQtc2l6ZS1oNjogMXJlbTtcblxuJHBhcmFncmFwaDogMXJlbTtcbiRwYXJhZ3JhcGgtc206IDEuNXJlbTtcbiRwYXJhZ3JhcGgtbGc6IDJyZW07XG5cbiRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNik7XG4kb3ZlcmxheTogcmdiYSgzMiwgMzIsIDMyLCAwLjc1KTtcblxuLy9Gb250XG4kZm9udC1vcGVuLXNlcmlmOiBcIk9wZW5zIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiRmb250LXJvYm90bzogXCJSb2JvdG9cIjtcblxuLy9TY3JlZW5zIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllc1xuJGJyZWFrcG9pbnRzIDogKFxuICAgIHhzOjAsIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG4gICAgc206NTQ0cHgsIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXG4gICAgbWQ6NzY4cHgsIC8vIE1lZGl1bSBzY3JlZW4gLyB0YWJsZXRcbiAgICBsZzo5OTJweCwgLy9MYXJnZSBzY3JlZW4gLyBkZXNrdG9wXG4gICAgeGw6MTIwMCwgLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG4pOyJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation]
    }
  });
}

/***/ }),

/***/ 3767:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


const _c0 = (a0, a1) => ({
  "fa-bars": a0,
  "fa-times": a1
});
const _c1 = a0 => ({
  "nav__open": a0
});
class HeaderComponent {
  constructor() {}
  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    this.isNavOpen = false;
  }
  ngOnInit() {
    this.isNavOpen = false;
  }
  navOpened() {
    console.log("clicado");
    this.isNavOpen = !this.isNavOpen;
  }
  onWindowScroll(e) {
    if (window.pageYOffset > 300) {
      let element = document.getElementsByClassName('nav')[0];
      element.classList.add('nav--sticky');
    } else {
      let element = document.getElementsByClassName('nav')[0];
      element.classList.remove('nav--sticky');
    }
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) {
          return ctx.onWindowScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 26,
    vars: 7,
    consts: [[1, "toggle", 3, "click"], [1, "fas", "fa-2x", 3, "ngClass"], [1, "nav", "nav--hightlighted", 3, "ngClass"], [1, "nav__brand"], ["href", "#"], [1, "$gray"], [1, "nav__item"], [3, "click"], ["about", ""], ["skill", ""], ["portfolio", ""], ["contato", ""]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_1_listener() {
          return ctx.navOpened();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav")(4, "ul", 2)(5, "li", 3)(6, "a", 4)(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Raghava");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Mamidi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6)(11, "a", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() {
          return ctx.scroll("about");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6)(15, "a", 7, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() {
          return ctx.scroll("skill");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6)(19, "a", 7, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() {
          return ctx.scroll("portfolio");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 6)(23, "a", 7, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() {
          return ctx.scroll("contato");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx.isNavOpen, ctx.isNavOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.isNavOpen));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  background: #2c3e50;\n  transition: background 0.5s, box-shadow 0.3s;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.toggle[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 1.5em;\n  right: 1.5em;\n  color: #ffffff;\n  cursor: pointer;\n  z-index: 1000;\n  transition: color 0.3s;\n}\n.toggle[_ngcontent-%COMP%]:hover {\n  color: #e74c3c;\n}\n\n.nav[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  font-size: 1.4rem;\n  background: transparent;\n  padding: 12px 20px;\n  transition: background 0.3s, padding 0.3s;\n}\n.nav__brand[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: 1.8rem;\n  font-weight: 400;\n  transform: translateX(-50rem);\n}\n.nav__brand[_ngcontent-%COMP%]:nth-child(1) {\n  animation: slideIn 0.2s forwards;\n}\n.nav__item[_ngcontent-%COMP%] {\n  transform: translateX(50rem);\n  padding: 8px 15px;\n  cursor: pointer;\n  color: #ffffff;\n}\n.nav__item[_ngcontent-%COMP%]:nth-child(1) {\n  animation: slideIn 0.2s forwards;\n}\n.nav__item[_ngcontent-%COMP%]:nth-child(2) {\n  animation: slideIn 0.4s forwards;\n}\n.nav__item[_ngcontent-%COMP%]:nth-child(3) {\n  animation: slideIn 0.6s forwards;\n}\n.nav__item[_ngcontent-%COMP%]:nth-child(4) {\n  animation: slideIn 0.8s forwards;\n}\n.nav__item[_ngcontent-%COMP%]:nth-child(5) {\n  animation: slideIn 1s forwards;\n}\n.nav__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: color 0.3s;\n}\n.nav__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #e74c3c;\n}\n.nav--highlighted[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 2px;\n  background: #e74c3c;\n  transition: width 0.3s;\n}\n.nav--highlighted[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.nav--sticky[_ngcontent-%COMP%] {\n  background: #3498db;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n  color: #ffffff;\n  padding: 10px 20px;\n}\n\n@media (max-width: 767px) {\n  .toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .nav[_ngcontent-%COMP%] {\n    display: none;\n    padding-top: 0;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    text-align: center;\n  }\n  .nav__open[_ngcontent-%COMP%] {\n    display: flex;\n    transform: scale(1);\n    opacity: 1;\n    background-color: #2c3e50;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBYlU7RUFjViw0Q0FBQTtFQUNBLHdDQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0F0Qk07RUF1Qk4sZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVZGO0FBWUU7RUFDRSxjQTNCVztBQWlCZjs7QUFjQTtFQ25DMEIseUJEcUNLO0VDakMzQixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJEOEJzQjtFQUN4QixpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQVJGO0FBVUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FBUko7QUNyQlE7RUFDSSxnQ0FBQTtBRHVCWjtBQVNFO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxjQXJESTtBQTZDUjtBQzlCUTtFQUNJLGdDQUFBO0FEZ0NaO0FDakNRO0VBQ0ksZ0NBQUE7QURtQ1o7QUNwQ1E7RUFDSSxnQ0FBQTtBRHNDWjtBQ3ZDUTtFQUNJLGdDQUFBO0FEeUNaO0FDMUNRO0VBQ0ksOEJBQUE7QUQ0Q1o7QUFMSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBT047QUFMTTtFQUNFLGNBNURPO0FBbUVmO0FBREk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBdkVTO0VBd0VULHNCQUFBO0FBR047QUFBSTtFQUNFLFdBQUE7QUFFTjtBQUVFO0VBQ0UsbUJBcEZHO0VBcUZILHlDQUFBO0VBQ0EsY0FwRkk7RUFxRkosa0JBQUE7QUFBSjs7QUNuRFE7RUR3RE47SUFDRSxjQUFBO0VBREY7RUFJQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFGRjtFQUtBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtJQUNBLHlCQTVHUTtFQXlHVjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm1peGluc1wiO1xuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuLy8gdmFyaWFibGVzLnNjc3NcbiRibHVlOiAjMzQ5OGRiOyAvLyBQcmltYXJ5IGJsdWUgY29sb3JcbiRibHVlLWRhcms6ICMyYzNlNTA7IC8vIERhcmtlciBzaGFkZSBvZiBibHVlIGZvciBiYWNrZ3JvdW5kc1xuJHdoaXRlOiAjZmZmZmZmOyAvLyBXaGl0ZSBjb2xvciBmb3IgdGV4dCBhbmQgZWxlbWVudHNcbiRhY2NlbnQtY29sb3I6ICNlNzRjM2M7IC8vIEFjY2VudCBjb2xvciwgZS5nLiwgYSBzaGFkZSBvZiByZWRcbiRncmF5MjE6ICNjY2NjY2M7IC8vIExpZ2h0IGdyYXkgZm9yIGdlbmVyYWwgdXNlXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpOyAvLyBTaGFkb3cgY29sb3JcblxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICRibHVlLWRhcms7IC8vIENoYW5nZSB0byBhIGRhcmtlciBiYWNrZ3JvdW5kIGZvciBiZXR0ZXIgY29udHJhc3RcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBib3gtc2hhZG93IDAuM3M7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8vIEFkZCBhIHN1YnRsZSBzaGFkb3cgZm9yIGRlcHRoXG59XG5cbi50b2dnbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMS41ZW07IC8vIEFkanVzdGVkIGZvciBhIG1vcmUgYmFsYW5jZWQgbG9va1xuICByaWdodDogMS41ZW07IC8vIEFkanVzdGVkIGZvciBjb25zaXN0ZW5jeVxuICBjb2xvcjogJHdoaXRlOyAvLyBVc2Ugd2hpdGUgZm9yIGJldHRlciB2aXNpYmlsaXR5XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGFjY2VudC1jb2xvcjsgLy8gQWRkIGhvdmVyIGVmZmVjdCBmb3IgdG9nZ2xlIGljb25cbiAgfVxufVxuXG4ubmF2IHtcbiAgJHRoaXM6ICY7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdywgZmxleC1lbmQpO1xuICBmb250LXNpemU6IDEuNHJlbTsgLy8gU2xpZ2h0bHkgc21hbGxlciBmb250IHNpemUgZm9yIGEgbW9yZSBjb21wYWN0IGxvb2tcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzLCBwYWRkaW5nIDAuM3M7XG5cbiAgJl9fYnJhbmQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogNDAwOyAvLyBTbGlnaHRseSBoZWF2aWVyIGZvbnQgd2VpZ2h0IGZvciBhIHN0cm9uZ2VyIHByZXNlbmNlXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHJlbSk7IC8vIFJlZHVjZWQgdHJhbnNsYXRlIGZvciBhIG1vcmUgc3VidGxlIGFuaW1hdGlvblxuICAgIEBpbmNsdWRlIGFuaW1hdGlvbi1kZWxheSgxKTtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MHJlbSk7IC8vIFJlZHVjZWQgdHJhbnNsYXRlIGZvciBhIG1vcmUgc3VidGxlIGFuaW1hdGlvblxuICAgIHBhZGRpbmc6IDhweCAxNXB4OyAvLyBBZGp1c3RlZCBwYWRkaW5nIGZvciBhIG1vcmUgY29tcGFjdCBsb29rXG4gICAgQGluY2x1ZGUgYW5pbWF0aW9uLWRlbGF5KDUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHdoaXRlOyAvLyBTZXQgZGVmYXVsdCBjb2xvciB0byB3aGl0ZVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogaW5oZXJpdDsgLy8gRW5zdXJlIGxpbmtzIGluaGVyaXQgdGhlIGxpc3QgaXRlbSBjb2xvclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvLyBSZW1vdmUgdW5kZXJsaW5lXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICRhY2NlbnQtY29sb3I7IC8vIEFkZCBob3ZlciBlZmZlY3QgZm9yIGxpbmtzXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi0taGlnaGxpZ2h0ZWQge1xuICAgICN7JHRoaXN9X19pdGVtOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogJGFjY2VudC1jb2xvcjsgLy8gSGlnaGxpZ2h0IGNvbG9yIGZvciB0aGUgdW5kZXJsaW5lXG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xuICAgIH1cblxuICAgICN7ICR0aGlzfV9faXRlbTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJi0tc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTsgLy8gVXNlIGEgbGlnaHRlciBibHVlIGZvciB0aGUgc3RpY2t5IHN0YXRlXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8vIEluY3JlYXNlZCBzaGFkb3cgZm9yIG1vcmUgZW1waGFzaXNcbiAgICBjb2xvcjogJHdoaXRlOyAvLyBFbnN1cmUgdGV4dCBpcyB3aGl0ZSBvbiBzdGlja3lcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7IC8vIEFkanVzdGVkIHBhZGRpbmcgZm9yIHRoZSBzdGlja3kgc3RhdGVcbiAgfVxufVxuXG5AaW5jbHVkZSBtcShtZCwgbWF4KSB7XG4gIC50b2dnbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAubmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgfVxuXG4gIC5uYXZfX29wZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWRhcms7IC8vIFVzZSBkYXJrIGJsdWUgZm9yIHRoZSBleHBhbmRlZCBtb2JpbGUgbWVudVxuICB9XG59XG4iLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcblxuICAgIEBpZiAkanVzdGlmeWNvbnRlbnQgeyBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDt9XG4gICAgQGVsc2Uge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRlbGVtZW50IHtcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBncmlkLXRlbXBsYXRlKCRsaW5lLCRjb2x1bW4pe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJGxpbmUsJGNvbHVtbik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6MzAwcHhcbn1cblxuLy9NZWRpYSBxdWVyeSB0byB1c2UgYnJlYWtwb2ludHNcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG4gICAgICAgICRicmVha3BvaW50LXZhbHVlOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcbiAgICAgICAgICAgICRicmVha3BvaW50LXZhbHVlOiAkYnJlYWtwb2ludC12YWx1ZSAtIDFweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcbkBtaXhpbiBtcS1iZXR3ZWVuKCRsb3dlciwkdXBwZXIpIHtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xuICAgICAgICAkdXBwZXItYnJlYWtwb2ludDptYXAtZ2V0KCRicmVha3BvaW50cywgJHVwcGVyKTtcblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyICkgPT0gZmFsc2UpIHtcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XG4gICAgICAgfVxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIgKSA9PSBmYWxzZSkge1xuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcbiAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1984:
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioComponent: () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ 3730);
/* harmony import */ var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/scroll-animation.component */ 8837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function PortfolioComponent_figure_7_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tools_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tools_r3.title);
  }
}
function PortfolioComponent_figure_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "figure", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9)(3, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PortfolioComponent_figure_7_li_8_Template, 3, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const portfolio_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", portfolio_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](portfolio_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](portfolio_r1.paragraph);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", portfolio_r1.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", portfolio_r1.github, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
class PortfolioComponent extends _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent {
  constructor(_el, cdRef, http) {
    super(_el, cdRef);
    this.http = http;
    this.projectList = [];
  }
  ngOnInit() {
    this.http.get("./assets/json/projetos.json").subscribe(portfolio => {
      this.projectList = portfolio;
    });
  }
  static #_ = this.ɵfac = function PortfolioComponent_Factory(t) {
    return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PortfolioComponent,
    selectors: [["portfolio"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 8,
    vars: 3,
    consts: [["id", "portfolio", 1, "portfolio"], [1, "portfolio__heading"], [1, "portfolio__title"], [1, "underline"], [1, "container"], [1, "grid"], ["class", "photo photo--wrapper", 4, "ngFor", "ngForOf"], [1, "photo", "photo--wrapper"], ["alt", "projeto", 1, "photo__img", 3, "src"], [1, "overlay"], [1, "overlay__title"], [1, "overlay__paragraph"], [1, "list"], ["class", "list__item", 4, "ngFor", "ngForOf"], [1, "overlay__icon"], [1, "fab", "fa-github", "fa-4x", 3, "href"], [1, "list__item"], [1, "list__tag"]],
    template: function PortfolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PortfolioComponent_figure_7_Template, 11, 5, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projectList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    styles: [".portfolio[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  padding: 3rem 0 3rem 0;\n  background-color: #bbdefb;\n}\n.portfolio__heading[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n}\n.portfolio__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #363636;\n}\n\n.photo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.photo__img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  background-repeat: no-repeat;\n  background-position: center;\n  object-fit: cover;\n  transition: 1s;\n  transform: scale(1);\n}\n.photo[_ngcontent-%COMP%]:hover   .photo__img[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.photo--wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.photo[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(32, 32, 32, 0.75);\n  opacity: 1;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: 1s;\n  box-sizing: border-box;\n  padding: 10px;\n  opacity: 0;\n  color: #fff;\n}\n.overlay__title[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-top: 2em;\n}\n.overlay__paragraph[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.overlay__icon[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  margin-top: 1.5em;\n}\n\n.list[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n}\n.list__item[_ngcontent-%COMP%] {\n  margin: 3px;\n  background-color: #1868fd;\n  border-radius: 20px;\n}\n.list__tag[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-row: 300px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 544px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1200) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-row: 300px;\n  }\n}\n@media (max-width: 767px) {\n  .grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-row: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQ0NRLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCRExzQjtFQUN4QixzQkFBQTtFQUNBLHlCRUZXO0FGSWI7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUNFO0VBQ0UsZUVMVztFRk1YLGNFZEs7QUZlVDs7QUFHQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtBQUhKO0FBTUU7RUFDRSx3Q0V2Qk07RUZ3Qk4sVUFBQTtBQUpKOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXRXJETTtBRmdEUjtBQU9FO0VBQ0UsV0V4REk7RUZ5REosZUFBQTtBQUxKO0FBUUU7RUFDRSxXRTdESTtBRnVEUjtBQVNFO0VDakVNLHVCQUFBO0VBRUosYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRDZEd0I7RUFDeEIsaUJBQUE7QUFISjs7QUFPQTtFQ3ZFUSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkRtRXNCO0FBQTFCO0FBRUU7RUFDRSxXQUFBO0VBQ0EseUJFOUVHO0VGK0VILG1CQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7QUFESjs7QUFLQTtFQzlESSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtBRDZESjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FDekRRO0VENkROO0lBQ0UsZ0JBQUE7RUFBRjtBQUNGO0FDL0RRO0VEbUVOO0lBQ0UsZ0JBQUE7RUFERjtBQUNGO0FDcEVRO0VEeUVOO0lBQ0UsZ0JBQUE7RUFGRjtBQUNGO0FDekVRO0VEK0VOO0lBQ0UsaUJBQUE7RUFIRjtBQUNGO0FDbEVRO0VEeUVOO0lDakdFLGFBQUE7SUFDQSxxQ0FBQTtJQUNBLHdCQUFBO0VEOEZGO0FBQ0Y7QUNyRlE7RUQyRk47SUN2R0UsYUFBQTtJQUNBLHFDQUFBO0lBQ0Esd0JBQUE7RURxR0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtaXhpbnNcIjtcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuLnBvcnRmb2xpbyB7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKGNvbHVtbik7XG4gIHBhZGRpbmc6IDNyZW0gMCAzcmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlLWxpZ2h0O1xuXG4gICZfX2hlYWRpbmcge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWgyO1xuICAgIGNvbG9yOiAkZ3JheTIxO1xuICB9XG59XG5cbi5waG90byB7XG4gICR0aGlzOiAmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5cbiAgJjpob3ZlciAjeyR0aGlzfV9faW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cblxuICAmLS13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgJjpob3ZlciAub3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG92ZXJsYXk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiAxcztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6ICR3aGl0ZTtcblxuICAmX190aXRsZSB7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cblxuICAmX19wYXJhZ3JhcGgge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cblxuICAmX19pY29uIHtcbiAgICBAaW5jbHVkZSBmbGV4LWNvbnRhaW5lcihyb3cpO1xuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICB9XG59XG5cbi5saXN0IHtcbiAgQGluY2x1ZGUgZmxleC1jb250YWluZXIocm93KTtcblxuICAmX19pdGVtIHtcbiAgICBtYXJnaW46IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG5cbiAgJl9fdGFnIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59XG5cbi5ncmlkIHtcbiAgQGluY2x1ZGUgZ3JpZC10ZW1wbGF0ZSgzLCAxZnIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBpbmNsdWRlIG1xKHNtLG1pbikge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xuICB9XG59XG5cbkBpbmNsdWRlIG1xKG1kLG1pbikge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICB9XG59XG5cbkBpbmNsdWRlIG1xKGxnLG1pbikge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICB9XG59XG5cbkBpbmNsdWRlIG1xKHhsLG1pbikge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgfVxufVxuXG5AaW5jbHVkZSBtcS1iZXR3ZWVuKG1kLGxnKSB7XG4gIC5ncmlkIHtcbiAgICBAaW5jbHVkZSBncmlkLXRlbXBsYXRlKDIsIDFmcik7XG4gIH1cbn1cblxuQGluY2x1ZGUgbXEobWQsbWF4KSB7XG4gIC5ncmlkIHtcbiAgICBAaW5jbHVkZSBncmlkLXRlbXBsYXRlKDEsIDFmcik7XG4gIH1cbn0iLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcblxuICAgIEBpZiAkanVzdGlmeWNvbnRlbnQgeyBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDt9XG4gICAgQGVsc2Uge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRlbGVtZW50IHtcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBncmlkLXRlbXBsYXRlKCRsaW5lLCRjb2x1bW4pe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJGxpbmUsJGNvbHVtbik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6MzAwcHhcbn1cblxuLy9NZWRpYSBxdWVyeSB0byB1c2UgYnJlYWtwb2ludHNcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG4gICAgICAgICRicmVha3BvaW50LXZhbHVlOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcbiAgICAgICAgICAgICRicmVha3BvaW50LXZhbHVlOiAkYnJlYWtwb2ludC12YWx1ZSAtIDFweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcbkBtaXhpbiBtcS1iZXR3ZWVuKCRsb3dlciwkdXBwZXIpIHtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xuICAgICAgICAkdXBwZXItYnJlYWtwb2ludDptYXAtZ2V0KCRicmVha3BvaW50cywgJHVwcGVyKTtcblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyICkgPT0gZmFsc2UpIHtcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XG4gICAgICAgfVxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIgKSA9PSBmYWxzZSkge1xuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcbiAgICAgICB9XG4gICAgfVxufSIsIi8vQ29sb3JzXG4kZ3JheTIxOiAjMzYzNjM2O1xuJGJsdWU6ICMxODY4ZmQ7XG4kYmx1ZS1kYXJrOiAjMTkzMTc1OTk7XG4kYmx1ZS1saWdodDogI2JiZGVmYjtcbiR3aGl0ZTogI2ZmZjtcblxuLy9Gb250IFNpemVcbiRmb250LXNpemUtaDE6IDIuNXJlbTtcbiRmb250LXNpemUtaDI6IDJyZW07XG4kZm9udC1zaXplLWgzOiAxLjc1cmVtO1xuJGZvbnQtc2l6ZS1oNDogMS41cmVtO1xuJGZvbnQtc2l6ZS1oNTogMS4yNXJlbTtcbiRmb250LXNpemUtaDY6IDFyZW07XG5cbiRwYXJhZ3JhcGg6IDFyZW07XG4kcGFyYWdyYXBoLXNtOiAxLjVyZW07XG4kcGFyYWdyYXBoLWxnOiAycmVtO1xuXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJG92ZXJsYXk6IHJnYmEoMzIsIDMyLCAzMiwgMC43NSk7XG5cbi8vRm9udFxuJGZvbnQtb3Blbi1zZXJpZjogXCJPcGVucyBTYW5zXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1yb2JvdG86IFwiUm9ib3RvXCI7XG5cbi8vU2NyZWVucyBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRicmVha3BvaW50cyA6IChcbiAgICB4czowLCAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxuICAgIHNtOjU0NHB4LCAvLyBTbWFsbCBzY3JlZW4gLyBwaG9uZVxuICAgIG1kOjc2OHB4LCAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XG4gICAgbGc6OTkycHgsIC8vTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxuICAgIHhsOjEyMDAsIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuKTsiXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation]
    }
  });
}

/***/ }),

/***/ 3730:
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollAnimation: () => (/* binding */ scrollAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2501);

const scrollAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('scrollAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1,
  transform: "translateX(0)"
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: "translateY(20%)"
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('show => hide', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('500ms ease-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('hide => show', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('700ms ease-in'))]);

/***/ }),

/***/ 8837:
/*!******************************************************!*\
  !*** ./src/app/shared/scroll-animation.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollAnimationComponent: () => (/* binding */ ScrollAnimationComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ScrollAnimationComponent {
  constructor(_el, cdRef) {
    this._el = _el;
    this.cdRef = cdRef;
  }
  onScroll() {
    this.componentPosition = this._el.nativeElement.offsetTop;
    this.scrollPosition = window.pageYOffset + window.innerHeight * 3 / 4;
    this.checkState();
  }
  checkState() {
    if (this.state = 'hide') {
      if (this.scrollPosition >= this.componentPosition) {
        this.state = 'show';
        this.unsubscribe();
      }
    }
  }
  subscribe() {
    this.subscribeScroll = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(window, 'scroll').subscribe(() => this.onScroll());
  }
  unsubscribe() {
    if (this.subscribeScroll) {
      this.subscribeScroll.unsubscribe();
    }
  }
  ngAfterViewInit() {
    this.state = 'hide';
    this.cdRef.detectChanges();
    this.subscribe();
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  static #_ = this.ɵfac = function ScrollAnimationComponent_Factory(t) {
    return new (t || ScrollAnimationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: ScrollAnimationComponent,
    outputs: {
      state: "state"
    }
  });
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ScrollAnimationComponent,
    factory: ScrollAnimationComponent.ɵfac
  });
}

/***/ }),

/***/ 7693:
/*!******************************************!*\
  !*** ./src/app/skill/skill.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillComponent: () => (/* binding */ SkillComponent)
/* harmony export */ });
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/animations */ 3730);
/* harmony import */ var _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/scroll-animation.component */ 8837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function SkillComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](skill_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r1.title);
  }
}
class SkillComponent extends _shared_scroll_animation_component__WEBPACK_IMPORTED_MODULE_1__.ScrollAnimationComponent {
  constructor(_el, cdRef, http) {
    super(_el, cdRef);
    this.http = http;
    this.skills = [];
  }
  ngOnInit() {
    this.http.get("./assets/json/skills.json").subscribe(skills => {
      this.skills = skills;
    });
  }
  static #_ = this.ɵfac = function SkillComponent_Factory(t) {
    return new (t || SkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SkillComponent,
    selectors: [["skill"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
    decls: 20,
    vars: 4,
    consts: [["id", "skill", 1, "skill"], [1, "skill__heading"], [1, "skill_title"], [1, "skill__paragraph"], [1, "underline"], [1, "list"], ["class", "list__item list--visible", 4, "ngFor", "ngForOf"], [1, "list", "list--inline"], [1, "list__item"], ["src", "assets/img/django.png", "alt", "Django", "width", "108", "height", "72"], [1, "list__label"], ["src", "assets/img/flask.svg", "alt", "Flask", "width", "108", "height", "72"], [1, "list__item", "list--visible"]],
    template: function SkillComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "What do I use?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tools and technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SkillComponent_li_8_Template, 4, 3, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Currently learning about");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 7)(12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Flask");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    styles: [".skill__heading[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.skill[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n}\n.skill[_ngcontent-%COMP%]   .list--inline[_ngcontent-%COMP%] {\n  flex-direction: row;\n  align-items: center;\n}\n.skill[_ngcontent-%COMP%]   .list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.skill[_ngcontent-%COMP%]   .list__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.skill[_ngcontent-%COMP%]   .list__item[_ngcontent-%COMP%]   .list__label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #363636;\n}\n.skill[_ngcontent-%COMP%]   .list--visible[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.skill[_ngcontent-%COMP%]   .skill__paragraph[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.list[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: row;\n  padding: 15px;\n}\n.list__item[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n}\n.list__label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 140px;\n  height: 49px;\n  line-height: 49px;\n  border-radius: 17px;\n  margin-top: 20px;\n  color: #fff;\n  background: #1868fd;\n  text-align: center;\n  visibility: hidden;\n}\n.list__label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -8px;\n  width: 0;\n  height: 0;\n  border-bottom: 8px solid #1868fd;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n}\n.list--visible[_ngcontent-%COMP%]:hover   .list__label[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGwvc2tpbGwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBSko7QUFNSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU9JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUxOO0FBT007RUFDRSxzQkFBQTtBQUxSO0FBUU07RUFDRSxlQUFBO0VBQ0EsY0NoQ0M7QUQwQlQ7QUFVSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVJOO0FBWUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBVko7O0FBY0E7RUU3Q1EsdUJBQUE7RUFFSixhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJGMENzQjtFQUN4QixhQUFBO0FBUkY7QUFVRTtFRWxETSx1QkFBQTtFQUVKLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkY4Q3dCO0FBSjVCO0FBT0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0M1REk7RUQ2REosbUJDaEVHO0VEaUVILGtCQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQU9JO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FBTE47QUFTRTtFQUNFLG1CQUFBO0FBUEoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibWl4aW5zXCI7XG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbi5za2lsbCB7XG4gICZfX2hlYWRpbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmxpc3Qge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcblxuICAgICYtLWlubGluZSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuXG4gICAgICAubGlzdF9fbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGNvbG9yOiAkZ3JheTIxO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtLXZpc2libGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLnNraWxsX19wYXJhZ3JhcGgge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG5cbi5saXN0IHtcbiAgJHRoaXM6ICY7XG4gIEBpbmNsdWRlIGZsZXgtY29udGFpbmVyKHJvdyk7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbiAgJl9faXRlbSB7XG4gICAgQGluY2x1ZGUgZmxleC1jb250YWluZXIoY29sdW1uKTtcbiAgfVxuXG4gICZfX2xhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGhlaWdodDogNDlweDtcbiAgICBsaW5lLWhlaWdodDogNDlweDtcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxMDAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAkYmx1ZTtcbiAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gIH1cblxuICAmLS12aXNpYmxlOmhvdmVyICN7JHRoaXN9X19sYWJlbCB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufSIsIi8vQ29sb3JzXG4kZ3JheTIxOiAjMzYzNjM2O1xuJGJsdWU6ICMxODY4ZmQ7XG4kYmx1ZS1kYXJrOiAjMTkzMTc1OTk7XG4kYmx1ZS1saWdodDogI2JiZGVmYjtcbiR3aGl0ZTogI2ZmZjtcblxuLy9Gb250IFNpemVcbiRmb250LXNpemUtaDE6IDIuNXJlbTtcbiRmb250LXNpemUtaDI6IDJyZW07XG4kZm9udC1zaXplLWgzOiAxLjc1cmVtO1xuJGZvbnQtc2l6ZS1oNDogMS41cmVtO1xuJGZvbnQtc2l6ZS1oNTogMS4yNXJlbTtcbiRmb250LXNpemUtaDY6IDFyZW07XG5cbiRwYXJhZ3JhcGg6IDFyZW07XG4kcGFyYWdyYXBoLXNtOiAxLjVyZW07XG4kcGFyYWdyYXBoLWxnOiAycmVtO1xuXG4kYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjYpO1xuJG92ZXJsYXk6IHJnYmEoMzIsIDMyLCAzMiwgMC43NSk7XG5cbi8vRm9udFxuJGZvbnQtb3Blbi1zZXJpZjogXCJPcGVucyBTYW5zXCIsIHNhbnMtc2VyaWY7XG4kZm9udC1yb2JvdG86IFwiUm9ib3RvXCI7XG5cbi8vU2NyZWVucyBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXNcbiRicmVha3BvaW50cyA6IChcbiAgICB4czowLCAvLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxuICAgIHNtOjU0NHB4LCAvLyBTbWFsbCBzY3JlZW4gLyBwaG9uZVxuICAgIG1kOjc2OHB4LCAvLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XG4gICAgbGc6OTkycHgsIC8vTGFyZ2Ugc2NyZWVuIC8gZGVza3RvcFxuICAgIHhsOjEyMDAsIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuKTsiLCJAbWl4aW4gZmxleC1jb250YWluZXIoJGZsZXhkaXJlY3Rpb24sJGp1c3RpZnljb250ZW50OmZhbHNlKXtcblxuICAgIEBpZiAkanVzdGlmeWNvbnRlbnQgeyBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Y29udGVudDt9XG4gICAgQGVsc2Uge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogJGZsZXhkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBncmlkLXRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4O1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5KCRlbGVtZW50KXtcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRlbGVtZW50IHtcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbiAoI3skaSowLjJzfSkgZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBncmlkLXRlbXBsYXRlKCRsaW5lLCRjb2x1bW4pe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJGxpbmUsJGNvbHVtbik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3c6MzAwcHhcbn1cblxuLy9NZWRpYSBxdWVyeSB0byB1c2UgYnJlYWtwb2ludHNcbkBtaXhpbiBtcSgkYnJlYWtwb2ludCwgJHR5cGU6IG1pbikge1xuICAgIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XG4gICAgICAgICRicmVha3BvaW50LXZhbHVlOiBtYXBfZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpO1xuICAgICAgICBAaWYgJHR5cGUgPT0gbWF4IHtcbiAgICAgICAgICAgICRicmVha3BvaW50LXZhbHVlOiAkYnJlYWtwb2ludC12YWx1ZSAtIDFweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKCN7JHR5cGV9LXdpZHRoOiAkYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vTWVkaWEgcXVlcnkgdG8gdXNlIHRoZSBzY3JlZW4gd2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemVcbkBtaXhpbiBtcS1iZXR3ZWVuKCRsb3dlciwkdXBwZXIpIHtcbiAgICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCRsb3dlcikgYW5kIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHVwcGVyKSB7XG4gICAgICAgICRsb3dlci1icmVha3BvaW50Om1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xuICAgICAgICAkdXBwZXItYnJlYWtwb2ludDptYXAtZ2V0KCRicmVha3BvaW50cywgJHVwcGVyKTtcblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDokbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6KCR1cHBlci1icmVha3BvaW50IC0gMSkpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyICkgPT0gZmFsc2UpIHtcbiAgICAgICAgQHdhcm4gJ1lvdXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XG4gICAgICAgfVxuICAgICAgIEBpZiAobWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdXBwZXIgKSA9PSBmYWxzZSkge1xuICAgICAgICBAd2FybiAnWW91ciBicmVha3BvaW50IHdhcyBpbnZhbGlkOiAjeyR1cHBlcn0uJztcbiAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_0__.scrollAnimation]
    }
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map