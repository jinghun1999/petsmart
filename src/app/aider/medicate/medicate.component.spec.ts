import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicateComponent } from './medicate.component';

describe('MedicateComponent', () => {
  let component: MedicateComponent;
  let fixture: ComponentFixture<MedicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
