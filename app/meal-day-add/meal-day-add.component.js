System.register(['angular2/core', '../classes/mealDay.class', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, mealDay_class_1, router_1;
    var MealDayAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mealDay_class_1_1) {
                mealDay_class_1 = mealDay_class_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MealDayAddComponent = (function () {
                function MealDayAddComponent(_router) {
                    this._router = _router;
                    this.mealName = "";
                    this.protein = 0;
                    this.calories = 0;
                    this.carbohydrates = 0;
                    this.fats = 0;
                    this.mealDayToAdd = new mealDay_class_1.MealDay();
                    this.storage = window.localStorage;
                }
                MealDayAddComponent.prototype.AddNewMealDay = function () {
                    console.log(this.mealName + " " + this.protein + " " + this.calories.toString() + " " + this.protein + " " + this.carbohydrates + " " + this.fats);
                    this.mealDayToAdd.mealDayName = this.mealName;
                    this.mealDayToAdd.macros.calories = this.calories;
                    this.mealDayToAdd.macros.carbohydrates = this.carbohydrates;
                    this.mealDayToAdd.macros.fat = this.fats;
                    this.mealDayToAdd.macros.protein = this.protein;
                    var mealDaysInStorage = this.storage.getItem('mealDays');
                    if (mealDaysInStorage != undefined) {
                        var parsedMealDays = JSON.parse(mealDaysInStorage);
                        this.mealDayToAdd.mealDayId = parsedMealDays.length + 1;
                        parsedMealDays.push(this.mealDayToAdd);
                        this.storage.setItem('mealDays', JSON.stringify(parsedMealDays));
                    }
                    else {
                        var mealDays = [];
                        this.mealDayToAdd.mealDayId = 1;
                        mealDays.push(this.mealDayToAdd);
                        this.storage.setItem('mealDays', JSON.stringify(mealDays));
                    }
                    this._router.navigate(["MealDaysList"]);
                };
                MealDayAddComponent = __decorate([
                    core_1.Component({
                        selector: 'ctw-meal-day',
                        templateUrl: 'app/meal-day-add/meal-day-add.component.html',
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], MealDayAddComponent);
                return MealDayAddComponent;
            }());
            exports_1("MealDayAddComponent", MealDayAddComponent);
        }
    }
});
//# sourceMappingURL=meal-day-add.component.js.map