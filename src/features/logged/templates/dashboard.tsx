'use client';

import Header from '@/components/molecules/header';
import {
  getSeverityCount,
  sortIncidentsBySeverity,
} from '../incidents/utils/severity';
import { useGetIncidients } from '../incidents/hooks/use-get-incidents';
import { IncidentCount } from '../incidents/components/incident-count';
import { useMemo } from 'react';
import IncidentCard from '../incidents/components/incident-card';

export default function Dashboard() {
  const { incidents } = useGetIncidients();

  const severityCount = getSeverityCount(incidents);

  const sortedIncidents = useMemo(
    () => sortIncidentsBySeverity(incidents),
    [incidents]
  );

  return (
    <div>
      <Header />

      <div className='min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gray-900'>Live incidents</h1>
            <IncidentCount {...severityCount} />
          </div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {sortedIncidents.map((incident) => (
              <IncidentCard {...incident} key={incident.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
