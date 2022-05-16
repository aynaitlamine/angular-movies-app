import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSeasonsComponent } from './details-seasons.component';

describe('DetailsSeasonsComponent', () => {
  let component: DetailsSeasonsComponent;
  let fixture: ComponentFixture<DetailsSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSeasonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
