import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Loader } from '@/components/Loader'

export function Minimal() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  )
}
