import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'repos',
    pathMatch: 'full',
  },
  {
    path: 'repos',
    loadComponent: () =>
      import('./features/repo-list/repo-list.component').then((m) => m.RepoListComponent),
  },
];
