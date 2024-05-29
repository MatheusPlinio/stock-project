import { DataTable } from "@/components/category/DataTables";

import { PrismaClient } from "@prisma/client"
import { columns } from "./(tables)/Columns";

export const revalidate = 0

export default async function page() {

    const prisma = new PrismaClient()
    const data = await prisma.category.findMany()

    return (
        <div>
            <div className="m-4 text-2xl font-semibold">
                <h2 className="text-center">Category</h2>
            </div>
            <DataTable data={data} columns={columns} />
        </div>
    )
}