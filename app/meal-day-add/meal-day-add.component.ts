import { Component } from 'angular2/core'
import { MealDay } from '../classes/mealDay.class'


@Component({
    selector: 'ctw-meal-day',
    templateUrl: 'app/meal-day-add/meal-day-add.component.html'
})

export class MealDayAddComponent{
    mealDayToAdd: MealDay;
    mealName: string = "";
    protein: number = 0;
    calories: number = 0;
    carbohydrates: number = 0;
    fats: number = 0;
    storage: any;
    
    constructor(){
        this.mealDayToAdd = new MealDay();
        this.storage = window.localStorage;
    }
    
    AddNewMealDay(){
        console.log(this.mealName + " " + this.protein + " " + this.calories.toString() +  " " + this.protein +" " + this.carbohydrates + " " + this.fats)
        
        this.mealDayToAdd.mealDayName = this.mealName;
        this.mealDayToAdd.macros.calories = this.calories;
        this.mealDayToAdd.macros.carbohydrates = this.carbohydrates;
        this.mealDayToAdd.macros.fat = this.fats;
        this.mealDayToAdd.macros.protein = this.protein;
        
        var mealDays = this.storage.getItem('mealDays');
        this.storage.setItem('mealDays', JSON.stringify(this.mealDayToAdd));
        
    }
}