import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BUTTON_TYPES_ARRAY } from './btp-button.constant';
import { BOOTSTRAP_GENERIC_TYPES_02 } from 'src/app/components/settings/enums';

@Component({
  selector: 'bz-btp-button',
  templateUrl: './btp-button.component.html',
  styleUrls: ['./btp-button.component.scss']
})
export class BtpButtonComponent implements OnInit {

  @Input() type: BOOTSTRAP_GENERIC_TYPES_02 = BOOTSTRAP_GENERIC_TYPES_02.PRIMARY;

  @Output() onclick = new EventEmitter();
  @Output() onclickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public get buttonClassType() {
    const { type } = this;
    const existType = BUTTON_TYPES_ARRAY.includes(type);
    if (!existType) {
      return '';
    }
    return `btn btn-${type}`;
  }

  public buttonClick($event: MouseEvent) {
    const existOnclickObservers = this.onclick.observers.length > 0;
    if (existOnclickObservers) {
      this.onclick.emit();
    }
    const existOnclickEventObservers = this.onclickEvent.observers.length > 0;
    if (existOnclickEventObservers) {
      this.onclickEvent.emit($event);
    }
  }

}
