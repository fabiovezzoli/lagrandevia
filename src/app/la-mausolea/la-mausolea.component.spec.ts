import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMausoleaComponent } from './la-mausolea.component';

describe('LaMausoleaComponent', () => {
  let component: LaMausoleaComponent;
  let fixture: ComponentFixture<LaMausoleaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaMausoleaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaMausoleaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
