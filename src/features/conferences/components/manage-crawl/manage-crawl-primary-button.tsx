import { IconDownload, IconPlayerPlay } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useManageCrawlJob } from '../../contexts/manage-crawl-job-context'

export default function ManageCrawlPrimaryButton() {
  const { setOpen } = useManageCrawlJob()

  return (
    <div className='flex items-center gap-2'>
      <Button
        variant='outline'
        className='space-x-1'
        onClick={() => setOpen('import')}
      >
        <span>Import CSV</span> <IconDownload size={18} />
      </Button>
      <Button
        variant='outline'
        className='space-x-1'
        onClick={() => setOpen('crawl')}
      >
        <span>Crawl</span> <IconPlayerPlay size={18} />
      </Button>
    </div>
  )
}
