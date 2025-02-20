import { Main } from '@/components/layout/main'
import ConferenceHeader from './components/conference-header'
import { ManageCrawlDialogs } from './components/manage-crawl/manage-crawl-dialogs'
import ManageCrawlPrimaryButton from './components/manage-crawl/manage-crawl-primary-button'
import ManageCrawlJobProvider from './contexts/manage-crawl-job-context'
import ImportConferencesTable from './components/import-conference/data-table-import-conference'


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
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <ImportConferencesTable />
        </div>
      </Main>
      <ManageCrawlDialogs />
    </ManageCrawlJobProvider>
  )
}
