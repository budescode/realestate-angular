(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-ui-loader></ngx-ui-loader>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n  <head>\n\n\n <style>\n  #more {display: none;}\n  .containershow {\n  font-size: 16px;\n  line-height: 16px;\n  height: 94px;\n  overflow: hidden;\n}\n\n .show {\n  overflow: visible;\n  height: auto;\n}\n#map {\n    height: 100%;\n    width: 100%;\n   }\n  </style>\n</head>\n\n<!-- <h2>Read More Read Less Button</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id=\"dots\">...</span><span id=\"more\">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>\n<button onclick=\"myFunction()\" id=\"myBtn\">Read more</button> -->\n<div class=\"container-fluid\">\n<div class='row'>\n\n  <div class='col-md-7' *ngFor = 'let test of posterdetails'>\n    <a class=\"nav-link\" href=\"#\" onclick=\"window.history.back();return false;\"><i class='fa fa-arrow-left'></i> Back TO PROPERTY LIST <span class=\"sr-only\">(current)</span></a>\n    <!-- A grey horizontal navbar that becomes vertical on small screens -->\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style='border-top: 1px solid lightgray; border-bottom: 1px solid lightgray; '>\n    <div id=\"navbarNavDropdown\" class=\"navbar-collapse collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item active\">\n\n      <p><h6 style='color:black'> {{test.street_number}}  {{test.street_name}}, {{test.suburb}} {{test.state}} </h6>\n    </li>\n    <!--<li class=\"nav-item\">-->\n    <!--    <a class=\"nav-link\" href=\"#\"><i class='fa fa-globe'></i> Map</a>-->\n    <!--</li>-->\n\n    </ul>\n    <ul class=\"navbar-nav\">\n\n    <li class=\"nav-item\" >\n    <p> <h6 style='color:black'>$ {{test.Price}}</h6>\n    </li>\n\n    </ul>\n    </div>\n    </nav>\n    <img src='{{test.image}}' class='img-fluid' id='bg_image' width=\"800\" height='600'>\n\n</div>\n\n<div class=\"col-md-5\" *ngFor = 'let test of posterdetails'>\n  <br>\n  <hr>\n  <div class=\"alert alert-primary\">\n    <strong>Property Features</strong>\n  </div>\n  <div style='font-size:17px;color:black'>\n    <a href='' style='margin-right: 60px;color:black'>Bedrooms <i class='fa fa-bed' style='font-size:20px'></i> {{test.Bedrooms}}</a>\n    <a href='' style='color:black'>Bathrooms <i class='fa fa-bath' style='font-size:20px'></i>  {{test.Bathrooms}} </a> <br>\n    <a href='' style='margin-right: 60px;color:black'>Car Spaces <i class='fa fa-car' style='font-size:20px'></i>   {{test.Car_spaces}} </a>\n    <a href='' style='color:black'>Landsize  <i class='fa fa-area-chart' style='font-size:20px'></i>   {{test.land_size}} </a> <br>\n    <a href=''style='color:black'>     {{test.Property_type}} </a>\n</div>\n\n<div class=\"alert alert-primary\">\n  <strong>Description</strong>\n</div>\n\n<div class=\"container containershow\" [class.show]=\"show\">\n  <p style='font-size:17px;color:black'>{{test.description}}</p>\n</div> <br>\n<button class='btn btn-primary' (click)=\"show = !show\">{{ show ? 'Show less': 'Show More' }}</button>\n<br>\n<div class=\"alert alert-primary\">\n  <strong>Map View</strong>\n  </div>\n\n  <agm-map  [latitude]=\"latitude\" [longitude]=\"longitude\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n  </agm-map>\n  <hr>\n\n</div>\n\n\n</div>\n\n</div>\n\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  #more {display: none;}\n  .containershow {\n  font-size: 16px;\n  line-height: 16px;\n  height: 94px;\n  overflow: hidden;\n}\n\n .show {\n  overflow: visible;\n  height: auto;\n}\n#map {\n    height: 100%;\n    width: 100%;\n   }\n  </style>\n<div class='container'>\n<div class=\"row\">\n  <div class='col-md-8'>\n    <!-- A grey horizontal navbar that becomes vertical on small screens -->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style='border-top: 1px solid lightgray; border-bottom: 1px solid lightgray; '>\n<div id=\"navbarNavDropdown\" class=\"navbar-collapse collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\"><i class='fa fa-list-alt'></i> List <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)='mapSearch()'><i class='fa fa-globe'></i> Map</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\"><i class='fa fa-save'></i><span id='savesearchid'>Save Search</span></a>\n        </li>\n\n\n    </ul>\n    <ul class=\"navbar-nav\" style=\"margin-top: 24px\">\n\n        <li class=\"nav-item\">\n            <div class=\"form-group\">\n            <label class=\"d-inline-block\" for=\"\">Sort By:</label>\n            <select class=\"form-control form-control-sm d-inline-block\" style=\"width: auto;\" id=\"sortby\" name='sortby' onchange=\"this.form.submit()\">\n            <option value=\"Relevant\">Most Relevant</option>\n            <option value=\"-created\">Date (Newest - Oldest)</option>\n            <option value=\"created\">Date (Oldest - Newest)</option>\n            <option value=\"Price\">Price (Lowest - Highest)</option>\n            <option value=\"-Price\">Price (Highest - Lowest)</option>\n            </select>\n            </div>\n        </li>\n\n    </ul>\n</div>\n</nav>\n\n<div class='row'>\n<div class='col-md-12'>\n<div id=\"searchitem\" style=\"\"></div>\n</div>\n</div>\n\n\n<!-- The Modal -->\n<div class=\"modal fade\" id=\"myModal\">\n<div class=\"modal-dialog modal-dialog-centered\">\n<div class=\"modal-content\">\n\n<!-- Modal Header -->\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Save Search</h4>\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n</div>\n\n<!-- Modal body -->\n<div class=\"modal-body\">\n    <div class=\"form-group\">\n    <label for=\"usr\">Name the search:</label>\n    <input type=\"text\" class=\"form-control\" id=\"namesave\">\n    </div>\n\n\n<div class=\"form-check\">\n<label class=\"form-check-label\">\n<input type=\"checkbox\" class=\"form-check-input\" id='checkboxsave' value=\"\"> Enable Notifications\n</label>\n</div>\n\n</div>\n\n<!-- Modal footer -->\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n  <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n\n</div>\n\n</div>\n</div>\n</div>\n\n\n\n\n<hr>\n\n<hr>\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n<div class=\"card\" style='margin-bottom:20px;' *ngFor='let i of filterdetails1 | paginate: { itemsPerPage: 30, currentPage: p }'>\n<div class=\"card-body\">\n    <h4 class=\"card-title\"> <p>{{i.street_number}}, {{i.street_name}} {{i.state}} {{i.suburb}}, {{i.postcode}}</p></h4>\n    <p class=\"card-text\">\n\n    <div class='row'>\n    <div class='col-md-4'>\n      <a href=''>   <img class='img-fluid' src='{{i.image}}'> </a>\n\n    </div>\n    <div class='col-md-8'>\n\n    <div class='row'>\n   <div class='col-md-12' style='background-color:darkred; color: white; padding: 8px 8px;'>\n        <i class='fa fa-bed' style='color:white'></i> {{i.Bedrooms}}\n        <i class='fa fa-bath' style='color:white'></i> {{i.Bathrooms}}\n        <i class='fa fa-car' style='color:white'></i>  {{i.Car_spaces}}\n        <i class='fa fa-star' id='star' style='color:white; float:right; cursor:pointer'></i>\n\n\n\n    </div>\n    </div>\n    <hr>\n\n    {{i.created | date}}  <br> <br>\n    {{i.Property_type}} | ${{i.Price}}  |  <a [routerLink]=\"['/detail', i.id_user]\">See more</a>  <br>\n\n      <br>\n    </div>\n\n    </div>\n    <!--row-->\n    <hr>\n\n</div>\n</div>\n<!--end card-->\n\n\n\n</div>\n<!--end col-md-8-->\n<!-- start col-md-4 -->\n<div class='col-md-4'>\n<div class=\"form-group row\">\n<div class='col-md-12'>\n<input type=\"text\" name=\"filterlist\" id=\"filterlist\" class=\"form-control\" value=\"\">\n</div>\n\n<!-- start pricemin -->\n<div class=\"col-sm-6\">\n  <label for=\"pricemin\"><small>Price (Min):</small></label>\n      <select class=\"custom-select custom-select-sm\" name=\"pricemin\" [(ngModel)]='searchModel.pricemin'(change)='pricemin()'>\n      <option>Any </option>\n      <option>$50,000 </option>\n      <option>$75,000</option>\n      <option>$100,000</option>\n      <option>$125,000</option>\n      <option>$150,000</option>\n      <option>$175,000</option>\n      <option>$200,000</option>\n      <option>$225,000</option>\n      <option>$250,000</option>\n      <option>$275,000</option>\n      <option>$300,000</option>\n      <option>$325,000</option>\n      <option>$350,000</option>\n      <option>$350,000</option>\n      <option>$350,000</option>\n      <option>$375,000</option>\n      <option>$400,000</option>\n      <option>$425,000</option>\n      <option>$450,000</option>\n      <option>$475,000</option>\n      <option>$500,000</option>\n      <option>$550,000</option>\n      <option>$600,000</option>\n      <option>$650,000</option>\n      <option>$700,000</option>\n      <option>$750,000</option>\n      <option>$800,000</option>\n      <option>$850,000</option>\n      <option>$900,000</option>\n      <option>$950,000</option>\n      <option>$1,000,000</option>\n      <option>$1,100,000</option>\n      <option>$1,200,000</option>\n      <option>$1,300,000</option>\n      <option>$1,400,000</option>\n      <option>$1,500,000</option>\n      <option>$1,600,000</option>\n      <option>$1,700,000</option>\n      <option>$1,800,000</option>\n      <option>$1,900,000</option>\n      <option>$2,000,000</option>\n      <option>$2,250,000</option>\n      <option>$2,500,000</option>\n      <option>$2,750,000</option>\n      <option>$3,000,000</option>\n      <option>$3,500,000</option>\n      <option>$4,000,000</option>\n      <option>$4,500,000</option>\n      <option>$5,000,000 </option>\n      <option>$7,000,000</option>\n      <option>$8,000,000</option>\n      <option>$9,000,000</option>\n      <option>$10,000,000</option>\n      <option>$12,000,000</option>\n      <option>$15,000,000</option>\n      </select>\n  </div>\n<!-- end pricemin -->\n\n<!-- start pricemax -->\n<div class=\"col-sm-6\">\n  <label for=\"pricemax\"><small>Price (Max):</small></label>\n  <select class=\"custom-select custom-select-sm\" id=\"pricemax\" name=\"pricemax\" [(ngModel)]='searchModel.pricemax'(change)='pricemax()'>\n  <option>Any </option>\n  <option>$50,000 </option>\n  <option>$75,000</option>\n  <option>$100,000</option>\n  <option>$125,000</option>\n  <option>$150,000</option>\n  <option>$175,000</option>\n  <option>$200,000</option>\n  <option>$225,000</option>\n  <option>$250,000</option>\n  <option>$275,000</option>\n  <option>$300,000</option>\n  <option>$325,000</option>\n  <option>$350,000</option>\n  <option>$350,000</option>\n  <option>$350,000</option>\n  <option>$375,000</option>\n  <option>$400,000</option>\n  <option>$425,000</option>\n  <option>$450,000</option>\n  <option>$475,000</option>\n  <option>$500,000</option>\n  <option>$550,000</option>\n  <option>$600,000</option>\n  <option>$650,000</option>\n  <option>$700,000</option>\n  <option>$750,000</option>\n  <option>$800,000</option>\n  <option>$850,000</option>\n  <option>$900,000</option>\n  <option>$950,000</option>\n  <option>$1,000,000</option>\n  <option>$1,100,000</option>\n  <option>$1,200,000</option>\n  <option>$1,300,000</option>\n  <option>$1,400,000</option>\n  <option>$1,500,000</option>\n  <option>$1,600,000</option>\n  <option>$1,700,000</option>\n  <option>$1,800,000</option>\n  <option>$1,900,000</option>\n  <option>$2,000,000</option>\n  <option>$2,250,000</option>\n  <option>$2,500,000</option>\n  <option>$2,750,000</option>\n  <option>$3,000,000</option>\n  <option>$3,500,000</option>\n  <option>$4,000,000</option>\n  <option>$4,500,000</option>\n  <option>$5,000,000 </option>\n  <option>$7,000,000</option>\n  <option>$8,000,000</option>\n  <option>$9,000,000</option>\n  <option>$10,000,000</option>\n  <option>$12,000,000</option>\n  <option>$15,000,000</option>\n  </select>\n  </div>\n  <!--end pricemax-->\n\n  <!-- stare bedmin -->\n  <div class='col-md-6'>\n    <label for=\"bedmin\"> <small>Bed (Min):</small></label>\n    <select class=\"custom-select custom-select-sm\" name=\"bedmin\" [(ngModel)]='searchModel.bedmin'(change)='bedmin()' >\n    <option>Any</option>\n    <option>Studio</option>\n    <option value=\"1\">1</option>\n    <option value=\"2\">2</option>\n    <option value=\"3\">3</option>\n    <option value=\"4\">4</option>\n    <option value=\"5\">5</option>\n    </select>\n  </div>\n<!-- end bedmin -->\n<!-- startbedmax -->\n   <div class='col-md-6'>\n    <label for=\"bedmax\"> <small>Bed (Max):</small></label>\n    <select class=\"custom-select custom-select-sm\" name=\"bedmax\" [(ngModel)]='searchModel.bedmax' (change)='bedmax()'>\n    <option value='Any'>Any</option>\n    <option value='Studio'>Studio</option>\n    <option value=\"1\">1</option>\n    <option value=\"2\">2</option>\n    <option value=\"3\">3</option>\n    <option value=\"4\">4</option>\n    <option value=\"5\">5</option>\n    </select>\n    </div>\n  <!-- endbedmax -->\n  <!-- start propertytype -->\n  <div class=\"col-md-12\">\n    <br>\n    <ng-multiselect-dropdown\n    name=\"propertytype\"\n    [placeholder]=\"'Property Type'\"\n    [data]=\"dropdownList\"\n    [(ngModel)]=\"selectedItems\"\n    [settings]=\"dropdownSettings\"\n    (onSelect)=\"onItemSelect($event)\"\n    (onSelectAll)=\"onSelectAll($event)\">\n  </ng-multiselect-dropdown>\n  </div>\n  <!-- end propertytype -->\n  <!-- startbathrooms -->\n  <div class='col-md-6'>\n    <label for=\"\"> <small>Bathrooms:</small></label>\n    <select class=\"custom-select custom-select-sm\" id=\"\" name=\"\" >\n    <option>Any</option>\n    <option>Studio</option>\n    <option value=\"1\">1</option>\n    <option value=\"2\">2</option>\n    <option value=\"3\">3</option>\n    <option value=\"4\">4</option>\n    <option value=\"5\">5</option>\n    </select>\n    </div>\n  <!-- end bathrooms -->\n  <!-- start car spaces -->\n  <div class='col-md-6'>\n    <label for=\"\"> <small>Car Spaces:</small></label>\n    <select class=\"custom-select custom-select-sm\" id=\"\" name=\"\" >\n    <option>Any</option>\n    <option>Studio</option>\n    <option value=\"1\">1</option>\n    <option value=\"2\">2</option>\n    <option value=\"3\">3</option>\n    <option value=\"4\">4</option>\n    <option value=\"5\">5</option>\n    </select>\n    </div>\n    <!-- //end car spaces -->\n    <!-- start min land size -->\n    <div class='col-md-6'>\n    <label for=\"\"> <small>Min land size (m2):</small></label>\n    <select class=\"custom-select custom-select-sm\" id=\"bedmin\" name=\"\" >\n    <option>Any</option>\n    <option>Studio</option>\n    <option value=\"100\">100</option>\n    <option value=\"200\">200</option>\n    <option value=\"300\">300</option>\n    <option value=\"400\">400</option>\n    <option value=\"500\">500</option>\n    </select>\n    </div>\n<!-- end start min land size -->\n<!-- start new or established -->\n    <div class='col-md-6'>\n    <label for=\"\"> <small>New or established:</small></label>\n    <select class=\"custom-select custom-select-sm\" id=\"\" name=\"\" >\n    <option value='Any'>Any</option>\n    <option value='New'>New</option>\n    <option value=\"Established\">Established</option>\n    </select>\n    </div>\n    <!-- end new or established -->\n</div>\n<div class='col-md-12'><br>\n  <b style=\"text-align: center;\">Outdoor Features</b>\n  <hr>\n  </div>\n  <div class=\"form-check-inline\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Swimming_pool' onclick=changeFilter(this)> Swimming pool\n    </label>\n  </div>\n  <div class=\"form-check-inline\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Balcony' onclick=changeFilter(this)> Balcony\n    </label>\n  </div>\n  <hr>\n<div class=\"form-check-inline\">\n    <label class=\"form-check-label\" for=\"check1\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\"  value=\"Garage\" onclick=changeFilter(this)> Garage\n    </label>\n  </div>\n  <div class=\"form-check-inline\">\n    <label class=\"form-check-label\" for=\"check2\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"check2\" value=\"Outdoor_area\" onclick=changeFilter(this)> Outdoor area\n    </label>\n  </div>\n\n  <hr>\n  <div class=\"form-check-inline\">\n    <label class=\"form-check-label\" for=\"check1\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"check1\"  value=\"Fully_fenced\" onclick=changeFilter(this) > Fully fenced\n    </label>\n  </div>\n  <div class=\"form-check-inline\">\n    <label class=\"form-check-label\" for=\"check2\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"check2\" value=\"Shed\" onclick=changeFilter(this)> Shed\n    </label>\n  </div>\n  <hr>\n  <div class=\"form-check-inline\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Outdoor_spa' onclick=changeFilter(this)> Outdoor spa\n    </label>\n  </div>\n<div class=\"form-check-inline\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Tennis_court' onclick=changeFilter(this)> Tennis court\n    </label>\n  </div>\n  <hr>\n  <div class=\"form-check-inline\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Undercover_parking' onclick=changeFilter(this)> Undercover parking\n    </label>\n  </div>\n  <div class='col-md-12'><br>\n    <b style=\"text-align: center;\">Indoor Features</b>\n    <hr>\n    </div>\n    <div class=\"form-check-inline\">\n      <label class=\"form-check-label\" for=\"check1\">\n      <input type=\"checkbox\" class=\"form-check-input\" value=\"Ensuite\" onclick=changeFilter(this) > Ensuite\n      </label>\n      </div>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\" for=\"check2\">\n      <input type=\"checkbox\" class=\"form-check-input\"  value=\"DishWasher\" onclick=changeFilter(this)> Dishwasher\n      </label>\n      </div>\n      <hr>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Built_in_robes' onclick=changeFilter(this)> Built in robes\n      </label>\n      </div>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Study' onclick=changeFilter(this)> Study\n      </label>\n      </div>\n      <hr>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Alarm_system' onclick=changeFilter(this)> Alarm system\n      </label>\n      </div>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Broadband' onclick=changeFilter(this)> Broadband\n      </label>\n      </div>\n      <hr>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Floorboards' onclick=changeFilter(this)> Floorboards\n      </label>\n      </div>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Gym' onclick=changeFilter(this)> Gym\n      </label>\n      </div>\n      <hr>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Rumpus_room' onclick=changeFilter(this)> Rumpus room\n      </label>\n      </div>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Workshop' onclick=changeFilter(this)> Workshop\n      </label>\n      </div>\n      <hr>\n      <div class='col-md-12'><br>\n      <b style=\"text-align: center;\">Climate control & energy</b>\n      <hr>\n      </div>\n\n\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\" for=\"check1\">\n      <input type=\"checkbox\" class=\"form-check-input\" value=\"Air_conditioning\" onclick=changeFilter(this) > Air conditioning\n      </label>\n      </div>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\" for=\"check2\">\n      <input type=\"checkbox\" class=\"form-check-input\"  value=\"Solar_panels\" onclick=changeFilter(this)> Solar panels\n      </label>\n      </div>\n      <hr>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Heating' onclick=changeFilter(this)> Heating\n      </label>\n      </div>\n\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Water_tank' onclick=changeFilter(this)> Water tank\n      </label>\n      </div>\n      <hr>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='Solar_hot_water' onclick=changeFilter(this)> Solar hot water\n      </label>\n      </div>\n      <div class=\"form-check-inline\">\n      <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value='High_energy_efficiency' onclick=changeFilter(this)> High energy efficiency\n      </label>\n      </div>\n      <hr>\n\n<!-- end form group row -->\n</div>\n<!-- end col-md-4 -->\n\n</div>\n<!-- // end row -->\n</div>\n<!-- end container -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    #darkred{\n        color: darkred !important;\n    }\n</style>\n\n            <div class=\"container\" id=\"jumboo\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12 jumbotron img-responsive center-block inline-block\" id=\"jumbo\">\n<form action=\"\" method=\"post\" #searchForm='ngForm' (ngSubmit)='submitForm()' >\n\n<div id=\"wrapper\">\n<div class=\"demo\">\n\n<div class=\"control-group\">\n<label for=\"select-to\">Select Locations:</label>\n\n  <div class=\"input-group mb-3 input-group-lg position-relative\">\n    <input type=\"text\" class=\"form-control\" (focus)=\"showDiv()\" name='search' [(ngModel)]='searchModel.name' (keyup) = 'filterCountryDetails()'>\n\n    <div class=\"input-group-prepend\">\n      <!-- <span class=\"input-group-text\" type='submit'>Submit</span> -->\n      <button type='submit'>Submit</button>\n    </div>\n\n<div class=\"col-md-12\">\n    <div style=\"height: 300px; overflow-y: auto; overflow-x: hidden;\" *ngIf='dis'>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\" *ngFor='let i of testlist' (click)='getDetails(i)'>{{i.suburb}} - {{i.state}}</li>\n\n\n        </ul>\n\n   </div>\n</div>\n\n  </div>\n\n\n<!-- <select id=\"select-to\" class=\"contacts\" placeholder=\"Pick some locations...\" name='hiddensearch'></select> -->\n</div>\n\n\n</div>\n</div>\n\n<div class=\"container\">\n   <div class=\"row\">\n\n\n<div class=\"col-lg-2 col-md-2 col-xs-6\">\n    <label for=\"demo\">Bed (min)</label>\n\t<select name=\"bedmin\" class=\"app-select form-control\" required [(ngModel)]='searchModel.bedmin'>\n        <option selected>Any</option>\n        <option>Studio</option>\n\t\t<option value=\"1\">1</option>\n\t\t<option value=\"2\">2</option>\n\t\t<option value=\"3\">3</option>\n\t\t<option value=\"4\">4</option>\n\t\t<option value=\"5\">5</option>\n\n\t</select>\n</div>\n\n\n<div class=\"col-lg-2 col-md-2 col-xs-6\">\n    <label for=\"demo\">Bed (max)</label>\n\t<select name=\"bedmax\" class=\"app-select form-control\" required [(ngModel)]='searchModel.bedmax'>\n        <option selected=\"selected\">Any</option>\n        <option>Studio</option>\n\t\t<option value=\"1\">1</option>\n\t\t<option value=\"2\">2</option>\n\t\t<option value=\"3\">3</option>\n\t\t<option value=\"4\">4</option>\n\t\t<option value=\"5\">5</option>\n\n\t</select>\n</div>\n\n\n\n\n<div class=\"col-lg-2 col-md-2 col-xs-6\">\n<div class=\"form-group\">\n<label for=\"sel1\">Minimum Price</label>\n<select class=\"form-control\" id=\"sel1\" name=\"pricemin\" [(ngModel)]='searchModel.pricemin'>\n<!--<option selected>Price (min)</option>-->\n<option selected>Any </option>\n<option>$50,000 </option>\n<option>$75,000</option>\n<option>$100,000</option>\n<option>$125,000</option>\n<option>$150,000</option>\n<option>$175,000</option>\n<option>$200,000</option>\n<option>$225,000</option>\n<option>$250,000</option>\n<option>$275,000</option>\n<option>$300,000</option>\n<option>$325,000</option>\n<option>$350,000</option>\n<option>$350,000</option>\n<option>$350,000</option>\n<option>$375,000</option>\n<option>$400,000</option>\n<option>$425,000</option>\n<option>$450,000</option>\n<option>$475,000</option>\n<option>$500,000</option>\n<option>$550,000</option>\n<option>$600,000</option>\n<option>$650,000</option>\n<option>$700,000</option>\n<option>$750,000</option>\n<option>$800,000</option>\n<option>$850,000</option>\n<option>$900,000</option>\n<option>$950,000</option>\n<option>$1,000,000</option>\n<option>$1,100,000</option>\n<option>$1,200,000</option>\n<option>$1,300,000</option>\n<option>$1,400,000</option>\n<option>$1,500,000</option>\n<option>$1,600,000</option>\n<option>$1,700,000</option>\n<option>$1,800,000</option>\n<option>$1,900,000</option>\n<option>$2,000,000</option>\n<option>$2,250,000</option>\n<option>$2,500,000</option>\n<option>$2,750,000</option>\n<option>$3,000,000</option>\n<option>$3,500,000</option>\n<option>$4,000,000</option>\n<option>$4,500,000</option>\n<option>$5,000,000 </option>\n<option>$7,000,000</option>\n<option>$8,000,000</option>\n<option>$9,000,000</option>\n<option>$10,000,000</option>\n<option>$12,000,000</option>\n<option>$15,000,000</option>\n</select>\n</div>\n</div>\n\n<div class=\"col-lg-2 col-md-2 col-xs-6\">\n<div class=\"form-group\">\n<label for=\"sel1\">Maximum Price</label>\n<select class=\"form-control\" id=\"sel1\" name=\"pricemax\" [(ngModel)]='searchModel.pricemax'>\n<!--<option selected>Price (max)</option>-->\n<option selected>Any </option>\n<option>$50,000 </option>\n<option>$75,000</option>\n<option>$100,000</option>\n<option>$125,000</option>\n<option>$150,000</option>\n<option>$175,000</option>\n<option>$200,000</option>\n<option>$225,000</option>\n<option>$250,000</option>\n<option>$275,000</option>\n<option>$300,000</option>\n<option>$325,000</option>\n<option>$350,000</option>\n<option>$350,000</option>\n<option>$350,000</option>\n<option>$375,000</option>\n<option>$400,000</option>\n<option>$425,000</option>\n<option>$450,000</option>\n<option>$475,000</option>\n<option>$500,000</option>\n<option>$550,000</option>\n<option>$600,000</option>\n<option>$650,000</option>\n<option>$700,000</option>\n<option>$750,000</option>\n<option>$800,000</option>\n<option>$850,000</option>\n<option>$900,000</option>\n<option>$950,000</option>\n<option>$1,000,000</option>\n<option>$1,100,000</option>\n<option>$1,200,000</option>\n<option>$1,300,000</option>\n<option>$1,400,000</option>\n<option>$1,500,000</option>\n<option>$1,600,000</option>\n<option>$1,700,000</option>\n<option>$1,800,000</option>\n<option>$1,900,000</option>\n<option>$2,000,000</option>\n<option>$2,250,000</option>\n<option>$2,500,000</option>\n<option>$2,750,000</option>\n<option>$3,000,000</option>\n<option>$3,500,000</option>\n<option>$4,000,000</option>\n<option>$4,500,000</option>\n<option>$5,000,000 </option>\n<option>$7,000,000</option>\n<option>$8,000,000</option>\n<option>$9,000,000</option>\n<option>$10,000,000</option>\n<option>$12,000,000</option>\n<option>$15,000,000</option>\n</select>\n</div>\n</div>\n\n\n<div class=\"col-lg-3 col-md-3 col-xs-6\">\n  <br>\n  <ng-multiselect-dropdown\n  name=\"propertytype\"\n  [placeholder]=\"'Property Type'\"\n  [data]=\"dropdownList\"\n  [(ngModel)]=\"selectedItems\"\n  [settings]=\"dropdownSettings\"\n  (onSelect)=\"onItemSelect($event)\"\n  (onSelectAll)=\"onSelectAll($event)\">\n</ng-multiselect-dropdown>\n</div>\n\n\n</div>\n</div>\n\n\n</form>\n                      </div>\n                    </div>\n            </div>\n            <!--end container-->\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>login works!</p>\n<body>\n<!-- <div id=\"fb-root\"></div>\n<script async defer crossorigin=\"anonymous\" src=\"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=2177192512589985&autoLogAppEvents=1\"></script>\n\n\n<div class=\"fb-login-button\" data-width=\"\" data-size=\"large\" data-button-type=\"continue_with\" data-auto-logout-link=\"false\" data-use-continue-as=\"false\"></div> -->\n\n<!-- <button type=\"button\" (click)=\"signInWithFB()\" *ngIf=\"loggedIn===false\" mat-flat-button color=\"primary\">Sign In With Facebook</button>\n<button type=\"button\" (click)=\"signOut()\" *ngIf=\"loggedIn===true\" mat-flat-button color=\"primary\">Sign Out From Facebook</button> -->\n</body>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>logout works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mapsearch/mapsearch.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mapsearch/mapsearch.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<agm-map  [latitude]=\"latitude\" [longitude]=\"longitude\">\n  <agm-marker *ngFor=\"let data of details; let i = index\" [latitude]=\"data.latitude\" [longitude]=\"data.longitude\"></agm-marker>\n</agm-map>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mypost/mypost.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mypost/mypost.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n  #more {display: none;}\n  .containershow {\n  font-size: 16px;\n  line-height: 16px;\n  height: 94px;\n  overflow: hidden;\n}\n\n .show {\n  overflow: visible;\n  height: auto;\n}\n#map {\n    height: 100%;\n    width: 100%;\n   }\n  </style>\n<div class='container'>\n<div class=\"row\">\n  <div class='col-md-12'>\n    <!-- A grey horizontal navbar that becomes vertical on small screens -->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style='border-top: 1px solid lightgray; border-bottom: 1px solid lightgray; '>\n<div id=\"navbarNavDropdown\" class=\"navbar-collapse collapse\">\n\n    <ul class=\"navbar-nav\" style=\"margin-top: 24px\">\n\n        <li class=\"nav-item\">\n            <div class=\"form-group\">\n            <label class=\"d-inline-block\" for=\"\">Sort By:</label>\n            <select class=\"form-control form-control-sm d-inline-block\" style=\"width: auto;\" id=\"sortby\" name='sortby' onchange=\"this.form.submit()\">\n            <option value=\"Relevant\">Most Relevant</option>\n            <option value=\"-created\">Date (Newest - Oldest)</option>\n            <option value=\"created\">Date (Oldest - Newest)</option>\n            <option value=\"Price\">Price (Lowest - Highest)</option>\n            <option value=\"-Price\">Price (Highest - Lowest)</option>\n            </select>\n            </div>\n        </li>\n\n    </ul>\n</div>\n</nav>\n\n<div class='row'>\n<div class='col-md-12'>\n<div id=\"searchitem\" style=\"\"></div>\n</div>\n</div>\n\n<hr>\n\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n<div class=\"card\" style='margin-bottom:20px;' *ngFor='let i of details | paginate: { itemsPerPage: 30, currentPage: p }'>\n<div class=\"card-body\">\n    <h4 class=\"card-title\"> <p>{{i.street_number}}, {{i.street_name}} {{i.state}} {{i.suburb}}, {{i.postcode}}</p></h4>\n    <p class=\"card-text\">\n\n    <div class='row'>\n    <div class='col-md-4'>\n      <a href=''>   <img class='img-fluid' src='{{i.image}}'> </a>\n\n    </div>\n    <div class='col-md-8'>\n\n    <div class='row'>\n   <div class='col-md-12' style='background-color:darkred; color: white; padding: 8px 8px;'>\n        <i class='fa fa-bed' style='color:white'></i> {{i.Bedrooms}}\n        <i class='fa fa-bath' style='color:white'></i> {{i.Bathrooms}}\n        <i class='fa fa-car' style='color:white'></i>  {{i.Car_spaces}}\n        <i class='fa fa-star' id='star' style='color:white; float:right; cursor:pointer'></i>\n\n\n\n    </div>\n    </div>\n    <hr>\n\n    {{i.created | date}}  <br> <br>\n    {{i.Property_type}} | ${{i.Price}}  |  <a [routerLink]=\"['/detail', i.id_user]\">See more</a>  <br>\n\n      <br>\n    </div>\n\n    </div>\n    <!--row-->\n    <hr>\n\n</div>\n</div>\n<!--end card-->\n\n\n\n</div>\n<!--end col-md-8-->\n\n</div>\n<!-- // end row -->\n</div>\n<!-- end container -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<!--[if lt IE 7]><html class=\"no-js lt-ie9 lt-ie8 lt-ie7\"><![endif]-->\n<!--[if IE 7]><html class=\"no-js lt-ie9 lt-ie8\"><![endif]-->\n<!--[if IE 8]><html class=\"no-js lt-ie9\"><![endif]-->\n<!--[if gt IE 8]><!--><html class=\"no-js\"><!--<![endif]-->\n  <head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n    <title>Anandrathi</title>\n    <meta name=\"description\" content=\"\">\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1\">\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n\n<link href=\"https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700\" rel=\"stylesheet\">\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.2/css/all.css\" integrity=\"sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr\" crossorigin=\"anonymous\">\n<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBfZ86mdGX5E7o4PGSB7ct22axSb_JzVTY&callback=initMap\"></script>\n\n\n    <!--this css is here because I'll change it in the detail page-->\n\n<!--     <link rel=\"stylesheet\" href=\"{% static 'index/css/stylesheet.css' %}\">\n    <link rel=\"stylesheet\" href=\"{% static 'index/css/normalize.css' %}\">\n    <link rel=\"stylesheet\" href=\"{% static 'index/css/selectize.css' %}\">\n    <link rel=\"stylesheet\" href=\"{% static 'index/css/bootstrap-multiselect/bootstrap-multiselect.css' %}\">\n    <script src=\"{% static 'index/js/jquery.min.js' %}\"></script>\n    <script src=\"{% static 'index/dist/js/standalone/selectize.js' %}\"></script>\n    <script src=\"{% static 'index/js/index.js' %}\"></script>\n    <script src=\"{% static 'index/js/bootstrap-multiselect/bootstrap-multiselect.js' %}\"></script> -->\n\n    <style type=\"text/css\">\n        .theme-selector{\n            display: none;\n        }\n        #darkred{\n            color: darkred;\n        }\n    .label{\n      color: darkred;\n    }\n    #btndarkred{\n        background-color: darkred;\n        color: white;\n        border-color: darkred;\n        margin-left: 5px;\n\n    }\n\n    .selectize-control.contacts .selectize-input > div {\n      /*padding: 1px 10px;*/\n      font-size: 14px;\n      font-weight: normal;\n      -webkit-font-smoothing: auto;\n      color: #f7fbff;\n      text-shadow: 0 1px 0 rgba(8,32,65,0.2);\n      background: #2183f5;\n      background: -moz-linear-gradient(top, #2183f5 0%, #1d77f3 100%);\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#2183f5), color-stop(100%,#1d77f3));\n      background: -webkit-linear-gradient(top,  #2183f5 0%,#1d77f3 100%);\n      background: -o-linear-gradient(top,  #2183f5 0%,#1d77f3 100%);\n      background: -ms-linear-gradient(top,  #2183f5 0%,#1d77f3 100%);\n      background: linear-gradient(to bottom,  #2183f5 0%,#1d77f3 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2183f5', endColorstr='#1d77f3',GradientType=0 );\n      border: 1px solid #0f65d2;\n      -webkit-border-radius: 999px;\n      -moz-border-radius: 999px;\n      border-radius: 999px;\n      -webkit-box-shadow: 0 1px 1px rgba(0,0,0,0.15);\n      -moz-box-shadow: 0 1px 1px rgba(0,0,0,0.15);\n      box-shadow: 0 1px 1px rgba(0,0,0,0.15);\n    }\n    .selectize-control.contacts .selectize-input > div.active {\n      background: #0059c7;\n      background: -moz-linear-gradient(top, #0059c7 0%, #0051c1 100%);\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#0059c7), color-stop(100%,#0051c1));\n      background: -webkit-linear-gradient(top,  #0059c7 0%,#0051c1 100%);\n      background: -o-linear-gradient(top,  #0059c7 0%,#0051c1 100%);\n      background: -ms-linear-gradient(top,  #0059c7 0%,#0051c1 100%);\n      background: linear-gradient(to bottom,  #0059c7 0%,#0051c1 100%);\n      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0059c7', endColorstr='#0051c1',GradientType=0 );\n      border-color: #0051c1;\n    }\n    .selectize-control.contacts .selectize-input > div .email {\n      opacity: 0.8;\n    }\n    .selectize-control.contacts .selectize-input > div .name + .email {\n      margin-left: 5px;\n    }\n    .selectize-control.contacts .selectize-input > div .email:before {\n      content: '<';\n    }\n    .selectize-control.contacts .selectize-input > div .email:after {\n      content: '>';\n    }\n    .selectize-control.contacts .selectize-dropdown .caption {\n      font-size: 15px;\n      display: block;\n      color: #a0a0a0;\n    }\n    </style>\n  </head>\n    <body>\n\n<div class='container-fluid'>\n\n  <div style=\"position: relative\"> <!-- the position of the parent container must be set to relative -->\n    <!-- It is really important to set loaderId for non-master loader -->\n    <ngx-ui-loader [loaderId]=\"'loader-01'\"></ngx-ui-loader>\n  </div>\n\n       <nav class=\"navbar navbar-expand-lg navbar-light bg-light justify-content-center\" style='margin-bottom:20px;'>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" routerLink='/'>REALESTATE</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink='/' id='darkred'>HOME <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" id='darkred' routerLink='/sell' *ngIf=\"apikey!=='null'\">SELL</a>\n      </li>\n\n    <li class=\"nav-item\">\n    <a class=\"nav-link\" id='darkred' *ngIf=\"apikey!=='null'\" routerLink='/mypost'>MY POST</a>\n    </li>\n\n    <li class=\"nav-item\">\n    <a class=\"nav-link\" *ngIf=\"apikey!=='null'\" id='darkred' >SAVED PROPERTY</a>\n    </li>\n    <li class=\"nav-item\">\n    <a class=\"nav-link\" *ngIf=\"apikey!=='null'\" id='darkred'>NOTIFICATIONS</a>\n    </li>\n    <li class=\"nav-item\">\n    <a class=\"nav-link\" *ngIf=\"apikey!=='null'\" id='darkred'>{{myuser}}</a>\n    </li>\n\n\n    </ul>\n   <form class=\"form-inline my-2 my-lg-0\">\n    <!-- <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(mymodal)\">Open My Modal</button> -->\n      <button (click)=\"signOut()\" *ngIf=\"apikey!=='null'\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" id='btndarkred'>Logout</button>\n\n     <button (click)=\"open(mymodal, 'signup')\"  class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" id='btndarkred'>SIGNIN</button>\n     <!-- <button (click)=\"FBSignin()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" id='btndarkred'>SIGNIN</button> -->\n     <!-- <button (click)=\"open(mymodal, 'signin')\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" id='btndarkred'>SIGNIN</button> -->\n\n    </form>\n\n  </div>\n</nav>\n</div>\n\n<ng-template #mymodal let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{check}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form #userForm='ngForm' (ngSubmit)='registerUser()' *ngIf=\"check==='signup'\">\n      <div class=\"alert alert-secondary\">\n        Sign Up Your Account\n      </div>\n      <!-- <label>Username</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n             <i class='fa fa-user'></i>\n          </div>\n        </div>\n        <input type=\"text\" [(ngModel)]='signUpModel.username' class=\"form-control\" placeholder=\"Username\" name='username'>\n      </div>\n      <label>Email</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n             <i class='fa fa-envelope'></i>\n          </div>\n        </div>\n        <input type=\"email\" [(ngModel)]='signUpModel.email' class=\"form-control\" placeholder=\"Email\" name='email'>\n      </div>\n      <label>Password </label> -->\n      <!-- <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n             <i class='fa fa-key'></i>\n          </div>\n        </div>\n        <input type=\"password\" [(ngModel)]='signUpModel.password' class=\"form-control\" name='password'>\n      </div> -->\n      <button (click)=\"FBSignin()\" class='btn btn-block btn-primary'>SIGN IN WITH FACEBOOK</button>\n</form>\n\n    <form #userForm='ngForm' (ngSubmit)='loginUser()' *ngIf=\"check==='signin'\">\n      <div class=\"alert alert-secondary\">\n        Login Your Account\n      </div>\n      <label>Username</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n             <i class='fa fa-user'></i>\n          </div>\n        </div>\n        <input type=\"text\" [(ngModel)]='signInModel.username' name='username' class=\"form-control\" placeholder=\"Username\">\n      </div>\n      <label>Password </label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <div class=\"input-group-text\">\n             <i class='fa fa-key'></i>\n          </div>\n        </div>\n        <input type=\"password\" [(ngModel)]='signInModel.password' name='password' class=\"form-control\" placeholder=\"Password\">\n      </div>\n      <button type=\"submit\" class='btn btn-block btn-danger'>Login</button>\n</form>\n  </div>\n  <!-- <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Ok</button>\n  </div> -->\n</ng-template>\n\n  </body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sell/sell.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sell/sell.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <form #userForm='ngForm' (ngSubmit)='onSubmit()' enctype=\"multipart/form-data\">\n  <div class=\"row\">\n      <div class=\"col-md-12 mx-auto\">\n        <h3 style=\"text-align: center;\">Address Details</h3>\n        <div class=\"form-group row\">\n\n          <div class=\"col-sm-4\">\n            <label for=\"sel1\">Select State:</label>\n            <select class=\"form-control\" id=\"sel1\" (change)=\"onstateChange()\" [(ngModel)]='sellModel.state' name='state'>\n              <option *ngFor='let i of statelist'> {{ i }} </option>\n            </select>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <label for=\"selectpostcode\">Select Suburb:</label>\n            <select class=\"form-control\" id=\"selectpostcode\" [(ngModel)]='sellModel.suburb' name=\"suburb\" required>\n                 <option *ngFor='let i of countrydetaillsapi'>{{ i.suburb }}</option>\n             </select>\n          </div>\n\n          <div class=\"col-sm-4\">\n            <label for=\"selectpostcode\">Select Suburb:</label>\n            <select class=\"form-control\" id=\"selectpostcode\" [(ngModel)]='sellModel.postcode' name=\"postcode\" required>\n                 <option *ngFor='let i of countrydetaillsapi'>{{ i.postcode }}</option>\n             </select>\n          </div>\n\n        </div>\n      </div>\n  </div>\n<!-- end row -->\n<!-- start row -->\n  <div class=\"form-group row\">\n\n    <div class=\"col-sm-3\">\n      <div class=\"form-group\">\n        <label for=\"usr\">Unit:</label>\n        <input type=\"text\" class=\"form-control\" id=\"usr\" [(ngModel)]='sellModel.unit' name=\"unit\" >\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"form-group\">\n        <label for=\"usr\">Street Number:</label>\n        <input type=\"text\" class=\"form-control\" id=\"usr\" [(ngModel)]='sellModel.street_number' name=\"street_number\" >\n      </div>\n    </div>\n    <div class=\"col-sm-3\">\n      <div class=\"form-group\">\n        <label for=\"usr\">Street Name:</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='sellModel.street_name' name=\"street_name\" >\n      </div>\n    </div>\n\n    <div class=\"col-sm-3\">\n      <div class=\"form-group\">\n        <label for=\"usr\">Land Size:</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]='sellModel.land_size' name=\"land_size\" >\n      </div>\n    </div>\n\n</div>\n<!-- end row -->\n\n<!-- start row -->\n<div class=\"form-group row\">\n\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"usr\">Price:</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]='sellModel.Price' name=\"Price\" >\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"usr\">Property Type:</label>\n      <select class=\"form-control\"  [(ngModel)]='sellModel.Property_type' name=\"Property_type\" >\n        <option> House </option>\n        <option> Apartment & Unit </option>\n        <option> Townhouse </option>\n        <option> Villa </option>\n        <option> Land </option>\n        <option> Acreage </option>\n        <option> Rural </option>\n        <option> Block Of Units </option>\n        <option> Retirement Living </option>\n\n    </select>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"usr\">Bedrooms:</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]='sellModel.Bedrooms' name=\"Bedrooms\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"usr\">Bathrooms:</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]='sellModel.Bathrooms' name=\"Bathrooms\">\n    </div>\n  </div>\n\n</div>\n<!-- end row -->\n\n<!-- start row -->\n<div class=\"form-group row\">\n\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"usr\">Car Spaces:</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]='sellModel.Car_spaces' name=\"Car_spaces\" >\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"usr\">New Or Established:</label>\n      <select class=\"form-control\"  [(ngModel)]='sellModel.new_or_established' name=\"new_or_established\" >\n        <option> New </option>\n        <option> Established </option>\n    </select>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"usr\">Image:</label>\n      <input type=\"file\" (change)='onFileSelected($event, \"image\")' class=\"form-control\" name=\"image\">\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"usr\">Plan:</label>\n      <input type=\"file\" (change)='onFileSelected($event, \"plan\")' class=\"form-control\" name=\"plan\">\n    </div>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <div class=\"form-group\">\n      <label for=\"comment\">Description:</label>\n      <textarea class=\"form-control\" rows=\"5\" [(ngModel)]='sellModel.description' name=\"description\"></textarea>\n    </div>\n  </div>\n\n</div>\n<!-- end row -->\n\n<h4 style=\"text-align: center;\">Additional Images(Optional) </h4>\n\n<div class=\"form-group row\">\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image1\")' name='image1'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image2\")' name='image2'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image3\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image4\")'>\n  </div>\n</div>\n\n\n<div class=\"form-group row\">\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image5\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image6\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image7\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image8\")'>\n  </div>\n</div>\n\n\n<div class=\"form-group row\">\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image9\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image10\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image11\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image12\")'>\n  </div>\n</div>\n\n\n<div class=\"form-group row\">\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image13\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image14\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image15\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image16\")'>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image17\")'>\n  </div>\n  <div class=\"col-sm-3\">\n    <input type=\"file\" class=\"form-control\" id=\"usr\" (change)='onFileSelected($event, \"image18\")'>\n  </div>\n\n</div>\n\n<hr>\n                <h4 style=\"text-align: center;\"> Additional Informations </h4>\n\n<div class=\"form-group row\">\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Swimming_pool' name='Swimming_pool'>Swimmimg Pool\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Garage' name='Garage'>Garage\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Balcony' name='Balcony'>Balcony\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Outdoor_area' name='Outdoor_area'>Outdoor Area\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Undercover_parking' name='Undercover_parking'>Undercover Parking\n  </label>\n</div>\n</div>\n</div>\n<div class=\"col-sm-2\">\n  <div class=\"form-group\">\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Shed' name='Shed'> Shed\n    </label>\n  </div>\n  </div>\n  </div>\n\n</div>\n<div class=\"form-group row\">\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Outdoor_spa' name='Outdoor_spa'>Outdoor Spa\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Tennis_court' name='Tennis_court'>Tennis Court\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Ensuite' name='Ensuite'>Ensuite\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.DishWasher' name='DishWasher'>DishWasher\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Study' name='Study'>Study\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n  <div class=\"form-group\">\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Built_in_robes' name='Built_in_robes'>Built in robes\n    </label>\n  </div>\n  </div>\n  </div>\n</div>\n\n<div class=\"form-group row\">\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Broadband' name='Broadband'>Broadband\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Floorboards' name='Floorboards'>Floorboards\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Gym' name='Gym'>Gym\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\"  [(ngModel)]='sellModel.Rumpus_room' name='Rumpus_room'>Rumpus Room\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\"  [(ngModel)]='sellModel.Workshop' name='Workshop'>Workshop\n  </label>\n</div>\n</div>\n</div>\n\n<div class=\"col-sm-2\">\n<div class=\"form-group\">\n<div class=\"form-check\">\n  <label class=\"form-check-label\">\n    <input type=\"checkbox\" class=\"form-check-input\" value=\"\"  [(ngModel)]='sellModel.Air_conditioning' name='Air_conditioning'>Air Conditioning\n  </label>\n</div>\n</div>\n</div>\n</div>\n\n\n<div class=\"form-group row\">\n  <div class=\"col-sm-2\">\n  <div class=\"form-group\">\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value=\"\"  [(ngModel)]='sellModel.Solar_panels' name='Solar_panels'>Solar Panels\n    </label>\n  </div>\n  </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n  <div class=\"form-group\">\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value=\"\"  [(ngModel)]='sellModel.Heating' name='Heating'>Heating\n    </label>\n  </div>\n  </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n  <div class=\"form-group\">\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value=\"\"  [(ngModel)]='sellModel.High_energy_efficiency' name='High_energy_efficiency'>High Energy Efficiency\n    </label>\n  </div>\n  </div>\n  </div>\n  <div class=\"col-sm-2\">\n  <div class=\"form-group\">\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value=\"\"  [(ngModel)]='sellModel.Water_tank' name='Water_tank'>Water Tank\n    </label>\n  </div>\n  </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n  <div class=\"form-group\">\n  <div class=\"form-check\">\n    <label class=\"form-check-label\">\n      <input type=\"checkbox\" class=\"form-check-input\" value=\"\"  [(ngModel)]='sellModel.Solar_hot_water' name='Solar_hot_water'> Solar Hot Water\n    </label>\n  </div>\n  </div>\n  </div>\n\n  <div class=\"col-sm-2\">\n    <div class=\"form-group\">\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Fully_fenced' name='Fully_fenced'>Fully Fenced\n      </label>\n    </div>\n    </div>\n    </div>\n\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-2\">\n      <div class=\"form-group\">\n      <div class=\"form-check\">\n        <label class=\"form-check-label\">\n          <input type=\"checkbox\" class=\"form-check-input\" value=\"\" [(ngModel)]='sellModel.Alarm_system' name='Alarm_system'>Alarm System\n        </label>\n      </div>\n      </div>\n      </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\"></div>\n    <button type=\"Submit\" class=\"btn btn-primary btn-block\">Submit</button>\n  </div>\n\n\n<hr>\n</form>\n<div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <form #userForm='ngForm' (ngSubmit)='onSubmit()'>\n        <div class=\"alert alert-danger\">\n          Login Your Account\n        </div>\n        <label>Username</label>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n               <i class='fa fa-user'></i>\n            </div>\n          </div>\n          <input type=\"text\" [(ngModel)]='signInModel.username' name='username' class=\"form-control\" placeholder=\"Username\">\n        </div>\n        <label>Password </label>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n               <i class='fa fa-key'></i>\n            </div>\n          </div>\n          <input type=\"password\" [(ngModel)]='signInModel.password' name='password' class=\"form-control\" placeholder=\"Password\">\n        </div>\n        <button type=\"submit\" class='btn btn-block btn-danger'>Login</button>\n</form>\n</div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <form #userForm='ngForm' (ngSubmit)='onSubmit()'>\n        <div class=\"alert alert-secondary\">\n          Sign Up Your Account\n        </div>\n        <label>Username</label>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n               <i class='fa fa-user'></i>\n            </div>\n          </div>\n          <input type=\"text\" [(ngModel)]='signUpModel.username' class=\"form-control\" placeholder=\"Username\" name='username'>\n        </div>\n        <label>Email</label>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n               <i class='fa fa-envelope'></i>\n            </div>\n          </div>\n          <input type=\"email\" [(ngModel)]='signUpModel.email' class=\"form-control\" placeholder=\"Email\" name='email'>\n        </div>\n        <label>Password </label>\n        <div class=\"input-group mb-3\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n               <i class='fa fa-key'></i>\n            </div>\n          </div>\n          <input type=\"password\" [(ngModel)]='signUpModel.password' class=\"form-control\" name='password'>\n        </div>\n        <button type=\"submit\" class='btn btn-block btn-danger'>Register</button>\n</form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n  height: 500px;\r\n  width: 100%;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztDQUNaIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG4iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _class_signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/signin */ "./src/app/class/signin.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/apiservice.service */ "./src/app/service/apiservice.service.ts");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-social-login */ "./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_social_login__WEBPACK_IMPORTED_MODULE_6__);


// import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';





// console.log(`jQuery version: ${$.fn.jquery}`);
// angularx-social-login https://www.djamware.com/post/5d4628d5721e1ce9d7dc95b0/angular-8-tutorial-facebook-login
// https://www.djamware.com/post/5d4628d5721e1ce9d7dc95b0/angular-8-tutorial-facebook-login
let AppComponent = 
// tslint:disable-next-line: no-unused-expression
class AppComponent {
    constructor(socialAuthService, api, router, modalService) {
        this.socialAuthService = socialAuthService;
        this.api = api;
        this.router = router;
        this.modalService = modalService;
        this.signInModel = new _class_signin__WEBPACK_IMPORTED_MODULE_3__["Signin"]('budescode', 'bossess1');
        this.title = 'project';
        this.details = [{ longitude: 51.678418, latitude: 7.809007 }];
        this.latitude = 51.678418;
        this.longitude = 7.809007;
        this.user = ng4_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialUser"];
        this.username = 'bude';
        this.apikey = 'null';
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
    }
    open(content) {
        this.modalService.open(content, this.modalOptions).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    FBSignin() {
        this.socialAuthService.signIn(ng4_social_login__WEBPACK_IMPORTED_MODULE_6__["FacebookLoginProvider"].PROVIDER_ID).then((userData) => {
            this.user = userData;
            this.username = userData.name;
            console.log('yeahhhh', this.username);
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    signInWithFB() {
        // this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
    onSubmit() {
        console.log(this.signInModel);
        this.api.signin(this.signInModel).subscribe(data => {
            localStorage.setItem('apikey', data.key);
            const key = localStorage.getItem('apikey');
            console.log('Success!', 'logged in', key);
            this.router.navigate(['/']);
        }, 
        // tslint:disable-next-line: no-string-literal
        error => console.log('oops', error.error)
        // erro => console.error('Error', error)
        );
    }
    signOut() {
        localStorage.setItem('apikey', null);
        this.apikey = 'null';
        this.router.navigate(['/']);
        // this.authService.signOut();
    }
    ngOnInit() {
        const key = localStorage.getItem('apikey');
        // console.log('just enteredd againnn', key);
        if (key === null || key === '') {
            this.apikey = 'null';
        }
        else {
            this.apikey = key;
            console.log(this.apikey, 'apiiiiikeyyyy');
        }
        // this.authService.authState.subscribe((user) => {
        //   this.user = user;
        //   this.loggedIn = (user != null);
        //   console.log(this.user, 'userrr');
        // });
    }
};
AppComponent.ctorParameters = () => [
    { type: ng4_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_5__["ApiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
    // tslint:disable-next-line: no-unused-expression
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _mapsearch_mapsearch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mapsearch/mapsearch.component */ "./src/app/mapsearch/mapsearch.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _mypost_mypost_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mypost/mypost.component */ "./src/app/mypost/mypost.component.ts");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng4-social-login */ "./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng4_social_login__WEBPACK_IMPORTED_MODULE_24__);
















// import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';









const CONFIG = new ng4_social_login__WEBPACK_IMPORTED_MODULE_24__["AuthServiceConfig"]([
    // {
    //   id: GoogleLoginProvider.PROVIDER_ID,
    //   provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
    // },
    {
        id: ng4_social_login__WEBPACK_IMPORTED_MODULE_24__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new ng4_social_login__WEBPACK_IMPORTED_MODULE_24__["FacebookLoginProvider"]('1415669241944851')
    },
], true);
function provideConfig() {
    return CONFIG;
}
const appRoutes = [
    {
        path: 'index',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
    },
    {
        path: 'sell',
        component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_19__["SellComponent"],
    },
    {
        path: 'mypost',
        component: _mypost_mypost_component__WEBPACK_IMPORTED_MODULE_23__["MypostComponent"],
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_17__["SigninComponent"],
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
    },
    {
        path: 'filter',
        component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"],
    },
    { path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_12__["DetailComponent"],
    },
    {
        path: 'mapsearch',
        component: _mapsearch_mapsearch_component__WEBPACK_IMPORTED_MODULE_14__["MapsearchComponent"],
    }
];
// const config = new AuthServiceConfig([
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider('1415669241944851')
//   }
// ]);
// export function provideConfig() {
//   return config;
// }
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"],
            _filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"],
            _detail_detail_component__WEBPACK_IMPORTED_MODULE_12__["DetailComponent"],
            _mapsearch_mapsearch_component__WEBPACK_IMPORTED_MODULE_14__["MapsearchComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_17__["SigninComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
            _sell_sell_component__WEBPACK_IMPORTED_MODULE_19__["SellComponent"],
            _logout_logout_component__WEBPACK_IMPORTED_MODULE_20__["LogoutComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavbarComponent"],
            _mypost_mypost_component__WEBPACK_IMPORTED_MODULE_23__["MypostComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only #AIzaSyBfZ86mdGX5E7o4PGSB7ct22axSb_JzVTY
            ),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"].forRoot(),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__["NgxUiLoaderModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__["NgxUiLoaderRouterModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__["NgxUiLoaderHttpModule"],
            // NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_11__["NgxUiLoaderHttpModule"].forRoot({ showForeground: true }),
            _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBfZ86mdGX5E7o4PGSB7ct22axSb_JzVTY'
            }),
            // SocialLoginModule, // social authentication
            ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
            ng4_social_login__WEBPACK_IMPORTED_MODULE_24__["SocialLoginModule"]
        ],
        providers: [
            {
                provide: ng4_social_login__WEBPACK_IMPORTED_MODULE_24__["AuthServiceConfig"],
                useFactory: provideConfig
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/class/sell.ts":
/*!*******************************!*\
  !*** ./src/app/class/sell.ts ***!
  \*******************************/
/*! exports provided: Sell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sell", function() { return Sell; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Sell {
    constructor(unit, street_number, street_name, suburb, postcode, state, land_size, Property_type, description, Price, image, plan, Bedrooms, Bathrooms, Car_spaces, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, new_or_established, Swimming_pool, Garage, Balcony, Outdoor_area, Undercover_parking, Shed, Fully_fenced, Outdoor_spa, Tennis_court, Ensuite, DishWasher, Study, Built_in_robes, Alarm_system, Broadband, Floorboards, Gym, Rumpus_room, Workshop, Air_conditioning, Solar_panels, Heating, High_energy_efficiency, Water_tank, Solar_hot_water) {
        this.unit = unit;
        this.street_number = street_number;
        this.street_name = street_name;
        this.suburb = suburb;
        this.postcode = postcode;
        this.state = state;
        this.land_size = land_size;
        this.Property_type = Property_type;
        this.description = description;
        this.Price = Price;
        this.image = image;
        this.plan = plan;
        this.Bedrooms = Bedrooms;
        this.Bathrooms = Bathrooms;
        this.Car_spaces = Car_spaces;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.image5 = image5;
        this.image6 = image6;
        this.image7 = image7;
        this.image8 = image8;
        this.image9 = image9;
        this.image10 = image10;
        this.image11 = image11;
        this.image12 = image12;
        this.image13 = image13;
        this.image14 = image14;
        this.image15 = image15;
        this.image16 = image16;
        this.image17 = image17;
        this.image18 = image18;
        this.new_or_established = new_or_established;
        this.Swimming_pool = Swimming_pool;
        this.Garage = Garage;
        this.Balcony = Balcony;
        this.Outdoor_area = Outdoor_area;
        this.Undercover_parking = Undercover_parking;
        this.Shed = Shed;
        this.Fully_fenced = Fully_fenced;
        this.Outdoor_spa = Outdoor_spa;
        this.Tennis_court = Tennis_court;
        this.Ensuite = Ensuite;
        this.DishWasher = DishWasher;
        this.Study = Study;
        this.Built_in_robes = Built_in_robes;
        this.Alarm_system = Alarm_system;
        this.Broadband = Broadband;
        this.Floorboards = Floorboards;
        this.Gym = Gym;
        this.Rumpus_room = Rumpus_room;
        this.Workshop = Workshop;
        this.Air_conditioning = Air_conditioning;
        this.Solar_panels = Solar_panels;
        this.Heating = Heating;
        this.High_energy_efficiency = High_energy_efficiency;
        this.Water_tank = Water_tank;
        this.Solar_hot_water = Solar_hot_water;
    }
}


/***/ }),

/***/ "./src/app/class/signin.ts":
/*!*********************************!*\
  !*** ./src/app/class/signin.ts ***!
  \*********************************/
/*! exports provided: Signin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signin", function() { return Signin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Signin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/class/signup.ts":
/*!*********************************!*\
  !*** ./src/app/class/signup.ts ***!
  \*********************************/
/*! exports provided: Signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Signup {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/class/sociallogin.ts":
/*!**************************************!*\
  !*** ./src/app/class/sociallogin.ts ***!
  \**************************************/
/*! exports provided: Sociallogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sociallogin", function() { return Sociallogin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Sociallogin {
    constructor(access_token) {
        this.access_token = access_token;
    }
}


/***/ }),

/***/ "./src/app/classfunction.ts":
/*!**********************************!*\
  !*** ./src/app/classfunction.ts ***!
  \**********************************/
/*! exports provided: Classfunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Classfunction", function() { return Classfunction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Classfunction {
    constructor(name, pricemin, pricemax, bedmin, bedmax, propertytype) {
        this.name = name;
        this.pricemin = pricemin;
        this.pricemax = pricemax;
        this.bedmin = bedmin;
        this.bedmax = bedmax;
        this.propertytype = propertytype;
    }
}


/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n  height: 500px;\r\n  width: 100%;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/apiservice.service */ "./src/app/service/apiservice.service.ts");




let DetailComponent = class DetailComponent {
    constructor(location, api) {
        this.api = api;
        this.details = [{ longitude: 7.809007, latitude: 51.678418 }, { longitude: 9.809007, latitude: 60.678418 },
            { longitude: 8.809007, latitude: 55.678418 }];
        this.latitude = 0;
        this.longitude = 0;
        this.show = false;
        this.posterdetails = [{ street_number: 'none', created: 'none', street_name: 'none',
                suburb: 'none', state: 'none', Price: 'none', image: 'none', Bedrooms: 'none', Bathrooms: 'none',
                Car_spaces: 'none', land_size: 'none', Property_type: 'none', description: 'none'
            }];
        this.getPosterDetail = (id) => {
            this.api.getposterDetails(id).subscribe(data => {
                // console.log(this.countrydetaillsapi, 'comedylist');
                this.posterdetails = data.results;
                this.longitude = Number(data.results[0].longitude);
                this.latitude = Number(data.results[0].latitude);
                console.log('datttaa', data.results[0].longitude, data.results[0].latitude);
            }, error => {
                console.log(error);
            });
        };
        this.location = location;
    }
    ngOnInit() {
        this.lastindex = this.location.path().lastIndexOf('/') + 1;
        this.posterId = this.location.path().substring(this.lastindex);
        this.getPosterDetail(this.posterId);
        console.log(this.posterId, 'location', this.location.path().lastIndexOf('/'));
    }
};
DetailComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"] }],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")).default]
    })
], DetailComponent);



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/apiservice.service */ "./src/app/service/apiservice.service.ts");
/* harmony import */ var _classfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classfunction */ "./src/app/classfunction.ts");






