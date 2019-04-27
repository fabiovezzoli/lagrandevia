import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaveraEstateComponent } from './primavera-estate.component';

describe('PrimaveraEstateComponent', () => {
  let component: PrimaveraEstateComponent;
  let fixture: ComponentFixture<PrimaveraEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaveraEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaveraEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
