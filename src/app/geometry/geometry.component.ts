import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.css']
})
export class GeometryComponent implements OnInit {
  @Output('masters2') home = new EventEmitter<string>();
  
  input1: number;
  input2: number;
  figure: string;
  area: number;
  perimeter: number;
  displayArea: boolean;
  displayPeri: boolean;
  
  constructor() {
    this.figure = "figure"; 
    this.displayArea = false;
    this.displayPeri = false;
   }

  ngOnInit(): void {
  }

  onSelect(input: string){
    this.home.emit(input);
  }
  
  goHome(){
    this.figure = "figure";
    this.resetInputs();
  }
  selectSquare(){
    this.figure = "square";
  }

  selectRect(){
    this.figure = "rect";
  }

selectCircle(){
  this.figure = "circle";
}

figureArea(length: HTMLInputElement, breadth?: HTMLInputElement){


  if(this.figure === 'square'){
    this.area = length.valueAsNumber * length.valueAsNumber;
    this.displayPeri = false;
    this.displayArea = true;
  }

  if(this.figure === 'rect'){
    this.area = length.valueAsNumber * breadth.valueAsNumber;
    this.displayPeri = false;
    this.displayArea = true;
  }

  if(this.figure === 'circle'){
    this.area = 3.142 * length.valueAsNumber * length.valueAsNumber;
    this.displayPeri = false;
    this.displayArea = true;
  }
}

figurePeri(length: HTMLInputElement, breadth?: HTMLInputElement){
      
  
  if(this.figure === 'square'){
    this.perimeter = 4 * length.valueAsNumber;
    this.displayPeri = true;
    this.displayArea = false;
  }

  if(this.figure === 'rect'){
    this.perimeter = 2 * (length.valueAsNumber + breadth.valueAsNumber);
    this.displayPeri = true;
    this.displayArea = false;
  }

  if(this.figure === 'circle'){
    this.perimeter = 2 * 3.142 * length.valueAsNumber;
    this.displayPeri = true;
    this.displayArea = false;
  }

}

resetInputs(){
  this.input1 = undefined;
  this.input2 = undefined;
  this.area = null;
  this.perimeter = null;
  this.displayArea = false;
  this.displayPeri = false;
}


}
