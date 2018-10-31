import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {UserRoutingModule} from "./user-routing.module";
import {UserListComponent} from "./user-list/user-list.component";
import {NgModule} from "@angular/core";
import { CompanyComponent } from './company/company.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SupportComponent } from './support/support.component';
import { TracksComponent } from './tracks/tracks.component';
import { AnimationComponent } from './animation/animation.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AboutComponent } from './menulinks/about/about.component';
import { GovernanceComponent } from './menulinks/governance/governance.component';
import {TopicsComponent} from "./topics/topics.component";
import {TopicCreateComponent} from "./topic-create/topic-create.component";
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { TrackMasterComponent } from './track-master/track-master.component';
import { BtsProcessComponent } from './bts-process/bts-process.component';
import {EmployeeListComponent} from './menulinks/employee-list/employee-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {HotelInfoComponent} from './menulinks/hotel-info/hotel-info.component';
import {ZomatoComponent} from './menulinks/zomato/zomato.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule
  ],
  declarations: [
    UserListComponent,
    UserCreateComponent,
    CompanyComponent,
    TechnologiesComponent,
    SupportComponent,
    TracksComponent,
    AnimationComponent,
    AboutComponent,
    GovernanceComponent,
    TopicsComponent,
    TopicCreateComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    ContactEditComponent,
    TrackMasterComponent,
    BtsProcessComponent,
    EmployeeListComponent,
    HotelInfoComponent,
    ZomatoComponent
  ]
})
export class UserModule { }
