import { useState } from 'react'
import React from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { CrawlJob } from '../data/crawl-info/schema'

type CrawlJobDialogType = 'add' | 'edit' | 'delete'

interface CrawlJobContextType {
  open: CrawlJobDialogType | null
  setOpen: (str: CrawlJobDialogType | null) => void
  currentRow: CrawlJob | null
  setCurrentRow: React.Dispatch<React.SetStateAction<CrawlJob | null>>
}

const CrawlJobContext = React.createContext<CrawlJobContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function CrawlJobProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<CrawlJobDialogType>(null)
  const [currentRow, setCurrentRow] = useState<CrawlJob | null>(null)

  return (
    <CrawlJobContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </CrawlJobContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCrawlJob = () => {
  const crawlJobContext = React.useContext(CrawlJobContext)

  if (!crawlJobContext) {
    throw new Error('useCrawlJob has to be used within <CrawlJobContext>')
  }

  return crawlJobContext
}
