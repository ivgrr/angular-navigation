import { NavigationRoute } from './navigation/navigation.types';

export const navigationRoutes: NavigationRoute[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: '/assets/sprites.svg#dashboard',
  },
  {
    title: 'Accounts and Symbols',
    path: '/accounts-and-symbols',
    icon: '/assets/sprites.svg#section-accounts-and-symbols',
    children: [
      {
        title: 'Accounts',
        path: '/accounts-and-symbols/accounts',
        icon: '/assets/sprites.svg#account',
        children: [
          {
            title: 'Related Profiles',
            path: '/accounts-and-symbols/accounts/related-profiles',
          },
          {
            title: 'Accounts Groups',
            path: '/accounts-and-symbols/accounts/accounts-groups',
          },
        ],
      },
      {
        title: 'Symbols',
        path: '/accounts-and-symbols/symbols',
        icon: '/assets/sprites.svg#symbol',
        children: [
          {
            title: 'Contracts',
            path: '/accounts-and-symbols/symbols/contracts',
          },
          {
            title: 'Symbols Groups',
            path: '/accounts-and-symbols/symbols/symbols-groups',
          },
        ],
      },
    ],
  },
];
