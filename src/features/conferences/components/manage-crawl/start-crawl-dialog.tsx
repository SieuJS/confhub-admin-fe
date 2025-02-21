import { Dialog } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}
export function StartCrawlDialog({ open, onOpenChange }: Props) {
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
          <Button type='submit' form='task-import-form'>
            Start
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
