import { Incident } from '../entities/incident';

export const incidentsMock: Incident[] = [
  {
    id: 'INC-001',
    name: 'Payment Processing Failure',
    description:
      'Users unable to complete checkout process due to payment gateway timeout',
    usersAffected: 1247,
    timeOpened: '2 hours ago',
    featureAffected: 'Checkout Flow',
    severity: 'critical',
    status: 'investigating',
  },
  {
    id: 'INC-002',
    name: 'Login Authentication Slow',
    description:
      'Increased response times for user authentication causing login delays',
    usersAffected: 892,
    timeOpened: '45 minutes ago',
    featureAffected: 'User Authentication',
    severity: 'high',
    status: 'open',
  },
  {
    id: 'INC-003',
    name: 'Search Results Not Loading',
    description:
      'Product search functionality returning empty results for specific categories',
    usersAffected: 324,
    timeOpened: '1 hour ago',
    featureAffected: 'Product Search',
    severity: 'medium',
    status: 'investigating',
  },
  {
    id: 'INC-004',
    name: 'Email Notifications Delayed',
    description:
      'Order confirmation emails experiencing significant delivery delays',
    usersAffected: 156,
    timeOpened: '3 hours ago',
    featureAffected: 'Email System',
    severity: 'low',
    status: 'open',
  },
  {
    id: 'INC-005',
    name: 'Mobile App Crash on Startup',
    description:
      'iOS app crashing immediately after launch for users on version 14.2',
    usersAffected: 2103,
    timeOpened: '4 hours ago',
    featureAffected: 'Mobile App Launch',
    severity: 'critical',
    status: 'investigating',
  },
  {
    id: 'INC-006',
    name: 'Dashboard Loading Issues',
    description:
      'User dashboard widgets failing to load properly on desktop browsers',
    usersAffected: 67,
    timeOpened: '30 minutes ago',
    featureAffected: 'User Dashboard',
    severity: 'medium',
    status: 'open',
  },
];
