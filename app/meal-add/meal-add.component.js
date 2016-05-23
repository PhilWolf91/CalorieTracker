System.register(['angular2/core', 'angular2/router', '../food-list/food-list.component', '../services/localStorage.service'], function(exports_1, context_1) {
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
    var core_1, router_1, food_list_component_1, localStorage_service_1;
    var MealAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (food_list_component_1_1) {
                food_list_component_1 = food_list_component_1_1;
            },
            function (localStorage_service_1_1) {
                localStorage_service_1 = localStorage_service_1_1;
            }],
        execute: function() {
            MealAddComponent = (function () {
                function MealAddComponent(_router, _routeParams, _storage) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._storage = _storage;
                    this.showNoFoodsWarning = true;
                    this.showAddFoodPane = false;
                    this.mealDayId = Number.parseInt(_routeParams.get('mealDayId'));
                    this.setCurrentMealDayMealId();
                    console.log("Current MealDayMealId: " + this.mealDayMealId);
                }
                MealAddComponent.prototype.setCurrentMealDayMealId = function () {
                    var totalMeals = this._storage.GetMealsForAMealDayId(this.mealDayId);
                    if (totalMeals.length) {
                        this.mealDayMealId = totalMeals.length + 1;
                    }
                    else {
                        this.mealDayMealId = 1;
                    }
                };
                MealAddComponent.prototype.addMeal = function () {
                    this._router.navigate(['MealDayMeals', { mealDayId: this.mealDayId }]);
                };
                MealAddComponent.prototype.toggleAddFoodPane = function () {
                    this.showAddFoodPane = false ? true : false;
                };
                MealAddComponent = __decorate([
                    core_1.Component({
                        selector: 'ctw-meal-add',
                        templateUrl: 'app/meal-add/meal-add.component.html',
                        directives: [food_list_component_1.FoodListComponent],
                        providers: [localStorage_service_1.LocalStorageService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, localStorage_service_1.LocalStorageService])
                ], MealAddComponent);
                return MealAddComponent;
            }());
            exports_1("MealAddComponent", MealAddComponent);
        }
    }
});
//# sourceMappingURL=meal-add.component.js.map