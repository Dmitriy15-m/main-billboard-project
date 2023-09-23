import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, of } from 'rxjs';
import { IUser } from 'src/app/pages/registration-page/models/registration';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}


  private checkSignedUp(formvalue: IUser) {
    let usersList = this.getUsersFrmLocalStorage();
    let isExist = usersList.find(
      (user) =>
        user.password == formvalue.password && user.phone == formvalue.phone
    );
    return isExist;
  }

  private getUsersFrmLocalStorage() {
    let users = localStorage.getItem('users');
    if (users !== null) {
      let usersList: IUser[] = JSON.parse(users);
      return usersList;
    } else return [];
  }

  private setUserToLocalStorage(formvalue: IUser) {
    let usersList: IUser[] = this.getUsersFrmLocalStorage();
    usersList.push(formvalue);
    localStorage.setItem('users', JSON.stringify(usersList));
  }

  signUp(formvalue: IUser) {
    let isExist = this.checkSignedUp(formvalue);
    if (isExist) {
      alert('Пользователь с такими данными существует');
    } else {
      this.setUserToLocalStorage(formvalue);
      alert('Вы успешно зарегестрированы');
      this.router.navigate(['auth-page']);
    }
  }
}
