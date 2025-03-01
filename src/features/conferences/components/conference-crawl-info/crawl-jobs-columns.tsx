import { ColumnDef } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import LongText from '@/components/long-text'
import { callTypes } from '../../data/crawl-info/data'
import { CrawlJob } from '../../data/crawl-info/schema'
import { DataTableColumnHeader } from '../shared/column-header'
import { DataTableRowActions } from './row-action'

export const crawlJobColumns: ColumnDef<CrawlJob>[] = [
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
    accessorKey: 'conferenceId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Conference ID' />
    ),
    cell: ({ row }) => (
      <LongText className='max-w-36'>{row.getValue('conferenceId')}</LongText>
    ),
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
    },
    enableHiding: false,
  },
  {
    accessorKey: 'conferenceAcronym',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Conference Acronym' />
    ),
    cell: ({ row }) => (
      <LongText className='max-w-36'>
        {row.getValue('conferenceAcronym')}
      </LongText>
    ),
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
    },
  },
  {
    accessorKey: 'progress',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Progress' />
    ),
    cell: ({ row }) => {
      return (
        <div className='max-w-36'>
          <Progress value={row.getValue('progress') as number} />
        </div>
      )
    },
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const { status } = row.original
      const badgeColor = callTypes.get(status)
      return (
        <Badge variant='outline' className={cn('capitalize', badgeColor)}>
          {status}
        </Badge>
      )
    },
    filterFn: (rows, id, filterValue) => {
      return filterValue.includes(rows.getValue(id))
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Created At' />
    ),
    cell: ({ row }) => {
      const { createdAt } = row.original

      return (
        <>
          <LongText className='max-w-36'>
            {createdAt.toLocaleTimeString()}
          </LongText>
          <LongText className='max-w-36'>
            {createdAt.toLocaleDateString()}
          </LongText>
        </>
      )
    },
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
    },
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Updated At' />
    ),
    cell: ({ row }) => {
      const { updatedAt } = row.original

      return (
        <>
          <LongText className='max-w-36'>
            {updatedAt.toLocaleTimeString()}
          </LongText>
          <LongText className='max-w-36'>
            {updatedAt.toLocaleDateString()}
          </LongText>
        </>
      )
    },
    meta: {
      className: cn(
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell'
      ),
    },
  },
  {
    id: 'actions',
    cell: DataTableRowActions,
  },
]
