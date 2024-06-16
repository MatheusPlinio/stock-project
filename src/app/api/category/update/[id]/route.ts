import { updateCategorySchema } from "@/types/category/type";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body: unknown = await request.json()

    const result = updateCategorySchema.safeParse(body)
    let zodErrors = {}
    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }
        })
    }

    const prisma = new PrismaClient()
    try {
        const category = await prisma.category.findUnique({ where: { id: result.data?.id } })

        if (!category) {
            throw new Error('Category not found')
        }

        await prisma.category.update({
            where: { id: result.data?.id },
            data: {
                name: result.data?.name,
                description: result.data?.description
            }
        })

        return NextResponse.redirect('/category')
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" })
    } finally {
        await prisma.$disconnect()
    }
}