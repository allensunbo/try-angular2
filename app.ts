/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})

@View({
    template: '<div>Hello {{ name }}~~   <my-app2></my-app2></div>'
})

// Component controller
class MyAppComponent {
    name:string;

    constructor() {
        this.name = 'Alice';
    }
}

bootstrap(MyAppComponent);
