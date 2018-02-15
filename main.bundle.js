webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <app-admin-header></app-admin-header>\n  <!-- Left side column. contains the logo and sidebar -->\n  <app-admin-left-side></app-admin-left-side>\n\n  <!-- Content Wrapper. Contains page content -->\n  <router-outlet></router-outlet>\n  <!-- /.content-wrapper -->\n  <app-admin-footer></app-admin-footer>\n\n  <!-- Control Sidebar -->\n  <app-admin-control-sidebar></app-admin-control-sidebar>\n  <!-- /.control-sidebar -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.bodyClasses = 'skin-blue sidebar-mini';
        this.body = document.getElementsByTagName('body')[0];
    }
    AdminComponent.prototype.ngOnInit = function () {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_routing_module__ = __webpack_require__("../../../../../src/app/admin/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__control_sidebar_control_sidebar_component__ = __webpack_require__("../../../../../src/app/admin/control-sidebar/control-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/admin/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__left_side_left_side_component__ = __webpack_require__("../../../../../src/app/admin/left-side/left-side.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/admin/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grafic_kip_grafic_kip_component__ = __webpack_require__("../../../../../src/app/admin/grafic-kip/grafic-kip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grafic_retention_grafic_retention_component__ = __webpack_require__("../../../../../src/app/admin/grafic-retention/grafic-retention.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__grafic_mau_grafic_mau_component__ = __webpack_require__("../../../../../src/app/admin/grafic-mau/grafic-mau.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__grafic_heatmap_grafic_heatmap_component__ = __webpack_require__("../../../../../src/app/admin/grafic-heatmap/grafic-heatmap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__grafic_layer_grafic_layer_component__ = __webpack_require__("../../../../../src/app/admin/grafic-layer/grafic-layer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__grafic_topusers_grafic_topusers_component__ = __webpack_require__("../../../../../src/app/admin/grafic-topusers/grafic-topusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_highcharts__ = __webpack_require__("../../../../ng2-highcharts/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["e" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_highcharts__["a" /* Ng2HighchartsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__left_side_left_side_component__["a" /* LeftSideComponent */],
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_2__control_sidebar_control_sidebar_component__["a" /* ControlSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__grafic_kip_grafic_kip_component__["a" /* GraficKIPComponent */],
                __WEBPACK_IMPORTED_MODULE_11__grafic_mau_grafic_mau_component__["a" /* GraficMAUComponent */],
                __WEBPACK_IMPORTED_MODULE_10__grafic_retention_grafic_retention_component__["a" /* GraficRetentionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__grafic_heatmap_grafic_heatmap_component__["a" /* GraficHeatMapComponent */],
                __WEBPACK_IMPORTED_MODULE_13__grafic_layer_grafic_layer_component__["a" /* GraficLayerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__grafic_topusers_grafic_topusers_component__["a" /* GraficTopUsersComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/control-sidebar/control-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Create the tabs -->\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n    <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n  </ul>\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <!-- Home tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                <p>nora@example.com</p>\n              </div>\n            </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Custom Template Design\n              <span class=\"label label-danger pull-right\">70%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Update Resume\n              <span class=\"label label-success pull-right\">95%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Laravel Integration\n              <span class=\"label label-warning pull-right\">50%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Back End Framework\n              <span class=\"label label-primary pull-right\">68%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n    </div>\n    <!-- /.tab-pane -->\n    <!-- Stats tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n    <!-- /.tab-pane -->\n    <!-- Settings tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n      <form method=\"post\">\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n          <p>\n            Some information about this general settings option\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n          <p>\n            Other sets of options are available\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n          <p>\n            Allow the user to show his name in blog posts\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n            </label>\n        </div>\n        <!-- /.form-group -->\n      </form>\n    </div>\n    <!-- /.tab-pane -->\n  </div>\n</aside>\n<!-- Add the sidebar's background. This div must be placed\n       immediately after the control sidebar -->\n<div class=\"control-sidebar-bg\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/control-sidebar/control-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlSidebarComponent = /** @class */ (function () {
    function ControlSidebarComponent() {
    }
    ControlSidebarComponent.prototype.ngOnInit = function () {
    };
    ControlSidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-admin-control-sidebar',
            template: __webpack_require__("../../../../../src/app/admin/control-sidebar/control-sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ControlSidebarComponent);
    return ControlSidebarComponent;
}());

//# sourceMappingURL=control-sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      Dashboard\n      <small>Control panel</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li class=\"active\">Dashboard</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content\">\n    <!-- Small boxes (Stat box) -->\n    <div class=\"row\">\n      <!-- ./col -->\n      <div class=\"col-lg-12 col-xs-12\">\n        <!-- small box -->\n            <form>\n                <div class=\"form-group\" style=\"text-align: left;margin-right: 14px;\">\n                  <div class=\"row\">\n                      <div class=\"col-lg-4 form-group\">\n                          <select placeholder='Period' [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"period\" class=\"form-control\">\n                            <option value=\"week\">Week</option>\n                            <option value=\"month\">Month</option>\n                          </select>\n                        </div>\n                      <div class=\"col-lg-8 input-group input-file\" name=\"Fichier1\">\n                          <input [ngModelOptions]=\"{standalone: true}\" type=\"file\" class=\"form-control\" [(ngModel)]=\"data\" (change)=\"onFileChange($event)\" placeholder='Choose a file...' />\n                          <span class=\"input-group-btn\">\n                                <button class=\"btn btn-primary btn-reset\" (click)=\"onUpload()\" type=\"button\">Upload</button>\n                          </span>\n                      </div>\n                  </div>\n                </div>\n              </form>\n      </div>\n      <!-- ./col -->\n    </div>\n    <!-- /.row -->\n    <!-- Main row -->\n    <div class=\"row\">\n      <!-- Left col -->\n      <section class=\"col-lg-6 connectedSortable\">\n        <!-- Custom tabs (Charts with tabs)-->\n          <grafic-kip [loadGraphic]=\"loadGraphic\"></grafic-kip>\n        <!-- /.nav-tabs-custom -->\n      </section>\n      <!-- /.Left col -->\n      <!-- right col (We are only adding the ID to make the widgets sortable)-->\n      <section class=\"col-lg-6 connectedSortable\">\n        <!-- solid sales graph -->\n       <grafic-retention [loadGraphic]=\"loadGraphic\"></grafic-retention>\n        <!-- /.box -->\n      </section>\n      <!-- right col -->\n    </div>\n    <!-- /.row (main row) -->\n\n     <!-- Main row -->\n     <div class=\"row\">\n        <!-- Left col -->\n        <section class=\"col-lg-6 connectedSortable\">\n          <!-- Custom tabs (Charts with tabs)-->\n            <grafic-mau [loadGraphic]=\"loadGraphic\"></grafic-mau>\n          <!-- /.nav-tabs-custom -->\n        </section>\n        <!-- /.Left col -->\n        <!-- right col (We are only adding the ID to make the widgets sortable)-->\n        <section class=\"col-lg-6 connectedSortable\">\n            <!-- solid sales graph -->\n          <grafic-heatmap [loadGraphic]=\"loadGraphic\"></grafic-heatmap>\n            <!-- /.box -->\n          </section>\n          <!-- right col -->\n      </div>\n      <!-- /.row (main row) -->\n\n       <!-- Main row -->\n     <div class=\"row\">\n        <!-- Left col -->\n        <section class=\"col-lg-12 connectedSortable\">\n          <!-- Custom tabs (Charts with tabs)-->\n            <grafic-layer [loadGraphic]=\"loadGraphic\"></grafic-layer>\n          <!-- /.nav-tabs-custom -->\n        </section>\n        <!-- /.Left col -->\n      </div>\n      <!-- /.row (main row) -->\n\n      <div class=\"row\">\n        <!-- Left col -->\n        <section class=\"col-lg-12 connectedSortable\">\n          <!-- Custom tabs (Charts with tabs)\n            <grafic-topusers></grafic-topusers>-->\n          <!-- /.nav-tabs-custom -->\n        </section>\n        <!-- /.Left col -->\n      </div>\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__ = __webpack_require__("../../../../../src/app/admin/shared/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(convertService) {
        this.convertService = convertService;
        this.loadGraphic = false;
        this.period = "month";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        AdminLTE.init();
        jQuery('.connectedSortable').sortable({
            placeholder: 'sort-highlight',
            connectWith: '.connectedSortable',
            handle: '.box-header, .nav-tabs',
            forcePlaceholderSize: true,
            zIndex: 999999
        });
        jQuery('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');
        this.knob = jQuery('.knob').knob();
    };
    DashboardComponent.prototype.onFileChange = function (event) {
        this.file = event.target.files[0];
    };
    DashboardComponent.prototype.onUpload = function () {
        var _this = this;
        this.loadGraphic = false;
        var cohorts = [];
        var reader = new FileReader();
        reader.readAsText(this.file);
        reader.onload = function () {
            var text = reader.result;
            _this.convertService.uploadData(text, _this.period).subscribe(function (result) {
                _this.loadGraphic = true;
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                    title: 'Success',
                    text: 'The data was imported correctly',
                    type: 'success'
                });
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                    title: 'Error',
                    text: 'An error occurs when importing the data',
                    type: 'error'
                });
            });
        };
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-admin-dashboard1',
            template: __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]) === "function" && _a || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <div class=\"pull-right hidden-xs\">\n    <b>Version</b> 1.0\n  </div>\n  <strong>Copyright &copy; 2018</strong>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/admin/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-admin-footer',
            template: __webpack_require__("../../../../../src/app/admin/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/grafic-heatmap/grafic-heatmap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-primary\">\n    <div class=\"box-header ui-sortable-handle\" style=\"cursor: move;\">\n        <h3 class=\"box-title\"  data-toggle=\"tooltip\" title=\"\" data-original-title=\"User retention per cohort in relation to other cohorts. Green indicates better retention.\">Retention Heatmap</h3>\n      </div>\n      <div class=\"tab-content no-padding\">\n          <div class=\"chart tab-pane active\"  style=\"position: relative; height: 300px;\" [ng2-highcharts]=\"chartOptions\"></div>\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/grafic-heatmap/grafic-heatmap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__ = __webpack_require__("../../../../../src/app/admin/shared/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficHeatMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraficHeatMapComponent = /** @class */ (function () {
    function GraficHeatMapComponent(convertService) {
        this.convertService = convertService;
    }
    GraficHeatMapComponent.prototype.ngOnChanges = function (changes) {
        if (this.loadGraphic) {
            this.onGenerateReport();
        }
    };
    GraficHeatMapComponent.prototype.onGenerateReport = function () {
        var _this = this;
        this.convertService.convert('/convertmaucohort').subscribe(function (result) {
            var chart = [];
            var periodcohort = 0;
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'cohort_period'), function (value) {
                var cohorts = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](result, function (o) { return o.cohort_period === value.cohort_period && o.activity_period !== value.cohort_period; });
                __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](cohorts, 'period'), function (valuePeriod) {
                    chart.push([periodcohort, valuePeriod.period, valuePeriod.customerRePer]);
                });
                periodcohort++;
            });
            _this.chartOptions = {
                chart: { type: 'heatmap', zoomType: 'x' },
                xAxis: {
                    categories: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'cohort_period_format'), 'cohort_period_format'),
                    title: 'Month of First Spend'
                },
                yAxis: {
                    categories: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'period'), 'period'),
                    title: 'Months Since First Spend'
                },
                colorAxis: {
                    dataClasses: [{
                            from: 0.00,
                            to: 10.00,
                            color: '#A3062A',
                            name: '0.00%'
                        }, {
                            from: 10.00,
                            to: 20.00,
                            color: '#D5322F',
                            name: '10.00%'
                        }, {
                            from: 20.00,
                            to: 30.00,
                            color: '#F26D4A',
                            name: '20.00%'
                        }, {
                            from: 30.00,
                            to: 40.00,
                            color: '#FBAD68',
                            name: '30.00%'
                        },
                        {
                            from: 40.00,
                            to: 50.00,
                            color: '#FDDF90',
                            name: '40.00%'
                        },
                        {
                            from: 50.00,
                            to: 60.00,
                            color: '#FFFEC2',
                            name: '50.00%'
                        },
                        {
                            from: 60.00,
                            to: 70.00,
                            color: '#D9EE90',
                            name: '60.00%'
                        },
                        {
                            from: 70.00,
                            to: 80.00,
                            color: '#A7D770',
                            name: '70.00%'
                        },
                        {
                            from: 80.00,
                            to: 90.00,
                            color: '#69BC67',
                            name: '80.00%'
                        },
                        {
                            from: 90.00,
                            to: 100.00,
                            color: '#249753',
                            name: '90.00%'
                        },
                        {
                            from: 1000.00,
                            color: '#0B6739',
                            name: '100.00%'
                        }
                    ]
                },
                title: null,
                legend: {
                    align: 'right',
                    layout: 'vertical',
                    margin: 0,
                    verticalAlign: 'top',
                },
                tooltip: {
                    formatter: function () {
                        return '<b>Cohort: </b>' + this.series.xAxis.categories[this.point.x] + '<br>'
                            + '<b>Retention: </b>' + this.point.value + '%';
                    }
                },
                series: [{
                        name: 'Sales per employee',
                        borderWidth: 0,
                        data: chart,
                        dataLabels: {
                            enabled: false,
                        }
                    }]
            };
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                title: 'Error',
                text: 'An error occurs when importing the data',
                type: 'error'
            });
        });
    };
    GraficHeatMapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'grafic-heatmap',
            template: __webpack_require__("../../../../../src/app/admin/grafic-heatmap/grafic-heatmap.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]],
            inputs: ['loadGraphic']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]) === "function" && _a || Object])
    ], GraficHeatMapComponent);
    return GraficHeatMapComponent;
    var _a;
}());

