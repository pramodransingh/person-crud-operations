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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Person Demo</span>\n</mat-toolbar>\n\n<div class=\"container mat-elevation-z8\">\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" >{{row.id}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"first_name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.first_name}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"last_name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.last_name}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"age\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Age</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.age}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"favourite_color\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Favourite Color</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.favourite_color}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"hobby\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Hobby</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.hobby}}</mat-cell>\n    </ng-container>\n\n    <!-- actions -->\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef>\n        <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n        </button>\n      </mat-header-cell>\n\n      <mat-cell *matCellDef=\"let row; let i=index;\">\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(i, row.id, row.first_name, row.last_name, row.age, row.favourite_color, row.hobby)\">\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(i, row.id)\">\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/persons/add/add.person.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/persons/add/add.person.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Add Person</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"First Name\" [(ngModel)]=\"data.first_name\" name=\"first_name\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"data.last_name\" name=\"last_name\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Age\" [(ngModel)]=\"data.age\" name=\"age\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Favourite Color\" [(ngModel)]=\"data.favourite_color\" name=\"favourite_color\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Hobby\" [(ngModel)]=\"data.hobby\" name=\"hobby\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n\n\n    <div mat-dialog-actions>\n      <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"confirmAdd()\">Save</button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/persons/delete/delete.person.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/persons/delete/delete.person.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Are you sure?</h3>\n\n  <div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"1\" (click)=\"confirmDelete()\">Delete</button>\n    <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/persons/edit/edit.person.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/persons/edit/edit.person.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Edit Person: {{data.id}}</h3>\n\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"First Name\" [(ngModel)]=\"data.first_name\" name=\"first_name\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"data.last_name\" name=\"last_name\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Age\" [(ngModel)]=\"data.age\" name=\"age\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Favourite Color\" [(ngModel)]=\"data.favourite_color\" name=\"favourite_color\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"form\">\n      <mat-form-field color=\"accent\">\n        <textarea matInput #input class=\"form-control\" placeholder=\"Hobby\" [(ngModel)]=\"data.hobby\" name=\"hobby\" required ></textarea>\n        <mat-error *ngIf=\"formControl.invalid\">{{getErrorMessage()}}</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div mat-dialog-actions>\n      <button mat-button [type]=\"submit\" [disabled]=\"!formControl.valid\" [mat-dialog-close]=\"1\" (click)=\"stopEdit()\">Save</button>\n      <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.container {\n  display: flex;\n  flex-direction: column;\n}\n.spacer {\n  flex: 1 1 auto;\n}\n.mat-form-field {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px;\n}\n.mat-cell:nth-child(1),\n.mat-header-cell:nth-child(1){\n  flex: 0 0 6%;\n}\n.mat-cell:nth-child(2),\n.mat-header-cell:nth-child(2){\n  flex: 0 0 20%;\n}\n.mat-cell:nth-child(3),\n.mat-header-cell:nth-child(3){\n  flex: 0 0 10%;\n}\n.mat-cell:nth-child(7),\n.mat-header-cell:nth-child(7){\n  flex: 0 0 7%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7O0VBRUUsWUFBWTtBQUNkO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsYUFBYTtBQUNmO0FBRUE7O0VBRUUsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDEpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMSl7XG4gIGZsZXg6IDAgMCA2JTtcbn1cblxuLm1hdC1jZWxsOm50aC1jaGlsZCgyKSxcbi5tYXQtaGVhZGVyLWNlbGw6bnRoLWNoaWxkKDIpe1xuICBmbGV4OiAwIDAgMjAlO1xufVxuXG4ubWF0LWNlbGw6bnRoLWNoaWxkKDMpLFxuLm1hdC1oZWFkZXItY2VsbDpudGgtY2hpbGQoMyl7XG4gIGZsZXg6IDAgMCAxMCU7XG59XG5cbi5tYXQtY2VsbDpudGgtY2hpbGQoNyksXG4ubWF0LWhlYWRlci1jZWxsOm50aC1jaGlsZCg3KXtcbiAgZmxleDogMCAwIDclO1xufVxuIl19 */"

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
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _persons_add_add_person_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./persons/add/add.person.component */ "./src/app/persons/add/add.person.component.ts");
/* harmony import */ var _persons_edit_edit_person_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./persons/edit/edit.person.component */ "./src/app/persons/edit/edit.person.component.ts");
/* harmony import */ var _persons_delete_delete_person_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./persons/delete/delete.person.component */ "./src/app/persons/delete/delete.person.component.ts");










