import { Component } from 'angular2/core'
import { Router } from 'angular2/router'
import { MealDay } from '../classes/mealDay.class'
import { LocalStorageService } from '../services/localStorage.service'

@Component({
    templateUrl: 'app/meal-days-list/meal-days-list.component.html'
})

export class MealDaysListComponent {
    storage: any;
    mealDays: Array<MealDay>;
    showNoMealDaysWarning: boolean = true;
    constructor(private _router: Router, private _storage: LocalStorageService){
        this.mealDays = new Array<MealDay>();
        this.storage = window.localStorage;
        
        // var mealDay: MealDay = JSON.parse(this.storage.getItem('mealDays'));
        
        // this.mealDays.push(mealDay);
        // var mealDaysInStorage = JSON.parse(this.storage.getItem('mealDays'));
        var mealDays: Array<MealDay> = JSON.parse(this.storage.getItem('mealDays'));
        console.log(mealDays);
        if(mealDays != undefined){
            mealDays.forEach(meal => {
                this.mealDays.push(meal);
            })    
        }
        
        if(this.mealDays.length){
            this.showNoMealDaysWarning = false;
        }
    }
    
    goToAddMealDay(){
        this._router.navigate(['MealDayAdd']);
    }
    
    goToEditMeals(mealDay: MealDay){
        this._router.navigate(['MealDayMeals', {mealDayId: mealDay.mealDayId}])
    }
}