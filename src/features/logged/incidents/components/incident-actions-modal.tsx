'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Incident,
  IncidentActionType,
} from '@/features/logged/incidents/entities/incident';
import { getIncidentMessage } from '../utils/notify';
import { Textarea } from '@/components/ui/textarea';
import { useSendNotification } from '../hooks/use-send-notification';

interface IncidentActionsModalProps {
  incident: Incident;
  isOpen: boolean;
  onClose: () => void;
  actionType: IncidentActionType;
}

export function IncidentActionsModal({
  incident,
  isOpen,
  onClose,
  actionType,
}: IncidentActionsModalProps) {
  const { sendNotification } = useSendNotification();
  const [workaround, setWorkaround] = useState<string>('');
  const [contactMethod, setContactMethod] = useState('email');
  const [includeWorkaround, setIncludeWorkaround] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const incidentMessage = getIncidentMessage(incident);

  const handleClose = () => {
    setContactMethod('email');
    setIncludeWorkaround(false);
    setIsSubmitting(false);
    onClose();
  };

  const handleSubmit = async () => {
    if (!incident) return;

    setIsSubmitting(true);

    await sendNotification({
      incidentId: incident.id,
      subject: incident.name,
      message: incidentMessage,
    });

    handleClose();
  };

  if (!incident) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Contact Affected Users</DialogTitle>
          <DialogDescription>
            Send a message to ${incident.usersAffected} affected users about $
            {incident.name}
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4 py-4'>
          {actionType === 'contact' && (
            <div className='space-y-3'>
              <Label>Contact Method</Label>
              <RadioGroup
                value={contactMethod}
                onValueChange={setContactMethod}
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='email' id='email' />
                  <Label htmlFor='email'>Email</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='sms' id='sms' />
                  <Label htmlFor='sms'>SMS</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='push' id='push' />
                  <Label htmlFor='push'>Push Notification</Label>
                </div>
              </RadioGroup>
            </div>
          )}

          <div className='space-y-2'>
            <Label htmlFor='message'>Message:</Label>
            <p className='text-gray-600'>{incidentMessage}</p>
          </div>

          {actionType === 'contact' && (
            <div className='flex items-center space-x-2'>
              <Checkbox
                id='workaround'
                checked={includeWorkaround}
                onCheckedChange={(checked) =>
                  setIncludeWorkaround(checked as boolean)
                }
              />
              <Label htmlFor='workaround'>
                Include workaround instructions
              </Label>
            </div>
          )}

          {includeWorkaround && (
            <div className='space-y-2'>
              <Textarea
                placeholder='Enter your instructions here...'
                value={workaround}
                onChange={(e) => setWorkaround(e.target.value)}
              />
            </div>
          )}

          <div className='bg-gray-50 p-3 rounded-lg text-sm'>
            <p className='font-medium text-gray-700'>Incident Details:</p>
            <p className='text-gray-600'>ID: {incident.id}</p>
            <p className='text-gray-600'>
              Severity: {incident.type.toUpperCase()}
            </p>
            <p className='text-gray-600'>
              Users Affected: {incident.usersAffected.toLocaleString()}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant='outline'
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting
              ? 'Sending...'
              : actionType === 'contact'
              ? 'Contact Users'
              : 'Send Notification'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
