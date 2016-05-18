import { Macros } from './macros.class';
import { Meal } from './meal.class'

export class MealDay{
    mealDayId: number;
    mealDayName: string;
    mealDayMeals: Array<Meal>;
    macros: Macros;
    dateCreated: Date;
    constructor(){
        this.macros = new Macros();
        this.dateCreated = new Date();
    }
}