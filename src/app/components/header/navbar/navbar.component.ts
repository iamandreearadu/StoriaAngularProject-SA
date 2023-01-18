import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  BackgroundPhoto: string = '';
  Logo: string = '';
  IsMessageVisible: boolean = false;
  HeightNav: string = '550px';
  coloredTab: string = '';
  correctRoute: boolean = true;

  constructor(
    private route: Router,
    private authServ: AuthService,
    private translateServ: TranslateService
  ) {}

  ngOnInit(): void {
    this.route.events.subscribe(() => {
      this.setBannerAndLogo(this.route.url);
    });
  }

  switchEN() {
    this.translateServ.use('en');
  }

  switchRO() {
    this.translateServ.use('ro');
  }

  setBannerAndLogo(url: string): void {
    this.IsMessageVisible = false;

    switch (url) {
      case '/':
        this.BackgroundPhoto = '../../../assets/rest3.jpg';
        this.Logo = '../../../assets/LocationLogos/STORIAnewCUT.png';
        this.IsMessageVisible = true;
        this.HeightNav = '550px';
        break;
      case '/home':
        this.BackgroundPhoto = '../../../assets/rest3.jpg';
        this.Logo = '../../../assets/LocationLogos/STORIAnewCUT.png';
        this.IsMessageVisible = true;
        this.HeightNav = '550px';
        break;
      case '/events':
        this.BackgroundPhoto = '../../../assets/rest3.jpg';
        this.Logo = '../../../assets/LocationLogos/STORIAnewCUT.png';
        this.HeightNav = '380px';
        break;
      case '/storiacaffe':
        this.BackgroundPhoto = '../../../assets/caffe.jpg';
        this.Logo = '../../../assets/LocationLogos/storiacaffecut.png';
        this.HeightNav = '550px';
        break;
      case '/storiaevents':
        this.BackgroundPhoto = '../../../assets/jaz.jpg';
        this.Logo = '../../../assets/LocationLogos/storiaeventscut.png';
        break;

      default:
        this.BackgroundPhoto = '../../../assets/rest3.jpg';
        this.Logo = '../../../assets/LocationLogos/STORIAnewCUT.png';

        break;
    }
  }

  logout() {
    this.authServ.logout();
    // this.logInLogo = true;
  }
}
