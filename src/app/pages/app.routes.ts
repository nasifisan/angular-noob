import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ReactiveCalendarComponent } from './reactive-calendar/reactive-calendar.component';
import { HeroRegistrationComponent } from './hero-registration/hero-registration.component';
import { RouteName } from '../constants/routes';

export const routes: Routes = [
  { path: RouteName.HERO_LIST, component: HeroesComponent },
  {
    path: RouteName.DASHBOARD,
    component: DashboardComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: RouteName.HERO_DETAIL,
    component: HeroDetailComponent,
  },
  {
    path: RouteName.CALENDAR,
    component: ReactiveCalendarComponent,
  },
  {
    path: RouteName.HERO_REGISTRATION,
    component: HeroRegistrationComponent,
  },
];