//# sourceMappingURL=grafic-heatmap.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/grafic-kip/grafic-kip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-primary\">\n    <div class=\"box-header ui-sortable-handle\" style=\"cursor: move;\">\n        <h3 class=\"box-title\">KPI Growth Top-line</h3>\n      </div>\n      <div class=\"tab-content no-padding\">\n          <div class=\"chart tab-pane active\"  style=\"position: relative; height: 300px;\" [ng2-highcharts]=\"chartOptions\"></div>\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/grafic-kip/grafic-kip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__ = __webpack_require__("../../../../../src/app/admin/shared/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficKIPComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraficKIPComponent = /** @class */ (function () {
    function GraficKIPComponent(convertService) {
        this.convertService = convertService;
    }
    GraficKIPComponent.prototype.ngOnChanges = function (changes) {
        if (this.loadGraphic) {
            this.onGenerateReport();
        }
    };
    GraficKIPComponent.prototype.onGenerateReport = function () {
        var _this = this;
        this.convertService.convert('/convertkip').subscribe(function (result) {
            _this.chartOptions = {
                chart: { type: 'line', zoomType: 'x' },
                xAxis: {
                    type: 'datetime',
                    categories: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](result, 'period'),
                    title: {
                        text: 'Period'
                    }
                },
                yAxis: {
                    title: {
                        text: 'MAU'
                    }
                },
                plotOptions: {
                    line: {
                        marker: {
                            enabled: false
                        },
                    }
                },
                legend: {
                    enabled: false
                },
                title: { text: 'Period Aggregate' },
                series: [{ name: 'users', data: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](result, 'cumulativeusers'), color: '#48C0E6' }]
            };
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                title: 'Error',
                text: 'An error occurs when importing the data',
                type: 'error'
            });
        });
    };
    GraficKIPComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'grafic-kip',
            template: __webpack_require__("../../../../../src/app/admin/grafic-kip/grafic-kip.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]],
            inputs: ['loadGraphic']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]) === "function" && _a || Object])
    ], GraficKIPComponent);
    return GraficKIPComponent;
    var _a;
}());