let FilterComponent = class FilterComponent {
    constructor(actRoute, api, router) {
        this.actRoute = actRoute;
        this.api = api;
        this.router = router;
        this.dropdownList = [];
        this.selectedItems = [];
        this.propertytype = [];
        // this is for  ng-multiselect-dropdown;
        this.p = 1;
        this.countrydetaillsapi = [];
        this.testlist = [];
        this.search = '';
        this.searchModel = new _classfunction__WEBPACK_IMPORTED_MODULE_4__["Classfunction"](this.search, '', '', '', '', '');
        this.getFilterDetail = () => {
            // console.log('testingggg');
            this.api.getfilterDetails(this.searchparam).subscribe(data => {
                // console.log(this.countrydetaillsapi, 'comedylist');
                this.filterdetails = data.results;
                this.filterdetails1 = data.results;
                this.previous = data.previous;
                this.next = data.next;
                this.count = data.count;
                // this.filterdetails, this.previous, this.next,
                console.log(this.filterdetails.length, 'datttaacountt');
            }, error => {
                console.log(error);
            });
        };
        this.mapSearch = () => {
            localStorage.setItem('url', 'this.dataSource.length');
            this.router.navigate(['/mapsearch']);
            console.log('ended');
        };
        this.getCountryDetail = () => {
            console.log('testingggg');
            this.api.getcountryDetails().subscribe(data => {
                // console.log(this.countrydetaillsapi, 'comedylist');
                this.countrydetaillsapi = data;
                this.testlist = data;
                console.log(this.countrydetaillsapi, 'datttaa');
            }, error => {
                console.log(error);
            });
        };
        this.searchparam = this.actRoute.snapshot.params;
    }
    onItemSelect(item) {
        console.log(item, this.propertytype);
        // this.propertytype = item;
        const selected1 = item;
        if (this.propertytype.includes(item)) {
            console.log('yeahhh');
        }
        else {
            console.log('nahhh');
            this.propertytype.push(item);
            this.searchModel.propertytype = this.propertytype;
            console.log('this.propertytype', this.searchModel.propertytype);
        }
    }
    onSelectAll(items) {
        console.log(items);
        this.propertytype = items;
        this.searchModel.propertytype = this.propertytype;
        console.log('this.propertytype', this.searchModel.propertytype);
    }
    pricemin() {
        let pricemin = this.searchModel.pricemin;
        pricemin = pricemin.replace(',', '');
        pricemin = pricemin.replace('$', '');
        pricemin = pricemin.replace(' ', '');
        if (pricemin === 'Any') {
            const newlist = this.filterdetails.filter(el => el.Price >= 0);
            this.filterdetails1 = newlist;
            console.log(newlist, this.filterdetails);
            console.log(pricemin, 'yeajhh');
        }
        else {
            // filterdetails
            const newlist = this.filterdetails.filter(el => el.Price >= pricemin);
            this.filterdetails1 = newlist;
            console.log(pricemin, 'yeajhh');
        }
    }
    pricemax() {
        let pricemax = this.searchModel.pricemax;
        pricemax = pricemax.replace(',', '');
        pricemax = pricemax.replace('$', '');
        pricemax = pricemax.replace(' ', '');
        if (pricemax === 'Any') {
            const newlist = this.filterdetails.filter(el => el.Price <= 10000000000000000);
            this.filterdetails1 = newlist;
            console.log(newlist, this.filterdetails);
            console.log(pricemax, 'yeajhh');
        }
        else {
            // filterdetails
            const newlist = this.filterdetails.filter(el => el.Price <= pricemax);
            this.filterdetails1 = newlist;
            console.log(pricemax, 'yeajhh');
        }
    }
    bedmin() {
        const bedmin = this.searchModel.bedmin;
        if (bedmin === 'Any') {
            const newlist = this.filterdetails.filter(el => el.Bedrooms >= 10000000000000000);
            this.filterdetails1 = newlist;
            console.log(newlist, this.filterdetails);
            console.log(bedmin, 'yeajhh');
        }
        else if (bedmin === 'Studio') {
            const newlist = this.filterdetails.filter(el => el.Bedrooms >= 0);
            this.filterdetails1 = newlist;
            console.log(newlist, this.filterdetails);
            console.log(bedmin, 'yeajhh');
        }
        else {
            // filterdetails
            const newlist = this.filterdetails.filter(el => el.Bedrooms >= bedmin);
            this.filterdetails1 = newlist;
            console.log(bedmin, 'yeajhh');
        }
    }
    bedmax() {
        const bedmax = this.searchModel.bedmax;
        if (bedmax === 'Any') {
            const newlist = this.filterdetails.filter(el => el.Bedrooms <= 10000000000000000);
            this.filterdetails1 = newlist;
            console.log(newlist, this.filterdetails);
            console.log(bedmax, 'yeajhh');
        }
        else if (bedmax === 'Studio') {
            const newlist = this.filterdetails.filter(el => el.Bedrooms <= 0);
            this.filterdetails1 = newlist;
            console.log(newlist, this.filterdetails);
            console.log(bedmax, 'yeajhh');
        }
        else {
            // filterdetails
            const newlist = this.filterdetails.filter(el => el.Bedrooms <= bedmax);
            this.filterdetails1 = newlist;
            console.log(bedmax, 'yeajhh');
        }
    }
    // bathrooms() {
    //   const bathroom  = this.searchModel.Bathrooms;
    //   if (bathroom === 'Any' ) {
    //     const newlist = this.filterdetails.filter( el => el.Bathrooms >= 10000000000000000);
    //     this.filterdetails1 = newlist;
    //     console.log(newlist, this.filterdetails);
    //     console.log(bathroom, 'yeajhh');
    //   } else if (bathroom === 'Studio' ) {
    //     const newlist = this.filterdetails.filter( el => el.Bathrooms >= 0);
    //     this.filterdetails1 = newlist;
    //     console.log(newlist, this.filterdetails);
    //     console.log(bathroom, 'yeajhh');
    //   }  else {
    //   // filterdetails
    //   const newlist = this.filterdetails.filter( el => el.Bathrooms >= bathroom);
    //   this.filterdetails1 = newlist;
    //   console.log(bathroom, 'yeajhh');
    //   }
    // }
    ngOnInit() {
        // console.log(this.searchparam, 'yeah yeah');
        this.getFilterDetail();
        this.dropdownList = ['House', 'Apartment & Unit', 'Townhouse', 'Villa', 'Land',
            'Acreage', 'Rural', 'Block Of Units', 'Retirement Living'
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
};
FilterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")).default]
    })
], FilterComponent);



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classfunction */ "./src/app/classfunction.ts");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/apiservice.service */ "./src/app/service/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let IndexComponent = class IndexComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.dropdownList = [];
        this.selectedItems = [];
        this.propertytype = [];
        // this is for  ng-multiselect-dropdown;
        this.countrydetaillsapi = [];
        this.testlist = [];
        this.dis = false;
        this.search = '';
        this.searchModel = new _classfunction__WEBPACK_IMPORTED_MODULE_2__["Classfunction"](this.search, 'Any', 'Any', '', '', '');
        this.realdata = [{ name: 'DARWIN - NT' }, { name: 'BARTON - ACT' }, { name: 'PARAP - NT' }];
        this.countrydata = this.realdata;
        this.inputdata = '';
        this.apikey = null;
        this.showDiv = () => {
            console.log('show');
            if (this.dis === true) {
                this.dis = false;
            }
            else if (this.dis === false) {
                this.dis = true;
            }
        };
        this.hideDiv = () => {
            // this.dis = false;
            console.log(this.searchModel.name, 'yeahhh');
        };
        this.getDetails = (data) => {
            const value = this.searchModel.name;
            console.log(data.state, data.suburb, this.searchModel.name);
            this.dis = false;
            // tslint:disable-next-line: no-shadowed-variable
            // tslint:disable-next-line: no-shadowed-variable
            // const newcountrydata = this.realdata.filter(element => element.name !== data.name);
            // this.countrydata = newcountrydata;
            this.testlist = [];
            if (this.searchModel.name === undefined) {
                this.inputdata = this.inputdata + data.suburb + ' ' + '-' + data.state + ';';
                this.searchModel.name = this.inputdata;
            }
            else {
                this.inputdata = this.inputdata + data.suburb + ' ' + '-' + data.state + ';';
                this.searchModel.name = this.inputdata;
            }
        };
        this.filterCountryDetails = () => {
            // if (this.searchModel.name) {
            // }
            this.dis = true;
            const input = this.searchModel.name.lastIndexOf(';');
            const lastinput = this.searchModel.name.slice(-1);
            console.log(lastinput);
            // tslint:disable-next-line: triple-equals
            if (lastinput === ';') {
                this.inputdata = this.searchModel.name;
                this.testlist = [];
            }
            if (lastinput === '') {
                this.inputdata = '';
                this.searchModel.name = this.inputdata;
            }
            if (input !== -1) {
                console.log('started11');
                const newvalue = this.searchModel.name.toUpperCase().substring(input + 1).trim();
                // console.log('yeayyh', input, newvalue);
                const value = this.searchModel.name.toUpperCase();
                console.log(newvalue);
                // const inputvalue = this.searchModel.name.toUpperCase();
                // const newvalue = this.searchModel.name.toUpperCase().substring(input + 1).trim();
                if (newvalue.includes('-')) {
                    console.log('yeah it includes');
                    const lastin = newvalue.lastIndexOf('-');
                    const newvalue1 = newvalue.substring(lastin + 1).trim();
                    const newlist = this.testlist.filter(el => el.state.includes(newvalue1));
                    console.log('contains', newvalue1, newlist, this.testlist);
                }
                else {
                    console.log('nahh it done');
                    const test1 = this.countrydetaillsapi.filter(el => el.suburb.includes(newvalue));
                    this.testlist = test1;
                    console.log(this.testlist, newvalue, 'valueee');
                    // console.log('ended');
                }
                // const test = this.realdata.filter( el => el.name.includes(newvalue));
                // this.countrydata = test;
                // console.log(newvalue, newvalue.length, test, this.realdata );
            }
            if (this.searchModel.name.toUpperCase() === '') {
                this.countrydata = this.realdata;
            }
            if (input === -1) {
                console.log('started22');
                const inputvalue = this.searchModel.name.toUpperCase();
                const newvalue = this.searchModel.name.toUpperCase().substring(input + 1).trim();
                if (this.searchModel.name.toUpperCase().includes('-')) {
                    const lastin = this.searchModel.name.toUpperCase().lastIndexOf('-');
                    const newvalue1 = this.searchModel.name.toUpperCase().substring(lastin + 1).trim();
                    const newlist = this.testlist.filter(el => el.state.includes(newvalue1));
                    console.log('contains', newvalue1, newlist, this.testlist);
                }
                else {
                    const test1 = this.countrydetaillsapi.filter(el => el.suburb.includes(inputvalue));
                    this.testlist = test1;
                    console.log(this.testlist, inputvalue, 'valueee');
                    console.log('ended');
                }
                // const value = this.searchModel.name.toUpperCase();
                // const test = this.realdata.filter( el => el.name.includes(value));
                // this.countrydata = test;
                // console.log(value, test);
            }
        };
        // this function is used to get the country details from api
        this.getCountryDetail = () => {
            // console.log('testingggg');
            this.api.getcountryDetails().subscribe(data => {
                // console.log(this.countrydetaillsapi, 'comedylist');
                const unique = this.getUnique(data, 'suburb');
                this.countrydetaillsapi = data;
                this.testlist = data;
                console.log(this.countrydetaillsapi, 'datttaa');
                console.log(data, 'originalll');
            }, error => {
                console.log(error);
            });
        };
        this.submitForm = () => {
            this.searchModel.propertytype = this.propertytype;
            console.log('search model', this.searchModel.propertytype);
            const searchparams = { name: this.searchModel.name.trim(), bedmin: this.searchModel.bedmin, bedmax: this.searchModel.bedmax,
                pricemin: this.searchModel.pricemin, pricemax: this.searchModel.pricemax, propertytype: this.searchModel.propertytype };
            // console.log('submitted', this.searchModel.propertytype, this.searchModel.name);
            // console.log(this.searchModel.name, this.searchModel.bedmin, this.searchModel.bedmax,
            //   this.searchModel.pricemin, this.searchModel.pricemax);
            this.router.navigate(['/filter', searchparams]);
        };
    }
    // this function is used to remove duplicates
    getUnique(arr, comp) {
        const unique = arr
            .map(e => e[comp])
            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)
            // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);
        return unique;
    }
    ngOnInit() {
        const key = localStorage.getItem('apikey');
        // console.log('just enteredd', key);
        if (key === null || key === '') {
            this.apikey = null;
        }
        else {
            this.apikey = key;
            console.log(this.apikey, 'indexxxxkeyyyy');
        }
        this.getCountryDetail();
        this.dropdownList = ['House', 'Apartment & Unit', 'Townhouse', 'Villa', 'Land', 'Acreage', 'Rural', 'Block Of Units', 'Retirement Living'
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    onItemSelect(item) {
        console.log(item, this.propertytype);
        // this.propertytype = item;
        const selected1 = item;
        if (this.propertytype.includes(item)) {
            console.log('yeahhh');
        }
        else {
            console.log('nahhh');
            this.propertytype.push(item);
            this.searchModel.propertytype = this.propertytype;
            console.log('this.propertytype', this.searchModel.propertytype);
        }
    }
    onSelectAll(items) {
        console.log(items);
        this.propertytype = items;
        this.searchModel.propertytype = this.propertytype;
        console.log('this.propertytype', this.searchModel.propertytype);
    }
};
IndexComponent.ctorParameters = () => [
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoutComponent = class LogoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")).default]
    })
], LogoutComponent);



