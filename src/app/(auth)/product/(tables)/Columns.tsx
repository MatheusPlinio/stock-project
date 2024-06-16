'use client'

import UpdateDialog from '@/components/category/UpdateDialog'
import CreateDialog from '@/components/product/CreateDialog'
import DeleteAlert from '@/components/product/DeleteDialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { StockItem } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

interface Product {
    product_id: string
    name: string
    category: {
        id: string
        name: string
    },
    stock_item: StockItem[]
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
        id: 'stock',
        accessorKey: 'stock_item.length',
        header: 'Stock'
    },
    {
        id: 'create',
        header: ({ table }) => (
            <div className="flex justify-center">
                <CreateDialog />
            </div>
        ),
        cell: ({ row }) => {
            const product = row.original

            return (
                <div className='flex justify-center'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className='cursor-pointer'>
                            <MoreHorizontal />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel className='flex justify-center'>Actions</DropdownMenuLabel>
                            <div>
                                {/* <UpdateDialog category={product} /> */}
                            </div>
                            <div>
                                <DeleteAlert id={product.product_id} />
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]