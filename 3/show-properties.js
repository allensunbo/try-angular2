if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var Test = require('./friends-service');
var DisplayComponent = (function () {
    function DisplayComponent(friendsService) {
        this.myName = "Alice";
        this.names = friendsService.names;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display',
            appInjector: [Test.FriendsService]
        }),
        angular2_1.View({
            template: "\n  \t<p>My name: {{ myName }}</p>\n  \t<p>Friends:</p>\n  \t<ul>\n     \t<li *ng-for=\"#name of names\">\n        \t{{ name }}\n     \t</li>\n  \t</ul>\n  ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [Test.FriendsService])
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);
