import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  setData(token: string): void {
    sessionStorage.setItem("TOKEN", token);
  }

  getData(): string | null {
    return sessionStorage.getItem("TOKEN");
  }
  isLoggedIn() {
    return this.getData() !== undefined;
  }

  logout() {
    sessionStorage.removeItem("TOKEN");
    // this.router.navigate(["/"]);
  }

  login({ email, password }: any): Observable<any> {
    if (email === "admin" && password === "admin") {
      this.setData("ADMIN");
      return of({ email, password });
    } else if (email === "user" && password === "user") {
      this.setData("USER");
      return of({ email, password });
    }
    return throwError(new Error("Failed to login"));
  }
}
