import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsStampaComponent } from './news-stampa.component';

describe('NewsStampaComponent', () => {
  let component: NewsStampaComponent;
  let fixture: ComponentFixture<NewsStampaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsStampaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsStampaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
