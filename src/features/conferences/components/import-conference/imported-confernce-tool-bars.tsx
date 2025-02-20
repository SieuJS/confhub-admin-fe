import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from '@/features/users/components/data-table-view-options'
import { ImportedConference } from '../../data/imported-conference/schema'
import { DataTableFacetedFilter } from '../shared/faceted-filter'
import { useManageCrawlJob } from '../../contexts/manage-crawl-job-context'

interface DataTableToolbarProps {
  table: Table<ImportedConference>
}

interface SourceOptions {
  label: string
  value: string
}

export function ImportedConferenceToolbar({ table }: DataTableToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0
  const parsedData = useManageCrawlJob().parsedData ; 
  const sourceOptions : SourceOptions[] = []
  if (parsedData){
    const unquiSource = Array.from(new Set(parsedData.map(data => data.source)))

    unquiSource.forEach((data) => {
      if (data) {
        sourceOptions.push({
          label: data,
          value: data,
        })
      }
    })
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2'>
        <Input
          placeholder='Filter conference...'
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] lg:w-[250px]'
        />
        <div className='flex gap-x-2'>
          {table.getColumn('source') && (
            <DataTableFacetedFilter
              column={table.getColumn('source')}
              title='Source'
              options={sourceOptions}
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
