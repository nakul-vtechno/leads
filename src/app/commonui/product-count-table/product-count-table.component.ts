import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-count-table',
  templateUrl: './product-count-table.component.html',
  styleUrls: ['./product-count-table.component.css']
})
export class ProductCountTableComponent implements OnInit {

  public tableTitle = "";
  public tableData = [];
  @Input() user: any;
  @Input() title: any;

  constructor() { }

  ngOnInit() {
    this.tableTitle = "My Leads";

    this.tableData = [{
      itemName: "Personal Loan",
      countToday: 10,
      countMonth: 90,
      countYtd: 340
    },
    {
      itemName: "Credit Card",
      countToday: 10,
      countMonth: 90,
      countYtd: 340
    },
    {
      itemName: "Auto Loan",
      countToday: 10,
      countMonth: 90,
      countYtd: 340
    },
    {
      itemName: "Bussiness Loan",
      countToday: 10,
      countMonth: 90,
      countYtd: 340
    },
    {
      itemName: "Home Loan",
      countToday: 10,
      countMonth: 90,
      countYtd: 340
    },
    {
      itemName: "Loan Against Property",
      countToday: 10,
      countMonth: 90,
      countYtd: 340
    }]
  }

}
