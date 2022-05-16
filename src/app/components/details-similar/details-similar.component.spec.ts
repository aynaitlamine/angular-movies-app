import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSimilarComponent } from './details-similar.component';

describe('DetailsSimilarComponent', () => {
  let component: DetailsSimilarComponent;
  let fixture: ComponentFixture<DetailsSimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSimilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
