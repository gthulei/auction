import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduceDetailComponent } from './produce-detail.component';

describe('ProduceDetailComponent', () => {
  let component: ProduceDetailComponent;
  let fixture: ComponentFixture<ProduceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
