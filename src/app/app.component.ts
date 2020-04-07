import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tables-app';

  choice: string;
  masters1: string;
  masters2: string;
  masters3: string;
  
  constructor(){
    this.choice = 'default';
    this.masters1 = 'tables';
  }

  selectComponent(input: string){
    this.choice = input;
    this.masters1 = 'tables';
    this.masters2 = 'geo';
    this.masters3 = 'magic';
  }

  goHome1(input: string){
    this.masters1 = input;
  }

  goHome2(input: string){
    this.masters2 = input;
  }

  goHome3(input: string){
    this.masters3 = input;
  }

}
