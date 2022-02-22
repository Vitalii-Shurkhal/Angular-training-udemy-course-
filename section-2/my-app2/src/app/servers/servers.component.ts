import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // may be used this One !
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created'
  serverNAme = '';
  serverStatus = false; 
  servers = ['Test server 1', 'Test server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }
  onServerCreate() {
    setTimeout(() => {
      this.serverStatus =true
      this.servers.push(this.serverNAme)
      this.serverCreationStatus = 'Server was created with name  ' + this.serverNAme
    }, 2000)
  }

  onUpdateServerName(event: Event) { 
    this.serverNAme = (<HTMLInputElement>event.target).value
  }

}
