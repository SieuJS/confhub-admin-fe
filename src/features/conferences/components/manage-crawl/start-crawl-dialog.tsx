import { Dialog } from '@radix-ui/react-dialog'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useManageCrawlJob } from '../../contexts/manage-crawl-job-context'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}
export function StartCrawlDialog({ open, onOpenChange }: Props) {
  const { selectToCrawl, parsedData, setParsedData, setSelectToCrawl } =
    useManageCrawlJob()

  const choosenKeys = Object.keys(selectToCrawl).filter(
    (key) => selectToCrawl[key]
  )
  const choosenRow = choosenKeys.map((key) =>
    parsedData ? parsedData[parseInt(key)] || null : null
  )

  return (
    <Dialog open={open} onOpenChange={(value) => onOpenChange(value)}>
      <DialogContent>
        <DialogHeader className='gap-2 sm:max-w-sm'>
          <DialogTitle>Start the crawl </DialogTitle>
        </DialogHeader>
        <p className='text-sm text-gray-500'>
          Are you sure you want to start the crawl for the selected conference?
        </p>
        <DialogFooter className='gap-2 sm:gap-0'>
          <DialogClose asChild>
            <Button variant='outline'>Close</Button>
          </DialogClose>
          <Button
            type='submit'
            form='task-import-form'
            onClick={() => {
              toast({
                title: 'You have imported the following conferences',
                description: (
                  <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>
                      {JSON.stringify(choosenRow, null, 2).concat(',...')}
                    </code>
                  </pre>
                ),
              })
              setSelectToCrawl({})
              setParsedData((prev) => {
                return (
                  prev?.filter(
                    (_, index) => !choosenKeys.includes(index.toString())
                  ) || null
                )
              })
              onOpenChange(false)
            }}
          >
            Start
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
