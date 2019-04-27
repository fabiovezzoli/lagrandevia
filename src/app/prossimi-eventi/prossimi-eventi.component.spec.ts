import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProssimiEventiComponent } from './prossimi-eventi.component';

describe('ProssimiEventiComponent', () => {
  let component: ProssimiEventiComponent;
  let fixture: ComponentFixture<ProssimiEventiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProssimiEventiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProssimiEventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
