import { Plus } from 'lucide-react'
import { memo, useState } from 'react'

import { useTimeZoneSearch } from '@/components/Clock/hooks'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TimeZone } from '@/constants'
import { cn } from '@/lib/utils'

type Props = {
  selectedTimeZoneIds: string[]
  onTimeZoneClick?: (timeZone: TimeZone) => void
}

export const AllTimeZones = memo(function AllTimeZones({ selectedTimeZoneIds, onTimeZoneClick }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [inputValue, setInputValue] = useState<string>('')
  const foundTimeZones = useTimeZoneSearch({ value: inputValue })

  const handleTimeZoneClick = (timeZone: TimeZone) => {
    onTimeZoneClick?.(timeZone)
    setInputValue('')
    setDialogOpen(false)
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DialogTrigger asChild>
        <Button className='absolute bottom-0 size-14 rounded-full p-4 md:size-16' aria-label='Create Alarm' size='icon'>
          <Plus className='!size-6' />
        </Button>
      </DialogTrigger>
      <DialogContent className=' sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Time Zone</DialogTitle>
        </DialogHeader>
        <DialogDescription className='sr-only'>
          Search by city or continent for the desired Time Zone and select it
        </DialogDescription>
        <div className='flex flex-col gap-4'>
          <div className=' flex flex-col gap-2'>
            <Label htmlFor='search-time-zone'>Search for a city or continent</Label>
            <Input id='search-time-zone' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>
          <div className='flex min-h-[180px] flex-col'>
            {foundTimeZones.map((timeZone) => (
              <Button
                key={timeZone.tz}
                className={cn(
                  'justify-between px-2',
                  selectedTimeZoneIds.includes(timeZone.tz) && 'bg-accent text-accent-foreground',
                )}
                variant='ghost'
                onClick={() => handleTimeZoneClick(timeZone)}
              >
                <span>
                  {timeZone.city}, {timeZone.continent}
                </span>
                <span>{timeZone.utc} UTC</span>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
})
