import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaGuidaNomadeComponent } from './la-guida-nomade.component';

describe('LaGuidaNomadeComponent', () => {
  let component: LaGuidaNomadeComponent;
  let fixture: ComponentFixture<LaGuidaNomadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaGuidaNomadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaGuidaNomadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
