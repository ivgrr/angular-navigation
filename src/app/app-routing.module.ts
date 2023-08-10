import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard').then((m) => m.DashboardModule),
  },
  {
    path: 'accounts-and-symbols',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/accounts-and-symbols').then(
            (m) => m.AccountsAndSymbolsModule
          ),
      },
      {
        path: 'accounts',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/accounts').then((m) => m.AccountsModule),
          },
          {
            path: 'related-profiles',
            loadChildren: () =>
              import('./pages/related-profiles').then(
                (m) => m.RelatedProfilesModule
              ),
          },
          {
            path: 'accounts-groups',
            loadChildren: () =>
              import('./pages/accounts-groups').then(
                (m) => m.AccountsGroupsModule
              ),
          },
        ],
      },
      {
        path: 'symbols',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./pages/symbols').then((m) => m.SymbolsModule),
          },
          {
            path: 'contracts',
            loadChildren: () =>
              import('./pages/contracts/').then((m) => m.ContractsModule),
          },
          {
            path: 'symbols-groups',
            loadChildren: () =>
              import('./pages/symbols-groups').then(
                (m) => m.SymbolsGroupsModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
