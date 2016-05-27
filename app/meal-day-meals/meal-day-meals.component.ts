import { Component, Input, OnInit } from 'angular2/core'
import { Router, RouteParams } from 'angular2/router'
import { Meal } from '../classes/meal.class'
import { MealDay } from '../classes/mealDay.class'
import { MealDayMeal } from '../classes/mealDayMeals.class'
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
    mealDayMeals: Array<MealDayMeal> = new Array<MealDayMeal>();
    meals: Array<Meal> = new Array<Meal>();
    
    constructor(private _router: Router, private _routeParams: RouteParams, 
                private _storage: LocalStorageService){
        
        this.storage = window.localStorage;
        
        this.mealDayId = Number.parseInt(this._routeParams.get('mealDayId'));
    }
    
    ngOnInit(){
        console.log("MealDayMeals Component- mealDayId: " + this.mealDayId)
        this.mealDayMeals = this._storage.GetMealsForAMealDayId(this.mealDayId);
        console.log("Meal Day Meals: ");
        console.log(this.mealDayMeals);
        this.mealDayMeals.forEach(element => {
            try{
                var meal: Meal = new Meal();
                var foods = this._storage.GetFoodForAMeal(element.mealId, element.mealDayId);
                console.log("Meal Name: " + element.mealName + ", foods:");
                console.log(foods);
                meal.mealName = element.mealName;
                meal.foods = foods;
                this.meals.push(meal);    
            }
            catch(exception){
                console.log(exception);
            }
            
        });
        console.log("MealDayMeals meals");
        console.log(this.mealDayMeals);
        if(this.mealDayMeals.length){
            this.showNoMealsWarning = false;
        }
    }
    
    addNewMeal(){
        this._router.navigate(['MealAdd', {mealDayId: this.mealDayId}])
    }
    
    
}
