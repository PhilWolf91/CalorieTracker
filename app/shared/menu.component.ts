import { Component } from 'angular2/core'
import { ROUTER_DIRECTIVES } from 'angular2/router'
import { HomeComponent } from '../home/home.component'

@Component({
    selector: 'ctw-menu',
    templateUrl: './app/shared/menu.component.html',
    directives: [ROUTER_DIRECTIVES]
})



export class MenuComponent {
    isCollapsed: boolean;
    
    constructor(){}
    
    toggleMenu(): void{
        console.log("THERE");
        // var wrapper = document.getElementById('wrapper')
        // wrapper.classList.add('toggled');
        $("#wrapper").toggleClass("toggled");
    }
}