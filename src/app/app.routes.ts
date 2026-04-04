import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'welcome', loadComponent: () => import('./pages/welcome/welcome').then((m) => m.Welcome) },
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: 'about-me', loadComponent: () => import('./pages/about-me/about-me').then((m) => m.AboutMe) },
    { path: 'login', loadComponent: () => import('./pages/auth/login/login').then((m) => m.Login) },
    { path: 'register', loadComponent: () => import('./pages/auth/register/register').then((m) => m.Register) },
    { path: '**', pathMatch: 'full', loadComponent: () => import('./pages/not-found-error/not-found-error').then((m) => m.NotFoundError) },

];
