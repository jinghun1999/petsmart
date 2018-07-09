import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLableComponent } from './choose-label.component';

describe('ChooseLableComponent', () => {
  let component: ChooseLableComponent;
  let fixture: ComponentFixture<ChooseLableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
