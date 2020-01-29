import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-assign-team-lead',
  templateUrl: './assign-team-lead.component.html',
  styleUrls: ['./assign-team-lead.component.css']
})
export class AssignTeamLeadComponent implements OnInit {

  public users: any;
  public filteredUsers: any;
  public filteredId: any;
  public filterValue: any;
  @Output() closed: EventEmitter<any> = new EventEmitter();
  @Output() selected: EventEmitter<any> = new EventEmitter();

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    const allUsers = this.usersService.getUsers();
    this.filteredUsers = allUsers.map(item => item.userName);
    this.filteredId = allUsers.map(item => item.id);
    this.users = Array.from(this.filteredUsers);
  }

  public filterUsers(event) {
    this.filteredUsers = this.users.filter(item => item.toLowerCase().indexOf(event.toLowerCase()) > -1);
  }

  public clearFilterInput() {
    this.filteredUsers = Array.from(this.users);
  }

  public assign(name, id) {
    // this.leadsService.assignLead(this.leadId, name, id);
    this.selected.emit([name, id]);
    this.closePopup();
  }

  public closePopup() {
    this.closed.emit(null);
  }

}
