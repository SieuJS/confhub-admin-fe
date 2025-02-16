import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import TabsNavigation from './components/tabs-navigation'


export default function ConferenceCrawlInfo() {
  return (
    <>
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
      </Main>
    </>
  )
}
