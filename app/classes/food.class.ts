import { Macros } from './macros.class'

export class Food{
    constructor(){
        this.macros = new Macros();
    }
    foodId: number;
    mealId: number;
    mealDayId: number;
    foodName: string;
    macros: Macros;
}