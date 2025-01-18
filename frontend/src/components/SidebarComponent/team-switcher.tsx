'use client';

import * as React from 'react';
import { ChevronsUpDown, Plus } from 'lucide-react';

import { DropdownMenu } from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <Link href='/'>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                <div className='size-4'> Dolze logo </div>
              </div>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>activeTeam.name"</span>
                <span className='truncate text-xs'>{'activeTeam.plan'}</span>
              </div>
            </SidebarMenuButton>
          </Link>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
