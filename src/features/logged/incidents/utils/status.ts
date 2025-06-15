export enum IncidentStatus {
  Open = 'open',
  Investigating = 'investigating',
  Resolved = 'resolved',
  Fixing = 'fixing',
}

const STATUS_COLOR_MAPPER = {
  [IncidentStatus.Open]: 'bg-blue-100 text-blue-800 border-blue-200',
  [IncidentStatus.Investigating]:
    'bg-purple-100 text-purple-800 border-purple-200',
  [IncidentStatus.Resolved]: 'bg-green-100 text-green-800 border-green-200',
  [IncidentStatus.Fixing]: 'bg-yellow-100 text-yellow-800 border-yellow-200',
};

export const getStatusColor = (status: IncidentStatus): string =>
  STATUS_COLOR_MAPPER[status] ?? STATUS_COLOR_MAPPER[IncidentStatus.Open];
