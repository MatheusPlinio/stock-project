'use client'

import CreateDialog from '@/components/product/CreateDialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

interface Product {
    id_or_serial_or_code: string
    name: string
    category: {
        id: string
        name: string
        description: string
    }
    batch?: {
        id: string
        fabrication_date: string
        expiration_date: string
    }
}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'id_or_serial_or_code',
        header: 'Serial Code'
    },
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'category.name',
        header: 'Category'
    },
    {
        accessorKey: 'batch.fabrication_date',
        header: 'Fabrication Date'
    },
    {
        accessorKey: 'batch.expiration_date',
        header: 'Expiration_date'
    },
    {
        id: 'create',
        // header: ({ table }) => (
        // <div className="flex justify-center">
        //     <CreateDialog />
        // </div>
        // ),
        cell: ({ row }) => {
            const category = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className='cursor-pointer'>
                        <MoreHorizontal />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className='flex justify-center'>Actions</DropdownMenuLabel>
                        <div>
                            {/* <UpdateDialog category={category} /> */}
                        </div>
                        <div>
                            {/* <DeleteAlert id={category.id} /> */}
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]