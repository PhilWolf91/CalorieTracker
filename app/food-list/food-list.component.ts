import { Meal } from '../classes/meal.class'
import { Food } from '../classes/food.class'
import { FoodAddComponent } from '../food-add/food-add.component'
import { Component, Input, Output, OnInit } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'
import { LocalStorageService } from '../services/localStorage.service'
import { MealDay } from '../classes/mealDay.class'

@Component({
    selector: 'ctw-food-list',
    templateUrl: 'app/food-list/food-list.component.html',
    directives: [ROUTER_DIRECTIVES, FoodAddComponent],
    inputs: ['mealDayMealId']
})

export class FoodListComponent {
    
    mealDays: Array<MealDay>;
    currentMealDay: MealDay;
    mealDayMealId: number;
    foods: Array<Food> = new Array<Food>();
    showNoFoodWarning: boolean = true;
    showAddFoodPanel: boolean = false;
    
    constructor(private _localStorageSvc: LocalStorageService){
        this.mealDays = _localStorageSvc.GetMealDays();
        console.log("Food List Component - Meal Day Meal Id: " + this.mealDayMealId);
        console.log(this.mealDays);
    }
    
    ngOnInit(){
        console.log("Food List Component:OnInit - Meal Day Meal Id: " + this.mealDayMealId);
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
    
    onFoodAdded(food: Food){
        this.foods.push(food);
        this.showNoFoodWarning = false;
        console.log("Food-list - onFoodAdded: ");
        console.log(food);
    }
}