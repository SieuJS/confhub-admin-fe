import { Header } from "@/components/layout/header";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switch";
import ConferenceTopNav from "./tabs-navigation";

export default function ConferenceHeader() {
  return (
      <Header>
        <ConferenceTopNav />

        <div className='ml-auto flex items-center space-x-4'>
            <Search />

          <ThemeSwitch />
          <ProfileDropdown />

        </div>
      </Header>
  )
}