'use client';

import React, { useEffect, useState } from 'react';

async function getInstagramLoginInfo() {
  const url = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=588401953949317&redirect_uri=https://localhost/integration/instagram&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish`;

  window.open(url, 'Social Connect', 'width=700,height=700');
}

interface InstagramUser {
  id: string;
  name: string;
  expiresIn: number;
  picture: string;
  username: string;
}

export default function ComponentPage() {
  const [data, setData] = useState<InstagramUser | null>(null);
  useEffect(() => {
    (async () => {
      // const dataPromise = await fetch('/api/getConnectedAccounts');
      // const data = await dataPromise.json();
      const resp = {
        id: 'user_id',
        name: 'Sagar',
        expiresIn: 1,
        picture:
          'https://instagram.fmaa1-1.fna.fbcdn.net/v/t51.2885-19/472598873_497177989576618_8322677690714585768_n.jpg?_nc_ht=instagram.fmaa1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=tuKXesJAjAcQ7kNvgHHolqb&_nc_gid=bd16d1cf08964af1ae3ce8f4a58b677a&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYA_LRsT6OT_ef9UxLl33S0pgrAKjIg40rGUUMLrtqZ0mw&oe=678F23FF&_nc_sid=7d3ac5',
        username: 'sagargiri01',
      };
      setData(resp);
    })();
  }, []);

  return (
    <div>
      <h2>Connect with us!</h2>

      <section>
        {data ? (
          <div className='max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              className='w-full h-48 object-cover'
              src='https://instagram.fmaa1-1.fna.fbcdn.net/v/t51.2885-19/472598873_497177989576618_8322677690714585768_n.jpg?_nc_ht=instagram.fmaa1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=tuKXesJAjAcQ7kNvgHHolqb&_nc_gid=bd16d1cf08964af1ae3ce8f4a58b677a&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYA_LRsT6OT_ef9UxLl33S0pgrAKjIg40rGUUMLrtqZ0mw&oe=678F23FF&_nc_sid=7d3ac5'
              alt='User Picture'
            />

            <div className='p-6'>
              <h2 className='font-bold text-xl mb-2'>Sagar</h2>
              <p className='text-gray-700 text-base mb-4'>
                Username: <span className='font-semibold'>@sagargiri01</span>
              </p>
              <p className='text-gray-500 text-sm'>
                User ID: <span className='font-semibold'>user_id</span>
              </p>
              <p className='text-gray-500 text-sm'>
                Date:{' '}
                <span className='font-semibold'>
                  Thursday, January 16, 2025, 10 PM IST
                </span>
              </p>
            </div>
          </div>
        ) : (
          <button
            onClick={getInstagramLoginInfo}
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'
          >
            Connect with Instagram
          </button>
        )}
      </section>
    </div>
  );
}
