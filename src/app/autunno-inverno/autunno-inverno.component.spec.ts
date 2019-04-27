import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutunnoInvernoComponent } from './autunno-inverno.component';

describe('AutunnoInvernoComponent', () => {
  let component: AutunnoInvernoComponent;
  let fixture: ComponentFixture<AutunnoInvernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutunnoInvernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutunnoInvernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
