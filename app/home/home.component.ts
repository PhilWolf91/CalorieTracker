import { Component } from 'angular2/core';
import { Router } from 'angular2/router'

@Component({
    templateUrl: 'app/home/home.component.html',
})

export class HomeComponent {
    background: string;
    constructor(private _router: Router){
        this.background = "app/assets/images/Background1900x1200.jpg";
    }
    public pageTitle: string = "Welcome";
    
    goToMealDayList(): void{
        this._router.navigate(['MealDaysList']);
    }
}