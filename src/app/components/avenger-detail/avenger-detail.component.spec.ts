import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengerDetailComponent } from './avenger-detail.component';

describe('AvengerDetailComponent', () => {
  let component: AvengerDetailComponent;
  let fixture: ComponentFixture<AvengerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvengerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
