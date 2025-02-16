import { ColumnDef } from "@tanstack/react-table";
import { CrawlJob } from "../../data/crawl-info/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "../shared/column-header";
import LongText from "@/components/long-text";
import { cn } from "@/lib/utils";
import { callTypes } from "../../data/crawl-info/data";
import { Badge } from "@/components/ui/badge";

export const crawlJobColumns : ColumnDef<CrawlJob>[] = [
    {
        id : 'select' ,
        header : ({table}) => (
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
        meta : {
            className : 'sticky md:table-cell left-0 z-10 rounded-tl bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted'
        },
        cell : ({row}) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Select row'
                className='translate-y-[2px]'
            />
        ),
        enableSorting : false,
        enableHiding : false
    },
    {
        accessorKey : 'conferenceId',
        header : ({column}) => (
            <DataTableColumnHeader column={column} title='Conference ID' />
        ),
        cell : ({row}) => (
            <LongText className='max-w-36'>{row.getValue('conferenceId')}</LongText>
        ),
        meta : {
            className : cn('bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell')
        },
        enableHiding : false
    },
    {
        accessorKey : 'conferenceAcronym',
        header : ({column}) => (
            <DataTableColumnHeader column={column} title='Conference Acronym' />
        ),
        cell : ({row}) => (
            <LongText className='max-w-36'>{row.getValue('conferenceAcronym')}</LongText>
        ),
        meta : {
            className : cn('bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell')
        },
    },
    {
        accessorKey :  'progress',
        header : ({column}) => (
            <DataTableColumnHeader column={column} title='Progress' />
        ),
        cell : ({row}) => (
            <LongText className='max-w-36'>{row.getValue('progress')}</LongText>
        ),
        meta : {
            className : cn('bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted sticky left-6 md:table-cell')
        },
    }, 
    {
        accessorKey : 'status',
        header : ({column}) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell : ({row}) => {
            const {status} = row.original;
            const badgeColor = callTypes.get(status)
            return (
                <Badge variant='outline' className= {cn('capitalize', badgeColor)}>
                    {status}
                </Badge>
            )
        },
        filterFn : (rows, id, filterValue) => {
            return filterValue.includes(rows.getValue(id));
        },
        enableHiding : false,
        enableSorting : false,
    },
    
]