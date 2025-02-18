import { toast } from "@/hooks/use-toast";
import { useManageCrawlJob } from "../../contexts/manage-crawl-job-context";
import { ConferenceImportDialog } from "./conference-import-dialog";
import { ConfirmDialog } from "@/components/confirm-dialog";

export function ManageCrawlDialogs() {
    const {open , setOpen , currentRow , setCurrentRow} = useManageCrawlJob()

    return (
        <>
            <ConferenceImportDialog 
                key = 'conference-import' 
                open = {open === 'import'}
                onOpenChange = {() => setOpen('import')}
            />
            {currentRow && (
        <>
          <ConfirmDialog
            key='task-delete'
            destructive
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
            }}
            handleConfirm={() => {
              setOpen(null)
              setTimeout(() => {
                setCurrentRow(null)
              }, 500)
              toast({
                title: 'The following task has been deleted:',
                description: (
                  <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
                    <code className='text-white'>
                      {JSON.stringify(currentRow, null, 2)}
                    </code>
                  </pre>
                ),
              })
            }}
            className='max-w-md'
            title={`Delete this task: ${currentRow.id} ?`}
            desc={
              <>
                You are about to delete a task with the ID{' '}
                <strong>{currentRow.id}</strong>. <br />
                This action cannot be undone.
              </>
            }
            confirmText='Delete'
          />
        </>
      )}
        </>
    )
}