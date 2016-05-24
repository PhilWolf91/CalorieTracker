import { Component, Input, Output, OnInit, EventEmitter } from 'angular2/core'
import { Food } from '../classes/food.class'
import { Macros } from '../classes/macros.class'
import { LocalStorageService } from '../services/localStorage.service'


@Component({
    selector: 'ctw-food-add',
    templateUrl: 'app/food-add/food-add.component.html',
    inputs: ['mealDayMealId'],
    outputs: ['foodWasAdded']
})

export class FoodAddComponent{
    
    foodToAdd: Food = new Food();
    foodWasAdded: EventEmitter<Food> = new EventEmitter<Food>();
    foodName: string;
    macros: Macros;
    mealDayMealId: number;
    
    constructor(private _localStorageSvc: LocalStorageService){
        this.macros = new Macros();
    }
    
    ngOnInit(){
        console.log("Food Add Component - Meal Day Meal Id - " + this.mealDayMealId);
    }
    
    saveFood(){
        var foodSaved: boolean = this._localStorageSvc.SaveFoodForAMeal(this.foodToAdd, this.mealDayMealId)
        if(foodSaved){
            
        }
        else{
            alert("Food could not be saved");
        }
        
        this.foodWasAdded.emit(this.foodToAdd);
        this.foodToAdd = new Food();
    }
    
    
}