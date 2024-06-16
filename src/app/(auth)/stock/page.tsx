import { DataTable } from "@/components/DataTables";
import { columns } from "./(tables)/Columns";
import { PrismaClient } from "@prisma/client";

export const revalidate = 0

export default async function page() {

    const prisma = new PrismaClient()
    const data = await prisma.stockItem.findMany({
        include: {
            product: {
                include: {
                    category: true
                }
            }
        }
    })

    return (
        <div>
            <DataTable columns={columns} data={data} />
        </div>
    )
}