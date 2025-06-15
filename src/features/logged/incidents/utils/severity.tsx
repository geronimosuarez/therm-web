import { AlertTriangle, Zap } from 'lucide-react';
import { Incident, IncidentSeverity } from '../entities/incident';

export const SEVERITY_ORDER = [
  IncidentSeverity.Critical,
  IncidentSeverity.High,
  IncidentSeverity.Medium,
  IncidentSeverity.Low,
];

export const SEVERITY_ICONS = {
  [IncidentSeverity.Critical]: (
    <AlertTriangle className='h-4 w-4 text-red-600' />
  ),
  [IncidentSeverity.High]: <Zap className='h-4 w-4 text-orange-600' />,
  [IncidentSeverity.Medium]: (
    <AlertTriangle className='h-4 w-4 text-yellow-600' />
  ),
  [IncidentSeverity.Low]: <AlertTriangle className='h-4 w-4 text-green-600' />,
};

export const SEVERITY_COLORS = {
  [IncidentSeverity.Critical]: 'bg-red-100 text-red-800 border-red-200',
  [IncidentSeverity.High]: 'bg-orange-100 text-orange-800 border-orange-200',
  [IncidentSeverity.Medium]: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  [IncidentSeverity.Low]: 'bg-green-100 text-green-800 border-green-200',
};

export const sortIncidentsBySeverity = (incidents: Incident[]): Incident[] =>
  incidents.sort(
    (a, b) =>
      SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity)
  );

export const getSeverityIcon = (severity: IncidentSeverity) =>
  SEVERITY_ICONS[severity] ?? SEVERITY_ICONS[IncidentSeverity.Critical];

export const getSeverityColor = (severity: IncidentSeverity) =>
  SEVERITY_COLORS[severity] ?? SEVERITY_COLORS[IncidentSeverity.Critical];

export const getSeverityCount = (incidents: Incident[]) => {
  let criticalCount = 0;
  let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;

  incidents.forEach((incident) => {
    if (incident.severity === IncidentSeverity.Critical) criticalCount++;
    if (incident.severity === IncidentSeverity.High) highCount++;
    if (incident.severity === IncidentSeverity.Medium) mediumCount++;
    if (incident.severity === IncidentSeverity.Low) lowCount++;
  });

  return {
    criticalCount,
    highCount,
    mediumCount,
    lowCount,
  };
};
