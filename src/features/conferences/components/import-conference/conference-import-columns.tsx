import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { ImportedConference } from '../../data/imported-conference/schema'
import { cn } from '@/lib/utils'
import LongText from '@/components/long-text'
import { DataTableColumnHeader } from '../shared/column-header'

export const conferenceImportalColumns: ColumnDef<ImportedConference>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    meta: {
      className:
        'sticky md:table-cell left-0 z-10 rounded-tl bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey :'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => (
      <LongText className='max-w-36'>{row.getValue('title')}</LongText>
    ),
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
    },
    enableHiding: false,
  },
  {
    accessorKey: 'acronym',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Acronym' />
    ),
    cell: ({ row }) => (
      <LongText className='max-w-36'>{row.getValue('acronym')}</LongText>
    ),
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
    },
    enableHiding: false,
  },
  {
    accessorKey :'source',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Source' />
    ),
    cell: ({ row }) => (
      <LongText className='max-w-36'>{row.getValue('source')}</LongText>
    ),
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
    },
  },
  {
    accessorKey: 'rank',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Rank' />
    ),
    cell: ({ row }) => (
      <LongText className='max-w-36'>{row.getValue('rank')}</LongText>
    ),
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
  }},
  {
    accessorKey: 'topics',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Topics' />
    ),
    cell: ({ row }) => {
      const topics = row.getValue('topics') as string[]
      return (
        <LongText className='max-w-36'>
          {topics.join(', ')}
        </LongText>
        )},
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
    },
  }
]
