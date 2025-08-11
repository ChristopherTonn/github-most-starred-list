import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/repo-list/repo-list.component').then((m) => m.RepoListComponent),
  },
  {
    path: '',
    redirectTo: '/repos',
    pathMatch: 'full',
  },
];
