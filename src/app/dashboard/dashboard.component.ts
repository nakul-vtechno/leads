import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';
import { LeadsService } from './../services/leads/leads.service';
import { ClientsService } from '../services/clients/clients.service';
import { Chart } from 'angular-highcharts';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { AddLeadComponent } from '../commonui/add-lead/add-lead.component';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public products: Array<object>;
  public leads: Array<object>;
  public clients: Array<object>;
  public chart: any;
  public chartOptions: any;
  public isCollapsed = false;
  public faArrowCircleUp = faArrowCircleUp;
  public seriesLeadStatus = {
    'Verification Pending' : 0,
    'Verification Done' : 0,
    'Document Pending' : 0,
    'Case Logged in' : 0,
    'Case Approved' : 0,
    'Case Disbursed' : 0,
  };
  public leadsChardData = [];
  public filterProduct: string;
  public filterCustomerName: string;
  public filterCustomerMobile: string;
  public filterCustomerDate: string;
  public filterStatus: string;
  public currentFilter = '';
  public team = [];
  public user = null;

  constructor(
    private productService: ProductsService,
    private leadsService: LeadsService,
    private clientsService: ClientsService,
    private addLead: AddLeadComponent,
    private usersService: UsersService
    ) { }

  ngOnInit() {
    this.user = this.usersService.getCurrntUser();
    this.products = this.productService.getProducts().data;
    this.leads = this.leadsService.getLeads().data;
    this.prepareLeadsChart();
    this.clients = this.clientsService.getClients().data;
    console.log('leads => ', this.leads);

    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#f8f9fa'
      },
      title: {
        text: 'Leads',
        margin: 2,
        style: {
          color : '#495057'
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      legend: {
        width: 400,
        floating: true,
        align: 'left',
        x: 0, // = marginLeft - default spacingLeft
        y: 22,
        itemWidth: 100,
        borderWidth: 0,
    },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: true
        }
      },
      series: [{
      name: 'Brands',
      colorByPoint: true,
      data: this.leadsChardData,
      }]
      };

    this.chart = new Chart(this.chartOptions);

    this.team = this.usersService.getTeamUsers(this.user.id, 'teamlead');

    console.log('this.team => ', this.team);
}

  public prepareLeadsChart() {
    this.leads.forEach((item) => {
      if (item['currentStatus'] === 'Verification Pending') {
        this.seriesLeadStatus['Verification Pending'] = this.seriesLeadStatus['Verification Pending'] + 1;
      }
      if (item['currentStatus'] === 'Verification Done') {
        this.seriesLeadStatus['Verification Done'] = this.seriesLeadStatus['Verification Pending'] + 1;
      }
      if (item['currentStatus'] === 'Document Pending') {
        this.seriesLeadStatus['Document Pending'] = this.seriesLeadStatus['Verification Pending'] + 1;
      }
      if (item['currentStatus'] === 'Case Logged in') {
        this.seriesLeadStatus['Case Logged in'] = this.seriesLeadStatus['Verification Pending'] + 1;
      }
      if (item['currentStatus'] === 'Case Approved') {
        this.seriesLeadStatus['Case Approved'] = this.seriesLeadStatus['Verification Pending'] + 1;
      }
      if (item['currentStatus'] === 'Case Disbursed') {
        this.seriesLeadStatus['Case Disbursed'] = this.seriesLeadStatus['Verification Pending'] + 1;
      }
    });
    for (const [key, value] of Object.entries(this.seriesLeadStatus)) {
      console.log(key, value);
      this.leadsChardData.push({name : key, y : value});
    }
  }

  addNewLead() {
    this.addLead.open();
  }
}
