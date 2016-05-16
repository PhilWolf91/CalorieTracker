import { Macros } from './macros.class';

export class MealDay{
    mealDayName: string;
    macros: Macros;
    dateCreated: Date;
    constructor(){
        this.macros = new Macros();
        this.dateCreated = new Date();
    }
}