import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpAlertComponent } from './btp-alert.component';

describe('BtpAlertComponent', () => {
  let component: BtpAlertComponent;
  let fixture: ComponentFixture<BtpAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtpAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
