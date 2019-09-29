import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtpButtonComponent } from './btp-button/btp-button.component';

const COMPONENTS = [
  BtpButtonComponent,
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
export class ButtonsModule { }
