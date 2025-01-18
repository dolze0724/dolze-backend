'use client';
import { TimedRedirect } from '@/lib/timedRedirect';
import React, { useEffect, useState } from 'react';

interface ComponentPageProps {
  params: { id: string };
  searchParams: { [key: string]: string };
}

export default function ComponentPage({ searchParams }: ComponentPageProps) {
  const code = searchParams?.['code'];
  const [err, setErr] = useState('');

  useEffect(() => {
    fetch('/api/instagram', { method: 'POST', body: JSON.stringify({ code }) })
      .then((res) => res.json())
      .then((data) => {
        <TimedRedirect url='/socials' delay={3000} />;
      })
      .catch((err) => {
        setErr('Connecting instagram failed! Please try again');
        <TimedRedirect url='/socials' delay={3000} />;
      });
  }, []);
  // const data = await (
  //   await fetch(`/integrations/social/${provider}/connect`, {
  //     method: 'POST',
  //     body: JSON.stringify(searchParams),
  //   })
  // ).json();

  // if (data.statusCode >= 300) {
  //   const { msg } = await data.json();
  //   return redirect(`/launches?msg=${msg}`);
  // }
  return <div>{err ? err : 'Connecting to instagram'}</div>;
}
