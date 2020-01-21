import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  availableRoles = [
    'Team Member',
    'Team Lead',
    'Team Manager',
    'Sub Admin',
    'Admin',
  ];
  stauses = [
    'Active',
    'Inactive',
    'On Hold'
  ];

  constructor() { }

  ngOnInit() {

    this.userForm = new FormGroup({
      userName: new FormControl(''),
      userMail: new FormControl(''),
      userMobile: new FormControl(''),
      userRole: new FormControl(''),
      userStauts: new FormControl(''),
    });
  }

  selectionChanged(event) {

  }

}
