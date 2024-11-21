import { cn } from '@/lib/utils'

export type Props = {
  className?: string
}

export function Loader({ className }: Props) {
  return (
    <div
      className={cn(
        `flex h-[--container-height] w-full flex-1 items-center justify-center gap-2 bg-background text-sm text-muted-foreground`,
        className,
      )}
    >
      <svg
        className='size-4 animate-spin'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M21 12a9 9 0 1 1-6.219-8.56' />
      </svg>
      Loading...
    </div>
  )
}
