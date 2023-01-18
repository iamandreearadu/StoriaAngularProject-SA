import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class GuardService implements CanActivate {
  constructor(private authServ: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // if (this.authServ.isLoggedIn()) {
    //   return true;
    // } else {
    //   this.router.navigate([""]);
    //   return true;
    // }
    return true;
  }
}
