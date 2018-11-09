import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() lists: Array<string>;
  @Input() icon: boolean;
  @Input() value: boolean;
  @Input() iconLeft: boolean;



 
  constructor() { }

  ngOnInit() {
  }

}
