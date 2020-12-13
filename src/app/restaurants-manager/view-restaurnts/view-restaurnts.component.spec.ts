import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurntsComponent } from './view-restaurnts.component';

describe('ViewRestaurntsComponent', () => {
  let component: ViewRestaurntsComponent;
  let fixture: ComponentFixture<ViewRestaurntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRestaurntsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
