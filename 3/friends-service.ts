/// <reference path="../typings/angular2/angular2.d.ts" />

import {Inject} from 'angular2/angular2';

export class TokenService {
	private possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    constructor(){
		console.log(this)

    }

	getToken() {
		return this.possible;
	}
}

export class NameService {
    constructor(@Inject(TokenService) public tokenService:TokenService) {
    }

    getName() {
        var text = '', possible = this.tokenService.getToken(), len = possible.length;
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * len));

        return text;
    }

}



export class FriendsService {
    names:Array<string> = [];

    constructor(@Inject(NameService) nameService:NameService) {
        for (var i = 0; i < 3; i++) {
            this.names.push(nameService.getName());
        }
    }
}
