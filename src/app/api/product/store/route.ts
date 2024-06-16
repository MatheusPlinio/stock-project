
import { createProductSchema } from "@/types/product/type";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: unknown = await request.json()

    const result = createProductSchema.safeParse(body)
    let zodErrors = {}
    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
        })
    }

    const prisma = new PrismaClient()

    const productCreate = await prisma.product.create({
        data: {
            name: result.data?.name as string,
            category_id: result.data?.category as string,
        }
    })

    const attributeCreate = await prisma.attribute.create({
        data: {
            product_id: productCreate.product_id,
            json: result.data?.attributes
        }
    })

    return NextResponse.json(
        Object.keys(zodErrors).length > 0
            ? { errors: zodErrors }
            : { success: true }
    )
}