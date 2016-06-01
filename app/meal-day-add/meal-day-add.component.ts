import { Component} from 'angular2/core'
import { MealDay } from '../classes/mealDay.class'
import { Router } from 'angular2/router'



@Component({
    selector: 'ctw-meal-day',
    templateUrl: 'app/meal-day-add/meal-day-add.component.html',
})

export class MealDayAddComponent{
    mealDayToAdd: MealDay;
    mealName: string = "";
    protein: number = 0;
    calories: number = 0;
    carbohydrates: number = 0;
    fats: number = 0;
    storage: any;
    
    constructor(private _router: Router){
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
        
        var mealDaysInStorage = this.storage.getItem('mealDays');
        if(mealDaysInStorage != undefined){
            var parsedMealDays: Array<MealDay> = JSON.parse(mealDaysInStorage);
            this.mealDayToAdd.mealDayId = parsedMealDays.length + 1;
            parsedMealDays.push(this.mealDayToAdd);
            this.storage.setItem('mealDays', JSON.stringify(parsedMealDays));    
        }
        else{
            var mealDays : Array<MealDay> = [];
            this.mealDayToAdd.mealDayId = 1;
            mealDays.push(this.mealDayToAdd);
            this.storage.setItem('mealDays', JSON.stringify(mealDays));    
        }
        
        this._router.navigate(["MealDaysList"]);
    }
}