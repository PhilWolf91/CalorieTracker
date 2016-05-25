import { Component, Input, OnInit } from 'angular2/core'
import { Router, RouteParams } from 'angular2/router'
import { MealDay } from '../classes/mealDay.class'
import { Meal } from '../classes/meal.class'
import { LocalStorageService } from '../services/localStorage.service'

@Component({
    selector: 'ctw-meal-day-meals',
    templateUrl: 'app/meal-day-meals/meal-day-meals.component.html',
    inputs: ['mealDayId']
})

export class MealDayMealsComponent{
    
    mealDayId: number;
    currentMealDay: MealDay;
    showNoMealsWarning: boolean = true;
    storage: any;
    meals: Array<Meal> = new Array<Meal>();
    
    constructor(private _router: Router, private _routeParams: RouteParams, 
                private _storage: LocalStorageService){
        
        this.storage = window.localStorage;
        
        this.mealDayId = Number.parseInt(this._routeParams.get('mealDayId'));
    }
    
    ngOnInit(){
        console.log("MealDayMeals Component- mealDayId: " + this.mealDayId)
        this.meals = this._storage.GetMealsForAMealDayId(this.mealDayId);
        console.log("MealDayMeals meals");
        console.log(this.meals);
    }
    
    addNewMeal(){
        this._router.navigate(['MealAdd', {mealDayId: this.mealDayId}])
    }
    
    
}
