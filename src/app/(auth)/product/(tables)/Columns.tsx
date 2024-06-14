'use client'

import CreateDialog from '@/components/product/CreateDialog'
import { ColumnDef } from '@tanstack/react-table'

interface Product {
    product_id: string
    name: string
    category: {
        id: string
        name: string
    }
}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'category.name',
        header: 'Category'
    },
    {
        id: 'create',
        header: ({ table }) => (
            <div className="flex justify-center">
                <CreateDialog />
            </div>
        ),
        // cell: ({ row }) => {
        //     const category = row.original

        //     return (
        //         <DropdownMenu>
        //             <DropdownMenuTrigger asChild className='cursor-pointer'>
        //                 <MoreHorizontal />
        //             </DropdownMenuTrigger>
        //             <DropdownMenuContent>
        //                 <DropdownMenuLabel className='flex justify-center'>Actions</DropdownMenuLabel>
        //                 <div>
        //                     <UpdateDialog category={category} />
        //                 </div>
        //                 <div>
        //                     <DeleteAlert id={category.id} />
        //                 </div>
        //             </DropdownMenuContent>
        //         </DropdownMenu>
        //     )
        // }
    }
]