import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesSampleComponent } from './places-sample.component';

describe('PlacesSampleComponent', () => {
  let component: PlacesSampleComponent;
  let fixture: ComponentFixture<PlacesSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
