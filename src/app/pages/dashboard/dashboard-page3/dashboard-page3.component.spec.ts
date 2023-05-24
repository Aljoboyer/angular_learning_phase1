import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage3Component } from './dashboard-page3.component';

describe('DashboardPage3Component', () => {
  let component: DashboardPage3Component;
  let fixture: ComponentFixture<DashboardPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
