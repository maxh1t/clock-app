import { AlarmClock, Clock, Hourglass, Timer } from 'lucide-react'
import { ElementType } from 'react'

import { ROUTES } from '@/constants'

type MenuItem = {
  label: string
  link: string
  icon: ElementType
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Alarm',
    link: ROUTES.alarm,
    icon: AlarmClock,
  },
  {
    label: 'Clock',
    link: ROUTES.clock,
    icon: Clock,
  },
  {
    label: 'Timer',
    link: ROUTES.timer,
    icon: Timer,
  },
  {
    label: 'Stopwatch',
    link: ROUTES.stopwatch,
    icon: Hourglass,
  },
]
