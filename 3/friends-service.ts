import {Inject} from 'angular2/angular2';

export class NameService {
    static possible:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    constructor() {

    }

    getName() {
        var text = "";
        for (var i = 0; i < 5; i++)
            text += NameService.possible.charAt(Math.floor(Math.random() * NameService.possible.length));

        return text;
    }

}

@Inject(NameService)
export class FriendsService {
    names:Array<string> = [];

    constructor(nameService:NameService) {
        for (var i = 0; i < 3; i++) {
            this.names.push(nameService.getName());
        }
    }
}
