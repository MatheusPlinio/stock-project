'use client'

import CreateDialog from '@/components/category/CreateDialog'
import DeleteAlert from '@/components/category/DeleteAlert'
import UpdateDialog from '@/components/category/UpdateDialog'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

interface Category {
    id: string
    name: string
    description?: string
}

export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'description',
        header: 'Description'
    },
    {
        id: 'create',
        header: ({ table }) => (
            <div className="flex justify-center">
                <CreateDialog />
            </div>
        ),
        cell: ({ row }) => {
            const category = row.original

            return (
                <div className='flex justify-center'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className='cursor-pointer'>
                            <MoreHorizontal />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel className='flex justify-center'>Actions</DropdownMenuLabel>
                            <div>
                                <UpdateDialog category={category} />
                            </div>
                            <div>
                                <DeleteAlert id={category.id} />
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )
        }
    }
]