import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {
  
  @Output('masters') goHome = new EventEmitter<string>();

  displayTable = false;
  inputValue: number;
  tableNumber: number;
  count: number[];

  constructor() {
    
    this.count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   }

  ngOnInit() {
  }

  showTable(){
    this.tableNumber = this.inputValue;
    this.inputValue = undefined;
    if(this.tableNumber <= 0)
      return null;

    if(!this.displayTable)  
      this.displayTable = !this.displayTable;
  }

  clearTable(){
    
    if(this.displayTable)
      this.displayTable = !this.displayTable

    this.inputValue = undefined;
  }

  onSelect(choice: string){
    this.goHome.emit(choice);
  }
}
