import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
    try {
        const prisma = new PrismaClient()
        const data = await prisma.product.findMany()

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error)
    }
}