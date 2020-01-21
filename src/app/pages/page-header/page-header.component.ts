import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() title: any;
  @Input() saveButton: boolean;
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  saveClicked() {
    this.save.emit(null);
  }
}
