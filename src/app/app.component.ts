import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Storia-Project-Angular';
  correctRoute: boolean = true;
  languages = ['en', 'ro'];

  constructor(private translateServ: TranslateService, private route: Router) {}

  ngOnInit() {
    //  this.translateServ.setDefaultLang('en');
    this.translateServ.use('en');
    this.route.events.subscribe(() => {
      this.checkRoute(this.route.url);
    });
  }
  checkRoute(url: string) {
    this.correctRoute = true;
    if (
      url === '/' ||
      url === '/home' ||
      url === '/aboutus' ||
      url === '/contact' ||
      url === '/storiaitalia' ||
      url === '/storiacaffe' ||
      url === '/storiaevents' ||
      url === '/events' ||
      url === '/login' ||
      url === '/'
    ) {
      this.correctRoute = true;
    } else {
      this.correctRoute = false;
    }
    //   switch (url) {
    //     case '/':
    //       this.correctRoute = true;
    //       break;
    //     case '/events':
    //       this.correctRoute = false;
    //       break;
    //     default:
    //       this.correctRoute = true;
    //       break;
    //  }
  }
}
