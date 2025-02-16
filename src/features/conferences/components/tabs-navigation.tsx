import { HTMLAttributes, useEffect, useState } from 'react'
import { Link, useLocation} from '@tanstack/react-router'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'



export default function TabsNavigation({ className }: HTMLAttributes<HTMLElement>) {
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
    <div className={cn('relative h-8 w-full flex-1 justify-start rounded-md bg-muted/25 text-sm font-normal text-muted-foreground shadow-none hover:bg-muted/50', className)}>
      <Tabs
        orientation='vertical'
        defaultValue='overview'
        className='space-y-4'
        value={currentTabValue}
      >
        <TabsList >
          <TabsTrigger value='overview'><Link to = "/conferences">Overview</Link></TabsTrigger>
          <TabsTrigger value='crawl-info'><Link to='/conferences/crawl-info'>Crawl Infor</Link></TabsTrigger>
          <TabsTrigger value='reports' disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value='notifications' disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>

  )
}
