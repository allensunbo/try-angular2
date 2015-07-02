/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import * as Test from './friends-service';
@Component({
  selector: 'display',
  appInjector: [Test.FriendsService]

})
@View({
  template: `
  	<p>My name: {{ myName }}</p>
  	<p>Friends:</p>
  	<ul>
     	<li *ng-for="#name of names">
        	{{ name }}
     	</li>
  	</ul>
  `,
  directives: [NgFor]
})

class DisplayComponent {
  myName: string;
  names: Array<string>;
  
  constructor(friendsService: Test.FriendsService) {
     this.myName = "Alice";
     this.names = friendsService.names;
  }
}



bootstrap(DisplayComponent);
