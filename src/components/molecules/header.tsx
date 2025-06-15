import { Thermometer } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className='px-4 lg:px-6 h-16 flex items-center border-b'>
      <Link href='/' className='flex items-center justify-center gap-2'>
        <Thermometer className='size-8 text-red-500' />
        <span className='text-2xl font-bold'>Therm</span>
      </Link>
      <nav className='ml-auto flex gap-4 sm:gap-6' />
      <div className='ml-6 flex gap-2'>{children}</div>
    </header>
  );
}
