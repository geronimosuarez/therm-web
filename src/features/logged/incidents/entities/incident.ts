export interface Incident {
  id: string;
  name: string;
  description: string;
  usersAffected: number;
  timeOpened: string;
  featureAffected: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
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
}
