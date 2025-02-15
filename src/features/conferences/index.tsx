import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import ConferencesTable from './components/conference-data-table'
import { columns } from './components/conference-data-table/conferences-columns'
import TabsNavigation from './components/tabs-navigation'
import ConferencesProvider from './contexts/conferences-context'
import { conferences } from './data/conferences'
import { conferenceListSchema } from './data/schema'

export default function Conferences() {
  const conferenceList = conferenceListSchema.parse(conferences)
  return (
    <ConferencesProvider>
      <Header>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight'>
              Conferences
            </h2>
            <TabsNavigation />
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <ConferencesTable data={conferenceList} columns={columns} />
        </div>
      </Main>
    </ConferencesProvider>
  )
}
