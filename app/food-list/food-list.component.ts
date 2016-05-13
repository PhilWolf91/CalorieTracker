import { Meal } from '../classes/meal.class'
import { Component } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'

@Component({
    selector: 'ctw-food-list',
    templateUrl: './food-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class FoodList {
    meals: Array<Meal>
    constructor(){
        
    }
    
    calculateCalories (): number {
        var totalCalories: number = 0;
        this.meals.forEach(meal => {
            if(meal.calories !== undefined){
                totalCalories +=  meal.calories();
            }
        })
        return totalCalories;
    }
}