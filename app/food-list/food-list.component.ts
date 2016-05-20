import { Meal } from '../classes/meal.class'
import { Food } from '../classes/food.class'
import { FoodAddComponent } from '../food-add/food-add.component'
import { Component, Input, Output } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'
import { LocalStorageService } from '../services/localStorage.service'
import { MealDay } from '../classes/mealDay.class'

@Component({
    selector: 'ctw-food-list',
    templateUrl: 'app/food-list/food-list.component.html',
    directives: [ROUTER_DIRECTIVES, FoodAddComponent],
    inputs: ['mealDayMealId', 'mealDayId']
})

export class FoodListComponent {
    
    mealDays: Array<MealDay>;
    currentMealDay: MealDay;
    mealDayId: number;
    mealDayMealId: number;
    foods: Array<Food>;
    showNoFoodWarning: boolean = true;
    showAddFoodPanel: boolean = false;
    
    constructor(private _localStorageSvc: LocalStorageService){
        this.mealDays = _localStorageSvc.GetMealDays();
        console.log(this.mealDays);
    }
    
    toggleAddFoodPanel(){
        if(this.showAddFoodPanel){
            this.showAddFoodPanel = false;
        }
        else{
            this.showAddFoodPanel = true;
        }
        console.log(this.showAddFoodPanel);
    }
    
    // calculateCalories (): number {
    //     var totalCalories: number = 0;
    //     if(this.meals != undefined){
    //         this.meals.forEach(meal => {
    //             if(meal.calories !== undefined){
    //                 totalCalories +=  meal.calories();
    //             }
    //         })    
    //     }
        
    //     return totalCalories;
    // }
}