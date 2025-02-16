import { Main } from '@/components/layout/main'
import ConferencesTable from './components/conference-data-table'
import { columns } from './components/conference-data-table/conferences-columns'
import ConferencesProvider from './contexts/conferences-context'
import { conferences } from './data/overview/conferences'
import { conferenceListSchema } from './data/overview/schema'
import ConferenceHeader from './components/conference-header'

export default function Conferences() {
  const conferenceList = conferenceListSchema.parse(conferences)
  return (
    <ConferencesProvider>
      <ConferenceHeader />
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div className="grid grid-cols-2">
          <h2 className='text-2xl font-bold tracking-tight'>
            Conferences
          </h2>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <ConferencesTable data={conferenceList} columns={columns} />
        </div>
      </Main>
    </ConferencesProvider>
  )
}
