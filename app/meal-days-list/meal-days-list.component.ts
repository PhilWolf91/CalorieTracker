import { Component } from 'angular2/core'
import { Router } from 'angular2/router'
import { MealDay } from '../classes/mealDay.class'

@Component({
    templateUrl: 'app/meal-days-list/meal-days-list.component.html'
})

export class MealDaysListComponent {
    storage: any;
    mealDays: Array<MealDay>;
    showNoMealDaysWarning: boolean = true;
    constructor(private _router: Router){
        this.mealDays = new Array<MealDay>();
        this.storage = window.localStorage;
        var mealDay: MealDay = JSON.parse(this.storage.getItem('mealDays'));
        console.log(mealDay);
        this.mealDays.push(mealDay);
        if(this.mealDays.length){
            this.showNoMealDaysWarning = false;
        }
    }
    
    goToAddMealDay(){
        this._router.navigate(['MealDayAdd']);
    }
}