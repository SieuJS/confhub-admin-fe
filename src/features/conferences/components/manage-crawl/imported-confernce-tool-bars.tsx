import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import { DataTableFacetedFilter } from "../shared/faceted-filter";
import { Button } from "@/components/ui/button";
import Cross2Icon from "@radix-ui/react-icons/dist/Cross2Icon";
import { DataTableViewOptions } from "@/features/users/components/data-table-view-options";
import { ImportedConference } from "../../data/imported-conference/schema";
 
interface DataTableToolbarProps {
  table: Table<ImportedConference>
}

export function ImportedConferenceToolbar({
  table,
}: DataTableToolbarProps) {
    const isFiltered = table.getState().columnFilters.length > 0

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
                  options={[
                    
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