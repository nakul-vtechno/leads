import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTeamLeadComponent } from './assign-team-lead.component';

describe('AssignTeamLeadComponent', () => {
  let component: AssignTeamLeadComponent;
  let fixture: ComponentFixture<AssignTeamLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTeamLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTeamLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
