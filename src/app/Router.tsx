import { lazy } from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { ROUTES } from '@/constants'
import { MainLayout } from '@/layouts/Main'
import { MinimalLayout } from '@/layouts/Minimal'
import { NotFoundPage } from '@/pages/NotFound'

const AlarmPage = lazy(() => import('@/pages/Alarm'))
const TimeZonesPage = lazy(() => import('@/pages/TimeZones'))
const StopwatchPage = lazy(() => import('@/pages/Stopwatch'))
const TimerPage = lazy(() => import('@/pages/Timer'))

const router = createBrowserRouter(
  [
    {
      element: <MainLayout />,
      children: [
        { path: ROUTES.home, element: <Navigate to={ROUTES.alarm} /> },
        { path: ROUTES.alarm, element: <AlarmPage /> },
        { path: ROUTES.timeZones, element: <TimeZonesPage /> },
        { path: ROUTES.stopwatch, element: <StopwatchPage /> },
        { path: ROUTES.timer, element: <TimerPage /> },
      ],
    },
    {
      element: <MinimalLayout />,
      children: [{ path: '*', element: <NotFoundPage /> }],
    },
  ],
  {
    future: {
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
)

export function Router() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />
}
