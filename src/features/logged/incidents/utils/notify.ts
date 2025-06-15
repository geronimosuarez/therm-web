import { Incident, IncidentStatus } from '../entities/incident';

export const getIncidentMessage = (incident: Incident) => {
  if (incident.status === IncidentStatus.Resolved) {
    return `We have fixed an issue in the ${incident.featureAffected}, thank you for your patience.`;
  }

  let message = `We are experimenting issues in the ${incident.featureAffected} `;

  if (incident.status === IncidentStatus.Investigating) {
    message += 'we are currently investigating the root cause of the issue.';
  }

  if (incident.status === IncidentStatus.Fixing) {
    message +=
      'we are currently fixing the cause of the issue and will update you as soon as it is fixed.';
  }

  return message;
};
