import { createContext, useContext, useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { CrawlJob } from '../data/crawl-info/schema'
import { ImportedConference } from '../data/imported-conference/schema'

type ManageCrawlJobDialogType = 'import' | 'edit' | 'delete'

interface ManageCrawlJobContextType {
  open: ManageCrawlJobDialogType | null
  setOpen: (str: ManageCrawlJobDialogType | null) => void
  currentRow: CrawlJob | null
  setCurrentRow: React.Dispatch<React.SetStateAction<CrawlJob | null>>
  parsedData: Array<ImportedConference> | null
  setParsedData: React.Dispatch<React.SetStateAction<Array<ImportedConference> | null>>
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

  const [parsedData, setParsedData ] = useState< Array<ImportedConference> | null>(null)

  return (
    <ManageCrawlJobContext
      value={{
        open,
        setOpen,
        currentRow,
        setCurrentRow,
        parsedData, 
        setParsedData
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
