import { Meal } from '../classes/meal.class'
import { Component, Input, Output } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
    selector: 'ctw-food-list',
    templateUrl: 'app/food-list/food-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    inputs: ['mealDayMealId']
})

export class FoodListComponent {
    
    mealDayMealId: number;
    meals: Array<Meal>
    showNoFoodWarning: boolean = true;
    
    constructor(){
        this.meals = new Array<Meal>();
    }
    
    calculateCalories (): number {
        var totalCalories: number = 0;
        if(this.meals != undefined){
            this.meals.forEach(meal => {
                if(meal.calories !== undefined){
                    totalCalories +=  meal.calories();
                }
            })    
        }
        
        return totalCalories;
    }
}