import { API_URL } from '@/core/api';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

interface SendNotificationParams {
  incidentId: string;
  subject: string;
  message: string;
}

const sendNotification = async ({
  incidentId,
  subject,
  message,
}: SendNotificationParams) => {
  const { data } = await axios.post(`${API_URL}/notifications/send`, {
    incidentId,
    subject,
    message,
  });
  return data;
};

export const useSendNotification = () => {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: sendNotification,
  });

  return {
    sendNotification: mutateAsync,
    isPending,
  };
};
