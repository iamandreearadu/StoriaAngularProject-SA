import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Storia-Project-Angular';

  languages = ['en', 'ro'];

  constructor(private translateServ: TranslateService) {}

  ngOnInit() {
    //  this.translateServ.setDefaultLang('en');
    this.translateServ.use('en');
  }
}
