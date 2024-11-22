import { Moon, Settings, Sun, SunMoon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function SettingsButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='link' size='icon'>
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
  )
}
