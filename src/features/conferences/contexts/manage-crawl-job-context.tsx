import { createContext, useContext, useState } from "react"
import { CrawlJob } from "../data/crawl-info/schema"
import useDialogState from "@/hooks/use-dialog-state"

type ManageCrawlJobDialogType = 'import' | 'edit' | 'delete'

interface ManageCrawlJobContextType {
  open: ManageCrawlJobDialogType | null
  setOpen: (str: ManageCrawlJobDialogType | null) => void
  currentRow: CrawlJob | null
  setCurrentRow: React.Dispatch<React.SetStateAction<CrawlJob | null>>
}

const ManageCrawlJobContext = createContext<ManageCrawlJobContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function ManageCrawlJobProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<ManageCrawlJobDialogType>(null)
  const [currentRow, setCurrentRow] = useState<CrawlJob | null>(null)

  return (
    <ManageCrawlJobContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </ManageCrawlJobContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useManageCrawlJob = () => {
    const manageCrawlJobContext = useContext(ManageCrawlJobContext)
    
    if (!manageCrawlJobContext) {
        throw new Error('useManageCrawlJob has to be used within <ManageCrawlJobContext>')
    }
    
    return manageCrawlJobContext
}