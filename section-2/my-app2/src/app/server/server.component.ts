import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})


export class ServerComponent {
    serverID: number = 7;
    serverStatus:  string = 'offline'; 

    getServerStatus () {
        return this.serverStatus 
    }

}