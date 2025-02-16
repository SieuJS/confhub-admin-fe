import { Main } from '@/components/layout/main'
import ConferenceHeader from './components/conference-header'

export default function ManageCrawl() {
  return (
    <div>
      <ConferenceHeader />
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div className='grid grid-cols-2'>
            <h2 className='mb-4 text-2xl font-bold tracking-tight'>
              Manage Crawl
            </h2>
          </div>
        </div>
      </Main>
    </div>
  )
}
