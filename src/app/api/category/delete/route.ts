import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json()

    const id = data.id

    const prisma = new PrismaClient()

    try {
        const category = await prisma.category.findUnique({ where: { id: String(id) } })

        if (!category) {
            throw new Error('Category not found')
        }

        const hasProducts = await prisma.product.findFirst({
            where: {
                category_id: id as string
            }
        })

        if (hasProducts) {
            throw new Error('Category has products, can not be deleted')
        }

        await prisma.category.delete({ where: { id: String(id) } })

        return NextResponse.redirect('/category')
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" })
    } finally {
        await prisma.$disconnect()
    }
}