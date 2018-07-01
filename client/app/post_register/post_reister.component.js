"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var PostRegisterComponent = /** @class */ (function () {
    function PostRegisterComponent(userService) {
        this.userService = userService;
        this.noFirstAttempt = 0;
        this.noRepeatAttempt = 0;
        this.showM = 0;
        this.selectedFirstAttempt = [];
        this.selectedRepeatAttempt = [];
        this.subjects1stYear = ["SCS1001", "SCS1002", "SCS1003",];
        this.subjects2ndYear = ["SCS2001", "SCS2002", "SCS2003",];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser.email);
        this.viewFirstAttempt = true;
        this.viewRepeatAttempt = true;
    }
    PostRegisterComponent.prototype.checkboxCheck = function (event, year) {
        this.showSubjectList = true;
        if (event.isTrusted && year == 1) {
            this.year = year;
            console.log(event);
        }
        else {
            this.year = year;
            console.log(event);
        }
    };
    PostRegisterComponent.prototype.loadSubjects = function () {
        if (this.year == 1) {
            return this.subjects1stYear;
        }
        else {
            return this.subjects2ndYear;
        }
    };
    PostRegisterComponent.prototype.selectFirstAttemptSubject = function (event, subject) {
        console.log(event.target.checked);
        if (event.target.checked) {
            this.selectedFirstAttempt.push(subject);
            this.showM++;
        }
        else {
            this.selectedFirstAttempt.splice(this.selectedFirstAttempt.indexOf(subject), 1);
            this.showM--;
        }
        console.log(this.selectedFirstAttempt.length);
        this.noFirstAttempt = this.selectedFirstAttempt.length;
    };
    PostRegisterComponent.prototype.selectRepeatAttemptSubject = function (event, subject) {
        if (event.target.checked) {
            this.selectedRepeatAttempt.push(subject);
            this.showM++;
        }
        else {
            this.selectedRepeatAttempt.splice(this.selectedRepeatAttempt.indexOf(subject), 1);
            this.showM--;
        }
        console.log(this.selectedRepeatAttempt.length);
        this.noRepeatAttempt = this.selectedRepeatAttempt.length;
    };
    PostRegisterComponent.prototype.toggleFirstAttempt = function () {
        this.showFirstAttempt = "active";
        this.showRepeatAttempt = null;
        this.viewFirstAttempt = false;
        this.viewRepeatAttempt = true;
    };
    PostRegisterComponent.prototype.toggleRepeatAttempt = function () {
        this.showFirstAttempt = null;
        this.showRepeatAttempt = "active";
        this.viewFirstAttempt = true;
        this.viewRepeatAttempt = false;
    };
    PostRegisterComponent.prototype.showModal = function () {
        if (this.noFirstAttempt == 0 || this.noRepeatAttempt == 0) {
            //this.showM = ".bs-example-modal-sm";
        }
        else {
            //this.showM = "#myModal";
        }
        console.log(this.showM);
    };
    PostRegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'postregister',
            templateUrl: './post_register.component.html'
        }),
        __metadata("design:paramtypes", [index_1.UserService])
    ], PostRegisterComponent);
    return PostRegisterComponent;
}());
exports.PostRegisterComponent = PostRegisterComponent;
//# sourceMappingURL=post_reister.component.js.map