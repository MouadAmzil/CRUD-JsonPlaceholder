import { Injectable } from '@angular/core';
import {
  // ActivatedRouteSnapshot,
  CanActivate,
  // RouterStateSnapshot,
  // UrlTree,
} from '@angular/router';
import { Router } from '@angular/router'; // import router from angular router
// import { Observable } from 'rxjs';
import { LocalStorgeService } from 'src/app/services/local-storge.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _localSV: LocalStorgeService, private _router: Router) {}
  canActivate(): boolean {
    if (this._localSV.GEtLoaclStorageLogin() === null) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
