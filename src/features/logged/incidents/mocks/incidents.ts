import { Incident, IncidentType, IncidentStatus } from '../entities/incident';

export const incidentsMock: Incident[] = [
  {
    id: 'INC-001',
    name: 'Payment Processing Failure',
    description:
      'Users unable to complete checkout process due to payment gateway timeout',
    usersAffected: 1247,
    timeOpened: '2 hours ago',
    featureAffected: 'Checkout Flow',
    type: IncidentType.Critical,
    status: IncidentStatus.Investigating,
    notificationsSent: [
      {
        timestamp: '1 hour ago',
        type: 'email',
        recipients: 1247,
      },
      {
        timestamp: '30 minutes ago',
        type: 'push',
        recipients: 800,
      },
    ],
  },
  {
    id: 'INC-002',
    name: 'Login Authentication Slow',
    description:
      'Increased response times for user authentication causing login delays',
    usersAffected: 892,
    timeOpened: '45 minutes ago',
    featureAffected: 'User Authentication',
    type: IncidentType.High,
    status: IncidentStatus.Open,
    notificationsSent: [],
  },
  {
    id: 'INC-003',
    name: 'Search Results Not Loading',
    description:
      'Product search functionality returning empty results for specific categories',
    usersAffected: 324,
    timeOpened: '1 hour ago',
    featureAffected: 'Product Search',
    type: IncidentType.Medium,
    status: IncidentStatus.Investigating,
    notificationsSent: [
      {
        timestamp: '2 hours ago',
        type: 'whatsapp',
        recipients: 38,
      },
      {
        timestamp: '30 minutes ago',
        type: 'push',
        recipients: 1091,
      },
    ],
  },
  {
    id: 'INC-004',
    name: 'Email Notifications Delayed',
    description:
      'Order confirmation emails experiencing significant delivery delays',
    usersAffected: 156,
    timeOpened: '3 hours ago',
    featureAffected: 'Email System',
    type: IncidentType.Low,
    status: IncidentStatus.Open,
    notificationsSent: [],
  },
  {
    id: 'INC-005',
    name: 'Mobile App Crash on Startup',
    description:
      'iOS app crashing immediately after launch for users on version 14.2',
    usersAffected: 2103,
    timeOpened: '4 hours ago',
    featureAffected: 'Mobile App Launch',
    type: IncidentType.Critical,
    status: IncidentStatus.Investigating,
    notificationsSent: [],
  },
  {
    id: 'INC-006',
    name: 'Dashboard Loading Issues',
    description:
      'User dashboard widgets failing to load properly on desktop browsers',
    usersAffected: 67,
    timeOpened: '30 minutes ago',
    featureAffected: 'User Dashboard',
    type: IncidentType.Medium,
    status: IncidentStatus.Open,
    notificationsSent: [],
  },
];
