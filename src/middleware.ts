import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    const { pathname } = req.nextUrl;

    const protectedRoutes = [
        "/balance"
    ];

    if (token || pathname.includes("/api/auth") || pathname === "/") {
        return NextResponse.next()
    }

    if (protectedRoutes.includes(pathname) && !token) {
        const url = new URL("/", req.url)
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/balance"
    ]
}