let AppComponent = class AppComponent {
    constructor(httpClient, dialog, personService) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.personService = personService;
        this.displayedColumns = ['id', 'first_name', 'last_name', 'age', 'favourite_color', 'hobby', 'actions'];
    }
    ngOnInit() {
        this.loadData();
    }
    refresh() {
        this.loadData();
    }
    addNew(person) {
        const dialogRef = this.dialog.open(_persons_add_add_person_component__WEBPACK_IMPORTED_MODULE_7__["AddPersonComponent"], {
            data: { person: person }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                this.loadData();
            }
        });
    }
    startEdit(i, id, first_name, last_name, age, favourite_color, hobby) {
        this.id = id;
        this.index = i;
        console.log(this.index);
        const dialogRef = this.dialog.open(_persons_edit_edit_person_component__WEBPACK_IMPORTED_MODULE_8__["EditPersonComponent"], {
            data: { id: id, first_name: first_name, last_name: last_name, age: age, favourite_color: favourite_color, hobby: hobby }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
                this.loadData();
            }
        });
    }
    deleteItem(i, id) {
        this.index = i;
        this.id = id;
        const dialogRef = this.dialog.open(_persons_delete_delete_person_component__WEBPACK_IMPORTED_MODULE_9__["DeletePersonComponent"], {
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
                this.loadData();
            }
        });
    }
    loadData() {
        this.exampleDatabase = new _services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"](this.httpClient);
        this.exampleDatabase.getAllPersons().subscribe((data) => {
            console.log("data: " + data);
            this.dataSource = data;
        });
        //this.dataSource = [{"id":1,"first_name":"John","last_name":"Smith","age":29,"favourite_color":"red","hobby":["shopping","football"]},{"id":2,"first_name":"Sarah","last_name":"Connor","age":54,"favourite_color":"blue","hobby":["chess"]}];
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], AppComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"], { static: true })
], AppComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filter', { static: true })
], AppComponent.prototype, "filter", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _persons_edit_edit_person_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persons/edit/edit.person.component */ "./src/app/persons/edit/edit.person.component.ts");
/* harmony import */ var _persons_delete_delete_person_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./persons/delete/delete.person.component */ "./src/app/persons/delete/delete.person.component.ts");
/* harmony import */ var _persons_add_add_person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persons/add/add.person.component */ "./src/app/persons/add/add.person.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _persons_add_add_person_component__WEBPACK_IMPORTED_MODULE_3__["AddPersonComponent"],
            _persons_edit_edit_person_component__WEBPACK_IMPORTED_MODULE_1__["EditPersonComponent"],
            _persons_delete_delete_person_component__WEBPACK_IMPORTED_MODULE_2__["DeletePersonComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"]
        ],
        entryComponents: [
            _persons_add_add_person_component__WEBPACK_IMPORTED_MODULE_3__["AddPersonComponent"],
            _persons_edit_edit_person_component__WEBPACK_IMPORTED_MODULE_1__["EditPersonComponent"],
            _persons_delete_delete_person_component__WEBPACK_IMPORTED_MODULE_2__["DeletePersonComponent"]
        ],
        providers: [
            _services_person_service__WEBPACK_IMPORTED_MODULE_16__["PersonService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/models/person.ts":
/*!**********************************!*\
  !*** ./src/app/models/person.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Person; });
class Person {
}


/***/ }),

/***/ "./src/app/persons/add/add.person.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/persons/add/add.person.component.ts ***!
  \*****************************************************/
/*! exports provided: AddPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonComponent", function() { return AddPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/person */ "./src/app/models/person.ts");






let AddPersonComponent = class AddPersonComponent {
    constructor(dialogRef, data, personService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.personService = personService;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
        ]);
    }
    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' : '';
    }
    submit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.personService.addPerson(this.data);
    }
};
AddPersonComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: src_app_models_person__WEBPACK_IMPORTED_MODULE_5__["default"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _services_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"] }
];
AddPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add.person',
        template: __webpack_require__(/*! raw-loader!../../persons/add/add.person.html */ "./node_modules/raw-loader/index.js!./src/app/persons/add/add.person.html"),
        styles: [__webpack_require__(/*! ../../persons/add/add.person.css */ "./src/app/persons/add/add.person.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))
], AddPersonComponent);



