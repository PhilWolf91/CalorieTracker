import { Macros } from './macros.class';

export class MealDay{
    mealDayId: number;
    mealDayName: string;
    macros: Macros;
    dateCreated: Date;
    constructor(){
        this.macros = new Macros();
        this.dateCreated = new Date();
    }
}