import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesMovieComponent } from './lates-movie.component';

describe('LatesMovieComponent', () => {
  let component: LatesMovieComponent;
  let fixture: ComponentFixture<LatesMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatesMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatesMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
