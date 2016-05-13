import { Food } from '../classes/food.class'
export class Meal{
    
    mealName: string;
    foods: Array<Food>;
    
    calories(): number{
        var totalCalories: number = 0;
        this.foods.forEach(food => {
            if(food.calories != undefined){
                totalCalories += food.calories;
            }
        }) 
        return 1;
    }
    
}