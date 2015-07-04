/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, Inject} from 'angular2/angular2';
import {NameService} from '../3/friends-service';

// Annotation section
@Component({
    selector: 'my-app2',
    appInjector: [NameService]

})

@View({
    template: '<span><div style="display: inline;color: blue;">Halo {{ name }}!</div></span>'
})

// Component controller
class MyAppComponent2 {
    name:string;

    constructor(nameService:NameService) {
        this.name = nameService.getName();
    }
}

bootstrap(MyAppComponent2);