//# sourceMappingURL=grafic-kip.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/grafic-layer/grafic-layer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-danger\">\n    <div class=\"box-header ui-sortable-handle\" style=\"cursor: move;\">\n        <h3 class=\"box-title\">KPI Growth X-Ray</h3>\n      </div>\n      <div class=\"tab-content no-padding\">\n          <div class=\"chart tab-pane active\"  style=\"position: relative; height: 300px;\" [ng2-highcharts]=\"chartOptions\"></div>\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/grafic-layer/grafic-layer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__ = __webpack_require__("../../../../../src/app/admin/shared/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficLayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraficLayerComponent = /** @class */ (function () {
    function GraficLayerComponent(convertService) {
        this.convertService = convertService;
    }
    GraficLayerComponent.prototype.ngOnChanges = function (changes) {
        if (this.loadGraphic) {
            this.onGenerateReport();
        }
    };
    GraficLayerComponent.prototype.onGenerateReport = function () {
        var _this = this;
        this.convertService.convert('/convertxlayer').subscribe(function (result) {
            var chart = [];
            var count = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'cohort_period'), 'cohort_period').length;
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](__WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'cohort_period'), 'cohort_period'), function (value) {
                chart.push({ zIndex: count, name: value, data: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](result, function (o) { return o.cohort_period === value; }), 'cumulative') });
                count--;
            });
            _this.chartOptions = {
                chart: {
                    type: 'area'
                },
                title: {
                    text: null
                },
                xAxis: {
                    categories: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'cohort_period'), 'cohort_period'),
                    endOnTick: false,
                },
                yAxis: {
                    title: {
                        text: 'Users'
                    },
                    reversedStacks: true,
                },
                plotOptions: {
                    area: {
                        marker: {
                            enabled: false
                        },
                        fillOpacity: 1,
                    }
                },
                series: chart
            };
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                title: 'Error',
                text: 'An error occurs when importing the data',
                type: 'error'
            });
        });
    };
    GraficLayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'grafic-layer',
            template: __webpack_require__("../../../../../src/app/admin/grafic-layer/grafic-layer.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]],
            inputs: ['loadGraphic']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]) === "function" && _a || Object])
    ], GraficLayerComponent);
    return GraficLayerComponent;
    var _a;
}());

