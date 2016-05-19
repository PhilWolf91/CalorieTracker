import { Component } from 'angular2/core'
import { Router, RouteParams } from 'angular2/router'
import { FoodListComponent } from '../food-list/food-list.component'
import { Food } from '../classes/food.class'
@Component({
    selector: 'ctw-meal-add',
    templateUrl: 'app/meal-add/meal-add.component.html',
    directives:[FoodListComponent]
})

export class MealAddComponent{
    
    mealDayMealId: number;
    mealDayId: number;
    mealDayName: string;
    showNoFoodsWarning: boolean = true;
    foods: Array<Food>;
    storage: any;
    
    constructor(private _router: Router, private _routeParams: RouteParams){   
       this.mealDayId = Number.parseInt(_routeParams.get('mealDayId'));
       this.storage = window.localStorage;
    }
    
    addMeal(){
        this._router.navigate(['MealDayMeals', { mealDayId: this.mealDayId}]);
    }
    
    addFood(){
        
    }
}