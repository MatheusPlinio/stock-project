'use client'

import DeleteAlert from '@/components/product/DeleteDialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Category, Product, StockItem } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

interface CategoryProps extends Product {
    category: Category
}

interface StockProps extends StockItem {
    product: CategoryProps
}

export const columns: ColumnDef<StockProps>[] = [
    {
        accessorKey: 'barcode',
        header: 'Barcode'
    },
    {
        accessorKey: 'product.name',
        header: 'Name Product'
    },
    {
        accessorKey: 'product.category.name',
        header: 'Category'
    },
    {
        id: 'options',
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