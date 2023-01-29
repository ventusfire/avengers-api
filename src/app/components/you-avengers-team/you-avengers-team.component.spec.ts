import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouAvengersTeamComponent } from './you-avengers-team.component';

describe('YouAvengersTeamComponent', () => {
  let component: YouAvengersTeamComponent;
  let fixture: ComponentFixture<YouAvengersTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouAvengersTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YouAvengersTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
