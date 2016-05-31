import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router'
import { HomeComponent } from './home/home.component'
import { MealDaysListComponent } from './meal-days-list/meal-days-list.component'
import { MealDayAddComponent } from './meal-day-add/meal-day-add.component'
import { MealDayMealsComponent } from './meal-day-meals/meal-day-meals.component'
import { MealAddComponent } from './meal-add/meal-add.component'
import { FoodListComponent } from './food-list/food-list.component'
import { LocalStorageService } from './services/localStorage.service'

@Component({
    selector: 'ctw-app',
    templateUrl: './app/app.component.html',
    providers: [ROUTER_PROVIDERS, LocalStorageService],
    directives: [ROUTER_DIRECTIVES, HomeComponent, MealDaysListComponent],
})

//path is just aesthetic to the URL
//name is used when actually targeting the route
//component determines the actual component and the template associated to it
@RouteConfig([
    { path: './home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: './meal-days-list', name: 'MealDaysList', component: MealDaysListComponent },
    { path: './meal-day-add', name: 'MealDayAdd', component: MealDayAddComponent},
    { path: './meal-day-meals:{mealDayId}', name: 'MealDayMeals', component: MealDayMealsComponent},
    { path: './meal-add:{mealDayId}', name: 'MealAdd', component: MealAddComponent}
])

export class AppComponent {
    foodIconSrc: string = 'app/icons/food-blue.png'
    calendarIconSrc: string = 'app/icons/calendar-blue.png'
    
    toggleMenu(): void{
        $("#wrapper").toggleClass("toggled");
    }
}