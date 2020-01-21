import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public usersService : UsersService) { }

  authUserLogin(user) {
    const returnUser = this.usersService.getUsers().filter(item => item.userMail === user.userMail);
    if (returnUser.length > 0) {
      return returnUser;
    }
    return false;
  }
}
