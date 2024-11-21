import { Moon, Settings, Sun, SunMoon } from 'lucide-react'
import { Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { Loader } from '@/components/Loader'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { MENU_ITEMS } from '@/layouts/Main/constants'
import { cn } from '@/lib/utils'

export function Main() {
  const location = useLocation()

  const currentMenuItem = MENU_ITEMS.find(({ link }) => location.pathname === link) || MENU_ITEMS[0]

  return (
    <div className='flex h-screen min-h-0 flex-1 flex-col'>
      <nav className='flex items-center justify-between bg-primary-foreground shadow-md'>
        <div>
          <h2 className='ml-2 flex text-primary md:hidden'>{currentMenuItem.label}</h2>
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
              >
                <Icon />
                {label}
              </Button>
            </Link>
          ))}
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='link'>
                <Settings />
              </Button>
            </DialogTrigger>
            <DialogContent className='min-h-[200px] sm:max-w-[425px]'>
              <DialogHeader>
                <DialogTitle>Settings</DialogTitle>
              </DialogHeader>
              <div className='flex flex-1 flex-col justify-end gap-2'>
                <div className='flex items-center justify-between'>
                  <p>Time</p>
                  <ToggleGroup type='single'>
                    <ToggleGroupItem value='bold' aria-label='Toggle bold'>
                      12
                    </ToggleGroupItem>
                    <ToggleGroupItem value='italic' aria-label='Toggle italic'>
                      24
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
                <div className='flex items-center justify-between'>
                  <p>Theme</p>
                  <ToggleGroup type='single'>
                    <ToggleGroupItem value='light' aria-label='Toggle bold'>
                      <Sun />
                    </ToggleGroupItem>
                    <ToggleGroupItem value='dark' aria-label='Toggle italic'>
                      <Moon />
                    </ToggleGroupItem>
                    <ToggleGroupItem value='system' aria-label='Toggle italic'>
                      <SunMoon />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
        {MENU_ITEMS.map(({ link, icon: Icon }) => (
          <Link to={link} key={link} className='flex flex-1'>
            <button className='flex flex-1 flex-col items-center justify-center  gap-0'>
              <Icon className={location.pathname === link ? 'text-primary' : 'text-muted-foreground'} />
            </button>
          </Link>
        ))}
      </nav>
    </div>
  )
}
