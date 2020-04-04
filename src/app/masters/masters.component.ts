import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  @Output() userChoice = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(choice: string){
    this.userChoice.emit(choice);
  }

}
