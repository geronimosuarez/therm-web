export interface Incident {
  id: string;
  name: string;
  description: string;
  usersAffected: number;
  timeOpened: string;
  featureAffected: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  notificationsSent: {
    timestamp: string;
    type: string;
    recipients: number;
  }[];
}

export enum IncidentSeverity {
  Critical = 'critical',
  High = 'high',
  Medium = 'medium',
  Low = 'low',
}

export enum IncidentStatus {
  Open = 'open',
  Investigating = 'investigating',
  Resolved = 'resolved',
  Fixing = 'fixing',
}

export enum IncidentActionType {
  Contact = 'contact',
  Notify = 'notify',
}
