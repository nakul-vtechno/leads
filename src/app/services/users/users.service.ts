import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /* User Roles
    Admin : 1
    Sub-Admin : 2
    Manager : 3
    Team Lead : 4
    Member : 5
    Viewer : 6
  */

  private currentUser = null;

  public allUsers = [{
    id : 5,
    userName : 'Nakul Member',
    userMail : 'member@member.com',
    userMobile : '9910708092',
    userRole : 'member',
    userRoleId : 5,
    userTeamLead : 4,
    userManager : 3,
    userStauts : true
  },
  {
    id : 4,
    userName : 'Nakul Lead',
    userMail : 'lead@lead.com',
    userMobile : '9910708092',
    userRole : 'lead',
    userRoleId : 4,
    userTeamLead : 10,
    userManager : 20,
    userStauts : true
  },
  {
    id : 3,
    userName : 'Nakul Manager',
    userMail : 'manager@manager.com',
    userMobile : '9910708092',
    userRole : 'manager',
    userRoleId : 3,
    userTeamLead : 10,
    userManager : 20,
    userStauts : true
  },
  {
    id : 2,
    userName : 'Nakul Sub Admin',
    userMail : 'sadmin@sadmin.com',
    userMobile : '9910708092',
    userRole : 'sadmin',
    userRoleId : 4,
    userTeamLead : 10,
    userManager : 20,
    userStauts : true
  },
  {
    id : 1,
    userName : 'Nakul Admin',
    userMail : 'admin@admin.com',
    userMobile : '9910708092',
    userRole : 'admin',
    userRoleId : 1,
    userTeamLead : 10,
    userManager : 20,
    userStauts : true
  },
  {
    id : 6,
    userName : 'Nakul Viewer',
    userMail : 'viewer@viewer.com',
    userMobile : '9910708092',
    userRole : 'viewer',
    userRoleId : 6,
    userTeamLead : 10,
    userManager : 20,
    userStauts : true
  },
 // ------------------- Users Members
  {
    id : 7,
    userName : 'Nakul M1',
    userMail : 'm1@m1.com',
    userMobile : '9910708092',
    userRole : 'member',
    userRoleId : 5,
    userTeamLead : 4,
    userManager : 3,
    userStauts : true
  },
  {
    id : 8,
    userName : 'Nakul M1',
    userMail : 'm1@m1.com',
    userMobile : '9910708092',
    userRole : 'member',
    userRoleId : 5,
    userTeamLead : 4,
    userManager : 3,
    userStauts : true
  },
  {
    id : 9,
    userName : 'Nakul M1',
    userMail : 'm1@m1.com',
    userMobile : '9910708092',
    userRole : 'member',
    userRoleId : 5,
    userTeamLead : 4,
    userManager : 3,
    userStauts : true
  },
  {
    id : 10,
    userName : 'Nakul M1',
    userMail : 'm1@m1.com',
    userMobile : '9910708092',
    userRole : 'member',
    userRoleId : 5,
    userTeamLead : 4,
    userManager : 3,
    userStauts : true
  },
  {
    id : 11,
    userName : 'Nakul M1',
    userMail : 'm1@m1.com',
    userMobile : '9910708092',
    userRole : 'member',
    userRoleId : 5,
    userTeamLead : 4,
    userManager : 3,
    userStauts : true
  }];

  constructor() { }

  public getUsers() {
    return this.allUsers;
  }

  public getUser(id) {
    return this.allUsers.filter(item => item.id === id);
  }

  public addUser(user) {
    this.allUsers.push(user);
  }

  public deleteUser(userId) {

  }

  public setCurrentUser(user) {
    this.currentUser = user;
  }

  public getCurrntUser() {
    return this.currentUser;
  }

  public getTeamUsers(id, type) {
    console.log("id, type => ", id, type);
    if (type === 'teamlead') {
      return this.allUsers.filter(item => item.userTeamLead === id);
    }
    if (type === 'manager') {
      return this.allUsers.filter(item => item.userManager === id);
    }
  }
}