/***/ }),

/***/ "./src/app/mapsearch/mapsearch.component.css":
/*!***************************************************!*\
  !*** ./src/app/mapsearch/mapsearch.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\r\n  height: 1000px;\r\n  width: 100%;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwc2VhcmNoL21hcHNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL21hcHNlYXJjaC9tYXBzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/mapsearch/mapsearch.component.ts":
/*!**************************************************!*\
  !*** ./src/app/mapsearch/mapsearch.component.ts ***!
  \**************************************************/
/*! exports provided: MapsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsearchComponent", function() { return MapsearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/apiservice.service */ "./src/app/service/apiservice.service.ts");



let MapsearchComponent = class MapsearchComponent {
    constructor(api) {
        this.api = api;
        this.details = [];
        this.latitude = 55.678418;
        this.longitude = 8.809007;
        this.getmapSearch = () => {
            const searchurl = localStorage.getItem('searchparams');
            console.log(localStorage.getItem('searchparams'), 'this is it ooh');
            console.log('clicked');
            this.api.getmapSearch(searchurl).subscribe(data => {
                this.details = data.results;
                this.latitude = data.results[0].latitude;
                this.longitude = data.results[0].longitude;
                console.log(data.results, this.latitude, this.longitude, 'datttaacounttaaaaa');
            }, error => {
                console.log(error);
            });
        };
    }
    ngOnInit() {
        this.getmapSearch();
    }
};
MapsearchComponent.ctorParameters = () => [
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"] }
];
MapsearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapsearch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mapsearch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mapsearch/mapsearch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mapsearch.component.css */ "./src/app/mapsearch/mapsearch.component.css")).default]
    })
], MapsearchComponent);



