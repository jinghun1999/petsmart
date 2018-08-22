import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiderComponent } from './aider.component';

describe('AiderComponent', () => {
  let component: AiderComponent;
  let fixture: ComponentFixture<AiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
