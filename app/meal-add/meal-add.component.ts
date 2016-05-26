import { Component, OnInit } from 'angular2/core'
import { Router, RouteParams } from 'angular2/router'
import { FoodListComponent } from '../food-list/food-list.component'
import { LocalStorageService } from '../services/localStorage.service'
import { Food } from '../classes/food.class'
import { MealDayMeal } from '../classes/mealDayMeals.class'


@Component({
    selector: 'ctw-meal-add',
    templateUrl: 'app/meal-add/meal-add.component.html',
    directives:[FoodListComponent],
    providers: [LocalStorageService],
})

export class MealAddComponent{
    
    
    mealDayMealId: number;          //ID of the meal being added
    mealDayId: number;              //ID of the day meal is being added to
    mealName: string;               //Name of the current meal being added
    showNoFoodsWarning: boolean = true;
    showAddFoodPane: boolean = false;
    foods: Array<Food>;             //Foods in this meal
    
    constructor(private _router: Router, private _routeParams: RouteParams,
                private _storage: LocalStorageService){}
    
    ngOnInit(){
       this.mealDayId = Number.parseInt(this._routeParams.get('mealDayId'));
       this.setCurrentMealDayMealId();
       console.log("Meal-Add Component- MealDayId: " + this.mealDayId);
        console.log("Current MealDayMealId: " + this.mealDayMealId);
    }
    
    setCurrentMealDayMealId(){
       var totalMeals = this._storage.GetMealsForAMealDayId(this.mealDayId);
       if(totalMeals.length){
           this.mealDayMealId = totalMeals.length + 1;
       }
       else{
           this.mealDayMealId = 1;
       }        
    }
    
    saveMeal(){
        var currentMeal: MealDayMeal = new MealDayMeal();
        currentMeal.mealName = this.mealName;
        currentMeal.mealDayId = this.mealDayId;
        currentMeal.mealId = 0;
        var mealSuccessfullySaved: boolean = this._storage.SaveMealForAMealDay(currentMeal, this.mealDayId);
        if(mealSuccessfullySaved){
            this._router.navigate(['MealDayMeals', { mealDayId: this.mealDayId}]);    
        }
        else{
            alert("Meal Not Saved");
        }
    }
    
    toggleAddFoodPane(){
        this.showAddFoodPane = false ? true : false;
    }
}