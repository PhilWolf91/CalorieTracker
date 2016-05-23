import { Component } from 'angular2/core'
import { Router, RouteParams } from 'angular2/router'
import { FoodListComponent } from '../food-list/food-list.component'
import { Food } from '../classes/food.class'
import { LocalStorageService } from '../services/localStorage.service'
@Component({
    selector: 'ctw-meal-add',
    templateUrl: 'app/meal-add/meal-add.component.html',
    directives:[FoodListComponent],
    providers: [LocalStorageService]
})

export class MealAddComponent{
    
    
    mealDayMealId: number;          //ID of the meal being added
    mealDayId: number;              //ID of the day meal is being added to
    mealName: string;               //Name of the current meal being added
    showNoFoodsWarning: boolean = true;
    showAddFoodPane: boolean = false;
    foods: Array<Food>;             //Foods in this meal
    
    constructor(private _router: Router, private _routeParams: RouteParams,
                private _storage: LocalStorageService){   
       this.mealDayId = Number.parseInt(_routeParams.get('mealDayId'));

       this.setCurrentMealDayMealId();
       console.log("Current MealDayMealId: " + this.mealDayMealId);
       
    }
    
    setCurrentMealDayMealId(){
       var totalMeals = this._storage.GetMealsForAMealDayId(this.mealDayId);
       if(totalMeals.length){
           this.mealDayMealId = totalMeals.length + 1;
       }
       else{
           this.mealDayMealId = 1;
       }        
    }
    
    addMeal(){
        this._router.navigate(['MealDayMeals', { mealDayId: this.mealDayId}]);
    }
    
    toggleAddFoodPane(){
        this.showAddFoodPane = false ? true : false;
    }
}