/***/ }),

/***/ "./src/app/mypost/mypost.component.css":
/*!*********************************************!*\
  !*** ./src/app/mypost/mypost.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cG9zdC9teXBvc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/mypost/mypost.component.ts":
/*!********************************************!*\
  !*** ./src/app/mypost/mypost.component.ts ***!
  \********************************************/
/*! exports provided: MypostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypostComponent", function() { return MypostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/apiservice.service */ "./src/app/service/apiservice.service.ts");



let MypostComponent = class MypostComponent {
    constructor(api) {
        this.api = api;
        this.details = [];
        this.p = 1;
    }
    getMyPost() {
        this.api.mypost().subscribe(data => {
            this.details = data.results;
            console.log(this.details, 'original');
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.getMyPost();
    }
};
MypostComponent.ctorParameters = () => [
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"] }
];
MypostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mypost',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mypost.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mypost/mypost.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mypost.component.css */ "./src/app/mypost/mypost.component.css")).default]
    })
], MypostComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/apiservice.service */ "./src/app/service/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _class_signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../class/signin */ "./src/app/class/signin.ts");
/* harmony import */ var _class_signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../class/signup */ "./src/app/class/signup.ts");
/* harmony import */ var _class_sociallogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../class/sociallogin */ "./src/app/class/sociallogin.ts");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng4-social-login */ "./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var ng4_social_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng4_social_login__WEBPACK_IMPORTED_MODULE_8__);









