import { DataTable } from "@/components/product/DataTable"
import { PrismaClient } from "@prisma/client"
import { columns } from "./(tables)/Columns"

export default async function page() {

    const prisma = new PrismaClient()

    const data = await prisma.product.findMany({
        include: {
            category: true
        }
    })

    return (
        <div>
            <DataTable data={data} columns={columns}/>
        </div>
    )
}