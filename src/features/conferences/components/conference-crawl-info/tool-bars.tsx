import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { DataTableFacetedFilter } from '../shared/faceted-filter'
import { DataTableViewOptions } from '../shared/view-options'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function CrawlJobDataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-3 gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <Input
          placeholder='Filter aronym, id...'
          value={
            (table
              .getColumn('conferenceAcronym')
              ?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table
              .getColumn('conferenceAcronym')
              ?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
        <div className='flex items-center justify-between gap-2'>
          <Label htmlFor='from-date'>From</Label>
          <Input
            id='from-date'
            type='date'
            onChange={(event) =>
              table.getColumn('createdAt')?.setFilterValue(event.target.value)
            }
            className='h-8 w-[50px] lg:w-[150px]'
          />
        </div>
        <div className='flex items-center justify-between gap-2'>
          <Label htmlFor='to-date'>To</Label>
          <Input
            id='to-date'
            type='date'
            onChange={(event) =>
              table.getColumn('createdAt')?.setFilterValue(event.target.value)
            }
            className='h-8 w-[50px] lg:w-[150px]'
          />
        </div>
        <div className='flex gap-x-2'>
          {table.getColumn('status') && (
            <DataTableFacetedFilter
              column={table.getColumn('status')}
              title='Status'
              options={[
                { label: 'processing', value: 'active' },
                { label: 'completed', value: 'completed' },
                { label: 'failed', value: 'failed' },
              ]}
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
