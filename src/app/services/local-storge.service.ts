import { Injectable } from '@angular/core';
import { json } from 'express';

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
  DELETELoaclStorageLogin() {
    console.log(localStorage.removeItem('userLogin'));
    localStorage.removeItem('userLogin');
  }
}
