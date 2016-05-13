import { Food } from '../classes/food.class'

export interface IMeal {
    mealName: string,
    food: Array<Food>;
    calories: () => number;
}