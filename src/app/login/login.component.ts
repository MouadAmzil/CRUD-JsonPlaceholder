import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { LocalStorgeService } from '../services/local-storge.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public message = '';

  constructor(
    private fb: FormBuilder,
    private localStorge: LocalStorgeService
  ) {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.hiddenNav();
  }

  SubmitUSer() {
    if (this.login.valid) {
      console.log(this.login.value);
      this.localStorge.SETLoaclStorageLogin(this.login.value);
    } else {
      this.message = 'Invalid Input';
      this.localStorge.DELETELoaclStorageLogin();
    }
  }

  ngOnDestroy(): void {
    this.DisplayNav();
  }
  hiddenNav() {
    let nav = document.getElementById('navBar');
    nav.style.display = 'none';
  }
  DisplayNav() {
    let nav = document.getElementById('navBar');
    nav.style.display = 'none';
  }
}