let NavbarComponent = class NavbarComponent {
    constructor(socialAuthService, api, router, modalService) {
        this.socialAuthService = socialAuthService;
        this.api = api;
        this.router = router;
        this.modalService = modalService;
        this.signInModel = new _class_signin__WEBPACK_IMPORTED_MODULE_5__["Signin"]('', ''); // to sign in a normal user using username and password
        this.signUpModel = new _class_signup__WEBPACK_IMPORTED_MODULE_6__["Signup"]('', '', ''); // to sign up a user using normal username and password.
        this.SocialloginModel = new _class_sociallogin__WEBPACK_IMPORTED_MODULE_7__["Sociallogin"](''); // social login model connecting with django
        this.apikey = 'null'; // this is used to store the apikey from  django server
        this.myuser = null; // this is used to store the username from facebook.
        this.check = ''; // used in the modal
        // this funtion is used to register the user wit username and password
        this.registerUser = () => {
            console.log(this.signUpModel);
            this.api.signup(this.signUpModel).subscribe(data => {
                console.log('Success!'),
                    this.check = 'signin';
                this.signUpModel = new _class_signup__WEBPACK_IMPORTED_MODULE_6__["Signup"]('', '', '');
                //  this.router.navigate(['/signin'])),
            }, 
            // tslint:disable-next-line: no-string-literal
            error => console.log('oops', error.error)
            // erro => console.error('Error', error)
            );
        };
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
    }
    // this is social media function to login
    FBSignin() {
        // set the apikey and username to null
        localStorage.setItem('apikey', null);
        localStorage.setItem('username', null);
        this.socialAuthService.signIn(ng4_social_login__WEBPACK_IMPORTED_MODULE_8__["FacebookLoginProvider"].PROVIDER_ID).then((userData) => {
            this.SocialloginModel = new _class_sociallogin__WEBPACK_IMPORTED_MODULE_7__["Sociallogin"](userData.token);
            this.api.socialSignIn(this.SocialloginModel).subscribe(data => {
                // set the apikey and username in the local storage
                localStorage.setItem('apikey', data.key);
                localStorage.setItem('username', userData.name);
                // set the apove apokey and myuser value for auto update
                this.apikey = data.key;
                this.myuser = userData.name;
                this.modalService.dismissAll();
                this.router.navigate(['/']);
            }, 
            // tslint:disable-next-line: no-string-literal
            error => console.log('oops', error.error)
            // erro => console.error('Error', error)
            );
        });
    }
    // this is used to logout a user, setting all the keys to null
    signOut() {
        localStorage.setItem('apikey', null);
        localStorage.setItem('username', null);
        this.apikey = 'null';
        this.myuser = null;
        this.router.navigate(['/']);
        // this.authService.signOut();
    }
    // this is used to open the modal
    open(content, check) {
        this.check = check;
        this.modalService.open(content, this.modalOptions).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    // this is used to dismiss the modal
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    // this is used to login a normal user using username and password
    loginUser() {
        this.api.signin(this.signInModel).subscribe(data => {
            localStorage.setItem('apikey', data.key);
            const key = localStorage.getItem('apikey');
            this.apikey = data.key;
            this.modalService.dismissAll();
            this.signInModel = new _class_signin__WEBPACK_IMPORTED_MODULE_5__["Signin"]('', '');
            this.router.navigate(['/']);
        }, 
        // tslint:disable-next-line: no-string-literal
        error => console.log('oops', error.error)
        // erro => console.error('Error', error)
        );
    }
    ngOnInit() {
        const key = localStorage.getItem('apikey');
        const username = localStorage.getItem('username');
        // console.log('just enteredd againnn', key);,
        if (key === null || key === '') {
            this.apikey = 'null';
        }
        else {
            this.apikey = key;
            this.myuser = username;
            console.log(this.apikey, 'apiiiiikeyyyy', username);
        }
        // this.authService.authState.subscribe((user) => {
        //   this.user = user;
        //   this.loggedIn = (user != null);
        //   console.log(this.user, 'userrr');
        // });
    }
};
NavbarComponent.ctorParameters = () => [
    { type: ng4_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/sell/sell.component.css":
/*!*****************************************!*\
  !*** ./src/app/sell/sell.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGwvc2VsbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/*!****************************************!*\
  !*** ./src/app/sell/sell.component.ts ***!
  \****************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _class_sell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/sell */ "./src/app/class/sell.ts");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/apiservice.service */ "./src/app/service/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let SellComponent = class SellComponent {
    constructor(api, router, http) {
        this.api = api;
        this.router = router;
        this.http = http;
        this.sellModel = new _class_sell__WEBPACK_IMPORTED_MODULE_2__["Sell"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);
        this.statelist = ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT'];
        this.postcode = ['1001', '1002'];
        this.countrydetaillsapi = [];
        this.image = null;
        this.plan = null;
        this.form = new FormData();
        this.mykey = '';
        this.getCountryDetail = (state) => {
            // console.log('testingggg');
            this.api.getcountryDetails2(state).subscribe(data => {
                // console.log(this.countrydetaillsapi, 'comedylist');
                const unique = this.getUnique(data, 'postcode');
                this.countrydetaillsapi = this.getUnique(unique, 'suburb');
                // this.testlist = data;
                console.log(this.countrydetaillsapi, 'datttaa');
                console.log(data, 'original');
            }, error => {
                console.log(error);
            });
        };
    }
    // this function is used to remove duplicates
    getUnique(arr, comp) {
        const unique = arr
            .map(e => e[comp])
            // store the keys of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)
            // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);
        return unique;
    }
    onstateChange() {
        this.getCountryDetail(this.sellModel.state);
        console.log('yeahh', this.sellModel.state);
    }
    onFileSelected(event, formname) {
        // const image = event.target.files[0];
        this.form.append(formname, event.target.files[0], event.target.files[0].name);
        console.log(event.target.files[0]);
    }
    //  onFileSelected1(event, data) {
    //   // const image = event.target.files[0];
    //   console.log(event.target.files[0], event.target.files[0].name);
    //   this.form.append('plan', event.target.files[0], event.target.files[0].name);
    //  }
    onSubmit() {
        this.mykey = 'Token ' + localStorage.getItem('apikey');
        // console.log(this.sellModel, 'submitted', form);
        for (const [key, value] of Object.entries(this.sellModel)) {
            if (key.includes('image') || key.includes('plan') || key.includes('image1') ||
                key.includes('image2') || key.includes('image3') || key.includes('image4') ||
                key.includes('image5') || key.includes('image6') || key.includes('image7') ||
                key.includes('image8') || key.includes('image9') || key.includes('image10') ||
                key.includes('image11') || key.includes('image12') || key.includes('image3') ||
                key.includes('image14') || key.includes('image15') || key.includes('image16') ||
                key.includes('image17') || key.includes('image18')) {
                //   if (value !== null || value !== '') {
                //   this.form.append('image', key, value);
                //   console.log('yeah its a file');
                // }
            }
            else {
                this.form.append(key, value);
            }
            console.log(key, value, 'yeah');
        }
        console.log(this.form, 'formmm');
        this.http.post('https://anandrathi.pythonanywhere.com/indexapi/postercreate/', this.form, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ Authorization: this.mykey }) }).subscribe(data => {
            // this.apikey = data.key;
            console.log('Success!');
            this.router.navigate(['/mypost']);
        }, 
        // tslint:disable-next-line: no-string-literal
        error => console.log('oops', error.error)
        // erro => console.error('Error', error)
        );
        // this.api.sell(this.sellModel).subscribe(
        //   data => {
        //     localStorage.setItem('apikey', data.key);
        //     const key = localStorage.getItem('apikey');
        //     // this.apikey = data.key;
        //     console.log('Success!', 'logged in', key);
        //     this.router.navigate(['/']);
        //   },
        //   // tslint:disable-next-line: no-string-literal
        //   error => console.log('oops', error.error)
        //         // erro => console.error('Error', error)
        // );
    }
    ngOnInit() {
    }
};
SellComponent.ctorParameters = () => [
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
SellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sell',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sell.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sell/sell.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sell.component.css */ "./src/app/sell/sell.component.css")).default]
    })
], SellComponent);



