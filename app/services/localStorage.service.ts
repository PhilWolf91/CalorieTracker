import { Injectable } from 'angular2/core'
import { MealDay } from '../classes/mealDay.class'
import { Food } from '../classes/food.class'
import { Meal } from '../classes/meal.class'
import { MealDayMeal } from '../classes/mealDayMeals.class'

@Injectable()
export class LocalStorageService{
    _localStorage: any;
    //stored as mealDayMeals:{mealDayId}
    mealDayMealsKey: string = 'mealDayMeals';
    mealDaysKey: string = 'mealDays';
    foodsKey: string = 'foods';
    savedFoodsKey: string = 'savedFoods';
    
    constructor(){
        this._localStorage = window.localStorage;
    }
    
    private GetKey(key: string): any{
        return this._localStorage.getItem(key); 
    }
    
    private SetKey(key: string, value: any){
        var serializedValue = JSON.stringify(value);
        this._localStorage.setItem(key, value);
    }
    
    //Meals
    
    public GetMealsForAMealDayId(mealDayId: number): Array<MealDayMeal>{
        var mealDayMeals = new Array<MealDayMeal>();
        var key = this.mealDayMealsKey + ":" + mealDayId;
        console.log("Key Used to Retrieve Meals: {mealDayMealsKey}:{mealDayId} " + key);
        var mealDayMealsInStorage = this._localStorage.getItem(key);
        
        if(mealDayMealsInStorage){
            mealDayMeals = JSON.parse(mealDayMealsInStorage);
        }
        return mealDayMeals;
    }
    
    SaveMealForAMealDay(meal: MealDayMeal, mealDayId: number): boolean{
        
        var mealSavedSuccessfully: boolean = true;
        
        try{
        
            var key = this.mealDayMealsKey + ":" + mealDayId;
            console.log("Key Used to Store Meals: {mealsKey}:{mealDayId} " + key);
            var mealsForAMealDayInStorage = this.GetKey(key);
            var mealsForAMealDay: Array<MealDayMeal> = new Array<MealDayMeal>();
            
            if(mealsForAMealDayInStorage)
            {
                mealsForAMealDay = JSON.parse(mealsForAMealDayInStorage);
            }
            meal.mealId = mealsForAMealDay.length + 1;
            // meal.mealDayId = mealDayId;
            mealsForAMealDay.push(meal);
            
            this.SetKey(key, JSON.stringify(mealsForAMealDay));
            console.log("Meal Stored:")
            console.log(meal);
            
        }
        catch(exception){
            console.log(exception);
            mealSavedSuccessfully = false;
        }
        
        
        return mealSavedSuccessfully;
    }
    
    
    //MealDays
    
    public SaveMealDay(mealDay: MealDay){
        var serializedMealDays = this.GetKey(this.mealDaysKey)
        
        var mealDays: Array<MealDay> = null;
        
        if(this.mealDaysKey != undefined || null){
            mealDays = JSON.parse(serializedMealDays);
        }
        else{
            mealDays = new Array<MealDay>();
        }
        
        mealDays.push(mealDay);
        
        this.SetKey(this.mealDaysKey, JSON.stringify(mealDays));
    }
    
    public GetMealDays(): Array<MealDay>{
        var mealDays: Array<MealDay> = JSON.parse(this._localStorage.getItem('mealDays'));
        return mealDays;
    }
    
    
    //Food
    
    SaveFoodForAMeal(food:Food, mealId: number):boolean {
        try{
            
            var foods: Array<Food> = null;
            var key = this.foodsKey + ":" + mealId;
            var serializedFoods = this.GetKey(key);
            
            console.log("SaveFoodForAMeal - Key used: " + key);

            if(serializedFoods){
                foods = JSON.parse(serializedFoods);
            }
            else{
                foods = new Array<Food>();
            }
            
            food.foodId = foods.length + 1;
            food.mealId = mealId;    
            
            foods.push(food);
            console.log(foods);
            this.SetKey(key, JSON.stringify(foods));
            
            return true;    
        }
        catch(exception){
            return false;
        }
        
    }
    
    GetFoodForAMeal(mealId: number): Array<Food>{
        var food = new Array<Food>();
        var key = this.foodsKey + ":" + mealId;
        var foodInStorage = this.GetKey(key);
        
        if(foodInStorage){
            food = JSON.parse(foodInStorage);
        }
        
        return food;
    }
    
    SaveFoodPermanently(food: Food): void{
        var foodsFromStorage = this._localStorage.getItem('savedFoods');
        var foods: Array<Food> = JSON.parse(foodsFromStorage);
        if(foods != undefined){
            foods.push(food);
            this._localStorage.setItem('savedFoods', JSON.stringify(foods));
        }
        else{
            foods = new Array<Food>();
            foods.push(food);
        }
        this._localStorage.setItem('savedFoods', JSON.stringify(foods));
    }
}