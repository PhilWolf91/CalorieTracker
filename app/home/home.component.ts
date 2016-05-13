import { Component } from 'angular2/core';
import { Router } from 'angular2/router'

@Component({
    templateUrl: 'app/home/home.component.html',
})

export class HomeComponent {
    constructor(private _router: Router){
        
    }
    public pageTitle: string = "Welcome";
    
    goToMealDayList(): void{
        this._router.navigate(['MealDaysList']);
    }
}