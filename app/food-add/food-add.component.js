System.register(['angular2/core', '../classes/food.class', '../classes/macros.class', '../services/localStorage.service'], function(exports_1, context_1) {
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
    var core_1, food_class_1, macros_class_1, localStorage_service_1;
    var FoodAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (food_class_1_1) {
                food_class_1 = food_class_1_1;
            },
            function (macros_class_1_1) {
                macros_class_1 = macros_class_1_1;
            },
            function (localStorage_service_1_1) {
                localStorage_service_1 = localStorage_service_1_1;
            }],
        execute: function() {
            FoodAddComponent = (function () {
                function FoodAddComponent(_localStorageSvc) {
                    this._localStorageSvc = _localStorageSvc;
                    this.foodToAdd = new food_class_1.Food();
                    this.foodWasAdded = new core_1.EventEmitter();
                    this.macros = new macros_class_1.Macros();
                }
                FoodAddComponent.prototype.ngOnInit = function () {
                    console.log("Food Add Component - Meal Day Meal Id - " + this.mealDayMealId);
                };
                FoodAddComponent.prototype.saveFood = function () {
                    var foodSaved = this._localStorageSvc.SaveFoodForAMeal(this.foodToAdd, this.mealDayMealId, this.mealDayId);
                    if (foodSaved) {
                    }
                    else {
                        alert("Food could not be saved");
                    }
                    this.foodWasAdded.emit(this.foodToAdd);
                    this.foodToAdd = new food_class_1.Food();
                };
                FoodAddComponent = __decorate([
                    core_1.Component({
                        selector: 'ctw-food-add',
                        templateUrl: 'app/food-add/food-add.component.html',
                        inputs: ['mealDayMealId', 'mealDayId'],
                        outputs: ['foodWasAdded']
                    }), 
                    __metadata('design:paramtypes', [localStorage_service_1.LocalStorageService])
                ], FoodAddComponent);
                return FoodAddComponent;
            }());
            exports_1("FoodAddComponent", FoodAddComponent);
        }
    }
});
//# sourceMappingURL=food-add.component.js.map