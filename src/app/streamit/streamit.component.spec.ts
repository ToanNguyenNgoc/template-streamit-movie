import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamitComponent } from './streamit.component';

describe('StreamitComponent', () => {
  let component: StreamitComponent;
  let fixture: ComponentFixture<StreamitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
