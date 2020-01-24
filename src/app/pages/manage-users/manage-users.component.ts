import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { faArrowCircleUp, faHistory, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  public users: Array<{}>;
  public currentFilter = '';
  public page = 1;
  public pageSize = 5;
  public collectionSize: number;
  public filterModel;
  public filters = {
    filterProduct: '',
    filterCustomerName: '',
    filterCustomerMobile: '',
    filterCustomerDate: '',
    filterStatus: '',
  };
  public faArrowCircleUp = faArrowCircleUp;
  public faHistory = faHistory;
  public faEdit = faEdit;
  public faInfoCircle = faInfoCircle;

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  clearFilter(filter) {
    // this.filters[filter] = '';
    // this.collectionSize = this.allLeads.length;
    // this.allLeads = this.leadsService.getFilteredLeads(this.filters).data;
    // this.leads = this.allLeads.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  onFilterChange() {
    // this.allLeads = this.leadsService.getFilteredLeads(this.filters).data;
    // this.collectionSize = this.allLeads.length;
    // this.leads = this.allLeads.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
