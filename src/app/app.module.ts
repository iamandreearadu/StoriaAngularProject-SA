import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer-fn/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormComponent } from './components/header/form/form.component';
import { StoriaItaliaComponent } from './components/locations/storia-italia/storia-italia.component';
import { StoriaCaffeComponent } from './components/locations/storia-caffe/storia-caffe.component';
import { StoriaEventsComponent } from './components/locations/storia-events/storia-events.component';
import { HomeComponent } from './components/home.section1/home.component';
import { HomeSection2Component } from './components/home.section2/home.section2.component';
import { HomeSection3Component } from './components/home.section3/home.section3.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactMapsComponent } from './components/contact.maps/contact.maps.component';
import { EventsComponent } from './components/events/events.component';
import { ModalComponent } from './components/header/modal/modal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NewsletterComponent } from './components/footer-fn/newsletter/newsletter.component';
import { MyButtonComponent } from './shared/my-button/my-button.component';
import { ModalEventComponent } from './components/modal-event/modal-event.component';
import { LoginComponent } from './components/header/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    FormComponent,
    StoriaItaliaComponent,
    StoriaCaffeComponent,
    StoriaEventsComponent,
    HomeComponent,
    HomeSection2Component,
    HomeSection3Component,
    ContactFormComponent,
    ContactMapsComponent,

    EventsComponent,
    ModalComponent,
    CarouselComponent,
    NewsletterComponent,
    MyButtonComponent,
    NavbarComponent,
    ModalEventComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
