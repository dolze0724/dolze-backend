'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';
import { makeApiCall } from '@/lib/apiCall';

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = makeApiCall(
        '/api/user/signin',
        {
          method: 'POST',
          body: JSON.stringify({ email, password }),
        },
        3000
      );
      const result = await response.json();
      console.log('result', result);
    } catch (error) {
      setError('Invalid email or password.');
      console.log('error', error);
    }
    //   const response = await fetch('/api/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (response.ok) {
    //     // Handle successful signup (e.g., redirect or show a success message)
    //   } else {
    //     // Handle error (e.g., show an error message)
    //   }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        {error ? error : null}
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='grid gap-6'>
              <div className='grid gap-6'>
                <div className='grid gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='m@example.com'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='grid gap-2'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Password</Label>
                    <a
                      href='#'
                      className='ml-auto text-sm underline-offset-4 hover:underline'
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id='password'
                    type='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type='submit' className='w-full'>
                  Signup
                </Button>
              </div>
              <div className='text-center text-sm'>
                have an account?{' '}
                <Link
                  href='/user/login'
                  className='underline underline-offset-4'
                >
                  login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className='text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  '>
        By clicking continue, you agree to our <a href='#'>Terms of Service</a>{' '}
        and <a href='#'>Privacy Policy</a>.
      </div>
    </div>
  );
}
