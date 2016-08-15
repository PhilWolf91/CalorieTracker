import { Component } from 'angular2/core'
import { Router } from 'angular2/router'

@Component({
    selector: 'ctw-information',
    templateUrl: 'app/information/information.component.html'
})

export class InformationComponent{
    constructor(private _router: Router){}
}