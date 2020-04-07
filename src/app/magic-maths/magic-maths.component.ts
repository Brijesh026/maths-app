import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-magic-maths',
  templateUrl: './magic-maths.component.html',
  styleUrls: ['./magic-maths.component.css']
})
export class MagicMathsComponent implements OnInit {

  @Output('masters3') goHome = new EventEmitter<string>();

  startMagic: boolean = false;
  step1: boolean = false;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  step5: boolean = false;
  step6: boolean = false;
  showAns: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(choice: string){
    this.goHome.emit(choice);
  }

  onSelectMagic(){
    this.startMagic = true;
    this.step1 = true;
  }

  onStep2(){
    this.step1 = false;
    this.step2 = true;
  }

  onStep3(){
    this.step2 = false;
    this.step3 = true;
  }

  onStep4(){
    this.step3 = false;
    this.step4 = true;
  }

  onStep5(){
    this.step4 = false;
    this.step5 = true;
  }

  onStep6(){
    this.step5 = false;
    this.step6 = true;
  }

  showAnswer(){
    this.step6 = false;
    this.showAns = true;
  }

  startAgain(){
    this.startMagic= false;
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = false;
    this.showAns = false;
  }

}