//# sourceMappingURL=grafic-layer.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/grafic-mau/grafic-mau.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-warning\">\n    <div class=\"box-header ui-sortable-handle\" style=\"cursor: move;\">\n        <h3 class=\"box-title\"  data-toggle=\"tooltip\" title=\"\" data-original-title=\"This plot shows the cumulative (months/week) active per user in a given cohort at a given age.\">MAU LTV by Cohort</h3>\n      </div>\n      <div class=\"tab-content no-padding\">\n          <div class=\"chart tab-pane active\"  style=\"position: relative; height: 300px;\" [ng2-highcharts]=\"chartOptions\"></div>\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/grafic-mau/grafic-mau.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__ = __webpack_require__("../../../../../src/app/admin/shared/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficMAUComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraficMAUComponent = /** @class */ (function () {
    function GraficMAUComponent(convertService) {
        this.convertService = convertService;
    }
    GraficMAUComponent.prototype.ngOnChanges = function (changes) {
        if (this.loadGraphic) {
            this.onGenerateReport();
        }
    };
    GraficMAUComponent.prototype.onGenerateReport = function () {
        var _this = this;
        this.convertService.convert('/convertmaucohort').subscribe(function (result) {
            var chart = [];
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](__WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'cohort_period'), 'cohort_period'), function (value) {
                chart.push({ name: value, data: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](result, function (o) { return o.cohort_period === value; }), 'cumulative') });
            });
            _this.chartOptions = {
                chart: { type: 'line', zoomType: 'x' },
                xAxis: {
                    categories: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'period'), 'period'),
                    title: {
                        text: 'Periods Since First Spend'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Cumulative Active Per User'
                    }
                },
                plotOptions: {
                    line: {
                        marker: {
                            enabled: false
                        },
                    }
                },
                title: { text: 'MAU LTV' },
                series: chart
            };
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                title: 'Error',
                text: 'An error occurs when importing the data',
                type: 'error'
            });
        });
    };
    GraficMAUComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'grafic-mau',
            template: __webpack_require__("../../../../../src/app/admin/grafic-mau/grafic-mau.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]],
            inputs: ['loadGraphic']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]) === "function" && _a || Object])
    ], GraficMAUComponent);
    return GraficMAUComponent;
    var _a;
}());

