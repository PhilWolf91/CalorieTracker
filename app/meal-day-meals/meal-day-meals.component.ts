import { Component } from 'angular2/core'
import { Router } from 'angular2/router'

@Component({
    selector: 'ctw-meal-day-meals',
    templateUrl: 'app/meal-day-meals/meal-day-meals.component.html'
})

export class MealDayMealsComponent{
    
    showNoMealsWarning: boolean = true;
    storage: any;
    
    constructor(private _router: Router){
        this.storage = window.localStorage;
        
            
    }
    
}
