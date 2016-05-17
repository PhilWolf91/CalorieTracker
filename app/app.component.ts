import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router'
import { HomeComponent } from './home/home.component'
import { MealDaysListComponent } from './meal-days-list/meal-days-list.component'
import { MealDayAddComponent } from './meal-day-add/meal-day-add.component'
import { MealDayMealsComponent } from './meal-day-meals/meal-day-meals.component'

@Component({
    selector: 'ctw-app',
    templateUrl: './app/app.component.html',
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, HomeComponent, MealDaysListComponent]
})

//path is just aesthetic to the URL
//name is used when actually targeting the route
//component determines the actual component and the template associated to it
@RouteConfig([
    { path: './home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: './meal-days-list', name: 'MealDaysList', component: MealDaysListComponent },
    { path: './meal-day-add', name: 'MealDayAdd', component: MealDayAddComponent},
    { path: './meal-day-meals', name: 'MealDayMeals', component: MealDayMealsComponent}
])

export class AppComponent {
    toggleMenu(): void{
        $("#wrapper").toggleClass("toggled");
    }
}