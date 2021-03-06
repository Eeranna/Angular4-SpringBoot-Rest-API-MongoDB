import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HttpModule } from '@angular/http';
import {HeaderComponent} from "./header/header.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {TechService} from "./services/tech.service";
import {HeaderService} from "./services/header.service";
import {IngredientService} from "./services/ingredient.service";
import { HomeComponent } from './home/home.component';
import {TotalLocationBySowComponent} from "./home/total-location-by-sow/total-location-by-sow.component";
import {TotalSowComponent} from "./home/total-sow/total-sow.component";
import {TotalVendorBySowComponent} from "./home/total-vendor-by-sow/total-vendor-by-sow.component";
import {ServerService} from "./services/server.service";
import { ConcurrentJobsComponent } from './home/concurrent-jobs/concurrent-jobs.component';
import { AppdJobsComponent } from './home/appd-jobs/appd-jobs.component';
import { TidalJobsComponent } from './home/tidal-jobs/tidal-jobs.component';
import {TracksService} from "./services/tracks.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth/auth.service";
import {RegisteruserService} from "./services/registeruser.service";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {AuthGuard} from "./auth/auth-guard.service";
import { MenuComponent } from './menu/menu.component';
import {PopupModule} from "ng2-opd-popup";
import {TopicService} from "./user/topics/TopicService";
import {HttpClientModule} from "@angular/common/http";
import {ContactService} from "./user/contact/contact.service";
import {TrackMasterService} from "./user/track-master/track-master.service";
import {BtsProcessService} from "./user/bts-process/bts-process.service";
import {EmpService} from './user/menulinks/employee-list/emp.service';
import {HotelService} from './user/menulinks/hotel-info/hotel.service';
import {ZomatoService} from './user/menulinks/zomato/zomato.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    TotalLocationBySowComponent,
    TotalSowComponent,
    TotalVendorBySowComponent,
    HomeComponent,
    ConcurrentJobsComponent,
    AppdJobsComponent,
    TidalJobsComponent,
    SigninComponent,
    SignupComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PopupModule.forRoot()
  ],
  providers: [
    TechService,
    HeaderService,
    IngredientService,
    ServerService,
    TracksService,
    AuthService,
    AuthGuard,
    RegisteruserService,
    TopicService,
    ContactService,
    TrackMasterService,
    BtsProcessService,
    EmpService,
    HotelService,
    ZomatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
