import { Button } from "@/components/ui/button"
import { useManageCrawlJob } from "../../contexts/manage-crawl-job-context"
import { IconDownload } from "@tabler/icons-react"

export default function ManageCrawlPrimaryButton() {
  const { setOpen } = useManageCrawlJob() 

  return (
    <div className="flex gap-2 items-center">
        <Button
            variant="outline"
            className="space-x-1"
            onClick={() => setOpen('import')}
        >
            <span>Import from file</span> <IconDownload size={18} />
        </Button>
    </div>
  )
}