import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isError: boolean = false;
  modalRef?: BsModalRef;
  isLoggedIn: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private eventService: BsModalService,
    private authSrv: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.eventService.show(template);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authSrv.login(this.loginForm.value).subscribe(
        (res) => {
          this.router.navigate(['/']);
          this.modalRef?.hide();
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
    let token = sessionStorage.getItem('TOKEN');
    if (token) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
  clearStorage() {
    this.authSrv.logout();
    this.router.navigate(['/']);
    this.isLoggedIn = false;
  }
}
