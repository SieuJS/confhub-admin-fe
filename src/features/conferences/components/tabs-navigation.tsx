import { HTMLAttributes, useMemo } from 'react'
import { useLocation } from '@tanstack/react-router'
import { TopNav } from '@/components/layout/top-nav'

export default function ConferenceTopNav({
  className,
}: HTMLAttributes<HTMLElement>) {
  const { pathname } = useLocation()

  const topNav = useMemo(() => {
    return [
      {
        title: 'Overview',
        href: '/conferences',
        isActive:
          pathname.endsWith('conferences') || pathname === '/conferences',
      },
      {
        title: 'Crawl Info',
        href: '/conferences/crawl-info',
        isActive: pathname.includes('crawl-info'),
      },
      {
        title: 'Manage Crawl',
        href: '/conferences/manage-crawl',
        isActive: pathname.includes('manage-crawl'),
      },
    ]
  }, [pathname])

  return <TopNav links={topNav} className={className} />
}
