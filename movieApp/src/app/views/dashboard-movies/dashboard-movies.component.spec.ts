import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMoviesComponent } from './dashboard-movies.component';

describe('DashboardMoviesComponent', () => {
  let component: DashboardMoviesComponent;
  let fixture: ComponentFixture<DashboardMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
