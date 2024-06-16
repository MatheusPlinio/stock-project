import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();

    const id = data.id;

    const prisma = new PrismaClient();

    try {
        const product = await prisma.product.findUnique({
            where: { product_id: String(id) }
        });

        if (!product) {
            return NextResponse.json({ message: 'Product not found' }, { status: 404 });
        }

        const hasStock = await prisma.stockItem.findFirst({
            where: {
                product_id: id as string
            }
        });

        if (hasStock) {
            return NextResponse.json({ message: "You cannot delete a product that is in stock, you need to withdraw" }, { status: 400 });
        }

        await prisma.product.delete({
            where: { product_id: String(id) }
        });

        const url = new URL(request.url);
        const redirectUrl = `${url.origin}/product`;

        return NextResponse.redirect(redirectUrl);
    } catch (error: any) {
        console.error('Error deleting product:', error);
        return NextResponse.json({ message: "Internal server error", error: error.message }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
