import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicMathsComponent } from './magic-maths.component';

describe('MagicMathsComponent', () => {
  let component: MagicMathsComponent;
  let fixture: ComponentFixture<MagicMathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicMathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicMathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
