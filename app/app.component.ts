import { Component } from 'angular2/core'
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router'
import { HomeComponent } from './home/home.component'

@Component({
    selector: 'ctw-app',
    templateUrl: './app/app.component.html',
    providers: [ROUTER_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, HomeComponent,]
})


@RouteConfig([
    { path: './home', name: 'Home', component: HomeComponent, useAsDefault: true }
])

export class AppComponent {
    toggleMenu(): void{
        $("#wrapper").toggleClass("toggled");
    }
}