import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import TabsNavigation from './components/tabs-navigation'
import { CrawlJobListSchema } from './data/crawl-info/schema'
import { crawlJob } from './data/crawl-info/crawl-job'
import { crawlJobColumns } from './components/conference-crawl-info/crawl-jobs-columns'

import CrawlJobProvider from './contexts/crawl-job-context'
import CrawlJobDataTable from './components/conference-crawl-info'

export default function ConferenceCrawlInfo() {
  const crawlJobList = CrawlJobListSchema.parse(crawlJob )
  return (
    <CrawlJobProvider>
      <Header>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div className='grid grid-cols-2'>
            <h2 className='text-2xl font-bold tracking-tight mb-4'>
              Conference Crawl Information
            </h2>
            <div className="justify-self-end">
              <TabsNavigation className='justify-self-end'/>
            </div>
          </div>
        </div>
                <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                  <CrawlJobDataTable data={crawlJobList} columns={crawlJobColumns} />
                </div>
      </Main>
    </CrawlJobProvider>
  )
}
