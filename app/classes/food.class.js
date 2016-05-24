System.register(['./macros.class'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var macros_class_1;
    var Food;
    return {
        setters:[
            function (macros_class_1_1) {
                macros_class_1 = macros_class_1_1;
            }],
        execute: function() {
            Food = (function () {
                function Food() {
                    this.macros = new macros_class_1.Macros();
                }
                return Food;
            }());
            exports_1("Food", Food);
        }
    }
});
//# sourceMappingURL=food.class.js.map