import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home.section1/home.component';
import { StoriaCaffeComponent } from './components/locations/storia-caffe/storia-caffe.component';
import { StoriaEventsComponent } from './components/locations/storia-events/storia-events.component';
import { StoriaItaliaComponent } from './components/locations/storia-italia/storia-italia.component';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/header/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'storiaitalia', component: StoriaItaliaComponent },
  { path: 'storiacaffe', component: StoriaCaffeComponent },
  { path: 'storiaevents', component: StoriaEventsComponent },
  { path: 'events', component: EventsComponent, canActivate: [GuardService] },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
