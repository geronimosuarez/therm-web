// import { useQuery } from '@tanstack/react-query';
// import { Incident } from '../entities/incident';
// import { API_URL } from '@/core/api';
// import axios from 'axios';
import { incidentsMock } from '../mocks/incidents';

// const getIncidents = async (): Promise<Incident[]> => {
//   const { data } = await axios.get(`${API_URL}/incidents`);
//   return data;
// };

export const useGetIncidients = () => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['incidents'],
  //   queryFn: getIncidents,
  //   // refetchInterval:
  // });

  // console.log(data);
  // console.log(error);

  return {
    isLoading: true,
    error: null,
    incidents: incidentsMock ?? [],
  };
};
