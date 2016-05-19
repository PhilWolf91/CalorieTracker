import { Component } from 'angular2/core'
import { Router, RouteParams } from 'angular2/router'
import { MealDay } from '../classes/mealDay.class'

@Component({
    selector: 'ctw-meal-day-meals',
    templateUrl: 'app/meal-day-meals/meal-day-meals.component.html'
})

export class MealDayMealsComponent{
    
    mealDays: Array<MealDay>;
    currentMealDay: MealDay;
    showNoMealsWarning: boolean = true;
    storage: any;
    
    constructor(private _router: Router, private _routeParams: RouteParams){
        
        this.storage = window.localStorage;
        
        var currentMealDayId = this._routeParams.get('mealDayId');
        var mealDays: Array<MealDay> = JSON.parse(this.storage.getItem('mealDays'));
        
        //Set the Current Meal Day for later use
        if(mealDays != undefined){
            console.log(mealDays);
            mealDays.forEach(meal => {
                if(meal.mealDayId == Number.parseInt(currentMealDayId)){
                    this.currentMealDay = meal;
                }
            });
        }
    }
    
    addNewMeal(){
        this._router.navigate(['MealAdd'])
    }
    
    
}
