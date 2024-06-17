
import { createStockSchema } from "@/types/stock/type";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: unknown = await request.json()

    const result = createStockSchema.safeParse(body)
    let zodErrors = {}
    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
        })
    }

    try {
        const prisma = new PrismaClient()

        const itemCreate = await prisma.stockItem.create({
            data: {
                barcode: result.data?.barcode as string,
                product_id: result.data?.product_id as string
            }
        })

        const validatedData = createStockSchema.parse(result)

        const batchInsert = await prisma.batch.create({
            data: {
                barcode: itemCreate.barcode,
                fabrication_date: validatedData.fabrication_date,
                expiration_date: validatedData.expiration_date
            }
        })
    } catch (error: any) {
        throw new Error(error)  
    }
    return NextResponse.json(
        Object.keys(zodErrors).length > 0
            ? { errors: zodErrors }
            : { success: true }
    )
}