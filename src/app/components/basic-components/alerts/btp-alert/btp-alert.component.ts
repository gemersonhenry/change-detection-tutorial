import { Component, OnInit, Input } from '@angular/core';
import { ALERT_TYPES_ARRAY } from './btp-alert.constant';
import { BOOTSTRAP_GENERIC_TYPES_01 } from 'src/app/components/settings/enums';

@Component({
  selector: 'bz-btp-alert',
  templateUrl: './btp-alert.component.html',
  styleUrls: ['./btp-alert.component.scss']
})
export class BtpAlertComponent implements OnInit {

  @Input() type: BOOTSTRAP_GENERIC_TYPES_01 = BOOTSTRAP_GENERIC_TYPES_01.PRIMARY;

  constructor() { }

  ngOnInit() {
  }

  public get alertClassType() {
    const { type } = this;
    const existType = ALERT_TYPES_ARRAY.includes(type);
    if (!existType) {
      return '';
    }
    return `alert alert-${type}`;
  }

}
