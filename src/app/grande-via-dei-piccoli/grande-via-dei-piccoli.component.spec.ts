import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandeViaDeiPiccoliComponent } from './grande-via-dei-piccoli.component';

describe('GrandeViaDeiPiccoliComponent', () => {
  let component: GrandeViaDeiPiccoliComponent;
  let fixture: ComponentFixture<GrandeViaDeiPiccoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandeViaDeiPiccoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandeViaDeiPiccoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
