import { Component } from 'angular2/core'
import { MenuComponent } from './shared/menu.component'
import { ROUTER_PROVIDERS } from 'angular2/router'
import { RouteConfig } from 'angular2/router'
import { HomeComponent } from './home/home.component'

@Component({
    selector: 'ctw-app',
    templateUrl: './app/app.component.html',
    directives: [MenuComponent],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true }
])

export class AppComponent {
    
}