import { Delete } from 'lucide-react'
import { SyntheticEvent, useState } from 'react'

import { Button } from '@/components/ui/button'

import { DEFAULT_INPUT_STRING, INPUT_BUTTONS } from '../constants'
import { convertInputStringToSeconds, formatInputStringToTime, handleInputString } from '../lib'

type Props = {
  onStart?: (seconds: number) => void
}

export function StartTimer({ onStart }: Props) {
  const [inputString, setInputString] = useState<string>(DEFAULT_INPUT_STRING)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    if (inputString === DEFAULT_INPUT_STRING) return

    onStart?.(convertInputStringToSeconds(inputString))
    setInputString(DEFAULT_INPUT_STRING)
  }

  return (
    <form className='flex flex-1 flex-col items-center justify-center gap-4' onSubmit={handleSubmit}>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='text-2xl font-bold md:text-3xl'>{formatInputStringToTime(inputString)}</h2>

        <div className='mx-auto grid max-w-xs grid-cols-3 gap-2'>
          {INPUT_BUTTONS.map((button) => (
            <Button
              key={button}
              className='rounded-full p-5 text-lg'
              type='button'
              size='icon'
              onClick={() => setInputString((prevState) => handleInputString(button, prevState))}
            >
              {button === 'delete' ? <Delete /> : button}
            </Button>
          ))}
        </div>
      </div>

      <Button type='submit'>Start</Button>
    </form>
  )
}
