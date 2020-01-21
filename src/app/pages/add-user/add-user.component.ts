import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor() { }

  ngOnInit() {

    // id : 5,
    // userName : 'Nakul Member',
    // userMail : 'member@member.com',
    // userMobile : '9910708092',
    // userRole : 'member',
    // userRoleId : 5,
    // userTeamLead : 4,
    // userManager : 3,
    // userStauts : true

    this.userForm = new FormGroup({
      userName: new FormControl(''),
      userMail: new FormControl(''),
      userMobile: new FormControl(''),
      userRole: new FormControl(''),
      userRoleId: new FormControl(''),
      userTeamLead: new FormControl(''),
      userManager: new FormControl(''),
      userStauts: new FormControl(''),
    })
  }

}
