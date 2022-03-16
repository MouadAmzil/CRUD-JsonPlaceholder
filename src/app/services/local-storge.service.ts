import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorgeService {
  constructor() {}

  SETLoaclStorageLogin(obj: object) {
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
    localStorage.clear();
  }
}
