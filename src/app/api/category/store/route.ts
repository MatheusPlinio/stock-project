import { createCategorySchema } from "@/types/category/type";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: unknown = await request.json()

    const result = createCategorySchema.safeParse(body)
    let zodErrors = {}
    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
        })
    }

    const prisma = new PrismaClient()

    const data = await prisma.category.create({
        data: {
            name: result.data?.name as string,
            description: result.data?.description as string,
        }
    })

    return NextResponse.json(
        Object.keys(zodErrors).length > 0
            ? { errors: zodErrors }
            : { success: true }
    )
}