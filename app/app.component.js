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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.state = "stop";
    };
    AppComponent.prototype.onClick = function () {
        this.state = this.state === "play" ? "stop" : "play";
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            animations: [
                core_1.trigger('buttonState', [
                    core_1.state('play', core_1.style({
                        "background-image": 'url("/images/play.svg")',
                        transform: 'scale(1.1)'
                    })),
                    core_1.state('stop', core_1.style({
                        "background-image": 'url("/images/stop.svg")',
                        transform: 'scale(1)'
                    })),
                    core_1.transition('play => stop', core_1.animate('100ms ease-in')),
                    core_1.transition('stop => play', core_1.animate('100ms ease-out'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map