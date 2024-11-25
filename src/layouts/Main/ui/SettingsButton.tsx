import { Moon, Settings, Sun, SunMoon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Theme, useSettingsContext } from '@/contexts/settings'

export function SettingsButton() {
  const { settings, setTheme, setH12 } = useSettingsContext()

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
          <DialogDescription className='sr-only'>Dialog with Time Format and Theme Settings</DialogDescription>
        </DialogHeader>
        <div className='flex flex-1 flex-col justify-end gap-2'>
          <div className='flex items-center justify-between'>
            <p>Time</p>
            <ToggleGroup
              type='single'
              value={settings.h12 ? '12' : '24'}
              onValueChange={(value) => setH12(value === '12')}
            >
              <ToggleGroupItem value='12' aria-label='Toggle 12 Hours'>
                12
              </ToggleGroupItem>
              <ToggleGroupItem value='24' aria-label='Toggle 24 Hours'>
                24
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className='flex items-center justify-between'>
            <p>Theme</p>
            <ToggleGroup type='single' value={settings.theme} onValueChange={(theme: Theme) => setTheme(theme)}>
              <ToggleGroupItem value={Theme.Light} aria-label='Toggle Light Theme'>
                <Sun />
              </ToggleGroupItem>
              <ToggleGroupItem value={Theme.Dark} aria-label='Toggle Dark Theme'>
                <Moon />
              </ToggleGroupItem>
              <ToggleGroupItem value={Theme.System} aria-label='Toggle System Theme'>
                <SunMoon />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
