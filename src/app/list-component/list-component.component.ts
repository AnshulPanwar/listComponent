import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() lists: Array<string>;
  @Input() icon: boolean;
  @Input() value: boolean;
  @Input() iconLeft: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
