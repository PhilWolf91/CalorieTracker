import { Component } from 'angular2/core'

@Component({
    selector: 'ctw-menu',
    templateUrl: './app/shared/menu.component.html'
})

export class MenuComponent {
    isCollapsed: boolean;
    
    constructor(){}
    
    toggleMenu(): void{
        console.log("THERE");
        $("#wrapper").toggleClass("toggled");
    }
}