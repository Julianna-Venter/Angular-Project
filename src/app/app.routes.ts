import { Routes } from '@angular/router';
import { BookPageComponent } from './components/book-page/book-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileStatsComponent } from './components/profile-stats/profile-stats.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'book/:slug',
        component: BookPageComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'profile',
    component: ProfileStatsComponent,
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
