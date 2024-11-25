import { Moon, Settings, Sun, SunMoon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Theme, useThemeContext } from '@/contexts/theme'

export function SettingsButton() {
  const { theme, setTheme } = useThemeContext()

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
            <ToggleGroup type='single' value={theme} onValueChange={(theme: Theme) => setTheme(theme)}>
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
