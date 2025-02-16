import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { Conference } from '../data/overview/schema'

type ConferencesDialogType = 'add' | 'edit' | 'delete'

interface ConferencesContextType {
  open: ConferencesDialogType | null
  setOpen: (str: ConferencesDialogType | null) => void
  currentRow: Conference | null
  setCurrentRow: React.Dispatch<React.SetStateAction<Conference | null>>
}

const ConferencesContext = React.createContext<ConferencesContextType | null>(
  null
)

interface Props {
  children: React.ReactNode
}

export default function ConferencesProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<ConferencesDialogType>(null)
  const [currentRow, setCurrentRow] = useState<Conference | null>(null)

  return (
    <ConferencesContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </ConferencesContext>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const useConferences = () => {
  const conferencesContext = React.useContext(ConferencesContext)

  if (!conferencesContext) {
    throw new Error('useConferences has to be used within <ConferencesContext>')
  }

  return conferencesContext
}
