import { Main } from '@/components/layout/main'
import ConferenceHeader from './components/conference-header'
import ManageCrawlJobProvider from './contexts/manage-crawl-job-context'
import ManageCrawlPrimaryButton from './components/manage-crawl/manage-crawl-primary-button'
import { ManageCrawlDialogs } from './components/manage-crawl/manage-crawl-dialogs'

export default function ManageCrawl() {
  return (
    <ManageCrawlJobProvider>
      <ConferenceHeader />
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div className='grid grid-cols-2'>
            <h2 className='mb-4 text-2xl font-bold tracking-tight'>
              Manage Crawl
            </h2>
          </div>
          <ManageCrawlPrimaryButton />
        </div>
      </Main>
      <ManageCrawlDialogs/>
    </ManageCrawlJobProvider>
  )
}