/***/ }),

/***/ "./src/app/service/apiservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/apiservice.service.ts ***!
  \***********************************************/
/*! exports provided: ApiserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiserviceService", function() { return ApiserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _class_sell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/sell */ "./src/app/class/sell.ts");




let ApiserviceService = class ApiserviceService {
    constructor(http) {
        this.http = http;
        this.socialLoginUrl = 'https://anandrathi.pythonanywhere.com/accountapi/rest-auth/facebook/';
        this.mypostUrl = 'https://anandrathi.pythonanywhere.com/indexapi/myposterlistapi/';
        this.signupUrl = 'https://anandrathi.pythonanywhere.com/accountapi/usercreate/';
        this.signinUrl = 'https://anandrathi.pythonanywhere.com/rest-auth/login/';
        this.sellUrl = 'https://anandrathi.pythonanywhere.com/indexapi/postercreate/';
        this.bedmin = 0;
        this.bedmax = 100;
        this.name = 'DARWIN-NT_PARAP-NT_BARTON-ACT';
        this.propertytype = 'any';
        this.posterIdUser = '';
        this.countryDetailsUrl = 'https://anandrathi.pythonanywhere.com/adminapi/countrylistapi/';
        // filterUrl = 'http://anandrathi.pythonanywhere.com/indexapi/posterlistapi/';
        this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
        this.detailUrl = 'https://anandrathi.pythonanywhere.com/indexapi/detail?id=' + this.posterIdUser;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.apikey = '';
    }
    signup(user) {
        return this.http.post(this.signupUrl, user);
    }
    socialSignIn(socialmodel) {
        return this.http.post(this.socialLoginUrl, socialmodel);
    }
    signin(login) {
        return this.http.post(this.signinUrl, login);
    }
    mypost() {
        const key = localStorage.getItem('apikey');
        this.apikey = key;
        console.log('keyyyy', this.apikey);
        return this.http.get(this.mypostUrl, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Token ' + this.apikey }) });
    }
    sell(sell) {
        const key = localStorage.getItem('apikey');
        this.apikey = key;
        console.log('keyy', _class_sell__WEBPACK_IMPORTED_MODULE_3__["Sell"]);
        return this.http.post(this.sellUrl, sell, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: 'Token b9c43a76d8e68e995decb6f7e80546cf475fe844' }) });
    }
    getcountryDetails() {
        return this.http.get(this.countryDetailsUrl, { headers: this.httpHeaders });
    }
    // this function is used to filter state to post
    getcountryDetails2(state) {
        return this.http.get('https://anandrathi.pythonanywhere.com/adminapi/countrylistapi/?state=' + state, { headers: this.httpHeaders });
    }
    getfilterDetails(datas) {
        const name = datas.name.trim().replace(';', '_').replace(' ', '');
        if (name === '') {
            this.name = 'Any';
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('its any');
        }
        else {
            this.name = name;
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('it has data', name);
        }
        if (datas.propertytype === '') {
            this.propertytype = 'Any';
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('its no property');
        }
        else {
            this.propertytype = datas.propertytype.replace('&', '-').replace(/ /g, '%');
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('it has property', this.propertytype, typeof (this.propertytype));
        }
        // this.filterUrl = this.filterUrl + '?name=' + name;
        // bedmin
        if (datas.bedmin === '') {
            this.bedmin = 0;
        }
        else if (datas.bedmin === 'Studio') {
            this.bedmin = 0;
            console.log('studio', this.bedmin);
        }
        else if (datas.bedmin === 'Any') {
            this.bedmin = 0;
            console.log('studio', this.bedmin);
        }
        else {
            this.bedmin = datas.bedmin;
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('no naa', datas.bedmin, this.bedmin);
        }
        // bedmax
        if (datas.bedmax === '') {
            this.bedmax = 100;
        }
        else if (datas.bedmax === 'Studio') {
            this.bedmax = 100;
            console.log('studiobedmax', this.bedmax);
        }
        else if (datas.bedmax === 'Any') {
            this.bedmax = 100;
            console.log('studiobedmax', this.bedmax);
        }
        else {
            this.bedmax = datas.bedmax;
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('no naa', datas.bedmin, this.bedmin);
        }
        // pricemin
        if (datas.pricemin === '') {
            this.pricemin = 0;
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
        }
        else if (datas.pricemin === 'Any') {
            this.pricemin = 0;
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('priceany', this.pricemin);
        }
        else {
            this.pricemin = datas.pricemin.trim().substring(1).replace(',', '');
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('no naapricemin', datas.pricemin, this.pricemin);
        }
        // pricemax
        if (datas.pricemax === '') {
            this.pricemax = 1000000000000000;
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
        }
        else if (datas.pricemax === 'Any') {
            this.pricemax = 1000000000000000;
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('priceany', this.pricemax);
        }
        else {
            this.pricemax = datas.pricemax.trim().substring(1).replace(',', '');
            this.filterUrl = 'https://anandrathi.pythonanywhere.com/indexapi/posterlistapi/?pricemin=' + this.pricemin + '&name=' + this.name + '&pricemax=' + this.pricemax + '&bedmin=' + this.bedmin + '&bedmax=' + this.bedmax + '&propertytype=' + this.propertytype;
            console.log('pricemaxpricemax', datas.pricemax, this.pricemax);
        }
        //console.log('filterurl', this.filterUrl, this.bedmax, this.pricemin, this.pricemax);
        localStorage.setItem('searchparams', this.filterUrl);
        console.log('these ate the data', datas.propertytype, datas, 'yeahh', this.filterUrl, 'Ive set it ooh');
        return this.http.get(this.filterUrl, { headers: this.httpHeaders });
    }
    getposterDetails(id) {
        this.detailUrl = 'https://anandrathi.pythonanywhere.com/indexapi/detail?id=' + id;
        return this.http.get(this.detailUrl, { headers: this.httpHeaders });
    }
    getmapSearch(url) {
        return this.http.get(url, { headers: this.httpHeaders });
    }
};
ApiserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiserviceService);



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/apiservice.service */ "./src/app/service/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _class_signin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../class/signin */ "./src/app/class/signin.ts");





