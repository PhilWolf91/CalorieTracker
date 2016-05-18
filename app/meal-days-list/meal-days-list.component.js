System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var MealDaysListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MealDaysListComponent = (function () {
                function MealDaysListComponent(_router) {
                    var _this = this;
                    this._router = _router;
                    this.showNoMealDaysWarning = true;
                    this.mealDays = new Array();
                    this.storage = window.localStorage;
                    // var mealDay: MealDay = JSON.parse(this.storage.getItem('mealDays'));
                    // this.mealDays.push(mealDay);
                    // var mealDaysInStorage = JSON.parse(this.storage.getItem('mealDays'));
                    var mealDays = JSON.parse(this.storage.getItem('mealDays'));
                    console.log(mealDays);
                    if (mealDays != undefined) {
                        mealDays.forEach(function (meal) {
                            _this.mealDays.push(meal);
                        });
                    }
                    if (this.mealDays.length) {
                        this.showNoMealDaysWarning = false;
                    }
                }
                MealDaysListComponent.prototype.goToAddMealDay = function () {
                    this._router.navigate(['MealDayAdd']);
                };
                MealDaysListComponent.prototype.goToEditMeals = function (mealDay) {
                    this._router.navigate(['MealDayMeals', { mealDayId: mealDay.mealDayId }]);
                };
                MealDaysListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/meal-days-list/meal-days-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], MealDaysListComponent);
                return MealDaysListComponent;
            }());
            exports_1("MealDaysListComponent", MealDaysListComponent);
        }
    }
});
//# sourceMappingURL=meal-days-list.component.js.map