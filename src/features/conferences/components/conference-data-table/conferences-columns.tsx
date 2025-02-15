import { ColumnDef } from "@tanstack/react-table";
import { Conference } from "../../data/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./column-header";
import LongText from "@/components/long-text";
import { cn } from "@/lib/utils";
import { callTypes } from "../../data/data";
import { Badge } from "@/components/ui/badge";
import { DataTableRowActions } from "./row-action";

export const columns : ColumnDef <Conference>[] = [
    {
        id : 'select',
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
        accessorKey : 'title', 
        header : ({column}) => (
            <DataTableColumnHeader column={column} title='Title' />
        ),
        cell : ({row}) => (
            <LongText className='max-w-36'>{row.getValue('title')}</LongText>
        ),
        meta : {
            className : cn (
                'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
                'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
                'sticky left-6 md:table-cell'
            )
        },
        enableHiding : false
    },
    {
        accessorKey : 'acronym',
        header : ({column}) => (
            <DataTableColumnHeader column={column} title='Acronym' />
        ),
        cell : ({row}) => (
            <LongText className='max-w-36'>{row.getValue('acronym')}</LongText>
        ),
        meta : {
            className : cn (
                'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
                'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
                'sticky left-6 md:table-cell'
            )
        }
    },
    {
        accessorKey : 'location' ,
        header : ({column}) => (
            <DataTableColumnHeader column={column} title='Location' />
        ),
        cell : ({row}) => (
            <LongText className='max-w-36'>{row.getValue('location')}</LongText>
        ),
        meta : {
            className : cn (
                'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
                'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
                'sticky left-6 md:table-cell'
            )
        }
    },
    {
        accessorKey : 'status' ,
        header : ({column}) => (
            <DataTableColumnHeader column={column} title='Status' />
        ),
        cell : ({row}) => {
            const {status} = row.original;
            const badgeColor = callTypes.get(status);
            return (
                <div className={cn('flex items-center space-x-2')}>
                    <Badge variant='outline' className={cn('capitalize', badgeColor)}>
                        {row.getValue('status')}
                    </Badge>
                </div>
            )
        },
        filterFn : (row, id, value) => {
            return value.includes(row.getValue(id));
        },
        enableHiding : false,
        enableSorting : false
    },
    {
        accessorKey : 'conferenceDate' ,
        header : ({column}) => (
            <DataTableColumnHeader column={column} title='Conference Date' />
        ),
        cell : ({row}) => {
            const conferenceDate : Date = row.getValue('conferenceDate');
            return <div>{conferenceDate.toDateString()}</div>
        },
    },
    {
        id : 'actions',
        cell : DataTableRowActions
    }
] ;