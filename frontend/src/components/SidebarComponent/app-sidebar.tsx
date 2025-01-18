'use client';

import * as React from 'react';
import { Bot, Settings2, SquareTerminal } from 'lucide-react';

import { NavMain } from '@/components/SidebarComponent/nav-main';
import { NavUser } from '@/components/SidebarComponent/nav-user';
import { TeamSwitcher } from '@/components/SidebarComponent/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Generate website',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Website Creator',
          url: '#',
        },
        {
          title: 'Created websites',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Social Media',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Analytics',
          url: '#',
        },
        {
          title: 'Connect accounts',
          url: '/socials',
        },
        {
          title: 'Create Posts',
          url: '/create-posts',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Account',
          url: '#',
        },
        {
          title: 'Subscription',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
      {localStorage.getItem('email') ? null : (
        <button
          contentEditable={localStorage.getItem('email') ? 'false' : 'true'}
          onClick={(e: any) => {
            localStorage.setItem('email', e?.target?.innerText);
          }}
        >
          {'add email'}
        </button>
      )}
    </Sidebar>
  );
}
