import { AlertTriangle, Zap } from 'lucide-react';
import { Incident, IncidentType } from '../entities/incident';

export const SEVERITY_ORDER = [
  IncidentType.Critical,
  IncidentType.High,
  IncidentType.Medium,
  IncidentType.Low,
];

export const SEVERITY_ICONS = {
  [IncidentType.Critical]: <AlertTriangle className='h-4 w-4 text-red-600' />,
  [IncidentType.High]: <Zap className='h-4 w-4 text-orange-600' />,
  [IncidentType.Medium]: <AlertTriangle className='h-4 w-4 text-yellow-600' />,
  [IncidentType.Low]: <AlertTriangle className='h-4 w-4 text-green-600' />,
};

export const SEVERITY_COLORS = {
  [IncidentType.Critical]: 'bg-red-100 text-red-800 border-red-200',
  [IncidentType.High]: 'bg-orange-100 text-orange-800 border-orange-200',
  [IncidentType.Medium]: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  [IncidentType.Low]: 'bg-green-100 text-green-800 border-green-200',
};

export const sortIncidentsBySeverity = (incidents: Incident[]): Incident[] =>
  incidents.sort(
    (a, b) => SEVERITY_ORDER.indexOf(a.type) - SEVERITY_ORDER.indexOf(b.type)
  );

export const getSeverityIcon = (severity: IncidentType) =>
  SEVERITY_ICONS[severity] ?? SEVERITY_ICONS[IncidentType.Critical];

export const getSeverityColor = (severity: IncidentType) =>
  SEVERITY_COLORS[severity] ?? SEVERITY_COLORS[IncidentType.Critical];

export const getSeverityCount = (incidents: Incident[]) => {
  let criticalCount = 0;
  let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;

  incidents.forEach((incident) => {
    if (incident.type === IncidentType.Critical) criticalCount++;
    if (incident.type === IncidentType.High) highCount++;
    if (incident.type === IncidentType.Medium) mediumCount++;
    if (incident.type === IncidentType.Low) lowCount++;
  });

  return {
    criticalCount,
    highCount,
    mediumCount,
    lowCount,
  };
};
