import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bz-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.scss']
})
export class Example01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public buttonClick($event) {
    console.log($event);
  }

}
