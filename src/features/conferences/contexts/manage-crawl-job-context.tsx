import { createContext, useContext, useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { CrawlJob } from '../data/crawl-info/schema'
import PapaParse from 'papaparse'
type ManageCrawlJobDialogType = 'import' | 'edit' | 'delete'

interface ManageCrawlJobContextType {
  open: ManageCrawlJobDialogType | null
  setOpen: (str: ManageCrawlJobDialogType | null) => void
  currentRow: CrawlJob | null
  setCurrentRow: React.Dispatch<React.SetStateAction<CrawlJob | null>>
  importFile: File | null
  setImportFile: React.Dispatch<React.SetStateAction<File | null>>
}

const ManageCrawlJobContext = createContext<ManageCrawlJobContextType | null>(
  null
)

interface Props {
  children: React.ReactNode
}

export default function ManageCrawlJobProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<ManageCrawlJobDialogType>(null)
  const [currentRow, setCurrentRow] = useState<CrawlJob | null>(null)

  const [importFile, setImportFile] = useState<File | null>(null)

  importFile && PapaParse.parse(importFile, {
    complete: (result) => {
      console.log('Parsed CSV:', result.data)
    }
  })

  return (
    <ManageCrawlJobContext
      value={{
        open,
        setOpen,
        currentRow,
        setCurrentRow,
        importFile,
        setImportFile,
      }}
    >
      {children}
    </ManageCrawlJobContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useManageCrawlJob = () => {
  const manageCrawlJobContext = useContext(ManageCrawlJobContext)

  if (!manageCrawlJobContext) {
    throw new Error(
      'useManageCrawlJob has to be used within <ManageCrawlJobContext>'
    )
  }

  return manageCrawlJobContext
}
