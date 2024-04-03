import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      // {
      //   path: 'top',
      //   component: TopMangaComponent,
      // },
      // {
      //   path: 'manga/:slug',
      //   component: SelectedMangaComponent,
      // },
      // {
      //   path: 'manga/:slug/chapter/:hid',
      //   component: SelectedMangaComponent,
      // },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
