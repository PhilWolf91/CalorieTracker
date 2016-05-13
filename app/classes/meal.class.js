System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Meal;
    return {
        setters:[],
        execute: function() {
            Meal = (function () {
                function Meal() {
                }
                Meal.prototype.calories = function () {
                    var totalCalories = 0;
                    this.foods.forEach(function (food) {
                        if (food.macros.calories != undefined) {
                            totalCalories += food.macros.calories;
                        }
                    });
                    return totalCalories;
                };
                Meal.prototype.carbohydrates = function () {
                    var totalCarbohydrates = 0;
                    this.foods.forEach(function (food) {
                        if (food.macros.carbohydrates != undefined) {
                            totalCarbohydrates += food.macros.carbohydrates;
                        }
                    });
                    return totalCarbohydrates;
                };
                Meal.prototype.protein = function () {
                    var totalProtein = 0;
                    this.foods.forEach(function (food) {
                        if (food.macros.protein != undefined) {
                            totalProtein += food.macros.protein;
                        }
                    });
                    return totalProtein;
                };
                Meal.prototype.fat = function () {
                    var totalFats = 0;
                    this.foods.forEach(function (food) {
                        if (food.macros.fat != undefined) {
                            totalFats += food.macros.fat;
                        }
                    });
                    return totalFats;
                };
                return Meal;
            }());
            exports_1("Meal", Meal);
        }
    }
});
//# sourceMappingURL=meal.class.js.map