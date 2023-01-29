import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerNavComponent } from './avenger-nav.component';

describe('AvengerNavComponent', () => {
  let component: AvengerNavComponent;
  let fixture: ComponentFixture<AvengerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvengerNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
