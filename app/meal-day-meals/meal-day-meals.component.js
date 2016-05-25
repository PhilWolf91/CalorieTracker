System.register(['angular2/core', 'angular2/router', '../services/localStorage.service'], function(exports_1, context_1) {
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
    var core_1, router_1, localStorage_service_1;
    var MealDayMealsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (localStorage_service_1_1) {
                localStorage_service_1 = localStorage_service_1_1;
            }],
        execute: function() {
            MealDayMealsComponent = (function () {
                function MealDayMealsComponent(_router, _routeParams, _storage) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._storage = _storage;
                    this.showNoMealsWarning = true;
                    this.meals = new Array();
                    this.storage = window.localStorage;
                    this.mealDayId = Number.parseInt(this._routeParams.get('mealDayId'));
                }
                MealDayMealsComponent.prototype.ngOnInit = function () {
                    console.log("MealDayMeals Component- mealDayId: " + this.mealDayId);
                    this.meals = this._storage.GetMealsForAMealDayId(this.mealDayId);
                    console.log("MealDayMeals meals");
                    console.log(this.meals);
                    if (this.meals.length) {
                        this.showNoMealsWarning = false;
                    }
                };
                MealDayMealsComponent.prototype.addNewMeal = function () {
                    this._router.navigate(['MealAdd', { mealDayId: this.mealDayId }]);
                };
                MealDayMealsComponent = __decorate([
                    core_1.Component({
                        selector: 'ctw-meal-day-meals',
                        templateUrl: 'app/meal-day-meals/meal-day-meals.component.html',
                        inputs: ['mealDayId']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, localStorage_service_1.LocalStorageService])
                ], MealDayMealsComponent);
                return MealDayMealsComponent;
            }());
            exports_1("MealDayMealsComponent", MealDayMealsComponent);
        }
    }
});
//# sourceMappingURL=meal-day-meals.component.js.map