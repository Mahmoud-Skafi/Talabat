import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRestaurntsComponent } from './delete-restaurnts.component';

describe('DeleteRestaurntsComponent', () => {
  let component: DeleteRestaurntsComponent;
  let fixture: ComponentFixture<DeleteRestaurntsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRestaurntsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRestaurntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
