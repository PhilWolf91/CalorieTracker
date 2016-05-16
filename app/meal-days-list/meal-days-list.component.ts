import { Component } from 'angular2/core'
import { Router } from 'angular2/router'

@Component({
    templateUrl: 'app/meal-days-list/meal-days-list.component.html'
})

export class MealDaysListComponent {
    storage: any;
    
    constructor(private _router: Router){
        this.storage = window.localStorage;
    }
    
    goToAddMealDay(){
        this._router.navigate(['MealDayAdd']);
    }
}