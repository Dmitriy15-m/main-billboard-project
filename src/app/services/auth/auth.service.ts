import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { IUser } from 'src/app/pages/registration-page/models/registration';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  isLogin = new BehaviorSubject<boolean>(false);
  isLogin$ = this.isLogin.asObservable();

  private checkSignedUp(formvalue: IUser): IUser | undefined {
    let usersList = this.getUsersFrmLocalStorage();
    let isExist = usersList.find(
      (user) =>
        user.password == formvalue.password && user.phone == formvalue.phone
    );
    return isExist;
  }

  private getUsersFrmLocalStorage(): IUser[] {
    let users = localStorage.getItem('users');
    if (users !== null) {
      let usersList: IUser[] = JSON.parse(users);
      return usersList;
    } else return [];
  }

  private setUserToLocalStorage(formvalue: IUser): void {
    let usersList: IUser[] = this.getUsersFrmLocalStorage();
    usersList.push(formvalue);
    localStorage.setItem('users', JSON.stringify(usersList));
  }

  private setToken() {
    localStorage.setItem('token', String(Math.random()));
  }

  private getToken() {
    return localStorage.getItem('token') !== null;
  }

  signUp(formvalue: IUser): void {
    let isExist = this.checkSignedUp(formvalue);
    if (isExist) {
      alert('Пользователь с такими данными существует');
    } else {
      this.setUserToLocalStorage(formvalue);
      alert('Вы успешно зарегестрированы');
      this.router.navigate(['auth-page']);
    }
  }

  logIn(formvalue: IUser): void {
    let isExistUser = this.checkSignedUp(formvalue);
    if (isExistUser) {
      this.setToken();
      this.isLogin.next(true);
      alert('Вы вошли в систему!');
      this.router.navigate(['/catalog']);
    }
  }

  logOut(value: boolean) {
    localStorage.removeItem('token');
    this.isLogin.next(!value);
  }

  getAccess() {
    if (this.getToken()) {
      this.isLogin.next(true);
    }
  }
}
