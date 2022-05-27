import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-display',
  templateUrl: './nav-display.component.html',
  styleUrls: ['./nav-display.component.css']
})
export class NavDisplayComponent implements OnInit {

  constructor() { }
open=false;
close=true;
  ngOnInit(): void {
  }
  onClick(){
this.open=!this.open;
 this.close=!this.close;
  }

}
