import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorgeService } from './services/local-storge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _localSV: LocalStorgeService, private _router: Router) {}
  title = 'Dashborad';
  logout() {
    this._localSV.DELETELoaclStorageLogin();
    this._router.navigate(['/login']);
  }
}
