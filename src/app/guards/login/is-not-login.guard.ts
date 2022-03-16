import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorgeService } from 'src/app/services/local-storge.service';

@Injectable({
  providedIn: 'root',
})
export class IsNotLoginGuard implements CanActivate {
  constructor(private _localSV: LocalStorgeService, private _router: Router) {}

  canActivate(): boolean {
    if (this._localSV.GEtLoaclStorageLogin() === null) {
      return true;
    }
    this._router.navigate(['']);
    return false;
  }
}