let SigninComponent = class SigninComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.signInModel = new _class_signin__WEBPACK_IMPORTED_MODULE_4__["Signin"]('', '');
    }
    onSubmit() {
        this.api.signin(this.signInModel).subscribe(data => {
            localStorage.setItem('apikey', data.key);
            const key = localStorage.getItem('apikey');
            // this.apikey = data.key;
            console.log('Success!', 'logged in', key);
            this.router.navigate(['/']);
        }, 
        // tslint:disable-next-line: no-string-literal
        error => console.log('oops', error.error)
        // erro => console.error('Error', error)
        );
    }
    ngOnInit() {
    }
};
SigninComponent.ctorParameters = () => [
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")).default]
    })
], SigninComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _class_signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/signup */ "./src/app/class/signup.ts");
/* harmony import */ var _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/apiservice.service */ "./src/app/service/apiservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignupComponent = class SignupComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.signUpModel = new _class_signup__WEBPACK_IMPORTED_MODULE_2__["Signup"]('', '', '');
        this.onSubmit = () => {
            console.log(this.signUpModel);
            this.api.signup(this.signUpModel).subscribe(data => console.log('Success!', this.router.navigate(['/signin'])), 
            // tslint:disable-next-line: no-string-literal
            error => console.log('oops', error.error)
            // erro => console.error('Error', error)
            );
        };
    }
    ngOnInit() {
    }
};
SignupComponent.ctorParameters = () => [
    { type: _service_apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BUDESCODE\Documents\coding\projects\real estate\Angular\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map