import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerCartComponent } from './avenger-cart.component';

describe('AvengerCartComponent', () => {
  let component: AvengerCartComponent;
  let fixture: ComponentFixture<AvengerCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvengerCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengerCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
