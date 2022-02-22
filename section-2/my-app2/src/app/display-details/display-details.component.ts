import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [`
    .onFive {
      color: white
    }
  `]
})
export class DisplayDetailsComponent implements OnInit {

  displayP = false;
  log : Number[]= [];
  

  constructor() { }

  ngOnInit(): void {
  }

  onDisplay() {
    this.displayP = !this.displayP;
    this.log.push(this.log.length +1)
  }

}
