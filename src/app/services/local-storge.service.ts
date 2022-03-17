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
    localStorage.setItem('userLogin', JSON.stringify(obj));
    this.checkISAdmin();
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

  checkISAdmin() {
    let use = this.GEtLoaclStorageLogin();
    if (use) {
      console.log(use);
      for (let i = 0; i < Admin.ListOFAdmin.length; i++) {
        if (
          Admin.ListOFAdmin[i].email === use['email'] &&
          Admin.ListOFAdmin[i].password === use['password']
        ) {
          Admin.ThisUSerISAdmin = true;
        }
      }
    }
  }
}
