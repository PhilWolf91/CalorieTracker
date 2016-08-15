import { Component } from 'angular2/core'
import { Router } from 'angular2/router'
import { MealDay } from '../classes/mealDay.class'
import { Meal } from '../classes/meal.class'
import { MealDayMeal } from '../classes/mealDayMeals.class'
import { Food } from '../classes/food.class'
import { Macros } from '../classes/macros.class'
import { LocalStorageService } from '../services/localStorage.service'

@Component({
    templateUrl: 'app/meal-days-list/meal-days-list.component.html'
})

export class MealDaysListComponent {
    storage: any;
    mealDays: Array<MealDay>;
    showNoMealDaysWarning: boolean = true;
    
    constructor(private _router: Router, private _storage: LocalStorageService){
        this.mealDays = new Array<MealDay>();
        this.storage = window.localStorage;

        var mealDays: Array<MealDay> = JSON.parse(this.storage.getItem('mealDays'));
        mealDays.forEach(mealDay => {
            mealDay.macrosConsumed = this.getTotalMacrosForAMealDay(mealDay.mealDayId);
        })
        console.log(mealDays);
        if(mealDays != undefined){
            mealDays.forEach(meal => {
                this.mealDays.push(meal);
            })    
        }
        
        if(this.mealDays.length){
            this.showNoMealDaysWarning = false;
        }
    }
    
    goToAddMealDay(){
        this._router.navigate(['MealDayAdd']);
    }
    
    goToEditMeals(mealDay: MealDay){
        this._router.navigate(['MealDayMeals', {mealDayId: mealDay.mealDayId}])
    }
    
    getTotalMacrosForAMealDay(mealDayId: number): Macros{
        let totalMacros: Macros = new Macros();
        totalMacros.calories = 0;
        totalMacros.carbohydrates = 0;
        totalMacros.fat = 0;
        totalMacros.protein = 0;
        let mealDayMeals: Array<MealDayMeal> = this._storage.GetMealsForAMealDayId(mealDayId);
        console.log("Meal Day Meals");
        console.log(mealDayMeals);
        
        let foodsForAMealDay: Array<Food> = new Array<Food>();
        
        if(mealDayMeals){
            mealDayMeals.forEach( mealDayMeal => {
                let foodsForCurrentMealDayMeal = this._storage.GetFoodForAMeal(mealDayMeal.mealId, mealDayMeal.mealDayId);
                 if (foodsForCurrentMealDayMeal.length > 0) {
                    foodsForCurrentMealDayMeal.forEach(food =>{
                    foodsForAMealDay.push(food);
                    })
                }
            })
         }
         
         if(foodsForAMealDay.length > 0){
             console.log("Foods for a meal day");
             console.log(foodsForAMealDay);
             foodsForAMealDay.forEach(food => {
                 console.log(food);
                 if(food.macros.calories){
                    totalMacros.calories += food.macros.calories;    
                 }
                 if(food.macros.carbohydrates){
                    totalMacros.carbohydrates += food.macros.carbohydrates;    
                 }
                 if(food.macros.fat){
                    totalMacros.fat += food.macros.fat;    
                 }
                 if(food.macros.protein){
                    totalMacros.protein += food.macros.protein;    
                 }
                 
             })
         }
         
         console.log("These are the total macros for MealDayId: " + mealDayId);
         console.log(totalMacros);
         return totalMacros;
    }
}