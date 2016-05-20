import { Injectable } from 'angular2/core'
import { MealDay } from '../classes/mealDay.class'
import { Food } from '../classes/food.class'

@Injectable()
export class LocalStorageService{
    _localStorage: any;
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
            var serializedFoods = this.GetKey(this.foodsKey);
            var foods: Array<Food> = null;
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
            this.SetKey(this.foodsKey, JSON.stringify(foods));
            
            return true;    
        }
        catch(exception){
            return false;
        }
        
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