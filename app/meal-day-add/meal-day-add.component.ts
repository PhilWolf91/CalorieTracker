import { Component } from 'angular2/core'
import { MealDay } from '../classes/mealDay.class'


@Component({
    selector: 'ctw-meal-day',
    templateUrl: 'app/meal-day-add/meal-day-add.component.html'
})

export class MealDayAddComponent{
    mealDayToAdd: MealDay;
    mealName: string;
    calories: number;
    carbohydrates: number;
    fats: number;
    
    constructor(){
        this.mealDayToAdd = new MealDay();
    }
    
    AddNewMealDay(){
        
    }
}