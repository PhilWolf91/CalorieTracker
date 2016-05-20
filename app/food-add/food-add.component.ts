import { Component, Input, Output } from 'angular2/core'
import { Food } from '../classes/food.class'
import { Macros } from '../classes/macros.class'
import { LocalStorageService } from '../services/localStorage.service'

@Component({
    selector: 'ctw-food-add',
    templateUrl: 'app/food-add/food-add.component.html',
    inputs: ['mealId']
})

export class FoodAddComponent{
    
    addedFood: Food;
    foodName: string;
    macros: Macros;
    mealId: number;
    
    constructor(private _localStorageSvc: LocalStorageService){
        this.macros = new Macros();
    }
    
    saveFood(){
        var food: Food = new Food();
        food.foodName = this.foodName;
        food.macros = this.macros; 

        var foodSaved: boolean = this._localStorageSvc.SaveFoodForAMeal(food, this.mealId)
        if(foodSaved){
            this.addedFood = food;
        }
        else{
            alert("Food could not be saved");
        }
    }
    
    
}