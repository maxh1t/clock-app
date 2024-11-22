import { Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { Loader } from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { MENU_ITEMS } from '@/layouts/Main/constants'
import { cn } from '@/lib/utils'

import { SettingsButton } from './SettingsButton'

export function Main() {
  const location = useLocation()

  const currentMenuItem = MENU_ITEMS.find(({ link }) => location.pathname === link) || MENU_ITEMS[0]

  return (
    <div className='flex h-screen min-h-0 flex-1 flex-col'>
      <nav className='flex items-center justify-between bg-primary-foreground shadow-md'>
        <div>
          <h2 className='ml-2 flex text-lg text-primary md:hidden'>{currentMenuItem.label}</h2>
        </div>

        <div className='hidden gap-4 md:flex'>
          {MENU_ITEMS.map(({ label, link, icon: Icon }) => (
            <Link to={link} key={link}>
              <Button
                className={cn(
                  'hover:no-underline',
                  location.pathname === link ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                )}
                variant='link'
                size='lg'
              >
                <Icon />
                {label}
              </Button>
            </Link>
          ))}
        </div>
        <div>
          <SettingsButton />
        </div>
      </nav>

      <div className='flex flex-1 overflow-auto p-4'>
        <div className='container mx-auto flex flex-1  md:max-w-screen-md'>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>

      <nav className='flex w-full justify-around bg-primary-foreground py-2 shadow-md md:hidden'>
        {MENU_ITEMS.map(({ label, link, icon: Icon }) => (
          <Link to={link} key={link} className='flex flex-1'>
            <button
              className={cn(
                'flex flex-1 flex-col items-center justify-center text-sm gap-1',
                location.pathname === link ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              <Icon />
              {label}
            </button>
          </Link>
        ))}
      </nav>
    </div>
  )
}
