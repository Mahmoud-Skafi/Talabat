import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsManagerComponent } from './restaurants-manager.component';

describe('RestaurantsManagerComponent', () => {
  let component: RestaurantsManagerComponent;
  let fixture: ComponentFixture<RestaurantsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
