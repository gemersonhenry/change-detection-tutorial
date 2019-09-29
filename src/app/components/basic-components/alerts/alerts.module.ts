import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtpAlertComponent } from './btp-alert/btp-alert.component';

const COMPONENTS = [
  BtpAlertComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class AlertsModule { }
