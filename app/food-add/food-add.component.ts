import { Component, Input, Output, OnInit } from 'angular2/core'
import { Food } from '../classes/food.class'
import { Macros } from '../classes/macros.class'
import { LocalStorageService } from '../services/localStorage.service'


@Component({
    selector: 'ctw-food-add',
    templateUrl: 'app/food-add/food-add.component.html',
    inputs: ['mealDayMealId']
})

export class FoodAddComponent{
    
    addedFood: Food;
    foodName: string;
    macros: Macros;
    mealDayMealId: number;
    
    constructor(private _localStorageSvc: LocalStorageService){
        this.macros = new Macros();
        
        
        console.log("Food Add Component - Meal Day Meal Id - " + this.mealDayMealId);
    }
    
    ngOnInit(){
        console.log(this.mealDayMealId);
    }
    
    saveFood(){
        var food: Food = new Food();
        food.foodName = this.foodName;
        food.macros = this.macros; 
        food.mealId = this.mealDayMealId;
        food.foodId = 0;

        var foodSaved: boolean = this._localStorageSvc.SaveFoodForAMeal(food, this.mealDayMealId)
        if(foodSaved){
            this.addedFood = food;
        }
        else{
            alert("Food could not be saved");
        }
    }
    
    
}