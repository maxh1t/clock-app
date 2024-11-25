import dayjs from 'dayjs'
import { Plus } from 'lucide-react'
import { memo, SyntheticEvent, useEffect, useState } from 'react'

import { H12_OPTIONS, H24_OPTIONS, MINUTE_SECOND_OPTIONS } from '@/components/Alarm/constants'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { AmPm, MAIN_TIME_FORMAT } from '@/constants'
import { useAlarmsContext } from '@/contexts/alarms'
import { useSettingsContext } from '@/contexts/settings'

export const CreateAlarm = memo(function CreateAlarm() {
  const { settings } = useSettingsContext()
  const { createAlarm } = useAlarmsContext()
  const [dialogOpen, setDialogOpen] = useState(false)

  const [hour, setHour] = useState<string>('')
  const [minute, setMinute] = useState<string>('')
  const [second, setSecond] = useState<string>('')
  const [amPm, setAmPm] = useState<AmPm>(AmPm.Am)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    const date = dayjs()
      .set('hour', settings.h12 ? (Number(hour) % 12) + (amPm === AmPm.Pm ? 12 : 0) : Number(hour))
      .set('minute', Number(minute))
      .set('second', Number(second))

    createAlarm({ time: date.format(MAIN_TIME_FORMAT), enable: true })
    setDialogOpen(false)
  }

  useEffect(() => {
    if (!dialogOpen) return

    const futureDate = dayjs().add(1, 'hour')

    setHour(settings.h12 ? futureDate.format('hh') : futureDate.format('HH'))
    setMinute('00')
    setSecond('00')
    if (settings.h12) {
      setAmPm(futureDate.format('a') as AmPm)
    }
  }, [dialogOpen])

  return (
    <Dialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
      <DialogTrigger asChild>
        <Button
          className='absolute bottom-20 size-14 rounded-full p-4 md:bottom-8 md:size-16'
          aria-label='Create Alarm'
          size='icon'
        >
          <Plus className='!size-6' />
        </Button>
      </DialogTrigger>
      <DialogContent className=' sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Alarm</DialogTitle>
        </DialogHeader>
        <DialogDescription className='sr-only'>Create Clock</DialogDescription>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='flex  items-center gap-2'>
            <Select value={hour} onValueChange={(value) => setHour(value)}>
              <SelectTrigger className='flex-1'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent position='item-aligned'>
                {(settings.h12 ? H12_OPTIONS : H24_OPTIONS).map((hour) => (
                  <SelectItem key={hour} value={hour}>
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            :
            <Select value={minute} onValueChange={(value) => setMinute(value)}>
              <SelectTrigger className='flex-1'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent position='item-aligned'>
                {MINUTE_SECOND_OPTIONS.map((minute) => (
                  <SelectItem key={minute} value={minute}>
                    {minute}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            :
            <Select value={second} onValueChange={(value) => setSecond(value)}>
              <SelectTrigger className='flex-1'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent position='item-aligned'>
                {MINUTE_SECOND_OPTIONS.map((second) => (
                  <SelectItem key={second} value={second}>
                    {second}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {settings.h12 && (
              <ToggleGroup
                type='single'
                className='flex-col'
                size='sm'
                value={amPm}
                onValueChange={(value: AmPm) => setAmPm(value)}
              >
                <ToggleGroupItem value={AmPm.Am} aria-label='Toggle Am'>
                  AM
                </ToggleGroupItem>
                <ToggleGroupItem value={AmPm.Pm} aria-label='Toggle Pm'>
                  PM
                </ToggleGroupItem>
              </ToggleGroup>
            )}
          </div>
          <div className='flex flex-1'>
            <Button className='' size='sm'>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
})
