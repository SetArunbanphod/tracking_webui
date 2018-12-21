(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container text-center\">\r\n    <flash-messages></flash-messages>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nodes/nodes.component */ "./src/app/components/nodes/nodes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'setthawut';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            entryComponents: [_components_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_1__["NodesComponent"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_tabsleft_tabsleft_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tabsleft/tabsleft.component */ "./src/app/components/tabsleft/tabsleft.component.ts");
/* harmony import */ var _components_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/nodes/nodes.component */ "./src/app/components/nodes/nodes.component.ts");
/* harmony import */ var _services_mock_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/mock.service */ "./src/app/services/mock.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/car.service */ "./src/app/services/car.service.ts");
/* harmony import */ var _services_nodemcu_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/nodemcu.service */ "./src/app/services/nodemcu.service.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _components_testdata_testdata_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/testdata/testdata.component */ "./src/app/components/testdata/testdata.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/app/components/setting/setting.component.ts");
/* harmony import */ var _components_testmap_testmap_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/testmap/testmap.component */ "./src/app/components/testmap/testmap.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var appRoutes = [
    { path: "", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: "dashboard", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] },
    { path: "tabsleft", component: _components_tabsleft_tabsleft_component__WEBPACK_IMPORTED_MODULE_13__["TabsleftComponent"] },
    { path: "nodes/:car_id/:car_name", component: _components_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_14__["NodesComponent"] },
    { path: "setting", component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_28__["SettingComponent"] },
    { path: "testdata", component: _components_testdata_testdata_component__WEBPACK_IMPORTED_MODULE_26__["TestdataComponent"] },
    { path: "testmap", component: _components_testmap_testmap_component__WEBPACK_IMPORTED_MODULE_29__["TestmapComponent"] },
    { path: "lottery", component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_tabsleft_tabsleft_component__WEBPACK_IMPORTED_MODULE_13__["TabsleftComponent"],
                _components_nodes_nodes_component__WEBPACK_IMPORTED_MODULE_14__["NodesComponent"],
                _components_testdata_testdata_component__WEBPACK_IMPORTED_MODULE_26__["TestdataComponent"],
                _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_28__["SettingComponent"],
                _components_testmap_testmap_component__WEBPACK_IMPORTED_MODULE_29__["TestmapComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_23__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebase),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_25__["AngularFireDatabaseModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_27__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].GoogleMapApiKey
                }),
                ng2_opd_popup__WEBPACK_IMPORTED_MODULE_21__["PopupModule"].forRoot()
            ],
            providers: [
                _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
                _services_mock_service__WEBPACK_IMPORTED_MODULE_15__["MockService"],
                _services_validate_service__WEBPACK_IMPORTED_MODULE_16__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                _services_car_service__WEBPACK_IMPORTED_MODULE_19__["CarService"],
                _services_nodemcu_service__WEBPACK_IMPORTED_MODULE_20__["NodemcuService"],
                _services_firebase_service__WEBPACK_IMPORTED_MODULE_24__["FirebaseService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<popup #settingPopup>\n  <div class=\"container\">\n    <div *ngFor=\"let car of get_car | async\">\n      <label for=\"username\" class=\"font-weight-bold\">Username : </label> {{ car.username }} <br>\n      <label for=\"car_naem\" class=\"font-weight-bold\">Car name : </label> {{ car.car_name }} <br>\n      <label for=\"car_id\" class=\"font-weight-bold\">Car id : </label> {{ car.car_id }} <br>\n      <label for=\"line_id\" class=\"font-weight-bold\">Line id : </label> {{ car.line_id }} <br>\n      <label for=\"line_token\" class=\"font-weight-bold\">Line token : </label> {{ car.line_token }} <br>\n      <label for=\"high_temp\" class=\"font-weight-bold\">High temperature : </label> {{ car.high_temp }} <br>\n      <label for=\"low_temp\" class=\"font-weight-bold\">Low temperature : </label> {{ car.low_temp }} <br>\n    </div><br>\n    <div>\n      <button class=\"btn btn-sm btn-primary text-uppercase\" (click)=\"settingPopupOK()\">Edit data</button>&nbsp;\n      <button class=\"btn btn-sm btn-secondary text-uppercase\" (click)=\"settingPopupClose()\">close</button>\n    </div>\n  </div>\n  <br>\n</popup>\n\n<popup #editPopup>\n  <div class=\"container\">\n    <div *ngFor=\"let car of get_car | async\">\n      <label for=\"username\" class=\"font-weight-bold\">Username : </label> {{ car.username }} <br>\n      <label for=\"car_naem\" class=\"font-weight-bold\">Car name : </label> {{ car.car_name }} <br>\n      <label for=\"car_id\" class=\"font-weight-bold\">Car id : </label> {{ car.car_id }} <br><br>\n\n      <form class=\"form-signin\">\n        <label for=\"line_id\" class=\"font-weight-bold font-italic text-center\"> * Set up information for notifications.</label>\n        <div class=\"form-label-group\">\n          <label for=\"line_id\" >Line id : </label>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"update_line_id\" name=\"update_line_id\"\n            placeholder=\"Line id\" required autofocus>\n        </div>\n        <div class=\"form-label-group\">\n          <label for=\"line_token\" >Line token : </label>&nbsp;\n          <a href=\"https://gcms.in.th/howto/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%82%E0%B8%AD_token_%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A_line_notify.html\" target=\"_blank\"> * How to get token line notify. </a>\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"update_line_token\" name=\"update_line_token\"\n            placeholder=\"Line token\" required autofocus>\n        </div>\n        <div class=\"form-label-group\">\n          <label for=\"high_temp\" >High temperature : </label>&nbsp;\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"update_high_temp\" name=\"update_high_temp\"\n            placeholder=\"High temperature (°C) \" required autofocus>\n        </div>\n        <div class=\"form-label-group\">\n          <label for=\"low_temp\" >Low temperature : </label><br>\n          <input type=\"number\" class=\"form-control\"  [(ngModel)]=\"update_low_temp\" name=\"update_low_temp\"\n            placeholder=\"Low temperature (°C)\" required autofocus>\n        </div>\n      </form>\n      <br>\n      <div>\n        <button class=\"btn btn-sm btn-primary text-uppercase\" (click)=\"deitPopupOK(car)\" >Done</button>&nbsp;\n        <button class=\"btn btn-sm btn-secondary text-uppercase\" (click)=\"deitPopupClose()\" >close</button>\n      </div>\n    </div>\n  </div>\n  <br>\n</popup>\n\n<div class=\"container\">\n  <div class=\"card card-signin my-3\">\n    <div class=\"card-body text-center\">\n      <div class=\"form-label-group\">\n        <form>\n          <div>\n            <label for=\"inputName\">Car name :</label> &nbsp;\n            <input type=\"text\" placeholder=\" Car name\" [(ngModel)]=\"car_name\" name=\"car_name\" required>&nbsp;&nbsp;&nbsp;\n            <label for=\"inputId\">Car id :</label> &nbsp;\n            <input type=\"text\" placeholder=\" Car id\" [(ngModel)]=\"car_id\" name=\"car_id\" required>&nbsp;&nbsp;&nbsp;&nbsp;\n            <button class=\"btn btn-sm btn-secondary text-uppercase\" (click)=addNewCar()>Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"card card-signin my-3\" *ngFor=\"let nameCar of nameCars | async\">\n    <div class=\"row\">\n      <div class=\"col text-center\">\n        <img src=\"assets/images/car_icon.png\" width=\"150\" height=\"130\"></div>\n      <div class=\"col-6\">\n        <br>\n        <label for=\"Name\" class=\"form-control\">{{nameCar.car_name}}</label>\n        <label for=\"Node ID\" class=\"form-control\">{{nameCar.car_id}}</label>\n      </div>\n      <div class=\"col\">\n        <div class=\"row\">\n          <div class=\"col\"><br><br><button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" [routerLink]=\"['/nodes',nameCar.car_id,nameCar.car_name]\">Info</button></div>\n          <div class=\"col\"><br><br><button type=\"button\" class=\"btn btn-secondary btn-lg btn-block\" (click)=\"setting(nameCar.car_id)\">Setting</button></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(flashMessagesService, firebasedb) {
        this.flashMessagesService = flashMessagesService;
        this.firebasedb = firebasedb;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.nameCars = this.firebasedb.findCarByUsername(this.user.username);
    };
    //------------------------------------------------------------------------------------------Event Setting Popup
    DashboardComponent.prototype.setting = function (car_id) {
        this.get_car = this.firebasedb.findCarByCar_id(car_id);
        this.settingPopup.options = {
            header: "Setting",
            color: "#5cb85c",
            widthProsentage: 40,
            animationDuration: 1,
            showButtons: false,
            confirmBtnContent: "OK",
            cancleBtnContent: "Cancel",
            confirmBtnClass: "btn btn-default",
            cancleBtnClass: "btn btn-default",
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
        };
        this.editPopup.hide();
        this.settingPopup.show(this.settingPopup.options);
    };
    DashboardComponent.prototype.settingPopupOK = function () {
        this.editPopup.options = {
            header: "Set up information for notifications",
            color: "#5cb85c",
            widthProsentage: 40,
            animationDuration: 1,
            showButtons: false,
            confirmBtnContent: "OK",
            cancleBtnContent: "Cancel",
            confirmBtnClass: "btn btn-default",
            cancleBtnClass: "btn btn-default",
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
        };
        this.settingPopup.hide();
        this.editPopup.show(this.editPopup.options);
    };
    DashboardComponent.prototype.settingPopupClose = function () {
        this.settingPopup.hide();
    };
    //------------------------------------------------------------------------------------------Event Edit Popup
    DashboardComponent.prototype.deitPopupOK = function (carData) {
        if (this.update_line_id == undefined || this.update_line_token == undefined ||
            this.update_high_temp == undefined || this.update_low_temp == undefined) {
            this.flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        var car = {
            car_id: carData.car_id,
            line_id: this.update_line_id,
            line_token: this.update_line_token,
            high_temp: this.update_high_temp,
            low_temp: this.update_low_temp
        };
        this.update_line_id = undefined;
        this.update_line_token = undefined;
        this.update_high_temp = undefined;
        this.update_low_temp = undefined;
        this.firebasedb.updateCarByCar_id(car);
        this.firebasedb.updateNodemcu(car);
        this.editPopup.hide();
    };
    DashboardComponent.prototype.deitPopupClose = function () {
        this.editPopup.hide();
    };
    //Add car
    DashboardComponent.prototype.addNewCar = function () {
        var car = {
            car_id: this.car_id,
            car_name: this.car_name,
            username: this.user.username
        };
        this.car_id = "";
        this.car_name = "";
        //------------------------------------------------------------------------------------Set new gps on firebase
        this.firebasedb.setGpstoFirebase(car);
        //------------------------------------------------------------------------------------Add new nodemcu to mongodb
        this.firebasedb.addCar(car);
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('settingPopup'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__["Popup"])
    ], DashboardComponent.prototype, "settingPopup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editPopup'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_3__["Popup"])
    ], DashboardComponent.prototype, "editPopup", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-6 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <div class=\"text-center\">\n              <img src=\"assets/images/login_icon.png\" class=\"rounded-circle\" width=\"200\">\n            </div>\n            <br>\n            <h2 class=\"card-title text-center\">Sign In</h2>\n            <form class=\"form-signin\">\n              <div class=\"form-label-group\">\n                <label for=\"inputUsername\">Username</label>\n                <input type=\"text\" id=\"inputUsername\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\" required autofocus>\n              </div>\n\n              <div class=\"form-label-group\">\n                <label for=\"inputPassword\">Password</label>\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" required>\n              </div>\n\n              <div class=\"custom-control custom-checkbox mb-3\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n              </div>\n\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" (click)=\"loginUser()\" >Sign in</button>\n              <a class=\"nav-link text-center\" [routerLink]=\"['/register']\">Sing Up</a>\n              <!-- <hr class=\"my-4\"> -->\n              <!-- <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign in with Google</button>\n              <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</button> -->\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessagesService, authService, router) {
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
        this.username = "test";
        this.password = "123456789";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        //Login user
        this.authService.authenticationUser(user).subscribe(function (data) {
            if (data.success) {
                //this.flashMessagesService.show("Login Pass", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
                _this.authService.storeUserData(data.token, data.user);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"navbar navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/login']\">TRACKING SYSTEM</a>\n  <ul class=\"nav nav-pills\">\n    <!--<li class=\"nav-item\" *ngIf=\"isLoged == false\" >\n      <a class=\"nav-link\"  (click)=\"login()\" [routerLink]=\"['/login']\" >Log In</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"isLoged == false\">\n      <a class=\"nav-link\" (click)=\"signup()\" [routerLink]=\"['/register']\">Sign Up</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"isLoged == true\" >\n      <a class=\"nav-link \" (click)=\"logout()\" [routerLink]=\"['/login']\" >Log Out</a>\n    </li>-->\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user)
            this.isLoged = true;
        else
            this.isLoged = false;
    };
    NavbarComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.signup = function () {
        this.router.navigate(['/register']);
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.clear();
        this.isLoged = false;
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/nodes/nodes.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/nodes/nodes.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 600px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub2Rlcy9ub2Rlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztHQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub2Rlcy9ub2Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/nodes/nodes.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/nodes/nodes.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<popup #removenodemcu>\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <img src=\"assets/images/delete2.png\" width=\"170\" height=\"170\">\n    </div>\n    <br>\n    <div class=\"text-center\">\n      <label for=\"alert\" class=\"font-weight-bold \">Are you sure ?</label><br>\n      <label for=\"alert\" class=\"font-weight-bold \">You wont to dalete nodemcu id : {{ deletenodemcu }}.</label>\n    </div>\n    <br>\n    <div class=\"text-center\">\n      <button class=\"btn btn-sm btn-danger text-uppercase\" (click)=\"removenodemcuOK()\">Delete</button>&nbsp;\n      <button class=\"btn btn-sm btn-secondary text-uppercase\" (click)=\"removenodemcuClose()\">Cancel</button>\n    </div>\n  </div>\n  <br>\n</popup>\n\n<popup #removecar>\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <img src=\"assets/images/delete2.png\" width=\"170\" height=\"170\">\n    </div>\n    <br>\n    <div class=\"text-center\">\n      <label for=\"alert\" class=\"font-weight-bold \"> Are you sure ?</label><br>\n      <label for=\"alert\" class=\"font-weight-bold \"> You wont to dalete this car.</label>\n    </div>\n    <br>\n    <div class=\"text-center\">\n      <button class=\"btn btn-sm btn-danger text-uppercase\" (click)=\"removecarOK()\">Delete</button>&nbsp;\n      <button class=\"btn btn-sm btn-secondary text-uppercase\" (click)=\"removecarClose()\">Cancel</button>\n    </div>\n  </div>\n  <br>\n</popup>\n\n<div class=\"container\">\n  <div class=\"card card-signin my-3\">\n    <div class=\"row\">\n      <div class=\"col text-center\">\n        <img src=\"assets/images/car_icon.png\" width=\"150\" height=\"130\"></div>\n      <div class=\"col-6\">\n        <br>\n        <label for=\"Name\" class=\"form-control\"> {{car_name}} </label>\n        <label for=\"Node ID\" class=\"form-control\"> {{car_id}} </label>\n      </div>\n      <div class=\"col\">\n        <div class=\"col\"><br><br><button type=\"button\" class=\"btn btn-danger btn-lg btn-block text-uppercase\" (click)=\"removeCar(car_id)\">Delete</button></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card card-signin my-3\" *ngFor=\"let carGps of carGpss | async\">\n    <agm-map [latitude]=\"carGps.latitude\" [longitude]=\"carGps.longitude\" [zoom]=\"15\">\n      <agm-marker [latitude]=\"carGps.latitude\" [longitude]=\"carGps.longitude\" [iconUrl]=\"marker_icon\"></agm-marker>\n    </agm-map>\n  </div>\n\n  <div class=\"card card-signin my-3\">\n    <div class=\"card-body text-center\">\n      <div class=\"form-label-group\">\n        <form>\n          <div>\n            <label for=\"inputName\">NodeMCU name :</label> &nbsp;\n            <input type=\"text\" [(ngModel)]=\"nodemcu_name\" name=\"nodemcu_name\" placeholder=\" NodeMCU name\" required>&nbsp;&nbsp;&nbsp;\n            <label for=\"inputId\">NodeMCU name id :</label> &nbsp;\n            <input type=\"text\" [(ngModel)]=\"nodemcu_id\" name=\"nodemcu_id\" placeholder=\" NodeMCU id\" required>&nbsp;&nbsp;&nbsp;&nbsp;\n            <button class=\"btn btn-sm btn-secondary text-uppercase\" (click)=addNewnodemcu()>Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <br>\n\n  <div *ngFor=\"let nodemcu of getnodemcus | async\">\n    <div class=\"card card-signin my-1 bg-secondary text-white \">\n      <br>\n      <div class=\"row\">\n        <div class=\"col-3\">&nbsp;&nbsp;&nbsp;&nbsp;\n          <label for=\"Name\" class=\"font-weight-bold\"> Node name :</label><label>&nbsp; {{ nodemcu.nodemcu_name }}\n          </label><br>&nbsp;&nbsp;&nbsp;&nbsp;\n          <label for=\"Node ID\" class=\"font-weight-bold\"> Node id : </label><label>&nbsp; {{ nodemcu.nodemcu_id }}\n          </label>\n        </div>\n        <div class=\"col\">\n          <label for=\"temperature\" class=\"text-uppercase font-weight-bold\">temperature :</label> &nbsp;\n          <label for=\"temperature\" class=\"form-control\"> {{ nodemcu.temperature }} &nbsp; ํC</label>\n        </div>\n        <div class=\"col\">\n          <label for=\"humidity\" class=\"text-uppercase font-weight-bold\">humidity :</label> &nbsp;\n          <label for=\"humidity\" class=\"form-control\">{{ nodemcu.humidity }}&nbsp;%</label>\n        </div>\n        <div class=\"col\"><br>\n          <label for=\"status\" class=\"text-uppercase font-weight-bold\">status :</label> &nbsp;\n          <label for=\"status\" class=\"btn btn-warning bg-warning\">OFF</label>\n        </div>\n        <div class=\"col\"><br>\n          <label for=\"graph\" class=\"text-uppercase font-weight-bold\">Delete :</label> &nbsp;\n          <button type=\"button\" class=\"btn btn-danger text-uppercase\" (click)=\"removeNodemcu(nodemcu)\"> Delete </button>\n        </div>\n      </div>\n      <br>\n    </div>\n    <br>\n  </div>\n  <br>\n  <br>\n  <br>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/components/nodes/nodes.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/nodes/nodes.component.ts ***!
  \*****************************************************/
/*! exports provided: NodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodesComponent", function() { return NodesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var ng2_opd_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-opd-popup */ "./node_modules/ng2-opd-popup/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { AgmCoreModule } from '@agm/core'
var NodesComponent = /** @class */ (function () {
    function NodesComponent(flashMessagesService, route, firebaseService, router) {
        this.flashMessagesService = flashMessagesService;
        this.route = route;
        this.firebaseService = firebaseService;
        this.router = router;
        //--------------------------------------------------------------------------------Google map api
        this.marker_icon = {
            url: './assets/images/marker_icon.svg',
            scaledSize: {
                width: 60,
                height: 60
            }
        };
    }
    NodesComponent.prototype.ngOnInit = function () {
        //------------------------------------------------------------------------------Get User, car in paramMap
        this.user = JSON.parse(localStorage.getItem('user'));
        this.car_id = this.route.snapshot.paramMap.get('car_id');
        this.car_name = this.route.snapshot.paramMap.get('car_name');
        //Create structure of car
        var car = {
            username: this.user.username,
            car_id: this.car_id
        };
        //--------------------------------------------------------------------------------fins car in mongodb 
        this.carGpss = this.firebaseService.findGpsBycar_id(car.car_id);
        console.log("this.carGps", this.carGpss);
        //--------------------------------------------------------------------------------find nodemcu in mongodb
        this.getnodemcus = this.firebaseService.findNodemcuBycar_id(car.car_id); //---find data of nodemcu in firebase
    };
    //Add new nodemcu
    NodesComponent.prototype.addNewnodemcu = function () {
        var nodemcu = {
            car_id: this.car_id,
            username: this.user.username,
            nodemcu_id: this.nodemcu_id,
            nodemcu_name: this.nodemcu_name
        };
        this.nodemcu_id = "";
        this.nodemcu_name = "";
        //------------------------------------------------------------------------------------Set new nodemcu on firebase
        this.firebaseService.setNodemcutoFirebase(nodemcu);
        return false;
    };
    //Remove car
    NodesComponent.prototype.removeCar = function (car_id) {
        this.removecar.options = {
            header: "Delete car!",
            color: "#4f4f4f",
            widthProsentage: 20,
            animationDuration: 0,
            showButtons: false,
            confirmBtnContent: "OK",
            cancleBtnContent: "Cancel",
            confirmBtnClass: "btn btn-default",
            cancleBtnClass: "btn btn-default",
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
        };
        this.deletecar = car_id;
        this.removecar.show(this.removecar.options);
        return false;
    };
    NodesComponent.prototype.removecarOK = function () {
        this.firebaseService.removeCarBycar_id(this.deletecar);
        this.deletecar = "";
        this.removecar.hide();
        this.router.navigate(['/dashboard']);
    };
    NodesComponent.prototype.removecarClose = function () {
        this.removecar.hide();
    };
    //Remove nodemcu
    NodesComponent.prototype.removeNodemcu = function (nodemcu) {
        this.removenodemcu.options = {
            header: "Delete nodemcu!",
            color: "#4f4f4f",
            widthProsentage: 25,
            animationDuration: 0,
            showButtons: false,
            confirmBtnContent: "OK",
            cancleBtnContent: "Cancel",
            confirmBtnClass: "btn btn-default",
            cancleBtnClass: "btn btn-default",
            animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
        };
        this.deletenodemcu = nodemcu.nodemcu_id;
        this.removenodemcu.show(this.removenodemcu.options);
        return false;
    };
    NodesComponent.prototype.removenodemcuOK = function () {
        this.firebaseService.removeNodemcuBynodemcu_id(this.deletenodemcu);
        this.deletenodemcu = "";
        this.removenodemcu.hide();
    };
    NodesComponent.prototype.removenodemcuClose = function () {
        this.removenodemcu.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('removenodemcu'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_4__["Popup"])
    ], NodesComponent.prototype, "removenodemcu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('removecar'),
        __metadata("design:type", ng2_opd_popup__WEBPACK_IMPORTED_MODULE_4__["Popup"])
    ], NodesComponent.prototype, "removecar", void 0);
    NodesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nodes',
            template: __webpack_require__(/*! ./nodes.component.html */ "./src/app/components/nodes/nodes.component.html"),
            styles: [__webpack_require__(/*! ./nodes.component.css */ "./src/app/components/nodes/nodes.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NodesComponent);
    return NodesComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-6 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <div class=\"text-center\">\n            <img src=\"assets/images/login_icon.png\" class=\"rounded-circle\" width=\"200\">\n          </div>\n          <br>\n          <h2 class=\"card-title text-center\">Sign Up</h2>\n          <form class=\"form-signin\">\n            <div class=\"form-label-group\">\n              <label for=\"inputName\">Name</label>\n              <input type=\"text\" id=\"inputName\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\"\n                required autofocus>\n            </div>\n\n            <div class=\"form-label-group\">\n              <label for=\"inputUsername\">Username</label>\n              <input type=\"text\" id=\"inputUsername\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\"\n                placeholder=\"Username\" required autofocus>\n            </div>\n\n            <div class=\"form-label-group\">\n              <label for=\"inputEmail\">Email address</label>\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email address\"\n                required autofocus>\n            </div>\n\n            <div class=\"form-label-group\">\n              <label for=\"inputPassword\">Password</label>\n              <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\"\n                placeholder=\"Password\" required>\n            </div>\n\n            <div class=\"form-label-group\">\n              <label for=\"ConfirmPassword\">Confirm password</label>\n              <input type=\"password\" id=\"ConfirmPassword\" class=\"form-control\" [(ngModel)]=\"confirmpassword\" name=\"confirmpassword\"\n                placeholder= \"Confirm password\" required>\n            </div>\n            <br>\n\n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" (click)=\"submitRegister()\">Sign up</button>\n            <a class=\"nav-link text-center\" [routerLink]=\"['/login']\">Sing In</a>\n            <!-- <hr class=\"my-4\"> -->\n            <!-- <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign in with Google</button>\n              <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</button> -->\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.submitRegister = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            confirmpassword: this.confirmpassword
        };
        if (!this.validateService.validateRegister(user)) {
            this.flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessagesService.show('Please use a valid email!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validatePassword(user)) {
            this.flashMessagesService.show('* Passwords do not match!', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
                _this.authService.storeUserData(data.token, data.user);
            }
            else {
                _this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/setting/setting.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/setting/setting.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/setting/setting.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/setting/setting.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/components/setting/setting.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/setting/setting.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingComponent = /** @class */ (function () {
    function SettingComponent(firebasedb) {
        this.firebasedb = firebasedb;
    }
    SettingComponent.prototype.ngOnInit = function () {
        this.car = this.firebasedb.findCarByCar_id(this.car_id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SettingComponent.prototype, "car_id", void 0);
    SettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/components/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/components/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/components/tabsleft/tabsleft.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/tabsleft/tabsleft.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFic2xlZnQvdGFic2xlZnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/tabsleft/tabsleft.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/tabsleft/tabsleft.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Nav tabs -->\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" >Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link \" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" >Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"messages-tab\" data-toggle=\"tab\" href=\"#messages\" role=\"tab\" aria-controls=\"messages\" aria-selected=\"false\">Messages</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"settings-tab\" data-toggle=\"tab\" href=\"#settings\" role=\"tab\" aria-controls=\"settings\" aria-selected=\"false\">Settings</a>\n    </li>\n  </ul>\n  \n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\"><app-dashboard></app-dashboard></div>\n    <div class=\"tab-pane \" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\"><app-dashboard></app-dashboard></div>\n    <div class=\"tab-pane \" id=\"messages\" role=\"tabpanel\" aria-labelledby=\"messages-tab\">...</div>\n    <div class=\"tab-pane \" id=\"settings\" role=\"tabpanel\" aria-labelledby=\"settings-tab\">...</div>\n  </div>\n\n  <router-outlet></router-outlet>\n  \n"

/***/ }),

/***/ "./src/app/components/tabsleft/tabsleft.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/tabsleft/tabsleft.component.ts ***!
  \***********************************************************/
/*! exports provided: TabsleftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsleftComponent", function() { return TabsleftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsleftComponent = /** @class */ (function () {
    function TabsleftComponent() {
    }
    TabsleftComponent.prototype.ngOnInit = function () {
    };
    TabsleftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabsleft',
            template: __webpack_require__(/*! ./tabsleft.component.html */ "./src/app/components/tabsleft/tabsleft.component.html"),
            styles: [__webpack_require__(/*! ./tabsleft.component.css */ "./src/app/components/tabsleft/tabsleft.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsleftComponent);
    return TabsleftComponent;
}());



/***/ }),

/***/ "./src/app/components/testdata/testdata.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/testdata/testdata.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdGRhdGEvdGVzdGRhdGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/testdata/testdata.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/testdata/testdata.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-9 col-md-7 col-lg-6 mx-auto\">\n        <div class=\"card card-signin my-5\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title text-center\">Test data</h2>\n            <form class=\"form-signin\">\n\n              <div class=\"form-label-group\">\n                <label for=\"nodemcu_id\">Nodemcu id</label>\n                <input type=\"text\" id=\"nodemcu_id\" class=\"form-control\" [(ngModel)]=\"nodemcu_id\" name=\"nodemcu_id\"\n                  placeholder=\"Nodemcu id\" required autofocus>\n              </div>\n\n              <div class=\"form-label-group\">\n                <label for=\"temperature\">Temperature</label>\n                <input type=\"text\" id=\"temperature\" class=\"form-control\" [(ngModel)]=\"temperature\" name=\"temperature\"\n                  placeholder=\"Temperature\" required autofocus>\n              </div>\n\n              <div class=\"form-label-group\">\n                <label for=\"humidity\">Humidity</label>\n                <input type=\"text\" id=\"humidity\" class=\"form-control\" [(ngModel)]=\"humidity\" name=\"humidity\"\n                  placeholder=\"Humidity\" required>\n              </div>\n              <br>\n\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" (click)=\"testdata()\">done</button>\n              <br>\n              <br>\n              <div class=\"form-label-group\">\n                <label for=\"getdata\">Get Data</label>\n                <input type=\"text\" id=\"getdata\" class=\"form-control\" [(ngModel)]=\"getdata\" name=\"getdata\" placeholder=\"Get Data\"\n                  required>\n              </div>\n              <br>\n\n              <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\" (click)=\"getdatas()\">getdata</button>\n              <br>\n              <div *ngFor=\"let node of anode | async\">\n                <label for=\"anode\">{{ node.nodemcu_id }} - </label>\n                <label for=\"anode\">{{ node.temperature }} - </label>\n                <label for=\"anode\">{{ node.humidity }} - </label>\n              </div>\n              <br>\n              <br>\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\" *ngFor=\"let item of getnodemcus | async\"> {{ item.nodemcu_id }}\n                  <span class=\"badge\">{{item.temperature}}</span>\n                </li>\n              </ul>\n\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/testdata/testdata.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/testdata/testdata.component.ts ***!
  \***********************************************************/
/*! exports provided: TestdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestdataComponent", function() { return TestdataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestdataComponent = /** @class */ (function () {
    function TestdataComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    TestdataComponent.prototype.ngOnInit = function () {
    };
    TestdataComponent.prototype.testdata = function () {
        var nodemcu = {
            temperature: this.temperature,
            humidity: this.humidity,
            nodemcu_id: this.nodemcu_id
        };
        this.temperature = "";
        this.humidity = "";
        this.nodemcu_id = "";
        this.firebaseService.testdata(nodemcu);
    };
    TestdataComponent.prototype.getdatas = function () {
        var nodemcu_id = this.getdata;
        this.getdata = "";
    };
    TestdataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testdata',
            template: __webpack_require__(/*! ./testdata.component.html */ "./src/app/components/testdata/testdata.component.html"),
            styles: [__webpack_require__(/*! ./testdata.component.css */ "./src/app/components/testdata/testdata.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], TestdataComponent);
    return TestdataComponent;
}());



/***/ }),

/***/ "./src/app/components/testmap/testmap.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/testmap/testmap.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 800px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0bWFwL3Rlc3RtYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7R0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdG1hcC90ZXN0bWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/testmap/testmap.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/testmap/testmap.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-signin my-3\">\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"15\" [mapTypeId]=\"maptype\">\n    <agm-marker *ngFor=\"let data of GPS_Locations | async\" [latitude]=\"data.latitude\" [longitude]=\"data.longitude\"></agm-marker>\n  </agm-map>\n</div>"

/***/ }),

/***/ "./src/app/components/testmap/testmap.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/testmap/testmap.component.ts ***!
  \*********************************************************/
/*! exports provided: TestmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestmapComponent", function() { return TestmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firebase.service */ "./src/app/services/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestmapComponent = /** @class */ (function () {
    function TestmapComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.testDelay = "delay10000";
        this.lat = 16.74282;
        this.lng = 100.2045;
        this.maptype = "hybrid";
    }
    TestmapComponent.prototype.ngOnInit = function () {
        this.GPS_Locations = this.firebaseService.findGpsTestMap(this.testDelay);
        console.log("this.GPS_Locations", this.GPS_Locations);
        this.GPS_Locations.forEach(function (element) {
            console.log(element);
        });
    };
    TestmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testmap',
            template: __webpack_require__(/*! ./testmap.component.html */ "./src/app/components/testmap/testmap.component.html"),
            styles: [__webpack_require__(/*! ./testmap.component.css */ "./src/app/components/testmap/testmap.component.css")]
        }),
        __metadata("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], TestmapComponent);
    return TestmapComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Angular workshop</h1>\n\n<button (click)=\"toggle()\">{{isEdit}}</button>\n<div *ngIf=\"isEditable == true\">\n  <form>\n    <div>\n      <label for=\"name\"><b>Name : </b></label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n    </div>\n    <div>\n      <label for=\"age\"><b>Age : </b></label>\n      <input type=\"text\" name=\"age\" [(ngModel)]=\"age\">\n    </div>\n    <div>\n      <label for=\"email\"><b>Email : </b></label>\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"email\">\n\n    </div>\n  </form>\n</div>\n\n<ul>\n  <li><b>Name : </b>{{name}}</li>\n  <li><b>Age : </b>{{age}} year old</li>\n  <li><b>Email : </b>{{email}}</li>\n  <li><b>Address : </b>{{address.street}} , {{address.city}} ,{{address.province}} ,{{address.postcode}}</li>\n</ul>\n\n<h2>Skills</h2>\n<form (submit)=\"addSkill(skill.value)\">\n  <div>\n    <label for=\"skill\">Skill : </label>\n    <input type=\"text\" #skill placeholder=\"Add your skill\">\n  </div>\n</form>\n\n<ul>\n  <li style=\"list-style-type: none\" *ngFor=\"let skill of skills; let i = index;\">{{i+1}}. {{skill}} <button (click)=\"removeSkill(skill)\">\n      x </button></li>\n</ul>\n\n<h2>Todo List </h2>\n<ul>\n  <li style=\"list-style-type: none\" *ngFor=\"let todo of todolist; let i = index;\">{{todo.id}}. {{todo.title}}</li>\n</ul>"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = /** @class */ (function () {
    function UserComponent(httpService) {
        this.httpService = httpService;
        this.isEditable = true;
        this.isEdit = "hide";
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = "Setthawut Arunbanphod";
        this.age = 22;
        this.email = "setthawut@gmail.com";
        this.address = {
            city: "Pisanulok",
            postcode: "65000",
            province: "Pisanulok",
            street: "43/8 M.8",
        };
        this.skills = ["c++", "python", "c#", "assembly"];
        this.httpService.getTodoList().subscribe(function (res) {
            _this.todolist = res;
        });
        /* this.httpService.getLotteryList().subscribe((res)=>{
          this.lotterys = res;
          console.log("this.lotterys",this.lotterys);
        }) */
    };
    UserComponent.prototype.toggle = function () {
        this.isEditable = !this.isEditable;
        if (this.isEdit == "show") {
            this.isEdit = "hide";
        }
        else {
            this.isEdit = "show";
        }
    };
    UserComponent.prototype.addSkill = function (skill) {
        this.skills.unshift(skill);
        return false;
    };
    UserComponent.prototype.removeSkill = function (skill) {
        var _this = this;
        this.skills.forEach(function (element, index) {
            if (element == skill) {
                _this.skills.splice(index, 1);
            }
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://178.128.92.198:3000/users/register', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticationUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://178.128.92.198:3000/users/auth', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_toekn', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authtoken = token;
        this.user = user;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/car.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/car.service.ts ***!
  \*****************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.addCar = function (car) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/cars/addcar', car, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CarService.prototype.findCar = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/cars/findcar', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseService = /** @class */ (function () {
    function FirebaseService(firebsedb) {
        this.firebsedb = firebsedb;
    }
    //------------------------------------------------------------------------------------- Set update and get car data
    FirebaseService.prototype.addCar = function (car) {
        this.firebsedb.object('/car/' + car.car_id).update({
            car_id: car.car_id,
            car_name: car.car_name,
            username: car.username
        });
    };
    FirebaseService.prototype.updateCarByCar_id = function (car) {
        this.firebsedb.object('/car/' + car.car_id).update({
            line_id: car.line_id,
            line_token: car.line_token,
            high_temp: car.high_temp,
            low_temp: car.low_temp
        });
    };
    FirebaseService.prototype.findCarByUsername = function (username) {
        return this.firebsedb.list('/car', function (ref) { return ref.orderByChild('username').equalTo(username); }).valueChanges();
    };
    FirebaseService.prototype.findCarByCar_id = function (car_id) {
        return this.firebsedb.list('/car', function (ref) { return ref.orderByChild('car_id').equalTo(car_id); }).valueChanges();
    };
    //------------------------------------------------------------------------------------- Set new nodemcu on firebase
    FirebaseService.prototype.setNodemcutoFirebase = function (nodemcu) {
        var _this = this;
        this.firebsedb.list('car').query.orderByChild('car_id').equalTo(nodemcu.car_id).once('value', function (res) {
            res.forEach(function (data) {
                var car = data.val();
                if (car.high_temp != undefined && car.low_temp != undefined) {
                    _this.firebsedb.object('/nodemcu/' + nodemcu.nodemcu_id).update({
                        nodemcu_id: nodemcu.nodemcu_id,
                        nodemcu_name: nodemcu.nodemcu_name,
                        car_id: nodemcu.car_id,
                        high_temp: car.high_temp,
                        low_temp: car.low_temp
                    });
                }
                else {
                    _this.firebsedb.object('/nodemcu/' + nodemcu.nodemcu_id).update({
                        nodemcu_id: nodemcu.nodemcu_id,
                        nodemcu_name: nodemcu.nodemcu_name,
                        car_id: nodemcu.car_id
                    });
                }
            });
        });
    };
    FirebaseService.prototype.findNodemcuBycar_id = function (car_id) {
        return this.firebsedb.list('/nodemcu', function (ref) { return ref.orderByChild('car_id').equalTo(car_id); }).valueChanges();
    };
    FirebaseService.prototype.updateNodemcu = function (car) {
        var _this = this;
        this.firebsedb.list('nodemcu').query.orderByChild('car_id').equalTo(car.car_id).once('value', function (res) {
            res.forEach(function (data) {
                var nodemcu = data.val();
                _this.firebsedb.object('/nodemcu/' + nodemcu.nodemcu_id).update({
                    high_temp: car.high_temp,
                    low_temp: car.low_temp
                });
            });
        });
    };
    //--------------------------------------------------------------------------------------- Remove car
    FirebaseService.prototype.removeCarBycar_id = function (car_id) {
        this.firebsedb.object('/car/' + car_id).remove();
    };
    //--------------------------------------------------------------------------------------- Remove nodemcu
    FirebaseService.prototype.removeNodemcuBynodemcu_id = function (nodemcu_id) {
        this.firebsedb.object('/nodemcu/' + nodemcu_id).remove();
    };
    //--------------------------------------------------------------------------------------- Set new gps on firebase
    FirebaseService.prototype.setGpstoFirebase = function (car) {
        this.firebsedb.object('/gps/' + car.car_id).update({
            car_id: car.car_id,
            latitude: 13.702394,
            longitude: 100.525895
        });
    };
    FirebaseService.prototype.findGpsBycar_id = function (car_id) {
        return this.firebsedb.list('/gps', function (ref) { return ref.orderByChild('car_id').equalTo(car_id); }).valueChanges();
    };
    //----------------------------------------------------------------------------------------- Tetst Data
    FirebaseService.prototype.testdata = function (nodemcu) {
        this.firebsedb.object('/nodemcu/' + nodemcu.nodemcu_id).update({
            temperature: nodemcu.temperature,
            humidity: nodemcu.humidity
        });
    };
    FirebaseService.prototype.findGpsTestMap = function (testDelay) {
        return this.firebsedb.list('gps/' + testDelay).valueChanges();
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getTodoList = function () {
        return this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HttpService.prototype.getLotteryList = function () {
        //return this.http.get("https://cdn.lottery.co.th/lottery-json/files/01122561.json").pipe(map((res)=>res.json()));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/mock.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/mock.service.ts ***!
  \******************************************/
/*! exports provided: MockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockService", function() { return MockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MockService = /** @class */ (function () {
    function MockService() {
    }
    MockService.prototype.getMock = function () {
        return [{
                name: "Car-Name car124567",
                carid: "Car-id 123455-45646665"
            }, {
                name: "Car-Name car98756",
                carid: "Car-id 2356-47485"
            }];
    };
    MockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MockService);
    return MockService;
}());



/***/ }),

/***/ "./src/app/services/nodemcu.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/nodemcu.service.ts ***!
  \*********************************************/
/*! exports provided: NodemcuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodemcuService", function() { return NodemcuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodemcuService = /** @class */ (function () {
    function NodemcuService(http) {
        this.http = http;
    }
    NodemcuService.prototype.addNodemcu = function (nodemcu) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/nodemcus/addnodemcu', nodemcu, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NodemcuService.prototype.findNodemcu = function (car) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/nodemcus/findnodemcu', car, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NodemcuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], NodemcuService);
    return NodemcuService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePassword = function (user) {
        if (user.password == user.confirmpassword) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDfVQKoDSQ6y_OxIT6Q16SuHY6SBBKnWfQ",
        authDomain: "mydata-001.firebaseapp.com",
        databaseURL: "https://mydata-001.firebaseio.com",
        projectId: "mydata-001",
        storageBucket: "mydata-001.appspot.com",
        messagingSenderId: "468191653755"
    },
    GoogleMapApiKey: 'AIzaSyAEMofWzWmVMQUjgfDV14nTyFzfC8MIJeM'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Y4S1-2561\Computer Engineering Project I\myangular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map