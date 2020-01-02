import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSystemBaseSetComponent } from './setting-system-base-set.component';

describe('SettingSystemBaseSetComponent', () => {
  let component: SettingSystemBaseSetComponent;
  let fixture: ComponentFixture<SettingSystemBaseSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingSystemBaseSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSystemBaseSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