//# sourceMappingURL=grafic-mau.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/grafic-retention/grafic-retention.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-success\">\n    <div class=\"box-header ui-sortable-handle\" style=\"cursor: move;\">\n        <h3 class=\"box-title\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"User retention per cohort and how it changes as months progress over time.\">Product Market Fit</h3>\n      </div>\n      <div class=\"tab-content no-padding\">\n          <div class=\"chart tab-pane active\"  style=\"position: relative; height: 300px;\" [ng2-highcharts]=\"chartOptions\"></div>\n        </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/grafic-retention/grafic-retention.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__ = __webpack_require__("../../../../../src/app/admin/shared/convert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficRetentionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraficRetentionComponent = /** @class */ (function () {
    function GraficRetentionComponent(convertService) {
        this.convertService = convertService;
    }
    GraficRetentionComponent.prototype.ngOnChanges = function (changes) {
        if (this.loadGraphic) {
            this.onGenerateReport();
        }
    };
    GraficRetentionComponent.prototype.onGenerateReport = function () {
        var _this = this;
        this.convertService.convert('/convertretentioncohort').subscribe(function (result) {
            var chart = [];
            __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](__WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'cohort_period'), 'cohort_period'), function (value) {
                chart.push({ name: value, data: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](result, function (o) { return o.cohort_period === value; }), 'percen') });
            });
            _this.chartOptions = {
                chart: { type: 'line', zoomType: 'x' },
                xAxis: {
                    categories: __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](__WEBPACK_IMPORTED_MODULE_3_lodash__["uniqBy"](result, 'period'), 'period'),
                    title: {
                        text: 'Periods Since First Spend'
                    }
                },
                yAxis: {
                    type: 'porcentage',
                    max: 100,
                    title: {
                        text: 'Retention'
                    },
                    labels: {
                        formatter: function () {
                            return this.value + '%';
                        }
                    }
                },
                tooltip: {
                    valueSuffix: ' %'
                },
                plotOptions: {
                    line: {
                        marker: {
                            enabled: false
                        },
                    }
                },
                title: { text: 'User Retention By Cohort' },
                series: chart
            };
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
                title: 'Error',
                text: 'An error occurs when importing the data',
                type: 'error'
            });
        });
    };
    GraficRetentionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'grafic-retention',
            template: __webpack_require__("../../../../../src/app/admin/grafic-retention/grafic-retention.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]],
            inputs: ['loadGraphic']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_convert_service__["a" /* ConvertService */]) === "function" && _a || Object])
    ], GraficRetentionComponent);
    return GraficRetentionComponent;
    var _a;
}());

