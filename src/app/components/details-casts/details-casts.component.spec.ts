import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCastsComponent } from './details-casts.component';

describe('DetailsCastsComponent', () => {
  let component: DetailsCastsComponent;
  let fixture: ComponentFixture<DetailsCastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
