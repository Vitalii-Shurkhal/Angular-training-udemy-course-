import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  userName = ''; 

  constructor() { 

  }

  ngOnInit(): void {
  }

  onReset() {
    this.userName = ''; 
  }



}