//# sourceMappingURL=grafic-retention.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/grafic-topusers/grafic-topusers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-success\">\n    <div class=\"box-header ui-sortable-handle\" style=\"cursor: move;\">\n        <h3 class=\"box-title\">Top Users</h3>\n      </div>\n    <div class=\"box-body\">\n        <div class=\"input-group input-file\" name=\"Fichier1\">\n            <input [ngModelOptions]=\"{standalone: true}\" type=\"file\" class=\"form-control\" [(ngModel)]=\"data\" (change)=\"onFileChange($event)\" placeholder='Choose a file...' />\n            <span class=\"input-group-btn\">\n                  <button class=\"btn btn-primary btn-reset\" (click)=\"onUpload()\" type=\"button\">Upload</button>\n            </span>\n        </div>\n        <div class =\"row\">\n            <div class=\"col-lg-8\">\n              <div class=\"table-responsive\" style=\"height: 300px;margin: 15px;\">\n                  <table class=\"table no-margin\">\n                      <thead>\n                      <tr>\n                        <th>#</th>\n                        <th>User</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n                      <tr *ngFor=\"let item of data; let i = index\">\n                          <td>{{i + 1}}</td>\n                        <td>{{item.top_users}}</td>\n                      </tr>\n                      </tbody>\n                    </table>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div>\n                  <ul class=\"chart-legend clearfix\" *ngIf=\"data.length > 0\">\n                      <li><i class=\"fa fa-circle text-red\"> 1</i> {{data[0].top_users}}</li>\n                      <li><i class=\"fa fa-circle text-green\"> 2 </i> {{data[1].top_users}}</li>\n                      <li><i class=\"fa fa-circle text-yellow\"> 3 </i> {{data[2].top_users}}</li>\n                      <li><i class=\"fa fa-circle text-aqua\"> 4 </i> {{data[3].top_users}}</li>\n                      <li><i class=\"fa fa-circle text-light-blue\"> 5 </i> {{data[4].top_users}}</li>\n                   </ul>\n              </div>\n            </div>\n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/grafic-topusers/grafic-topusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_csvtojson__ = __webpack_require__("../../../../csvtojson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_csvtojson___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_csvtojson__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficTopUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GraficTopUsersComponent = /** @class */ (function () {
    function GraficTopUsersComponent() {
        this.data = [];
        this.topUsers = [];
    }
    GraficTopUsersComponent.prototype.ngOnInit = function () {
    };
    GraficTopUsersComponent.prototype.onFileChange = function (event) {
        this.file = event.target.files[0];
    };
    GraficTopUsersComponent.prototype.onUpload = function () {
        var _this = this;
        this.data = [];
        this.topUsers = [];
        var reader = new FileReader();
        reader.readAsText(this.file);
        reader.onload = function () {
            var text = reader.result;
            __WEBPACK_IMPORTED_MODULE_1_csvtojson__().fromString(text)
                .on('json', function (jsonObj) {
                _this.data.push(jsonObj);
            })
                .on('done', function (error) {
            });
        };
    };
    GraficTopUsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'grafic-topusers',
            template: __webpack_require__("../../../../../src/app/admin/grafic-topusers/grafic-topusers.component.html")
        })
    ], GraficTopUsersComponent);
    return GraficTopUsersComponent;
}());