/***/ }),

/***/ "./src/app/persons/add/add.person.css":
/*!********************************************!*\
  !*** ./src/app/persons/add/add.person.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29ucy9hZGQvYWRkLnBlcnNvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcGVyc29ucy9hZGQvYWRkLnBlcnNvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiA0NTBweDtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/persons/delete/delete.person.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/persons/delete/delete.person.component.ts ***!
  \***********************************************************/
/*! exports provided: DeletePersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePersonComponent", function() { return DeletePersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");




let DeletePersonComponent = class DeletePersonComponent {
    constructor(dialogRef, data, personService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.personService = personService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.personService.deletePerson(this.data.id);
    }
};
DeletePersonComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _services_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"] }
];
DeletePersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-delete.person',
        template: __webpack_require__(/*! raw-loader!../../persons/delete/delete.person.html */ "./node_modules/raw-loader/index.js!./src/app/persons/delete/delete.person.html"),
        styles: [__webpack_require__(/*! ../../persons/delete/delete.person.css */ "./src/app/persons/delete/delete.person.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))
], DeletePersonComponent);



/***/ }),

/***/ "./src/app/persons/delete/delete.person.css":
/*!**************************************************!*\
  !*** ./src/app/persons/delete/delete.person.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n}\n\n.container > * {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29ucy9kZWxldGUvZGVsZXRlLnBlcnNvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGVyc29ucy9kZWxldGUvZGVsZXRlLnBlcnNvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/persons/edit/edit.person.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/persons/edit/edit.person.component.ts ***!
  \*******************************************************/
/*! exports provided: EditPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPersonComponent", function() { return EditPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let EditPersonComponent = class EditPersonComponent {
    constructor(dialogRef, data, personService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.personService = personService;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
        ]);
    }
    getErrorMessage() {
        return this.formControl.hasError('required') ? 'Required field' :
            '';
    }
    submit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
    stopEdit() {
        this.personService.updatePerson(this.data);
    }
};
EditPersonComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _services_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"] }
];
EditPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit.persons',
        template: __webpack_require__(/*! raw-loader!../../persons/edit/edit.person.html */ "./node_modules/raw-loader/index.js!./src/app/persons/edit/edit.person.html"),
        styles: [__webpack_require__(/*! ../../persons/edit/edit.person.css */ "./src/app/persons/edit/edit.person.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]))
], EditPersonComponent);



/***/ }),

/***/ "./src/app/persons/edit/edit.person.css":
/*!**********************************************!*\
  !*** ./src/app/persons/edit/edit.person.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  min-width: 450px;\n}\n\n.container > * {\n  width: 100%;\n}\n\n.form {\n  display: flex;\n  padding-top: 6px;\n}\n\n.mat-form-field {\n  font-size: 16px;\n  flex-grow: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29ucy9lZGl0L2VkaXQucGVyc29uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wZXJzb25zL2VkaXQvZWRpdC5wZXJzb24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi5jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/services/person.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/person.service.ts ***!
  \********************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let PersonService = class PersonService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'http://localhost:8080/fire/rest/api';
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.parsedPerson = null;
    }
    get data() {
        return this.dataChange.value;
    }
    getpersonData() {
        return this.personData;
    }
    /** CRUD METHODS */
    getAllPersons() {
        return this.httpClient.get(this.API_URL + "/persons");
    }
    addPerson(person) {
        person.hobby = person.hobby.toString().split(',');
        this.httpClient.post(this.API_URL + "/person", person).subscribe(data => {
            this.personData = person;
        }, (err) => {
        });
    }
    updatePerson(person) {
        person.hobby = person.hobby.toString().split(',');
        this.httpClient.post(this.API_URL + "/person/" + person.id, person).subscribe(data => {
            this.personData = person;
        }, (err) => {
        });
    }
    deletePerson(id) {
        console.log(id);
        this.httpClient.delete(this.API_URL + "/person/" + id).subscribe((err) => {
        });
    }
};
PersonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PersonService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FIRE\fire-poc-ui-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map