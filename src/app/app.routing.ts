import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { EventsComponent } from './events/events.component';
import { TypographyComponent } from './components/typography/typography.component';

import { AuthGuard } from './service/auth/auth.guard';
import { LoggedIn } from './service/auth/auth.logged-in';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutComponent } from './about/about.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'login',           component: SignupComponent, canActivate:[LoggedIn] },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'evenements',       component: EventsComponent, canActivate: [AuthGuard] },
    { path: 'typography',       component: TypographyComponent },
    { path: 'register',       component: RegistrationComponent,canActivate:[LoggedIn] },
    { path: 'settings/:id',       component: SettingsComponent, canActivate: [AuthGuard] },
    { path: 'events/:id', component: EventDetailsComponent,canActivate: [AuthGuard] },
    { path: 'notification', component: NotificationComponent },
    { path: 'timeline', component: TimelineComponent,canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent }


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
