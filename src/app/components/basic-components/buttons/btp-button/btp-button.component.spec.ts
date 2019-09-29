import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpButtonComponent } from './btp-button.component';

describe('BtpButtonComponent', () => {
  let component: BtpButtonComponent;
  let fixture: ComponentFixture<BtpButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtpButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
