'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Thermometer,
  Shield,
  AlertTriangle,
  Users,
  TrendingUp,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/molecules/footer';
import { useRouter } from 'next/navigation';
import Header from '@/components/molecules/header';

/**
 * Types
 */

export default function Landing() {
  const router = useRouter();

  const handleGetStartedPress = () => {
    router.push('/dashboard');
  };

  return (
    <div className='flex flex-col min-h-dvh'>
      <Header>
        <Button size='sm' onClick={handleGetStartedPress}>
          Get Started
        </Button>
      </Header>
      <main className='flex-1'>
        <HeroSection />
        <FeaturesSection />

        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className=' px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Ready to monitor your users?
                </h2>
                <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Start your free trial today and see how Therm can help you
                  protect your most valuable customers.
                </p>
              </div>
              <div className='w-full max-w-sm space-y-2'>
                <form className='flex gap-2'>
                  <Input
                    type='email'
                    placeholder='Enter your work email'
                    className='max-w-lg flex-1'
                  />
                  <Button
                    type='submit'
                    className='gap-2'
                    onClick={handleGetStartedPress}
                  >
                    Get Started
                    <ArrowRight className='w-4 h-4' />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const HeroSection = () => (
  <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
    <div className='container px-4 md:px-6'>
      <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
        <div className='flex flex-col justify-center space-y-4'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
              Take care of your <span className='text-red-500'>users</span> and
              avoid churn
            </h1>
            <p className='max-w-[600px] text-muted-foreground md:text-xl'>
              Therm helps small B2C wallets monitor and respond to incidents
              that impact their customers. Get real-time alerts and insights to
              protect your user experience.
            </p>
          </div>
          <div className='flex flex-col gap-2 min-[400px]:flex-row'>
            <Button size='lg' className='gap-2'>
              Start Free Trial
              <ArrowRight className='w-4 h-4' />
            </Button>
            <Button variant='outline' size='lg'>
              Watch Demo
            </Button>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='relative'>
            <Image
              src='https://sdmntprwestus.oaiusercontent.com/files/00000000-5488-6230-93d4-20bfc1bbabe8/raw?se=2025-06-15T12%3A15%3A22Z&sp=r&sv=2024-08-04&sr=b&scid=9eff4e0a-4644-536f-8f77-2960399c2618&skoid=789f404f-91a9-4b2f-932c-c44965c11d82&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-15T11%3A09%3A34Z&ske=2025-06-16T11%3A09%3A34Z&sks=b&skv=2024-08-04&sig=5gzJ/oh4BA6s8eihdbLZonadxwkzk%2BrDTbfJXIgiEQQ%3D'
              width='400'
              height='400'
              alt='Therm Dashboard'
              className='mx-auto aspect-square overflow-hidden rounded-xl object-cover shadow-2xl'
            />
            <div className='absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg border'>
              <div className='flex items-center gap-2'>
                <AlertTriangle className='w-5 h-5 text-orange-500' />
                <div>
                  <div className='font-semibold text-sm'>Incident Detected</div>
                  <div className='text-xs text-muted-foreground'>
                    Top user affected
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id='features' className='w-full lg:py-32 bg-muted/50'>
    <div className='px-4 md:px-6'>
      <div className='flex flex-col items-center justify-center space-y-4 text-center'>
        <div className='space-y-2'>
          <Badge variant='outline'>Features</Badge>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
            Monitor your users like never before
          </h2>
          <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            Therm provides comprehensive incident tracking and user health
            monitoring specifically designed for small B2C wallets.
          </p>
        </div>
      </div>
      <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
        <Card>
          <CardHeader>
            <Thermometer className='w-10 h-10 text-red-500' />
            <CardTitle>Real-time Temperature Monitoring</CardTitle>
            <CardDescription>
              Monitor your top users activity and health status in real-time
              with our thermometer-style dashboard.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <AlertTriangle className='w-10 h-10 text-orange-500' />
            <CardTitle>Incident Detection</CardTitle>
            <CardDescription>
              Automatically detect and alert when incidents affect your most
              valuable users before they escalate.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Users className='w-10 h-10 text-blue-500' />
            <CardTitle>Top User Focus</CardTitle>
            <CardDescription>
              Prioritize monitoring for your highest-value customers to ensure
              their experience remains optimal.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Shield className='w-10 h-10 text-green-500' />
            <CardTitle>Proactive Protection</CardTitle>
            <CardDescription>
              Get ahead of issues with predictive analytics and early warning
              systems for user experience problems.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Clock className='w-10 h-10 text-purple-500' />
            <CardTitle>Instant Alerts</CardTitle>
            <CardDescription>
              Receive immediate notifications via email, SMS, or Slack when
              critical incidents are detected.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <TrendingUp className='w-10 h-10 text-indigo-500' />
            <CardTitle>Trend Analysis</CardTitle>
            <CardDescription>
              Analyze patterns and trends in user incidents to prevent future
              issues and improve overall service.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  </section>
);
