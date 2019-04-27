import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespiroDellaTerraComponent } from './respiro-della-terra.component';

describe('RespiroDellaTerraComponent', () => {
  let component: RespiroDellaTerraComponent;
  let fixture: ComponentFixture<RespiroDellaTerraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespiroDellaTerraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespiroDellaTerraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
