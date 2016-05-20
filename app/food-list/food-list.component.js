System.register(['../food-add/food-add.component', 'angular2/core', 'angular2/router', '../services/localStorage.service'], function(exports_1, context_1) {
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
    var food_add_component_1, core_1, router_1, localStorage_service_1;
    var FoodListComponent;
    return {
        setters:[
            function (food_add_component_1_1) {
                food_add_component_1 = food_add_component_1_1;
            },
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
            FoodListComponent = (function () {
                function FoodListComponent(_localStorageSvc) {
                    this._localStorageSvc = _localStorageSvc;
                    this.showNoFoodWarning = true;
                    this.showAddFoodPanel = false;
                    this.mealDays = _localStorageSvc.GetMealDays();
                    console.log(this.mealDays);
                }
                FoodListComponent.prototype.toggleAddFoodPanel = function () {
                    if (this.showAddFoodPanel) {
                        this.showAddFoodPanel = false;
                    }
                    else {
                        this.showAddFoodPanel = true;
                    }
                    console.log(this.showAddFoodPanel);
                };
                FoodListComponent = __decorate([
                    core_1.Component({
                        selector: 'ctw-food-list',
                        templateUrl: 'app/food-list/food-list.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, food_add_component_1.FoodAddComponent],
                        inputs: ['mealDayMealId', 'mealDayId']
                    }), 
                    __metadata('design:paramtypes', [localStorage_service_1.LocalStorageService])
                ], FoodListComponent);
                return FoodListComponent;
            }());
            exports_1("FoodListComponent", FoodListComponent);
        }
    }
});
//# sourceMappingURL=food-list.component.js.map