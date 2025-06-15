import { FunctionComponent } from 'react';

interface IncidentCountProps {
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
}

export const IncidentCount: FunctionComponent<IncidentCountProps> = ({
  criticalCount,
  highCount,
  lowCount,
  mediumCount,
}) => (
  <div className='mt-4 flex items-center gap-4 text-sm text-gray-500'>
    <div className='flex items-center gap-2'>
      <div className='h-3 w-3 rounded-full bg-red-500'></div>
      <span>Critical: {criticalCount}</span>
    </div>
    <div className='flex items-center gap-2'>
      <div className='h-3 w-3 rounded-full bg-orange-500'></div>
      <span>High: {highCount}</span>
    </div>
    <div className='flex items-center gap-2'>
      <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
      <span>Medium: {mediumCount}</span>
    </div>
    <div className='flex items-center gap-2'>
      <div className='h-3 w-3 rounded-full bg-green-500'></div>
      <span>Low: {lowCount}</span>
    </div>
  </div>
);
