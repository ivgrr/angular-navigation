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
            data: [
              {
                name: 'John Doe',
                position: 'Manager',
                description:
                  'Experienced manager with a focus on project management.',
                contact: 'john.doe@example.com',
              },
              {
                name: 'Jane Smith',
                position: 'Analyst',
                description: 'Financial analyst specializing in market trends.',
                contact: 'jane.smith@example.com',
              },
            ],
          },
          {
            title: 'Accounts Groups',
            path: '/accounts-and-symbols/accounts/accounts-groups',
            data: [
              {
                name: 'Finance Department',
                description:
                  'Group of accounts related to financial operations.',
                accounts: ['Account A', 'Account B', 'Account C'],
              },
              {
                name: 'Sales Team',
                description: 'Group of accounts managed by the sales team.',
                accounts: ['Account X', 'Account Y', 'Account Z'],
              },
            ],
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
            data: [
              {
                name: 'Service Agreement',
                description:
                  'The Service Agreement helps you conveniently provide various services.',
                type: 'Service',
                amount: 15000,
              },
              {
                name: 'Supply Agreement',
                description:
                  'The Supply Agreement helps you to supply services without various risks.',
                type: 'Supply',
                amount: 25000,
              },
            ],
          },
          {
            title: 'Symbols Groups',
            path: '/accounts-and-symbols/symbols/symbols-groups',
            data: [
              {
                name: 'Technology Stocks',
                description: 'Group of technology-related stocks.',
                symbols: ['AAPL', 'GOOGL', 'MSFT'],
              },
              {
                name: 'Commodities',
                description: 'Group of commodity symbols.',
                symbols: ['Gold', 'Silver', 'Oil'],
              },
            ],
          },
        ],
      },
    ],
  },
];
