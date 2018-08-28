import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {CompanyComponent} from './company/company.component';
import {TechnologiesComponent} from './technologies/technologies.component';
import {SupportComponent} from './support/support.component';
import {HomeComponent} from '../home/home.component';
import {TracksComponent} from './tracks/tracks.component';
import {SigninComponent} from '../auth/signin/signin.component';
import {SignupComponent} from '../auth/signup/signup.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {AnimationComponent} from './animation/animation.component';
import {AboutComponent} from './menulinks/about/about.component';
import {GovernanceComponent} from './menulinks/governance/governance.component';
import {TopicsComponent} from "./topics/topics.component";
import {TopicCreateComponent} from "./topic-create/topic-create.component";
import {ContactComponent} from "./contact/contact.component";
import {ContactDetailComponent} from "./contact-detail/contact-detail.component";
import {ContactCreateComponent} from "./contact-create/contact-create.component";
import {ContactEditComponent} from "./contact-edit/contact-edit.component";
import {TrackMasterComponent} from "./track-master/track-master.component";
import {BtsProcessComponent} from "./bts-process/bts-process.component";
import {EmployeeListComponent} from './menulinks/employee-list/employee-list.component';
import {HotelInfoComponent} from './menulinks/hotel-info/hotel-info.component';

const routes: Routes = [
  // { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserListComponent },
  { path: 'create', component: UserCreateComponent },
  { path: 'user/edit/:id', component: UserCreateComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'tech', component: TechnologiesComponent },
  { path: 'support', component: SupportComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'animations', component: AnimationComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'createtopic', component: TopicCreateComponent },
  { path: 'topic/edit/:eid', component: TopicCreateComponent },

  { path: 'about', component: AboutComponent },
  { path: 'governance', component: GovernanceComponent },
  { path: 'employee', component: EmployeeListComponent },
  { path: 'hotel', component: HotelInfoComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'contact-detail/:id',  component: ContactDetailComponent, data: { title: 'Contact Details' }},
  { path: 'contact-create', component: ContactCreateComponent, data: { title: 'Create Contact' }},
  { path: 'contact-edit/:id', component: ContactEditComponent, data: { title: 'Edit Contact' }},

  { path: 'track-master', component: TrackMasterComponent },
  { path: 'bts-process', component: BtsProcessComponent },

  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
