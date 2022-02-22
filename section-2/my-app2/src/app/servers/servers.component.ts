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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }
  onServerCreate() {
    setTimeout(() => {
      this.serverCreationStatus = 'Server was created with the name is ' + this.serverNAme
    }, 2000)
  }

  onUpdateServerName(event: Event) { 
    this.serverNAme = (<HTMLInputElement>event.target).value
  }

}
