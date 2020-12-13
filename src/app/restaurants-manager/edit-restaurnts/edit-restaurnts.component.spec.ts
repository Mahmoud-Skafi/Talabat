import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurntsComponent } from './edit-restaurnts.component';

describe('EditRestaurntsComponent', () => {
  let component: EditRestaurntsComponent;
  let fixture: ComponentFixture<EditRestaurntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRestaurntsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestaurntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
