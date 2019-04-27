import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CucinaMacroMediterraneaComponent } from './cucina-macro-mediterranea.component';

describe('CucinaMacroMediterraneaComponent', () => {
  let component: CucinaMacroMediterraneaComponent;
  let fixture: ComponentFixture<CucinaMacroMediterraneaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CucinaMacroMediterraneaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CucinaMacroMediterraneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
