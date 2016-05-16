System.register(['./macros.class'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var macros_class_1;
    var MealDay;
    return {
        setters:[
            function (macros_class_1_1) {
                macros_class_1 = macros_class_1_1;
            }],
        execute: function() {
            MealDay = (function () {
                function MealDay() {
                    this.macros = new macros_class_1.Macros();
                    this.dateCreated = new Date();
                }
                return MealDay;
            }());
            exports_1("MealDay", MealDay);
        }
    }
});
//# sourceMappingURL=mealDay.class.js.map