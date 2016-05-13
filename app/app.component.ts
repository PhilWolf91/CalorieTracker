import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router'
import { HomeComponent } from './home/home.component'
import { MealDaysListComponent } from './meal-days-list/meal-days-list.component'

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
    { path: './meal-days-list', name: 'MealDaysList', component: MealDaysListComponent }
])

export class AppComponent {
    toggleMenu(): void{
        $("#wrapper").toggleClass("toggled");
    }
}