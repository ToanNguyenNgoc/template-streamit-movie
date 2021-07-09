import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTvshowComponent } from './top-tvshow.component';

describe('TopTvshowComponent', () => {
  let component: TopTvshowComponent;
  let fixture: ComponentFixture<TopTvshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTvshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTvshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
