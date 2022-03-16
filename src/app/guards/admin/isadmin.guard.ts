import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../../common/admin.data';

@Injectable({
  providedIn: 'root',
})
export class ISAdminGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(): boolean {
    if (Admin.ThisUSerISAdmin === false) {
      this._router.navigate(['/dashboard']);
    }
    return Admin.ThisUSerISAdmin;
  }
}
