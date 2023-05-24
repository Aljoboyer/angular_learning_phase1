import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFoodComponent } from './details-food.component';

describe('DetailsFoodComponent', () => {
  let component: DetailsFoodComponent;
  let fixture: ComponentFixture<DetailsFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
