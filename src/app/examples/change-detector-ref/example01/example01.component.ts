import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BtpAlertComponent } from 'src/app/components/basic-components/alerts/btp-alert/btp-alert.component';

@Component({
  selector: 'bz-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.scss']
})
export class Example01Component implements OnInit, AfterViewInit {

  public showAlertMessage = false;

  @ViewChild(BtpAlertComponent, { static: false }) btpAlert: BtpAlertComponent;

  constructor(
    private changeDetectionRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.changeDetectionRef.detectChanges();
    console.log('ngAfterViewInit: ', this.btpAlert);
  }

  public buttonClick($event: MouseEvent) {
    this.showAlertMessage = true;
    this.changeDetectionRef.detectChanges();
    console.log($event, this.btpAlert);
    this.btpAlert.resetAlertMessage();
  }

}
