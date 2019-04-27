import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondatoriComponent } from './fondatori.component';

describe('FondatoriComponent', () => {
  let component: FondatoriComponent;
  let fixture: ComponentFixture<FondatoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondatoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondatoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
