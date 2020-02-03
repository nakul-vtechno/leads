import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  leads = {};

  allLeads = {};

  currentLead = null;

  constructor(private http: HttpClient ) { }

  public getLeads() {
    return this.fetchLeads();
    // this.fetchLeads().subscribe((data) => {
    //   this.allLeads = data;
    //   this.leads = data;
    // });
    // return this.allLeads;
  }

  public getLead(id) {
    return this.allLeads.data.filter(item => item.leadId === id);
  }

  public fetchLeads() {
    return this.http.get('http://localhost:3000/leads');
  }

  public setLeads(leads) {
    return this.leads = leads;
  }

  public getCurrentLead() {
    return this.currentLead;
  }

  public setCurrentLead(lead) {
    this.currentLead = lead;
  }

  public getLeadsByParam(param, value) {
    const returnData = this.leads.data.filter(item => item[param].toLowerCase() === value.toLowerCase());
    this.leads = {data: returnData};
    return {data: returnData};
  }

  public getLeadsByAllParams(params) {
    const filters = {
      filterProduct: 'productWanted',
      filterCustomerName: 'customerName',
      filterCustomerMobile: 'customerNumber',
      filterCustomerDate: 'leadCreationDate',
      filterStatus: 'currentStatus',
    };

    let returnData = this.leads.data;
    let filteredParams = {};
    if (params.filterProduct.length > 0) {
      filteredParams['filterProduct'] = params.filterProduct;
    }
    if (params.filterCustomerName.length > 0) {
      filteredParams['filterCustomerName'] = params.filterCustomerName;
    }
    if (params.filterCustomerMobile.length > 0) {
      filteredParams['filterCustomerMobile'] = params.filterCustomerMobile;
    }
    if (params.filterCustomerDate.length > 0) {
      filteredParams['filterCustomerDate'] = params.filterCustomerDate;
    }
    if (params.filterStatus.length > 0) {
      filteredParams['filterStatus'] = params.filterStatus;
    }

    // tslint:disable-next-line: forin
    for (const key in filteredParams) {
      console.log('filteredParams => ', key, filteredParams[key]);
      returnData = returnData.filter(item => item[filters[key]].toLowerCase() == filteredParams[key].toLowerCase());
    }
    this.leads = {data: returnData};
    return {data: returnData};
  }

  getFilteredLeads(filter) {

    const returnLeads = [];
    this.getLeads().data.forEach(item => {
      if (item['productWanted'].toLowerCase().indexOf(filter['filterProduct'].toLowerCase()) > -1
      && item['customerName'].toLowerCase().indexOf(filter['filterCustomerName'].toLowerCase()) > -1
      && item['customerNumber'].toLowerCase().indexOf(filter['filterCustomerMobile'].toLowerCase()) > -1
      && item['leadCreationDate'].toLowerCase().indexOf(filter['filterCustomerDate'].toLowerCase()) > -1
      && item['currentStatus'].toLowerCase().indexOf(filter['filterStatus'].toLowerCase()) > -1) {
        returnLeads.push(item);
      }
    });
    return {data: returnLeads};
  }

  assignLead(leadId, assignee, userId) {
    console.log('31jan leadId, assignee, userId => ', leadId, assignee, userId);

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Access-Control-Allow-Origin': 'http://localhost:4200',
    //     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    //     'Access-Control-Allow-Credentials' : true
    //   })
    // };

    return this.http.put('http://localhost:3000/lead', {'leadId': leadId, 'assignee': userId, 'assignedToName': assignee});
    // this.allLeads.data.forEach(item => {
    //   if (item.leadId == leadId) {
    //     item.assignedToName = assignee;
    //     item.assignedTo = userId;
    //     item.leadHistory = item.leadHistory + '|' + this.appendLeadhistory(assignee, userId);
    //   }
    // });
    // this.leads.data.forEach(item => {
    //   if (item.leadId == leadId) {
    //     item.assignedToName = assignee;
    //     item.assignedTo = userId;
    //     item.leadHistory = item.leadHistory + '|' + this.appendLeadhistory(assignee, userId);
    //   }
    // });
  }

  addRemark(leadId, remark) {
    console.log('27Jan leadId, remark => ', leadId, remark);
    this.allLeads.data.forEach(item => {
      if (item.leadId == leadId) {
        item.leadRemarks = item.leadRemarks + '|' + this.appendLeadRemark(remark);
      }
    });
    this.leads.data.forEach(item => {
      if (item.leadId == leadId) {
        item.leadRemarks = item.leadRemarks + '|' + this.appendLeadRemark(remark);
      }
    });
    console.log('27Jan this.allLeads this.leads => ', this.allLeads, this.leads);
  }

  getLeadRemarks(id) {
    const leadObj = this.allLeads.data.filter(item => item.leadId === id);
    return leadObj[0]['leadRemarks'];
  }

  private getFormatedDate() {
    const dateObj = new Date();
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return date + '-' + month + '-' + year;
  }

  private appendLeadhistory(assignee, userId) {
    return this.getFormatedDate() + ':' + 'Assigned to ' + assignee + ' (' + userId + ')';
  }

  private appendLeadRemark(remark) {
    return this.getFormatedDate() + ':' + remark;
  }

}
