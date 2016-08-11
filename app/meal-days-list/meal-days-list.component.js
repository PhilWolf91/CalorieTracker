System.register(['angular2/core', 'angular2/router', '../classes/macros.class', '../services/localStorage.service'], function(exports_1, context_1) {
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
    var core_1, router_1, macros_class_1, localStorage_service_1;
    var MealDaysListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (macros_class_1_1) {
                macros_class_1 = macros_class_1_1;
            },
            function (localStorage_service_1_1) {
                localStorage_service_1 = localStorage_service_1_1;
            }],
        execute: function() {
            MealDaysListComponent = (function () {
                function MealDaysListComponent(_router, _storage) {
                    var _this = this;
                    this._router = _router;
                    this._storage = _storage;
                    this.showNoMealDaysWarning = true;
                    this.mealDays = new Array();
                    this.storage = window.localStorage;
                    var mealDays = JSON.parse(this.storage.getItem('mealDays'));
                    this.getTotalMacrosForAMealDay(mealDays[0].mealDayId);
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
                MealDaysListComponent.prototype.getTotalMacrosForAMealDay = function (mealDayId) {
                    var _this = this;
                    var totalMacros = new macros_class_1.Macros();
                    totalMacros.calories = 0;
                    totalMacros.carbohydrates = 0;
                    totalMacros.fat = 0;
                    totalMacros.protein = 0;
                    var mealDayMeals = this._storage.GetMealsForAMealDayId(mealDayId);
                    var foodsForAMealDay = new Array();
                    if (mealDayMeals) {
                        mealDayMeals.forEach(function (mealDayMeal) {
                            var foodsForCurrentMealDayMeal = _this._storage.GetFoodForAMeal(mealDayMeal.mealId, mealDayMeal.mealDayId);
                            if (mealDayMeals.length > 0) {
                                var mealDayForEachCounter = 1;
                                mealDayMeals.forEach(function (meal) {
                                    console.log("mealDayMeals forEach: mealDayForEachCounter");
                                    console.log(meal);
                                    var foodsForCurrentMealDayMeal = _this._storage.GetFoodForAMeal(mealDayMeal.mealId, mealDayMeal.mealDayId);
                                    if (foodsForCurrentMealDayMeal.length > 0) {
                                        foodsForCurrentMealDayMeal.forEach(function (food) {
                                            foodsForAMealDay.push(food);
                                        });
                                    }
                                });
                            }
                        });
                    }
                    if (foodsForAMealDay.length > 0) {
                        foodsForAMealDay.forEach(function (food) {
                            console.log(food);
                            if (food.macros.calories) {
                                totalMacros.calories += food.macros.calories;
                            }
                            if (food.macros.carbohydrates) {
                                totalMacros.calories += food.macros.carbohydrates;
                            }
                            if (food.macros.fat) {
                            }
                            totalMacros.fat += food.macros.fat;
                            totalMacros.protein += food.macros.protein;
                        });
                    }
                    console.log("These are the total macros for MealDayId: " + mealDayId);
                    console.log(totalMacros);
                };
                MealDaysListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/meal-days-list/meal-days-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, localStorage_service_1.LocalStorageService])
                ], MealDaysListComponent);
                return MealDaysListComponent;
            }());
            exports_1("MealDaysListComponent", MealDaysListComponent);
        }
    }
});
//# sourceMappingURL=meal-days-list.component.js.map