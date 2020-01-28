import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSettingsComponent } from './manage-settings.component';

describe('ManageSettingsComponent', () => {
  let component: ManageSettingsComponent;
  let fixture: ComponentFixture<ManageSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
