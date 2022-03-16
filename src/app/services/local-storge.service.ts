import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { Admin } from '../common/admin.data';
@Injectable({
  providedIn: 'root',
})
export class LocalStorgeService {
  constructor() {}
  Task: User = {
    id: Math.floor(Math.random() * 1000) + 1,
    email: '',
    password: '',
    isAdmin: false,
  };

  SETLoaclStorageLogin(obj: object) {
    this.checkISAdmin(obj['email'], obj['password']);
    localStorage.setItem('userLogin', JSON.stringify(obj));
  }
  GEtLoaclStorageLogin(): object {
    let User: object = [];
    User = JSON.parse(localStorage.getItem('userLogin'));
    return User;
  }
  BooleenCheckUser(): boolean {
    let User = this.GEtLoaclStorageLogin();
    if (User === []) {
      return false;
    }
    return true;
  }
  DELETELoaclStorageLogin() {
    Admin.ThisUSerISAdmin = false;
    localStorage.clear();
  }

  checkISAdmin(email: string, password: string) {
    for (let i = 0; i < Admin.ListOFAdmin.length; i++) {
      if (
        Admin.ListOFAdmin[i].email === email &&
        Admin.ListOFAdmin[i].password === password
      ) {
        Admin.ThisUSerISAdmin = true;
      }
    }
  }
}
