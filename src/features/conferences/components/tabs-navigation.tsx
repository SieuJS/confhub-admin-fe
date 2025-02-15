import { useEffect, useState } from 'react'
import { useLocation } from '@tanstack/react-router'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabsNavigation() {
  const { pathname } = useLocation()
  const [currentTabValue, setCurrentTabValue] = useState<
    'overview' | 'crawl-info' | 'reports' | 'notifications'
  >('overview')
  useEffect(() => {
    switch (pathname) {
      case '/conferences':
        setCurrentTabValue('overview')
        break
      case '/conferences/crawl-info':
        setCurrentTabValue('crawl-info')
        break
      default:
        break
    }
  }, [pathname])
  return (
    <Tabs
      orientation='vertical'
      defaultValue='overview'
      className='space-y-4'
      value={currentTabValue}
    >
      <div className='w-full overflow-x-auto pb-2'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='crawl-info'>Crawler Infor</TabsTrigger>
          <TabsTrigger value='reports' disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value='notifications' disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  )
}
