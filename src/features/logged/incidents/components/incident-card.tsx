import { Clock, Users, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Incident,
  IncidentActionType,
  IncidentType,
} from '../entities/incident';
import { getSeverityColor, getSeverityIcon } from '../utils/severity';
import { getStatusColor } from '../utils/status';
import { Button } from '@/components/ui/button';
import { FunctionComponent, useState } from 'react';
import { IncidentActionsModal } from './incident-actions-modal';

/*
 * Types
 */

interface IncidentActionsProps {
  handleContactUsers: () => void;
  isCritical: boolean;
}

export default function IncidentCard(incident: Incident) {
  const {
    type,
    status,
    id,
    name,
    description,
    usersAffected,
    timeOpened,
    featureAffected,
    notificationsSent,
  } = incident;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState<IncidentActionType | null>(null);

  const handleContactUsers = () => {
    setActionType(IncidentActionType.Contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActionType(null);
  };

  const isCritical = type === IncidentType.Critical;

  return (
    <Card key={id} className='hover:shadow-lg transition-shadow duration-200'>
      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-2'>
            {getSeverityIcon(type)}
            <CardTitle className='text-lg font-semibold text-gray-900'>
              {name}
            </CardTitle>
          </div>
          <Badge variant='outline' className={getSeverityColor(type)}>
            {type.toUpperCase()}
          </Badge>
        </div>
        <div className='flex items-center gap-2 mt-2'>
          <Badge variant='outline' className={getStatusColor(status)}>
            {status.toUpperCase()}
          </Badge>
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

        {notificationsSent.length > 0 && (
          <div className='pt-2 border-t border-gray-100'>
            <div className='flex items-center gap-2 mb-2'>
              <Bell className='h-4 w-4 text-gray-500' />
              <p className='text-xs text-gray-500'>Notifications Sent</p>
            </div>
            <div className='space-y-2'>
              {notificationsSent.map((notification, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between text-xs'
                >
                  <div className='flex items-center gap-2'>
                    <Badge variant='outline' className='bg-gray-50'>
                      EMAIL
                    </Badge>
                    <span className='text-gray-600'>
                      {incident.usersAffected} recipients
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <IncidentActions
          handleContactUsers={handleContactUsers}
          isCritical={isCritical}
        />
        <IncidentActionsModal
          incident={incident}
          isOpen={isModalOpen}
          onClose={closeModal}
          actionType={actionType ?? IncidentActionType.Contact}
        />
      </CardContent>
    </Card>
  );
}

const IncidentActions: FunctionComponent<IncidentActionsProps> = ({
  handleContactUsers,
  isCritical,
}) => (
  <div className='flex flex-col gap-2'>
    <div className='flex gap-2'>
      <Button
        size='sm'
        variant='outline'
        onClick={handleContactUsers}
        className='flex-1 text-xs'
      >
        <Users className='h-3 w-3 mr-1' />
        Contact Users
      </Button>
    </div>
    {isCritical && (
      <span className='text-xs text-gray-500'>
        On-Call Engineers were notified
      </span>
    )}
  </div>
);
