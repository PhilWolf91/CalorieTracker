System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LocalStorageService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LocalStorageService = (function () {
                function LocalStorageService() {
                    //stored as mealDayMeals:{mealDayId}
                    this.mealDayMealsKey = 'mealDayMeals';
                    this.mealDaysKey = 'mealDays';
                    this.foodsKey = 'foods';
                    this.savedFoodsKey = 'savedFoods';
                    this._localStorage = window.localStorage;
                }
                LocalStorageService.prototype.GetKey = function (key) {
                    return this._localStorage.getItem(key);
                };
                LocalStorageService.prototype.SetKey = function (key, value) {
                    var serializedValue = JSON.stringify(value);
                    this._localStorage.setItem(key, value);
                };
                //Meals
                LocalStorageService.prototype.GetMealsForAMealDayId = function (mealDayId) {
                    var mealDayMeals = new Array();
                    var key = this.mealDayMealsKey + ":" + mealDayId;
                    console.log("Key Used to Retrieve Meals: {mealDayMealsKey}:{mealDayId} " + key);
                    var mealDayMealsInStorage = this._localStorage.getItem(key);
                    if (mealDayMealsInStorage) {
                        mealDayMeals = JSON.parse(mealDayMealsInStorage);
                    }
                    return mealDayMeals;
                };
                LocalStorageService.prototype.SaveMealForAMealDay = function (meal, mealDayId) {
                    var mealSavedSuccessfully = true;
                    try {
                        var key = this.mealDayMealsKey + ":" + mealDayId;
                        console.log("Key Used to Store Meals: {mealsKey}:{mealDayId} " + key);
                        var mealsForAMealDayInStorage = this.GetKey(key);
                        var mealsForAMealDay = new Array();
                        if (mealsForAMealDayInStorage) {
                            mealsForAMealDay = JSON.parse(mealsForAMealDayInStorage);
                        }
                        meal.mealId = mealsForAMealDay.length + 1;
                        // meal.mealDayId = mealDayId;
                        mealsForAMealDay.push(meal);
                        this.SetKey(key, JSON.stringify(mealsForAMealDay));
                        console.log("Meal Stored:");
                        console.log(meal);
                    }
                    catch (exception) {
                        console.log(exception);
                        mealSavedSuccessfully = false;
                    }
                    return mealSavedSuccessfully;
                };
                //MealDays
                LocalStorageService.prototype.SaveMealDay = function (mealDay) {
                    var serializedMealDays = this.GetKey(this.mealDaysKey);
                    var mealDays = null;
                    if (this.mealDaysKey != undefined || null) {
                        mealDays = JSON.parse(serializedMealDays);
                    }
                    else {
                        mealDays = new Array();
                    }
                    mealDays.push(mealDay);
                    this.SetKey(this.mealDaysKey, JSON.stringify(mealDays));
                };
                LocalStorageService.prototype.GetMealDays = function () {
                    var mealDays = JSON.parse(this._localStorage.getItem('mealDays'));
                    return mealDays;
                };
                //Food
                LocalStorageService.prototype.SaveFoodForAMeal = function (food, mealId, mealDayId) {
                    try {
                        var foods = null;
                        var key = this.foodsKey + ":" + mealId + ":" + mealDayId;
                        var serializedFoods = this.GetKey(key);
                        console.log("SaveFoodForAMeal - Key used: " + key);
                        if (serializedFoods) {
                            foods = JSON.parse(serializedFoods);
                        }
                        else {
                            foods = new Array();
                        }
                        food.foodId = foods.length + 1;
                        food.mealId = mealId;
                        food.mealDayId = mealDayId;
                        foods.push(food);
                        console.log("Food was saved into the following array with the key " + key + ": ");
                        console.log(foods);
                        this.SetKey(key, JSON.stringify(foods));
                        return true;
                    }
                    catch (exception) {
                        return false;
                    }
                };
                LocalStorageService.prototype.GetFoodForAMeal = function (mealId, mealDayId) {
                    var food = new Array();
                    var key = this.foodsKey + ":" + mealId + ":" + mealDayId;
                    var foodInStorage = this.GetKey(key);
                    if (foodInStorage) {
                        food = JSON.parse(foodInStorage);
                    }
                    return food;
                };
                LocalStorageService.prototype.SaveFoodPermanently = function (food) {
                    var foodsFromStorage = this._localStorage.getItem('savedFoods');
                    var foods = JSON.parse(foodsFromStorage);
                    if (foods != undefined) {
                        foods.push(food);
                        this._localStorage.setItem('savedFoods', JSON.stringify(foods));
                    }
                    else {
                        foods = new Array();
                        foods.push(food);
                    }
                    this._localStorage.setItem('savedFoods', JSON.stringify(foods));
                };
                LocalStorageService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LocalStorageService);
                return LocalStorageService;
            }());
            exports_1("LocalStorageService", LocalStorageService);
        }
    }
});
//# sourceMappingURL=localStorage.service.js.map