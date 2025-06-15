import { Clock, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Incident } from './entities/incident';
import { getSeverityColor } from './utils/severity';
import { getSeverityIcon } from './utils/severity';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'open':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'investigating':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'resolved':
      return 'bg-green-100 text-green-800 border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export default function IncidentCard({
  severity,
  status,
  id,
  name,
  description,
  usersAffected,
  timeOpened,
  featureAffected,
}: Incident) {
  return (
    <Card key={id} className='hover:shadow-lg transition-shadow duration-200'>
      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-2'>
            {getSeverityIcon(severity)}
            <CardTitle className='text-lg font-semibold text-gray-900'>
              {name}
            </CardTitle>
          </div>
          <Badge variant='outline' className={getSeverityColor(severity)}>
            {severity.toUpperCase()}
          </Badge>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <Badge variant='outline' className={getStatusColor(status)}>
            {status.toUpperCase()}
          </Badge>
          <span className='text-xs text-gray-500'>#{id}</span>
        </div>
      </CardHeader>

      <CardContent className='space-y-4'>
        <p className='text-sm text-gray-600 leading-relaxed'>{description}</p>

        <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center gap-2'>
            <Users className='h-4 w-4 text-gray-500' />
            <div>
              <p className='text-xs text-gray-500'>Users Affected</p>
              <p className='font-semibold text-gray-900'>
                {usersAffected.toLocaleString()}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Clock className='h-4 w-4 text-gray-500' />
            <div>
              <p className='text-xs text-gray-500'>Time Opened</p>
              <p className='font-semibold text-gray-900'>{timeOpened}</p>
            </div>
          </div>
        </div>

        <div className='pt-2 border-t border-gray-100'>
          <p className='text-xs text-gray-500 mb-1'>Feature</p>
          <Badge variant='secondary' className='bg-gray-100 text-gray-700'>
            {featureAffected}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
