'use client';

import React, { useState } from 'react';
import '@/lib/env';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { makeApiCall } from '@/lib/apiCall';

export default function HomePage() {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [targetAudience, setTargetAudience] = useState(50);

  const handleContinue = async () => {
    const data = await makeApiCall('/user/saveBusiness', {
      method: 'POST',
      body: JSON.stringify({
        businessName,
        businessType,
        businessDescription,
        targetAudience,
        email: localStorage.getItem('email') || 'dummymail@dummy.com',
      }),
    });
    const resp = await data.json();
    return resp;
  };

  return (
    <main className='container text-center'>
      <div className='max-w-3xl	'>
        <Link href='/user/login'>Login</Link>
      </div>

      <AlertDialog>
        <AlertDialogTrigger>
          {' '}
          <div className='flex border-1'>
            Add more details about business
            <ChevronRight />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Heading</AlertDialogTitle>
            <AlertDialogDescription>
              <Card className='w-full'>
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className='grid w-full items-center gap-4'>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='business-name'>Business Name</Label>
                        <Input
                          id='business-name'
                          placeholder='Name of your business'
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          required
                        />
                      </div>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='business-type'>Business Type</Label>
                        <Select
                          value={businessType}
                          onValueChange={setBusinessType}
                          required
                        >
                          <SelectTrigger id='business-type'>
                            <SelectValue placeholder='Select business type' />
                          </SelectTrigger>
                          <SelectContent position='popper'>
                            <SelectItem value='retail'>Retail</SelectItem>
                            <SelectItem value='service'>Service</SelectItem>
                            <SelectItem value='online'>Online</SelectItem>
                            <SelectItem value='other'>Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='business-description'>
                          Business Description
                        </Label>
                        <Input
                          id='business-description'
                          placeholder='Describe your business'
                          value={businessDescription}
                          onChange={(e) =>
                            setBusinessDescription(e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='target-audience'>
                          Target Audience (0-100)
                        </Label>
                        <div className='flex items-center justify-between'>
                          M
                          <Input
                            id='target-audience'
                            type='range'
                            min='0'
                            max='100'
                            value={targetAudience}
                            onChange={(e) =>
                              setTargetAudience(Number(e.target.value))
                            }
                          />
                          F
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleContinue}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