//# sourceMappingURL=grafic-topusers.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- Logo -->\n  <a class=\"logo\">\n    <span class=\"logo-lg\"><b>VulcanFR</b></span>\n  </a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/admin/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-admin-header',
            template: __webpack_require__("../../../../../src/app/admin/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/left-side/left-side.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n    <!-- Sidebar user panel\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>Alexander Pierce</p>\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n      </div>\n    </div>-->\n    <!-- search form\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n        <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n      </div>\n    </form>-->\n    <!-- /.search form -->\n    <!-- sidebar menu: : style can be found in sidebar.less -->\n    <ul class=\"sidebar-menu\">\n      <li class=\"header\">MAIN NAVIGATION</li>\n      <li class=\"active treeview\">\n        <a href=\"#\">\n            <i class=\"fa fa-dashboard\"></i> <span>Dashboard</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n        <ul class=\"treeview-menu\">\n          <li class=\"active\"><a routerLink=\"dashboard1\"><i class=\"fa fa-circle-o\"></i> Dashboard Converter Data</a></li>\n        </ul>\n      </li>\n    </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/admin/left-side/left-side.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftSideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftSideComponent = /** @class */ (function () {
    function LeftSideComponent() {
    }
    LeftSideComponent.prototype.ngOnInit = function () {
    };
    LeftSideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-admin-left-side',
            template: __webpack_require__("../../../../../src/app/admin/left-side/left-side.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LeftSideComponent);
    return LeftSideComponent;
}());

//# sourceMappingURL=left-side.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: 'admin',
                        component: __WEBPACK_IMPORTED_MODULE_1__admin_component__["a" /* AdminComponent */],
                        children: [
                            {
                                path: '',
                                component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */]
                            }
                        ]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
            ]
        })
    ], RoutingModule);
    return RoutingModule;
}());

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shared/convert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config__ = __webpack_require__("../../../../../src/app/utils/config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConvertService = /** @class */ (function () {
    function ConvertService(http) {
        this.http = http;
    }
    ConvertService.prototype.uploadData = function (events, period) {
        var data = { data: events, type: true, period: period };
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* Config */].API + '/uploadFile', data)
            .map(__WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* Config */].extractData).catch(__WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* Config */].handleError);
    };
    ConvertService.prototype.convert = function (report) {
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* Config */].API + report)
            .map(__WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* Config */].extractData).catch(__WEBPACK_IMPORTED_MODULE_2__utils_config__["a" /* Config */].handleError);
    };
    ConvertService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ConvertService);
    return ConvertService;
    var _a;
}());

//# sourceMappingURL=convert.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__admin_admin_component__["a" /* AdminComponent */] },
                ])
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_highcharts__ = __webpack_require__("../../../../ng2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_highcharts__["a" /* Ng2HighchartsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/utils/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });

var Config = /** @class */ (function () {
    function Config() {
    }
    Object.defineProperty(Config, "API", {
        get: function () {
            return 'https://138.197.78.130:3000';
        },
        enumerable: true,
        configurable: true
    });
    Config.extractData = function (res) {
        var body = res.json() || {};
        return body;
    };
    Config.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).catch(function (err) { return console.error(err); });
;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[4]);
//# sourceMappingURL=main.bundle.js.map
