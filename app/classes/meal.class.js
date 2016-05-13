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
                        if (food.calories != undefined) {
                            totalCalories += food.calories;
                        }
                    });
                    return 1;
                };
                return Meal;
            }());
            exports_1("Meal", Meal);
        }
    }
});
//# sourceMappingURL=meal.class.js.map