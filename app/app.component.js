System.register(['angular2/core', 'angular2/router', './home/home.component', './meal-days-list/meal-days-list.component', './meal-day-add/meal-day-add.component', './meal-day-meals/meal-day-meals.component', './meal-add/meal-add.component'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, meal_days_list_component_1, meal_day_add_component_1, meal_day_meals_component_1, meal_add_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (meal_days_list_component_1_1) {
                meal_days_list_component_1 = meal_days_list_component_1_1;
            },
            function (meal_day_add_component_1_1) {
                meal_day_add_component_1 = meal_day_add_component_1_1;
            },
            function (meal_day_meals_component_1_1) {
                meal_day_meals_component_1 = meal_day_meals_component_1_1;
            },
            function (meal_add_component_1_1) {
                meal_add_component_1 = meal_add_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.toggleMenu = function () {
                    $("#wrapper").toggleClass("toggled");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ctw-app',
                        templateUrl: './app/app.component.html',
                        providers: [router_1.ROUTER_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES, home_component_1.HomeComponent, meal_days_list_component_1.MealDaysListComponent]
                    }),
                    router_1.RouteConfig([
                        { path: './home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: './meal-days-list', name: 'MealDaysList', component: meal_days_list_component_1.MealDaysListComponent },
                        { path: './meal-day-add', name: 'MealDayAdd', component: meal_day_add_component_1.MealDayAddComponent },
                        { path: './meal-day-meals:{mealDayId}', name: 'MealDayMeals', component: meal_day_meals_component_1.MealDayMealsComponent },
                        { path: './meal-add:{mealDayId}', name: 'MealAdd', component: meal_add_component_1.MealAddComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map