import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name: 'test Server', content: 'Just a Test'}];

  onServerAdded(serverData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {printName: string, printContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.printName,
      content: bluePrintData.printContent
    });
  }
}
