import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public allUsers = [];

  constructor(private http: HttpClient) {}

  public getUsers() {
    this.fetchUsers().subscribe((data) => {
      data.forEach((item) => {
        this.allUsers.push({
          id : item.id,
          userName : item.user_name,
          userMail : item.user_mail,
          userMobile : item.user_mobile,
          userRole : item.user_role,
          userRoleId : item.user_role_id,
          userTeamLead : item.user_team_lead,
          userManager : item.user_manager,
          userStauts : item.user_status
        });
      });
    });
    return this.allUsers;
  }

  public fetchUsers() {
    return this.http.get('http://localhost:3000/users');
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
