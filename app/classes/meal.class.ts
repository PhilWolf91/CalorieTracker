import { Food } from './food.class'
import { Macros } from './macros.class'
export class Meal{
    
    mealName: string;
    foods: Array<Food>;
    
    calories(): number{
        var totalCalories: number = 0;
        this.foods.forEach(food => {
            if(food.macros.calories != undefined){
                totalCalories += food.macros.calories;
            }
        }) 
        return totalCalories;
    }
    
    carbohydrates(): number{
        var totalCarbohydrates: number = 0;
        
        this.foods.forEach(food =>{
            if(food.macros.carbohydrates != undefined){
                totalCarbohydrates += food.macros.carbohydrates;
            }
        })
        
        return totalCarbohydrates;
    }
    
    protein(): number{
        var totalProtein: number = 0;
        
        this.foods.forEach(food =>{
            if(food.macros.protein != undefined){
                totalProtein += food.macros.protein;
            }
        })
        
        return totalProtein;
    }
    
    fat(): number{
        var totalFats: number = 0;
        
        this.foods.forEach(food => {
            if(food.macros.fat != undefined){
                totalFats += food.macros.fat;
            }
        })
        
        return totalFats;
    }
    
}